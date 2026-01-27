import { getDatabase } from './mongodb';
import { Notification, NotificationType } from '@/types';
import { ObjectId } from 'mongodb';
import { sendCarrierRegistrationEmail, sendShipperRegistrationEmail, sendProfileUpdateEmail } from './email';

export async function createNotification(
    type: NotificationType,
    message: string,
    relatedUserId: ObjectId,
    relatedUserRole: 'carrier' | 'shipper'
) {
    try {
        const db = await getDatabase();
        const notification: Notification = {
            type,
            message,
            relatedUserId,
            relatedUserRole,
            isRead: false,
            createdAt: new Date(),
        };

        const result = await db.collection('notifications').insertOne(notification);
        return { success: true, notificationId: result.insertedId };
    } catch (error) {
        console.error('Failed to create notification:', error);
        return { success: false, error };
    }
}

export async function notifyAdminNewCarrier(carrierData: any, carrierId: ObjectId) {
    // Create in-dashboard notification
    await createNotification(
        'new_registration',
        `New carrier registration: ${carrierData.legalName}`,
        carrierId,
        'carrier'
    );

    // Send email notification
    await sendCarrierRegistrationEmail(carrierData);
}

export async function notifyAdminNewShipper(shipperData: any, shipperId: ObjectId) {
    // Create in-dashboard notification
    await createNotification(
        'new_registration',
        `New shipper registration: ${shipperData.legalName}`,
        shipperId,
        'shipper'
    );

    // Send email notification
    await sendShipperRegistrationEmail(shipperData);
}

export async function notifyAdminProfileUpdate(
    userType: 'carrier' | 'shipper',
    userData: any,
    userId: ObjectId,
    changes: string[]
) {
    // Create in-dashboard notification
    await createNotification(
        'profile_update',
        `${userType === 'carrier' ? 'Carrier' : 'Shipper'} ${userData.legalName} updated their profile`,
        userId,
        userType
    );

    // Send email notification
    await sendProfileUpdateEmail(userType, userData, changes);
}

export async function getUnreadNotifications() {
    try {
        const db = await getDatabase();
        const notifications = await db.collection('notifications')
            .find({ isRead: false })
            .sort({ createdAt: -1 })
            .limit(50)
            .toArray();

        return { success: true, notifications };
    } catch (error) {
        console.error('Failed to fetch notifications:', error);
        return { success: false, error };
    }
}

export async function markNotificationAsRead(notificationId: string) {
    try {
        const db = await getDatabase();
        await db.collection('notifications').updateOne(
            { _id: new ObjectId(notificationId) },
            { $set: { isRead: true } }
        );

        return { success: true };
    } catch (error) {
        console.error('Failed to mark notification as read:', error);
        return { success: false, error };
    }
}
