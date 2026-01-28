import type { NextConfig } from "next";

// Validate critical environment variables
const requiredEnvVars = ['MONGODB_URI', 'NEXTAUTH_SECRET', 'NEXTAUTH_URL'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.warn('⚠️  Warning: Missing environment variables:', missingEnvVars.join(', '));
  console.warn('📝 Please check your .env.local file or Vercel environment settings');
}

// Optional environment variables
const optionalEnvVars = ['RESEND_API_KEY', 'EMAIL_FROM', 'ADMIN_EMAIL'];
const missingOptional = optionalEnvVars.filter(varName => !process.env[varName]);

if (missingOptional.length > 0) {
  console.log('ℹ️  Info: Optional environment variables not set:', missingOptional.join(', '));
  console.log('📧 Email functionality will run in simulation mode');
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
