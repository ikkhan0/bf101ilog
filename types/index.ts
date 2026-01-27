import { ObjectId } from 'mongodb';

export type UserRole = 'admin' | 'carrier' | 'shipper';
export type UserStatus = 'pending' | 'approved' | 'suspended';
export type NotificationType = 'new_registration' | 'profile_update' | 'document_upload';

export interface User {
    _id?: ObjectId;
    email: string;
    password: string;
    role: UserRole;
    status: UserStatus;
    carrierData?: ObjectId | CarrierData; // Reference to carrier collection
    shipperData?: ObjectId | ShipperData; // Reference to shipper collection
    createdAt: Date;
    updatedAt: Date;
}

export interface CarrierData {
    _id?: ObjectId;
    userId?: ObjectId; // Reference back to user
    // Verification
    dotNumber: string;
    mcNumber: string;
    authorityDate: string;

    // Company Info
    legalName: string;
    dbaName?: string;
    ein: string;
    address: string;
    city: string;
    state: string;
    zip: string;

    // Contact
    contactName: string;
    contactEmail: string;
    contactPhone: string;

    // Operations
    equipmentTypes: string[];
    preferredLanes: string[];

    // Documents
    documents: {
        w9?: string;
        coi?: string;
        mcAuthority?: string;
    };

    // Status
    status: UserStatus;
    onboardingCompleted: boolean;
    aiAnalysis?: string;

    createdAt: Date;
    updatedAt: Date;
}

export interface ShipperData {
    _id?: ObjectId;
    userId?: ObjectId; // Reference back to user

    // Company Info
    legalName: string;
    dbaName?: string;
    ein: string;
    address: string;
    city: string;
    state: string;
    zip: string;

    // Contact
    contactName: string;
    contactEmail: string;
    contactPhone: string;

    // Shipment Profile
    commodityType: string;
    monthlyVolume: string;
    averageValue?: string;
    preferredEquipment: string[];

    // Documents
    documents: {
        w9?: string;
        creditApp?: string;
        shippingAgreement?: string;
    };

    // Status
    status: UserStatus;
    onboardingCompleted: boolean;
    aiAnalysis?: string;

    createdAt: Date;
    updatedAt: Date;
}

export interface Notification {
    _id?: ObjectId;
    type: NotificationType;
    message: string;
    relatedUserId: ObjectId;
    relatedUserRole: 'carrier' | 'shipper';
    isRead: boolean;
    createdAt: Date;
}

// Portal onboarding types (from existing portal)
export type UserType = 'carrier' | 'shipper' | null;

export enum OnboardingStep {
    Selection = -1,
    Verification = 0, // Carrier only
    CompanyProfile = 1,
    Operations = 2,
    Documentation = 3,
    Agreement = 4,
    Complete = 5
}
