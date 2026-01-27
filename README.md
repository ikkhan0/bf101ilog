# LFL Logistics Platform

Modern logistics company website with carrier and shipper portals.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (already configured)

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
- Email: `admin@lfllogistics.com`
- Password: `admin123`

## 📁 Project Structure

```
├── app/
│   ├── admin/              # Admin dashboard
│   ├── carrier-dashboard/  # Carrier portal
│   ├── shipper-dashboard/  # Shipper portal
│   ├── portal/            # Onboarding pages
│   ├── api/               # API routes
│   └── ...                # Public pages
├── lib/                   # Utilities (MongoDB, Email, AI)
├── types/                 # TypeScript types
└── public/                # Static assets
```

## 🔑 Features

###  Public Website
- Homepage with services
- About & contact pages
- Responsive design

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
- `/services` - Services
- `/about` - About us
- `/contact` - Contact
- `/login` - Login page

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
MONGODB_URI=mongodb+srv://imran:Imran963@cluster0...
NEXTAUTH_SECRET=<already configured>
NEXTAUTH_URL=http://localhost:3000

# Optional: For AI analysis
GEMINI_API_KEY=your-key-here

# Optional: For email notifications
RESEND_API_KEY=your-key-here
ADMIN_EMAIL=LFLL@LFLLogistics.com
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

**LFL Logistics**
- Phone: (704) 918-5201
- Email: LFLL@LFLLogistics.com
- Address: 4844 Asherton PL NW, Concord, NC 28027

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB Atlas
- **Authentication:** NextAuth.js
- **Email:** Resend (optional)
- **AI:** Google Gemini (optional)

## 📝 License

Copyright © 2026 LONGS FREIGHT LOAD LOGISTICS LLC
