<p><a target="_blank" href="https://app.eraser.io/workspace/NCv6EQxBoMJcPwGbZdf2" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

# BAGGIT - TBDex Hackathon


## Project Overview
This project aims to develop a robust wallet, built on top of the [﻿TBDex protocol](https://tbdex.io/)﻿ for unlocking frictionless commerce and financial access globally, for efficient and secure cross-border payment system. OUr solution leverages modern technologies and architectural patterns to address the complexities of international money transfers, focusing on speed, cost-effectiveness, and regulatory compliance.



## Problem Statement
Traditional cross-border payments face several challenges:

- Hight fees and hidden costs
- Slow transaction speeds
- Lack of transparency in exchange rates and transaction status
- Complexity in navigating different regulatory environments
- Security concern and fraud risks
Our system aims to address these issues by providing a streamlined, transparent, and secure platform for international money transfers.



## Architecture
We've adopted a micro-service architecture to ensure modularity, scalability, and ease of maintenance. The system is built on a cloud-native infrastructure, utilising containerisation and orchestration technologies.

## Hight Level Architecture
```
+----------------+    +----------------+    +----------------+
|   User         |    |  Payment       |    |  Currency      |
|   Interface    | <- |  Processing    | <- |  Exchange      |
|   Service      |    |  Service       |    |  Service       |
+----------------+    +----------------+    +----------------+
         ^                    ^                     ^
         |                    |                     |
         v                    v                     v
+----------------+    +----------------+    +----------------+
|  Authentication|    |  Compliance    |    |  TbDex        |
|  & Authorization|   |  Service       |    |  protocol     |
+----------------+    +----------------+    +----------------+
         ^                    ^                     ^
         |                    |                     |
         v                    v                     v
+----------------+    +----------------+    +----------------+
|  Notification  |    |  TbDex pro-    |    |  Partner Fin-  |
|  Service       |    |  tocol.        |    |  anceial Inst. |
+----------------+    +----------------+    +----------------+
```


![image.png](/.eraser/NCv6EQxBoMJcPwGbZdf2___3fkoYVJn9TRLtpnQzGfRDQm7ahg1___0ROH20ExyPL59cOIYwOd4.png "image.png")



[﻿View on canvas](https://app.eraser.io/workspace/NCv6EQxBoMJcPwGbZdf2?elements=eTePT6mr3ZfuUguEmj4Z8Q) 

## Design Considerations
1. **Decoupled Services**: Each micro-service is responsible for a specific business capability, allowing for independent scaling and deployment.
2. **Event-Driven Architecture**: Asynchronous communication between services using message queues ensures loose coupling and improve system resilience.
3. **API Gateway: **Centralised entry point for all client requests, handling authentication, rate limiting, and request routing
4. **Data Consitency: **Implementing the saga pattern for distributed transaction to maintain data consistency across services.
5. **Observability: **Comprehensive logging, monitoring, and tracing across all services for easier debugging and performance optimisation.
6. **Regulatory Compliance: **Built-in compliance checks and audit trails to meet international financial regulations.


## Technology Stack
- **Backend**: NodeJS, NextJS server actions for simplicity of implementation with the client., HonoJS for proxy services and speed.
- **Frontend: **React with Typescript.
- **Databse: **SQLite for lightweight transactional data
- **Message Broker: **[﻿NATS.io](https://nats.io/), nats-ws (websocker)
- **CI/CD: **Github actions
- **Monitoring: **Prometheus, Grafana, ELK Stack


## Key Components
1. **User interface**: Handles user interactions where user chooses currency pairs to swap/convert, interact with PFI's and process their payments
2. **Payment processing service**: Finalising payment is outside fo TBDex there was a need for a payment processing service to enable smooth transaction flow after an agreement has been reached with PFI
3. **Compliance Service**: KYC/AML checks and regulatory reporting.
4. **TBDex Service**: Create user DID's and issue verifiable credentials.


## Data Flow
1. User initiates a transaction through the UI interface.
2. Transaction request is validated and routed to the TBDex service to fetch PFI offerings.
3. Compliance Service performs necessary checks for new users.
4. Currency Exchange Service calculates the exchange rate.
5. Payment Processing Service coordinates the transaction execution.
6. Notification Service keeps the user informed throughout the process.
## Security Considerations
- End-to-end encryption for all data in transit and at rest
- Multi-factor authentication for user accounts
- Regular security audits and penetration testing
- Compliance with PCI DSS for handling payment card information
- Implement rate limiting and fraud detection algorithms
## Scalability
- Horizontal scaling of micro-services based on load
- Database sharding for improved read/write performance
- Caching layer (e.g., Redis) for frequently accessed data
- CDN integration for static assets and improved global performance
## Future Enhancements
1. Integration with blockchain networks for certain payment corridors
2. AI-powered fraud detection system and reputation analysis
3. Expansion of supported currencies and payment methods
4. Mobile app development for iOS and Android platforms
5. Enhanced analytics and business intelligence features


Open [﻿http://localhost:3000](http://localhost:3000/) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [﻿next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [﻿Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More
To learn more about the project and TBDex, take a look at the following resources:

- [﻿TBDex Developer Documentation](https://www.tbdex.io/developers)  - learn about TBDex SDKs and API.
- [﻿Learn Next.js](https://nextjs.org/learn)  - an interactive Next.js tutorial.


## Deploy on Vercel
The easiest way to deploy the project is to use the [﻿Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 

Check out our [﻿Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<!-- eraser-additional-content -->
## Diagrams
<!-- eraser-additional-files -->
<a href="/README-Currency Quote Request and Transaction-1.eraserdiagram" data-element-id="eTCZdqU6u4vZgAZw66nxK"><img src="/.eraser/NCv6EQxBoMJcPwGbZdf2___3fkoYVJn9TRLtpnQzGfRDQm7ahg1___---diagram----67b0c46426cbbfdb47f0d7451523b7b4-Currency-Quote-Request-and-Transaction.png" alt="" data-element-id="eTCZdqU6u4vZgAZw66nxK" /></a>
<!-- end-eraser-additional-files -->
<!-- end-eraser-additional-content -->
<!--- Eraser file: https://app.eraser.io/workspace/NCv6EQxBoMJcPwGbZdf2 --->