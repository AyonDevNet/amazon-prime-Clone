#!/bin/bash

echo "#### Starting Terraform installation process ####"
sleep 2s

# Check if Terraform is already installed
if command -v terraform &> /dev/null
then
    echo "Terraform is already installed."
    terraform -v
    echo "#### Installation skipped ####"
    exit 0
fi

echo "#### Updating package list and installing dependencies ####"
sudo apt-get update -y && sudo apt-get install -y gnupg software-properties-common wget

echo "#### Adding HashiCorp GPG key ####"
wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null

echo "#### Verifying GPG key fingerprint ####"
gpg --no-default-keyring \
--keyring /usr/share/keyrings/hashicorp-archive-keyring.gpg \
--fingerprint

echo "#### Adding HashiCorp repository ####"
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
sudo tee /etc/apt/sources.list.d/hashicorp.list

echo "#### Updating package lists ####"
sudo apt-get update -y

echo "#### Installing Terraform ####"
sudo apt-get install terraform -y

echo "#### Verifying installation ####"
terraform -v

echo "#### Terraform installation completed successfully ####"
