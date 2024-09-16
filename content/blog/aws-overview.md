---
title: AWS services and cost optimization strategies
description: Understand the core AWS services and how to optimize costs effectively.
---

Understanding the core services and how they can be used is crucial for optimizing their use and minimizing costs. This page provides an overview of the most important AWS services and includes checklists to help reduce expenses.

## 1. Amazon EC2 (Elastic Compute Cloud)

### Description

Amazon EC2 provides resizable compute capacity in the cloud. It eliminates the need to invest in hardware upfront, allowing you to develop and deploy applications faster. EC2 is particularly suitable for applications with varying workloads, such as web servers, databases, and batch processing.

### Key features

- Variety of instance types optimized for different use cases (compute, memory, storage).
- Auto Scaling to automatically adjust capacity.
- Elastic Load Balancing to distribute traffic across instances.
- Spot Instances for significant cost savings on spare capacity.

### Cost optimization checklist

- Regularly review and adjust instance types to match your workloads.
- Automatically scale instances up or down based on demand.
- Purchase Reserved Instances for predictable workloads to save up to 75%.
- Use Spot Instances for flexible, fault-tolerant applications.
- Use AWS Cost Explorer and Trusted Advisor for insights and recommendations.

## 2. Amazon S3 (Simple Storage Service)

### Description

Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. It is used for a wide range of storage needs, including backup and restore, archival, and big data analytics.

### Key Features

- Unlimited storage capacity.
- Different storage classes (Standard, Intelligent-Tiering, Glacier) for different use cases.
- Strong data protection with encryption and access control.
- Cross-region replication for disaster recovery.

### Cost optimization checklist

- Use Glacier for archival data, Intelligent-Tiering for changing access patterns, and Standard for frequently accessed data.
- Automatically transition objects to more cost-effective storage classes.
- Regularly audit and remove unnecessary data.
- Store data in compressed formats to save space.
- Use AWS Cost Explorer and S3 analytics tools.

## 3. Amazon RDS (Relational Database Service)

### Description

Amazon RDS simplifies the setup, operation, and scaling of relational databases in the cloud. It supports multiple database engines, including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, and Microsoft SQL Server.

### Key features

- Automated backups, patching, and updates.
- Read replicas for improved read performance and availability.
- Multi-AZ deployments for high availability.
- Easy scaling of compute and storage resources.

### Cost optimization checklist

- Match instance sizes to your workload requirements.
- Purchase Reserved Instances for long-term savings.
- Use General Purpose (SSD) or Magnetic storage based on performance needs.
- Automatically scale storage capacity with demand.
- Use Amazon CloudWatch and Performance Insights.

## 4. AWS Lambda

### Description

AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume, making it ideal for applications with unpredictable traffic.

### Key features

- Automatic scaling based on request volume.
- Integrated with various AWS services (S3, DynamoDB, Kinesis).
- Supports multiple programming languages.
- Pay-per-use pricing model.

### Cost optimization checklist

- Ensure your code is efficient to reduce execution time.
- Allocate appropriate memory to functions based on performance requirements.
- Manage concurrency levels to balance performance and cost.
- Take advantage of the AWS Lambda free tier for lower usage levels.
- Use AWS CloudWatch and Lambda Insights.

## 5. Amazon DynamoDB

### Description

Amazon DynamoDB is a fast and flexible NoSQL database service for single-digit millisecond performance at any scale. It is ideal for mobile, web, gaming, ad tech, IoT, and other applications that need low-latency data access.

### Key features

- Fully managed, scalable, and highly available.
- Supports key-value and document data models.
- DynamoDB Streams for real-time data processing.
- Global tables for multi-region redundancy.

### Cost optimization checklist

- Choose between on-demand and provisioned capacity based on usage patterns.
- Automatically adjust read/write capacity based on traffic.
- Improve read performance with in-memory caching.
- Use DynamoDB’s built-in monitoring tools and CloudWatch.
- Automatically delete expired data to save on storage costs.

## 6. Amazon VPC (Virtual Private Cloud)

### Description

Amazon VPC allows you to provision a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network you define. It offers complete control over network configuration, including selection of IP address ranges, creation of subnets, and configuration of route tables and network gateways.

### Key features

- Subnet creation and management.
- Security groups and network ACLs for inbound and outbound filtering.
- VPN and AWS Direct Connect for hybrid cloud environments.
- VPC Peering for network connectivity across VPCs.

### Cost optimization checklist

- Design VPCs and subnets to minimize inter-AZ data transfer costs.
- Use CloudWatch to track data transfer and adjust traffic patterns.
- Place resources strategically to reduce data transfer costs.
- Reduce costs for data transfer to S3 or DynamoDB.

## 7. Amazon CloudFront

### Description

Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.

### Key features

- Integration with AWS services like S3, EC2, and Lambda.
- Advanced security features including SSL/TLS encryption and AWS Shield.
- Edge locations around the world for low latency.
- Customizable content delivery with Lambda@Edge.

### Cost optimization checklist

- Optimize cache behavior to reduce origin load.
- Analyze traffic patterns and configure edge locations to serve high-demand regions.
- Use CloudFront reports to understand and optimize data transfer.
- Commit to CloudFront Reserved Capacity for lower rates.

## 8. Amazon ECS (Elastic Container Service)

### Description

Amazon ECS is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster of Amazon EC2 instances or with AWS Fargate.

### Key features

- Integration with other AWS services (IAM, VPC, CloudWatch).
- Support for Docker containers and Kubernetes (via Amazon EKS).
- Flexible scheduling of tasks and services.
- Fargate for serverless container deployment.

### Cost optimization checklist

- Avoid managing EC2 instances by using Fargate for container deployments.
- Ensure efficient allocation of CPU and memory resources.
- Use CloudWatch to track and optimize resource utilization.
- Run non-critical workloads on Spot Instances for cost savings.
- Automatically adjust the number of instances in your cluster based on demand.

## 9. Amazon SQS (Simple Queue Service)

### Description

Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

### Key features

- Reliable, highly-scalable hosted queue.
- Supports standard and FIFO queues.
- Seamless integration with other AWS services.
- Message encryption and access control.

### Cost optimization checklist

- Use standard queues for most applications and FIFO queues for ordered message processing.
- Compress messages to reduce payload size.
- Use CloudWatch to track queue metrics and optimize usage.
- Send and receive messages in batches to reduce API request costs.
- Regularly clean up and delete unused queues.

## 10. Amazon SNS (Simple Notification Service)

### Description

Amazon SNS is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication. It enables you to send messages to large numbers of recipients through different communication channels.

### Key features

- Support for multiple protocols (HTTP/S, email, SMS, Lambda).
- Topic-based pub/sub messaging.
- Seamless integration with AWS services.
- Message filtering and delivery status logging.

### Cost optimization checklist

- Filter messages to ensure they are only sent to relevant subscribers.
- Use CloudWatch and SNS delivery status logs.
- Minimize message size to reduce costs.
- Use fewer topics with multiple subscriptions to reduce management overhead.
- Utilize the SNS free tier for low-volume usage.

## 11. AWS IAM (Identity and Access Management)

### Description

AWS IAM allows you to securely manage access to AWS services and resources. It provides fine-grained access control and identity management capabilities.

### Key features

- Centralized control of AWS account access.
- Fine-grained permissions management.
- Multi-factor authentication (MFA).
- Integration with other AWS services.

### Cost optimization checklist

- Grant only the permissions necessary for each user or service.
- Assign roles to EC2 instances and other AWS resources to avoid using long-term credentials.
- Enhance security with multi-factor authentication.
- Audit and adjust permissions to ensure they are appropriate.
- Use CloudTrail to log and review IAM activity.

## 12. AWS CloudWatch

### Description

AWS CloudWatch is a monitoring and observability service that provides data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization.

### Key features

- Collect and track metrics, log files, and set alarms.
- Integrated with over 70 AWS services.
- Custom metrics and dashboards.
- Automated actions based on predefined thresholds.

### Cost optimization checklist

- Adjust retention periods for logs and metrics based on your needs.
- Monitor only essential custom metrics.
- Group related metrics and alarms to reduce costs.
- Use CloudWatch Logs Insights for cost-effective log analysis.
- Regularly review CloudWatch usage and adjust configurations.
