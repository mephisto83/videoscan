export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
  videosPerMonth: number;
  storageLimit: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface VideoFile {
  id: string;
  name: string;
  size: number;
  duration: number;
  uploadedAt: Date;
  status: 'uploading' | 'processing' | 'completed' | 'failed';
  progress?: number;
}

export interface SceneSegment {
  id: string;
  startTime: number;
  endTime: number;
  label: string;
  color: string;
  confidence: number;
}

export interface KeyFrame {
  id: string;
  timestamp: number;
  imageUrl: string;
  description: string;
}

export interface DetectedObject {
  id: string;
  name: string;
  confidence: number;
  count: number;
  timestamps: number[];
}

export interface VideoAnalysis {
  videoId: string;
  scenes: SceneSegment[];
  keyFrames: KeyFrame[];
  objects: DetectedObject[];
  summary: string;
  totalProcessingTime: number;
}

export interface DashboardStats {
  videosProcessed: number;
  videosThisMonth: number;
  storageUsed: number;
  storageLimit: number;
  nextResetDate: Date;
}

export interface BillingInfo {
  currentPlan: 'free' | 'pro' | 'enterprise';
  videosUsed: number;
  videosLimit: number;
  storageUsed: number;
  storageLimit: number;
  usagePercent: number;
  renewalDate: Date;
  nextInvoiceAmount: number;
  lastInvoiceAmount?: number;
  lastInvoiceDate?: Date;
}

export type ThemeMode = 'light' | 'dark' | 'system';
