#!/bin/bash

echo "Runnint letsencrypt init script"
chmod +s ./init-letsencrypt.sh
sudo ./init-letsencrypt.sh

echo "Running docker compose"
/snap/bin/docker-compose up -d --force-recreate
