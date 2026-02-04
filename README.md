# BullyFashion101 LLC - Freight Logistics Platform

**TRANSPORTATION SOLUTIONS IN A BULLY FASHION** 🎖️

Modern freight brokerage website with carrier and shipper portals. Military-owned, veteran-operated logistics excellence.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (configured)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Create Admin User

```bash
node scripts/create-admin.js
```

**Default Admin Credentials:**
- Email: `admin@ilogbf101.com`
- Password: `admin123`

## 📁 Project Structure

```
├── app/
│   ├── admin/              # Admin dashboard
│   ├── carrier-dashboard/  # Carrier portal
│   ├── shipper-dashboard/  # Shipper portal
│   ├── portal/             # Onboarding pages
│   ├── api/                # API routes
│   └── ...                 # Public pages
├── lib/                    # Utilities (MongoDB, Email, AI)
├── types/                  # TypeScript types
└── public/                 # Static assets
```

## 🔑 Features

### 🌐 Public Website
- Homepage with military-owned branding
- Services (Dry Van, Flatbed, Hazmat, Food & Perishables)
- About & Contact pages
- Responsive patriotic design

### 🚚 Carrier Portal
- Multi-step onboarding
- DOT/MC verification
- Profile management
- Dashboard

### 📦 Shipper Portal
- Company registration
- Shipment profile
- Profile management
- Dashboard

### 👨‍💼 Admin Dashboard
- Manage carriers & shippers
- Approve/suspend users
- View statistics
- Notifications

## 🔐 User Roles

1. **Admin** - Full access to manage everything
2. **Carrier** - Can register and manage their profile
3. **Shipper** - Can register and manage their profile

## 🌐 Pages

### Public
- `/` - Homepage
- `/services` - Freight Brokerage Services
- `/about` - Company & Leadership
- `/contact` - Contact Information

### Portals
- `/portal/carrier` - Carrier onboarding
- `/portal/shipper` - Shipper onboarding
- `/carrier-dashboard` - Carrier dashboard (requires login)
- `/shipper-dashboard` - Shipper dashboard (requires login)
- `/admin` - Admin dashboard (requires admin login)

## 📧 Configuration

### Environment Variables

Update `.env.local`:

```env
MONGODB_URI=mongodb+srv://imran:Imran321@cluster0.rpbmt5u.mongodb.net/bf101ilog?retryWrites=true&w=majority&appName=Cluster0
NEXTAUTH_SECRET=bf101-bullyfashion-secret-key-change-in-production-32-characters-min
NEXTAUTH_URL=http://localhost:3000

# Optional: For AI analysis
GEMINI_API_KEY=your-key-here

# Optional: For email notifications
RESEND_API_KEY=your-key-here
ADMIN_EMAIL=EM@ilogbf101.com
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy!

```bash
# Build production
npm run build

# Preview production build
npm start
```

## 📞 Contact Information

**Erv Moore, Owner**  
BullyFashion101 LLC  
Phone: (326) 467-2949  
Email: EM@ilogbf101.com

*"Good Brokers don't allow good truckers nor good customers to be Bullied."*

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Patriotic Red, White, and Blue Theme)
- **Database:** MongoDB Atlas
- **Authentication:** NextAuth.js
- **Email:** Resend (optional)
- **AI:** Google Gemini (optional)

## 🎨 Branding

- **Theme:** Patriotic American - Red, White, and Blue
- **Primary Color:** Navy Blue (#1E3A8A)
- **Secondary Color:** Patriotic Red (#DC2626)
- **Accent Color:** Light Blue (#3B82F6)
- **Differentiator:** 🎖️ MILITARY OWNED & OPERATED

## 📝 Services Offered

- Dry Van Freight Brokerage
- Flatbed Freight Brokerage
- Hazardous Materials Transportation
- Food & Perishables Logistics
- Industrial & Manufacturing Freight
- Expedited Shipping
- Supply Chain Solutions
- Regional & Long-Haul Support

## 🗺️ Coverage

End-to-end coverage across the contiguous United States (excluding Alaska and Hawaii).

## 📝 License

Copyright © 2026 BullyFashion101 LLC. All Rights Reserved.

---

**Built with military precision. Operated with veteran excellence.**
