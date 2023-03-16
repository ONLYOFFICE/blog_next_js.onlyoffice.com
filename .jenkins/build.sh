#!/bin/bash

#sudo systemctl stop blog
pm2 stop blog

datestamp=$(date +"%Y%m%d_%H%M%S")

rm -rf /app/backup_blog*
mv /app/blog.teamlab.info /app/backup_blog_$datestamp
mkdir -p /app/blog.teamlab.info
tar -xzf /home/ubuntu/deploy/.jenkins/blog.tar.gz -C /app/blog.teamlab.info/
find /app/blog.teamlab.info/ -type d -exec chmod 755 {} \;
find /app/blog.teamlab.info/ -type f -exec chmod 644 {} \;
cd /app/blog.teamlab.info/

yarn
yarn build

#sudo systemctl start blog
pm2 start blog
sudo sleep 10