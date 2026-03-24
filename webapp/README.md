# VideoScan - Intelligent Video Analysis SaaS

A modern, full-featured SaaS web application for AI-powered video analysis. Extract scenes, objects, and insights from your videos with intelligent automation.

## Features

- **Scene Detection**: Automatically identify and segment scenes in your videos
- **Key Frame Extraction**: Extract the most important frames for visual reference
- **Object Recognition**: Detect and identify objects and activities
- **Temporal Analysis**: Analyze patterns and trends across video timeline
- **Drag & Drop Upload**: Easy video upload with progress tracking
- **Visual Analytics**: Scene timeline visualization and detailed analysis reports
- **Export Controls**: Download reports in PDF, Excel, and JSON formats
- **Plan Management**: Free, Pro, and Enterprise tiers with usage tracking

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Authentication**: Firebase Auth
- **Routing**: React Router v6
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd videoscan/webapp
```

2. Install dependencies
```bash
npm install
```

3. Configure Firebase
```bash
cp .env.example .env
```

Edit `.env` with your Firebase project credentials:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=videoscan-saas.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=videoscan-saas
VITE_FIREBASE_STORAGE_BUCKET=videoscan-saas.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build

```bash
npm run build
```

Production-ready files will be in the `dist/` directory.

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Main navigation bar
│   ├── LandingPage.tsx  # Marketing landing page
│   ├── PricingPage.tsx  # Pricing plans
│   ├── SignIn.tsx       # Authentication sign in
│   ├── SignUp.tsx       # Account creation
│   ├── Dashboard.tsx    # Main analysis dashboard
│   └── Billing.tsx      # Subscription management
├── contexts/            # React contexts
│   ├── AuthContext.tsx  # Authentication state
│   └── ThemeContext.tsx # Dark/light theme
├── types/              # TypeScript type definitions
│   └── index.ts
├── firebase.ts         # Firebase configuration
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Pages

### Public Pages
- **Landing Page** (`/`): Hero section with features and how-it-works
- **Pricing** (`/pricing`): Subscription plans and comparison table
- **Sign In** (`/signin`): User authentication
- **Sign Up** (`/signup`): Account registration with validation

### Protected Pages
- **Dashboard** (`/dashboard`): Video upload, analysis, and visualization
- **Billing** (`/billing`): Plan management and usage tracking

## Features Detail

### Dashboard
- Drag-and-drop video upload zone with real-time progress
- Video list management
- Scene timeline visualization with color-coded segments
- Key frames grid with thumbnails and annotations
- Object detection results with confidence scores
- Video summary and analysis metrics
- Export options (PDF, Excel, JSON)

### Billing
- Current plan display
- Video and storage usage tracking with progress bars
- Billing history with invoice download
- Plan comparison and upgrade options
- Payment method management

## Authentication

The application uses Firebase Authentication with support for:
- Email/password registration and login
- Session persistence
- Automatic redirect to login for protected routes
- Logout functionality

## Styling

The application uses Tailwind CSS with a purple-to-pink gradient theme:
- Primary color: Purple (#9333ea) to Pink (#ec4899)
- Dark mode support with system preference detection
- Responsive design for all screen sizes

## Environment Variables

Required environment variables (see `.env.example`):
- `VITE_FIREBASE_API_KEY` - Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN` - Firebase auth domain
- `VITE_FIREBASE_PROJECT_ID` - Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET` - Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID` - Firebase messaging ID
- `VITE_FIREBASE_APP_ID` - Firebase app ID

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - All rights reserved
