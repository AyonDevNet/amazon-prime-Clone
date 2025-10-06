#!/bin/bash

sudo apt-get update -y

echo "#### Installing Docker ####"
sudo apt-get install docker.io -y

echo "#### Adding users to Docker group ####"
sudo usermod -aG docker ubuntu
sudo usermod -aG docker jenkins

echo "#### Enabling and restarting Docker service ####"
sudo systemctl enable docker
sudo systemctl restart docker

echo "#### Setting Docker socket permissions ####"
sudo chmod 660 /var/run/docker.sock
sudo chown root:docker /var/run/docker.sock

echo "#### Verifying Docker installation ####"
sudo systemctl status docker --no-pager

echo "#### Pulling and running SonarQube container ####"
docker run -d --name sonar -p 9000:9000 sonarqube:lts-community

echo "✅ Docker and SonarQube setup completed successfully!"
