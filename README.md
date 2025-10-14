Amazon Prime Clone — Fullstack + DevOps Automation

A full-stack Amazon Prime Video Clone project integrated with complete DevOps automation.
This repository contains both the frontend and backend source code, along with automation scripts for Docker, Kubernetes (EKS), Jenkins, Terraform, Prometheus, Grafana, and Trivy — all designed to simulate a real-world CI/CD pipeline and cloud deployment workflow.

🧱 Full-stack development (React + Node.js + MongoDB)
🐳 Docker-based containerization
🔄 CI/CD pipeline (Jenkins / GitHub Actions)
🔐 Image scanning (Trivy)
📊 Monitoring (Grafana, Prometheus)
☁️ Cloud deployment (AWS EC2 / EKS)
⚙️ Infrastructure as Code (Terraform-readynning, and cloud deployment.

Workflow
This project automates the end-to-end DevOps pipeline — from code to deployment:

Source Control → GitHub repository
Build Stage → Jenkins triggers Docker builds
Vulnerability Scan → Trivy scans Docker images
Infrastructure Provisioning → Terraform creates AWS resources (EKS, VPC, EC2, S3, etc.)
Deployment → EKS + kubectl deploys pods and services
Monitoring → Prometheus collects metrics, Grafana visualizes dashboards
Continuous Delivery → Automated redeployments on commit

<img width="575" height="281" alt="image" src="https://github.com/user-attachments/assets/471a85b5-3894-4501-89a0-c6353d864adf" />


| Script           | Purpose                                             |
| ---------------- | --------------------------------------------------- |
| **awscli.sh**    | Installs and configures AWS CLI for deployment      |
| **docker.sh**    | Installs Docker and prepares images                 |
| **jenkin.sh**    | Installs and configures Jenkins with pipeline setup |
| **trivy.sh**     | Scans Docker images for vulnerabilities             |
| **terraform.sh** | Initializes and applies Terraform infrastructure    |
| **eksctl.sh**    | Provisions an EKS cluster on AWS                    |
| **kubectl.sh**   | Configures Kubernetes CLI for cluster management    |
| **promethus.sh** | Deploys Prometheus for monitoring                   |
| **grafana.sh**   | Sets up Grafana dashboards and alerts               |

Key Takeaway

This project is not just a web clone — it’s a DevSecOps showcase, demonstrating:
CI/CD pipeline design
Code analysis & vulnerability management
Cloud-native infrastructure automation
Real-time monitoring & alerting
Built entirely from scratch, it reflects production-ready DevOps engineering skills across the full delivery lifecycle.

Special thanks to Team Prime —Aniket Pilankar, and his team



