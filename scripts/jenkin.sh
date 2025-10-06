#!/bin/bash

echo "#### Start installing ####"
sleep 2

echo "#### Checking the dependency file and packages ####"
sleep 2

# Check if Jenkins keyring exists
if [ -f /etc/apt/keyrings/jenkins-keyring.asc ]; then
    echo "Jenkins keyring already exists. Skipping download."
else
    echo "Downloading Jenkins keyring..."
    sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
        https://pkg.jenkins.io/debian/jenkins.io-2023.key
fi

# Check if Jenkins list file exists
if [ -f /etc/apt/sources.list.d/jenkins.list ]; then
    echo "Jenkins source list already exists. Skipping creation."
else
    echo "Creating Jenkins source list..."
    echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
fi

# Update apt repositories
echo "Updating apt repositories..."
sudo apt-get update

# Install fontconfig if not installed
if dpkg -l | grep -q fontconfig; then
    echo "fontconfig is already installed. Skipping..."
else
    echo "Installing fontconfig..."
    sudo apt-get install -y fontconfig
fi

# Install OpenJDK 17 if not installed
if java -version 2>&1 | grep -q "17"; then
    echo "OpenJDK 17 is already installed. Skipping..."
else
    echo "Installing OpenJDK 17..."
    sudo apt-get install -y openjdk-17-jre
fi

# Install Jenkins if not installed
if dpkg -l | grep -q jenkins; then
    echo "Jenkins is already installed. Skipping..."
else
    echo "Installing Jenkins..."
    sudo apt-get install -y jenkins
fi

sudo systemctl enable jenkins
sudo systemctl start jenkins

echo "#### Installation process completed ####"
