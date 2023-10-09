# SUI zkLogin Integration with Next.js using NextAuth

This demo application demonstrates the integration of SUI zkLogin using NextAuth in a Next.js framework. Users can log in with their Gmail accounts and generate a persistent SUI address that remains unchanged as long as the same Gmail account is used for logging in.

For detailed information:
- [SUI zkLogin](https://docs.sui.io/testnet/build/zk_login#google)
- [Scale3Labs](https://scale3labs.com/)

## Setup Instructions

### 1. Google OAuth Credentials

To begin, you'll need to create Google OAuth credentials that will provide you with a `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

- Visit the [Google Cloud Platform Console](https://console.cloud.google.com/).
- Create or select an existing project.
- Access the **OAuth consent screen** and provide the necessary details.
- Navigate to **Credentials** and click on **Create Credentials**. Choose **OAuth 2.0 Client ID**.
- Define the application type as "Web application", specify a name, and under "Authorized redirect URIs", append your application's callback URL (usually `http://localhost:3000/api/auth/callback/google` for local development).
- Press "Create" and take note of your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

### 2. Master Seed Generation

Create a master seed and ensure it's stored securely. This is instrumental for user salt creation. Use the following environment variable:

```env
MASTER_SEED=your_master_seed_here
```

### 3. NextAuth Environment Variables

Configure the necessary environment variables for NextAuth:

```env
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_HOST=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=testsecret 
```

### 4. Database Configuration
This repository employs the Prisma adapter with a PostgreSQL database to maintain user account details. If you're deploying on Vercel, you can readily create a PostgreSQL database for this purpose. Once your database is operational, adjust the following environment variables:

```env
POSTGRES_DATABASE="verceldb"
POSTGRES_HOST="your_host_here"
POSTGRES_USER="your_username_here"
POSTGRES_PASSWORD="your_password_here"
POSTGRES_PRISMA_URL="your_prisma_url_here"
POSTGRES_URL="your_postgres_url_here"
POSTGRES_URL_NON_POOLING="your_non_pooling_url_here"
```

Fill in the placeholders with your specific credentials.

### 5. Running the Application
Execute the commands below to boot the server:

```
npm i
npm run dev
```

This repository has been structured to generate salt in compliance with the guidelines provided in the SUI zkLogin documentation. The current configuration uses the testnet, but this can be adjusted within sui.ts.

### What's Coming?
Integration for obtaining zk proofs and facilitating transactions.

Contributions are encouraged! If you'd like to propose improvements, feel free to open a PR. For queries, either raise an issue or contact us directly at contact@scale3labs.com.
