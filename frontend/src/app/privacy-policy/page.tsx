import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | Helix24 Solutions',
  description: 'How Helix24 Solutions collects, uses and protects your personal data, form submissions and WhatsApp Business communications.',
  path: '/privacy-policy',
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Last Updated: August 27, 2026 | WhatsApp Business Cloud API & Meta Verified Compliant"
      intro='At Helix24 Solutions ("Helix24", "we", "us", or "our"), accessible from https://helix24.in, one of our main priorities is the privacy and security of our visitors and clients. This Privacy Policy document outlines the types of information collected and recorded by Helix24 Solutions and how we process, store, and protect it, specifically regarding our website interactions, form submissions, and WhatsApp Business API communications.'
      sections={[
        {
          heading: '1. SSL/TLS Encryption & Data Security',
          paragraphs: [
            'All traffic between your browser or device and Helix24 Solutions is encrypted with HTTPS (TLS). We use HTTPS on all our domains, forms and messaging integrations so that third parties cannot read the data in transit.',
          ],
        },
        {
          heading: '2. Information We Collect',
          paragraphs: [
            'We collect information to provide high-converting web development, software engineering, and digital marketing services. The types of data collected include:',
          ],
          items: [
            'Personal Identifiers: Name, business email address, phone number, and company name provided voluntarily via our contact forms or WhatsApp chat initiating buttons.',
            'WhatsApp Communication Data: When you initiate a conversation via WhatsApp or opt-in to receive updates via the WhatsApp Business API, we store your phone number, message metadata, and conversation history required to service your consultation request.',
            'Technical & Analytics Data: IP address, browser type, operating system, and referral sources collected anonymously for web performance optimization.',
          ],
        },
        {
          heading: '3. How We Use Your Information & WhatsApp API Policy',
          paragraphs: ['Your information is strictly used for legitimate business purposes, including:'],
          items: [
            'Responding to project inquiries, quote requests, and providing requested consultation services.',
            'Sending direct WhatsApp updates regarding project milestones, scheduled calls, or invoice statements via WhatsApp Cloud API.',
            'Verifying account identity and preventing fraudulent or malicious inquiries.',
          ],
          note: 'Strict Anti-Spam Guarantee: We do NOT sell, rent, lease, or trade your personal data or phone number to any third-party marketing lists. WhatsApp messages sent via Meta Cloud API are strictly transactional or service-related.',
        },
        {
          heading: '4. WhatsApp Communication Opt-In & Opt-Out (User Rights)',
          paragraphs: [
            "By initiating a chat via our website's WhatsApp action button or submitting your phone number on our quote forms, you consent to receive direct business communications from Helix24 Solutions.",
          ],
          items: [
            'Opt-Out at Any Time: You can stop receiving WhatsApp messages at any time by replying STOP to any message or emailing info@helix24.in.',
            'Right to Erasure (Data Deletion): You may request complete deletion of your personal records and WhatsApp conversation history by contacting our Data Protection Officer at info@helix24.in. We comply with all GDPR & CCPA data deletion requests within 48 hours.',
          ],
        },
        {
          heading: '5. Service Providers & Data Security',
          paragraphs: [
            'We use third-party providers to deliver our services, including Meta Platforms Inc. (WhatsApp Business Cloud API), Google and Netlify (website hosting and form handling). Each provider handles data under its own privacy policy.',
          ],
        },
        {
          heading: '6. Contact Our Data Protection Officer',
          paragraphs: [
            'If you have any questions regarding this Privacy Policy, your rights under data protection laws, or WhatsApp data processing, please contact us:',
          ],
          items: [
            'Entity: Helix24 Solutions',
            'Email: info@helix24.in',
            'Phone / WhatsApp: +91 9048009044',
            'Location: Kochi, Kerala 682030, India',
          ],
        },
      ]}
    />
  );
}
