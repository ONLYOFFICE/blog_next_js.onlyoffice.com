#!/bin/bash

# Timestamp
CURRENT_DATE=$(date "+%Y%m%d-%H%M%S")

# Define variables
DOCKER_CONTAINER_TAG="node:18-alpine"
EXPOSE_PORT="30007"
APP_NAME="blog_next"
APP_DIR="/app/$APP_NAME"
SOURCE_ARCHIVE_PATH="/home/ubuntu/deploy/.jenkins/$APP_NAME.tar.gz"
BACKUP_DIR="/app/backups"
BACKUP_NAME="$APP_NAME-$CURRENT_DATE.tar.gz"

# Stop application container if it exists
if docker ps -a | grep -wq "$APP_NAME"; then
    docker stop "$APP_NAME"
fi

# Archive the folder with date-time stamp
tar -czf "$BACKUP_DIR/$BACKUP_NAME" -C "$APP_DIR" .

# Cleanup other www-cms-marketplace backups to leave only 7 latest
cd "$BACKUP_DIR"
ls -1t "$APP_NAME-*.tar.gz" | tail -n +8 | xargs -I {} rm -- {}

# Remove the original /app/www-cms-marketplace folder
rm -rf "$APP_DIR"

# Create folder with sources and extract sources to it
mkdir -p "$APP_DIR"
tar -xzf "$SOURCE_ARCHIVE_PATH" -C "$APP_DIR"
find "$APP_DIR" -type d -exec chmod 755 {} \;
find "$APP_DIR" -type f -exec chmod 644 {} \;
cd "$APP_DIR"

# Build application
docker run --rm -v "$APP_DIR":"$APP_DIR" -w "$APP_DIR" "$DOCKER_CONTAINER_TAG" sh -c "yarn && yarn build"
 
# Start container if it exists or build and start it
if docker ps -a | grep -wq "$APP_NAME"; then
    # Get the image tag of the existing container
    CONTAINER_IMAGE_TAG=$(docker inspect "$APP_NAME" -f '{{.Config.Image}}')
    
    # Check if the container image tag matches $DOCKER_CONTAINER_TAG
    if [ "$CONTAINER_IMAGE_TAG" == "$DOCKER_CONTAINER_TAG" ]; then
        docker start "$APP_NAME"
    else
        # Build and run a new container if the image tag does not match
        docker rm "$APP_NAME"
        docker run -d --name "$APP_NAME" --publish "0.0.0.0:$EXPOSE_PORT:$EXPOSE_PORT" -v "$APP_DIR:$APP_DIR" -w "$APP_DIR" --restart always "$DOCKER_CONTAINER_TAG" yarn start
    fi
else
        # Build and run a new container if it doesn't exist
        docker run -d --name "$APP_NAME" --publish "0.0.0.0:$EXPOSE_PORT:$EXPOSE_PORT" -v "$APP_DIR:$APP_DIR" -w "$APP_DIR" --restart always "$DOCKER_CONTAINER_TAG" yarn start
fi

