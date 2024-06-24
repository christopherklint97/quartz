---
title: Azure services and cost optimization strategies
description: Understand the core Azure services and how to optimize costs effectively.
---
# Understanding core services and cost optimization on Azure

Understanding the core services and how they can be used is crucial for optimizing their use and minimizing costs. This page provides an overview of the most important Azure services and includes checklists to help reduce expenses.

## 1. Azure virtual machines (VMs)

### Description

Azure VMs provide scalable computing resources on demand. They allow you to deploy a variety of applications and workloads without the need to invest in hardware upfront.

### Key features

- Wide range of VM sizes and types for different workloads.
- Auto-scaling to manage capacity according to demand.
- Integration with Azure services such as Azure Load Balancer and Azure Virtual Network.
- Support for both Windows and Linux operating systems.

### Cost optimization checklist

- Choose the right VM size and type for your workload.
- Utilize auto-scaling to adjust the number of VMs based on demand.
- Leverage Reserved VM Instances for predictable workloads to save up to 72%.
- Utilize Spot VMs for cost savings on interruptible workloads.
- Use Azure Cost Management and Azure Advisor for insights and recommendations.

## 2. Azure Blob Storage

### Description

Azure Blob Storage is a scalable object storage service for unstructured data. It is suitable for storing massive amounts of data, including text or binary data.

### Key features

- Unlimited storage capacity.
- Multiple access tiers (Hot, Cool, Archive) for different data usage patterns.
- Robust data protection with encryption and access control.
- Geo-replication for disaster recovery.

### Cost optimization checklist

- Use Archive tier for rarely accessed data, Cool tier for infrequently accessed data, and Hot tier for frequently accessed data.
- Automatically transition blobs to the appropriate access tier.
- Regularly audit and delete unnecessary data.
- Compress data to save storage space.
- Utilize Azure Storage Explorer and Cost Management tools.

## 3. Azure SQL Database

### Description

Azure SQL Database is a fully managed relational database service that supports scalable, high-performance databases. It offers automatic patching, backups, and updates.

### Key features

- Automated backups and point-in-time restore.
- Scalable compute and storage resources.
- High availability with built-in replication and failover.
- Advanced security features and compliance certifications.

### Cost optimization checklist

- Choose the appropriate service tier (Basic, Standard, Premium) based on performance requirements.
- Use elastic pools to manage and scale multiple databases.
- Utilize auto-pause and auto-resume for serverless options to save costs.
- Monitor and adjust resource allocation using Azure Monitor and SQL Insights.
- Use Reserved Capacity for long-term cost savings.

## 4. Azure Functions

### Description

Azure Functions is a serverless compute service that enables you to run event-driven code without managing infrastructure. It is ideal for applications with variable traffic.

### Key features

- Automatic scaling based on event triggers.
- Supports multiple programming languages.
- Integration with other Azure services (Event Grid, Service Bus, Storage).
- Pay-per-use pricing model.

### Cost optimization checklist

- Ensure your code is optimized to reduce execution time.
- Allocate appropriate resources based on performance needs.
- Monitor and manage concurrency levels to balance cost and performance.
- Utilize the Azure Functions free tier for low-usage scenarios.
- Use Azure Monitor and Application Insights for performance tracking.

## 5. Azure Cosmos DB

### Description

Azure Cosmos DB is a globally distributed, multi-model database service for any scale. It offers single-digit millisecond response times and automatic scaling.

### Key features

- Fully managed with automatic scaling and global distribution.
- Support for multiple data models (document, key-value, graph, column-family).
- Comprehensive SLAs for latency, throughput, and availability.
- Integrated with other Azure services for real-time analytics and processing.

### Cost optimization checklist

- Choose the appropriate consistency level based on application requirements.
- Optimize indexing policies to improve performance and reduce costs.
- Utilize autoscale to adjust throughput based on traffic patterns.
- Monitor usage with Azure Monitor and Cosmos DB Insights.
- Automatically delete expired data to save on storage costs.

## 6. Azure virtual network (VNet)

### Description

Azure Virtual Network allows you to create isolated networks in the Azure cloud. It offers complete control over IP addresses, subnets, and network security settings.

### Key features

- Creation and management of subnets.
- Network security groups and application security groups for traffic filtering.
- Integration with VPN and Azure ExpressRoute for hybrid cloud scenarios.
- VNet Peering for seamless network connectivity across VNets.

### Cost optimization checklist

- Design VNets and subnets to minimize inter-region and inter-AZ data transfer costs.
- Monitor data transfer using Azure Monitor and Network Watcher.
- Place resources strategically to reduce data transfer costs.
- Utilize cost-effective data transfer solutions such as Azure Storage or Azure SQL Database.

## 7. Azure content delivery network (CDN)

### Description

Azure CDN is a global content delivery network that accelerates the delivery of your web content to users. It provides high bandwidth and low latency for delivering content globally.

### Key features

- Integration with Azure services like Blob Storage, Web Apps, and Media Services.
- Advanced security features including HTTPS and DDoS protection.
- Edge locations worldwide for fast content delivery.
- Customizable caching rules for optimal performance.

### Cost optimization checklist

- Optimize cache settings to reduce origin server load.
- Analyze traffic patterns and configure edge locations based on demand.
- Utilize CDN pricing tiers and reserved capacity for lower rates.
- Monitor CDN performance with Azure Monitor and diagnostic logs.

## 8. Azure Kubernetes Service (AKS)

### Description

Azure Kubernetes Service simplifies the deployment, management, and operations of Kubernetes clusters. It provides a fully managed Kubernetes service for running containerized applications.

### Key features

- Integration with Azure services (Active Directory, Monitor, Security Center).
- Automatic scaling and self-healing capabilities.
- Support for hybrid and multi-cloud deployments.
- Continuous integration and delivery with Azure DevOps.

### Cost optimization checklist

- Use managed node pools to optimize resource allocation.
- Utilize Azure Spot VMs for non-critical workloads.
- Monitor and optimize cluster utilization with Azure Monitor and Log Analytics.
- Scale your cluster dynamically based on application demand.
- Use AKS Cost Management and Azure Advisor for cost-saving recommendations.

## 9. Azure Queue Storage

### Description

Azure Queue Storage is a message queuing service for storing large numbers of messages. It enables asynchronous communication between application components.

### Key features

- Reliable and scalable messaging infrastructure.
- Support for large messages up to 64 KB.
- Integration with Azure Functions, Logic Apps, and other services.
- Built-in encryption and access control.

### Cost optimization checklist

- Use batch processing to reduce the number of transactions.
- Monitor and optimize queue length and message processing time.
- Utilize storage tiers to manage cost based on access patterns.
- Regularly delete old and processed messages to free up space.
- Use Azure Monitor and diagnostic logs for performance insights.

## 10. Azure Notification Hubs

### Description

Azure Notification Hubs is a mobile push notification service that enables you to send notifications to millions of devices across platforms.

### Key features

- Support for multiple platforms (iOS, Android, Windows).
- Template-based and tag-based targeting for personalized messages.
- Integration with Azure services like Event Grid and Logic Apps.
- Scalability to handle high-volume notifications.

### Cost optimization checklist

- Optimize notification payload size to reduce data transfer costs.
- Utilize segmentation and targeting to minimize the number of notifications sent.
- Leverage the free tier for low-volume applications.
- Monitor and analyze notification delivery with Azure Monitor and Notification Hubs metrics.
- Regularly clean up unused tags and registrations.

## 11. Azure Active Directory (Azure AD)

### Description

Azure Active Directory is a comprehensive identity and access management service that provides secure access to Azure resources and applications.

### Key features

- Centralized identity management and access control.
- Multi-factor authentication (MFA) and conditional access policies.
- Seamless integration with on-premises Active Directory.
- Single sign-on (SSO) for cloud and on-premises applications.

### Cost optimization checklist

- Assign least privilege access to users and applications.
- Implement multi-factor authentication for enhanced security.
- Regularly review and adjust access permissions.
- Utilize Azure AD Premium features selectively based on need.
- Monitor Azure AD activity with Azure Monitor and Security Center.

## 12. Azure Monitor

### Description

Azure Monitor is a comprehensive monitoring and observability service that provides insights into the performance and health of your applications and infrastructure.

### Key features

- Collection and analysis of metrics, logs, and traces.
- Integration with over 100 Azure services.
- Customizable dashboards and alerts.
- Automated actions based on predefined thresholds.

### Cost optimization checklist

- Adjust retention periods for logs and metrics based on requirements.
- Monitor essential custom metrics to reduce costs.
- Group related metrics and alerts to streamline monitoring.
- Use Log Analytics for cost-effective log analysis.
- Regularly review Azure Monitor usage and adjust configurations accordingly.