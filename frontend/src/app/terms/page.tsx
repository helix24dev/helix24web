import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service | Helix24 Solutions',
  description: 'Terms of Service for Helix24 Solutions: service agreements, WhatsApp communication terms, intellectual property and liability.',
  path: '/terms',
  noindex: true,
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="Effective Date: August 27, 2026 | WhatsApp Cloud API & Client Agreement"
      intro="Welcome to Helix24 Solutions. By accessing our website (https://helix24.in) or communicating with us via form submissions or our official WhatsApp Business API (+91 9048009044), you agree to comply with and be bound by the following Terms of Service."
      sections={[
        {
          heading: '1. Digital Agency Services',
          paragraphs: [
            'Helix24 Solutions provides full-service web development, custom software engineering, mobile application development, e-commerce solutions, and digital marketing (SEO & Google/Meta PPC Ads management). Specific project deliverables, scope, timelines, and payment terms are specified in individual client Statement of Work (SOW) agreements.',
          ],
        },
        {
          heading: '2. WhatsApp Business API Terms of Communication',
          paragraphs: ['By engaging Helix24 Solutions via WhatsApp or requesting consultations on our site:'],
          items: [
            'You agree to receive operational messages, proposal details, project updates, and consultation follow-ups via WhatsApp Cloud API.',
            'You may opt-out at any time by messaging STOP or requesting removal via email at info@helix24.in.',
            'All WhatsApp messages are processed under Meta Cloud API security policies with end-to-end transport encryption.',
          ],
        },
        {
          heading: '3. Intellectual Property Rights',
          paragraphs: [
            'Upon final payment for custom development or design services, all agreed-upon source code, custom assets, and final deliverables belong exclusively to the client, subject to third-party open-source licensing terms specified in the client agreement.',
          ],
        },
        {
          heading: '4. Limitation of Liability',
          paragraphs: [
            'In no event shall Helix24 Solutions or its team be liable for indirect, incidental, or consequential damages resulting from website downtime, third-party platform API changes (e.g. Google algorithm updates, Meta ad account suspensions), or client-side infrastructure failures.',
          ],
        },
        {
          heading: '5. Governing Law & Jurisdiction',
          paragraphs: [
            'These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Kerala, India. For official inquiries regarding these Terms, contact us at info@helix24.in or phone/WhatsApp at +91 9048009044.',
          ],
        },
      ]}
    />
  );
}
