#!/bin/bash

mkdir -p /app/blog.teamlab.info_temp
tar -xzf /home/ubuntu/deploy/.jenkins/blog.tar.gz -C /app/blog.teamlab.info_temp/
find /app/blog.teamlab.info_temp/ -type d -exec chmod 755 {} \;
find /app/blog.teamlab.info_temp/ -type f -exec chmod 644 {} \;
cd /app/blog.teamlab.info_temp
yarn && yarn build && sudo chown ubuntu. -R /app/blog.teamlab.info_temp

sudo systemctl stop blog
datestamp=$(date +"%Y%m%d_%H%M%S")
rm -rf /app/backup_blog*
mv /app/blog.teamlab.info /app/backup_blog_$datestamp
mv /app/blog.teamlab.info_temp /app/blog.teamlab.info
sudo systemctl start blog
sudo sleep 10
