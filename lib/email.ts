import { Resend } from 'resend';
import { getDatabase } from './mongodb';
import { Notification, NotificationType } from '@/types';
import { ObjectId } from 'mongodb';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your-resend-api-key-here') {
    console.log('Email would be sent to:', to);
    console.log('Subject:', subject);
    console.log('HTML:', html);
    return { success: true, message: 'Email simulated (no API key configured)' };
  }

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@lfllogistics.com',
      to: [to],
      subject,
      html,
    });
    return { success: true, data };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}

export async function sendCarrierRegistrationEmail(carrierData: any) {
  const adminEmail = process.env.ADMIN_EMAIL || 'LFLL@LFLLogistics.com';

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
  const adminEmail = process.env.ADMIN_EMAIL || 'LFLL@LFLLogistics.com';

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
  const adminEmail = process.env.ADMIN_EMAIL || 'LFLL@LFLLogistics.com';

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
