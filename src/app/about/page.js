// Keep metadata export
export const metadata = {
  title: 'About',
};

// Import the new client component
import AboutPageClient from '@/components/AboutPageClient';

// Render the client component
export default function AboutPage() {
  return <AboutPageClient />;
} 