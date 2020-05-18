#!/bin/bash

echo "Runnint letsencrypt init script"
chmod +x ./init-letsencrypt.sh
echo "N" | sudo ./init-letsencrypt.sh


until [ "$(/snap/bin/docker pull mhermosi/unit-conversion-server | grep "Status: Downloaded")" !=  "" ]
do 
    echo "Waiting for DockerHub to build the server image"
    sleep 15
done

until [ "$(/snap/bin/docker pull mhermosi/unit-conversion-client | grep "Status: Downloaded")" !=  "" ]
do 
    echo "Waiting for DockerHub to build the client image"
    sleep 15
done

echo "Restarting containers"
/snap/bin/docker-compose up -d --force-recreate
