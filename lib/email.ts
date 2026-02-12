import { Resend } from 'resend';
import { getDatabase } from './mongodb';
import { Notification, NotificationType } from '@/types';
import { ObjectId } from 'mongodb';

// Lazy initialization of Resend to prevent build errors when API key is missing
// The Resend instance is created only when sendEmail is called
let resendInstance: Resend | null = null;

function getResendInstance(): Resend {
  if (!resendInstance) {
    // Initialize with actual key or a valid dummy key format
    const apiKey = process.env.RESEND_API_KEY || 're_dummy_key_for_build';
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  // Check if we have a valid API key before attempting to send
  if (!process.env.RESEND_API_KEY ||
    process.env.RESEND_API_KEY === 'your-resend-api-key-here' ||
    process.env.RESEND_API_KEY === 're_dummy_key_for_build') {
    console.log('📧 Email simulation mode (no valid API key configured)');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('HTML preview:', html.substring(0, 200) + '...');
    return { success: true, message: 'Email simulated (no API key configured)' };
  }

  try {
    const resend = getResendInstance();
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@bf101ilog.com',
      to: [to],
      subject,
      html,
    });
    console.log('✅ Email sent successfully to:', to);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Email send error:', error);
    return { success: false, error };
  }
}

export async function sendCarrierRegistrationEmail(carrierData: any) {
  const adminEmail = process.env.ADMIN_EMAIL || 'Em@bf101ilog.com';

  const subject = `New Carrier Registration: ${carrierData.legalName}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0077be;">New Carrier Registration</h2>
      <p>A new carrier has registered on the LFL Logistics platform:</p>
      
      <div style="background: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">${carrierData.legalName}</h3>
        <p style="margin: 5px 0;"><strong>DOT #:</strong> ${carrierData.dotNumber}</p>
        <p style="margin: 5px 0;"><strong>MC #:</strong> ${carrierData.mcNumber}</p>
        <p style="margin: 5px 0;"><strong>Contact:</strong> ${carrierData.contactName}</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> ${carrierData.contactEmail}</p>
        <p style="margin: 5px 0;"><strong>Phone:</strong> ${carrierData.contactPhone}</p>
        <p style="margin: 5px 0;"><strong>Location:</strong> ${carrierData.city}, ${carrierData.state}</p>
      </div>
      
      <p>Please review and approve this carrier in the admin dashboard.</p>
      <a href="${process.env.NEXTAUTH_URL}/admin/carriers" style="display: inline-block; background: #0077be; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px;">View in Dashboard</a>
    </div>
  `;

  return await sendEmail({ to: adminEmail, subject, html });
}

export async function sendShipperRegistrationEmail(shipperData: any) {
  const adminEmail = process.env.ADMIN_EMAIL || 'Em@bf101ilog.com';

  const subject = `New Shipper Registration: ${shipperData.legalName}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0077be;">New Shipper Registration</h2>
      <p>A new shipper has registered on the LFL Logistics platform:</p>
      
      <div style="background: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">${shipperData.legalName}</h3>
        <p style="margin: 5px 0;"><strong>Contact:</strong> ${shipperData.contactName}</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> ${shipperData.contactEmail}</p>
        <p style="margin: 5px 0;"><strong>Phone:</strong> ${shipperData.contactPhone}</p>
        <p style="margin: 5px 0;"><strong>Location:</strong> ${shipperData.city}, ${shipperData.state}</p>
        <p style="margin: 5px 0;"><strong>Commodity Type:</strong> ${shipperData.commodityType}</p>
        <p style="margin: 5px 0;"><strong>Monthly Volume:</strong> ${shipperData.monthlyVolume}</p>
      </div>
      
      <p>Please review and approve this shipper in the admin dashboard.</p>
      <a href="${process.env.NEXTAUTH_URL}/admin/shippers" style="display: inline-block; background: #0077be; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px;">View in Dashboard</a>
    </div>
  `;

  return await sendEmail({ to: adminEmail, subject, html });
}

export async function sendProfileUpdateEmail(userType: 'carrier' | 'shipper', userData: any, changes: string[]) {
  const adminEmail = process.env.ADMIN_EMAIL || 'Em@bf101ilog.com';

  const subject = `${userType === 'carrier' ? 'Carrier' : 'Shipper'} Profile Updated: ${userData.legalName}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0077be;">${userType === 'carrier' ? 'Carrier' : 'Shipper'} Profile Updated</h2>
      <p>${userData.legalName} has updated their profile.</p>
      
      <div style="background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
        <h4 style="margin-top: 0;">Fields Updated:</h4>
        <ul>
          ${changes.map(change => `<li>${change}</li>`).join('')}
        </ul>
      </div>
      
      <p><strong>Contact Email:</strong> ${userData.contactEmail}</p>
      <p><strong>Contact Phone:</strong> ${userData.contactPhone}</p>
      
      <a href="${process.env.NEXTAUTH_URL}/admin/${userType}s" style="display: inline-block; background: #0077be; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px;">View in Dashboard</a>
    </div>
  `;

  return await sendEmail({ to: adminEmail, subject, html });
}

export async function sendQuoteRequestEmail(quoteData: any) {
  const adminEmail = process.env.ADMIN_EMAIL || 'Em@bf101ilog.com';

  const subject = `New Freight Quote Request from ${quoteData.name}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #ed1c24;">New Quote Request</h2>
      <p>You have received a new freight quote request from the website:</p>
      
      <div style="background: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ed1c24;">
        <h3 style="margin-top: 0;">Contact Details</h3>
        <p style="margin: 5px 0;"><strong>Name:</strong> ${quoteData.name}</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> ${quoteData.email}</p>
        
        <h3 style="margin-top: 15px;">Shipment Details</h3>
        <p style="margin: 5px 0;"><strong>Pickup:</strong> ${quoteData.pickup}</p>
        <p style="margin: 5px 0;"><strong>Delivery:</strong> ${quoteData.delivery}</p>
        <p style="margin: 5px 0;"><strong>Freight Type:</strong> ${quoteData.freightType}</p>
        <p style="margin: 5px 0;"><strong>Preferred Date:</strong> ${quoteData.date}</p>
        
        <h3 style="margin-top: 15px;">Additional Info</h3>
        <p style="margin: 5px 0; white-space: pre-wrap;">${quoteData.details}</p>
      </div>
      
      <p>Please reply to the customer directly at <a href="mailto:${quoteData.email}">${quoteData.email}</a>.</p>
    </div>
  `;

  return await sendEmail({ to: adminEmail, subject, html });
}
