import type { Metadata } from 'next';
import { ShoppingBag, CreditCard, Truck, MessageCircle, Megaphone, Globe2 } from 'lucide-react';
import { pageMetadata, serviceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import { PageHero, SectionHeading, CardGrid, Steps, RelatedLinks, ContactBlock } from '@/components/ServiceSections';

export const metadata: Metadata = pageMetadata({
  title: 'E-Commerce Website Development in Kerala | Helix24',
  description: 'Shopify, WooCommerce and headless Next.js online stores with fast mobile checkout, Razorpay and Stripe payments, and WhatsApp cart recovery.',
  path: '/ecommerce-development',
});

const services = [
  {
    icon: ShoppingBag,
    title: 'Shopify & WooCommerce Stores',
    text: 'Online stores on the platform that suits your products and budget, set up so you can add products, run offers and manage orders yourself.',
    points: ['Store design for mobile shoppers', 'Product, category and offer setup', 'Training for your team'],
  },
  {
    icon: CreditCard,
    title: 'Payments',
    text: 'Razorpay, Cashfree or PayU for India, Stripe for international cards, and Cash on Delivery where it makes sense.',
  },
  {
    icon: Truck,
    title: 'Shipping & Orders',
    text: 'Courier integrations such as Shiprocket and Delhivery, with order tracking links sent to your customers automatically.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Order Updates',
    text: 'Order confirmations, COD checks and abandoned-cart reminders sent on WhatsApp, which most customers here read quickly.',
  },
  {
    icon: Megaphone,
    title: 'Product Feeds for Ads',
    text: 'Your catalogue connected to Meta and Google Merchant Center, so you can run shopping and retargeting ads.',
  },
  {
    icon: Globe2,
    title: 'Selling to the GCC',
    text: 'Multi-currency pricing (INR, AED, SAR) and local payment options such as Tabby or Tamara for shoppers in the UAE and Saudi Arabia.',
  },
];

const steps = [
  { title: 'Plan', text: 'Products, payments, shipping and the platform that fits, agreed in writing.' },
  { title: 'Design', text: 'Store pages designed around how your customers browse and buy on their phones.' },
  { title: 'Build & connect', text: 'Store setup with payments, couriers, WhatsApp and ad feeds connected and tested.' },
  { title: 'Launch & grow', text: 'Go live, then optional ads and SEO to bring in your first customers.' },
];

const faqs = [
  {
    q: 'Should I choose Shopify or WooCommerce?',
    a: 'Shopify is usually the simpler choice: hosting, security and checkout are handled for you for a monthly fee. WooCommerce runs on WordPress and gives you more control over hosting and customisation, but needs more upkeep. We recommend one to suit your products, budget and team.',
  },
  {
    q: 'Can customers pay by UPI and Cash on Delivery?',
    a: 'Yes. Razorpay and similar gateways support UPI, cards, net banking and wallets, and Cash on Delivery can be offered with WhatsApp confirmation to reduce fake orders.',
  },
  {
    q: 'Can my store sell to customers in the UAE and Saudi Arabia?',
    a: 'Yes. We can set up multi-currency pricing, international payments and shipping options for GCC customers, either on the same store or a separate one.',
  },
  {
    q: 'Will I be able to manage the store myself?',
    a: 'Yes. You will be able to add products, change prices, run discounts and handle orders, and we include a training session before launch.',
  },
];

export default function EcommerceDevelopmentPage() {
  const jsonLd = serviceSchema({
    name: 'E-Commerce Website Development',
    description: metadata.description as string,
    path: '/ecommerce-development',
    serviceType: 'E-Commerce Development',
    areaServed: ['Kerala', 'India', 'United Arab Emirates', 'Saudi Arabia'],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: 'E-Commerce Websites', path: '/ecommerce-development' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-20">
        <PageHero
          eyebrow="Shopify · WooCommerce · Custom Stores"
          title="E-Commerce Website Development in"
          highlight="Kerala & the GCC"
          intro="Helix24 builds online stores that are easy to run and easy to buy from, with payments, shipping and WhatsApp order updates connected from the start."
          primary={{ label: 'Plan Your Online Store', href: '/contact' }}
          whatsappMessage="Hi Helix24, I would like to discuss an online store."
        />

        <section aria-labelledby="ecom-services" className="space-y-10">
          <SectionHeading
            id="ecom-services"
            title="What your store includes"
            intro="We handle the setup and connections so you can focus on products and customers."
          />
          <CardGrid items={services} />
        </section>

        <Steps id="ecom-process" title="How a store project works" steps={steps} />

        <RelatedLinks
          id="ecom-related"
          links={[
            { href: '/social-media-marketing', label: 'Instagram & Facebook marketing' },
            { href: '/digital-marketing-seo', label: 'Google Ads & SEO' },
            { href: '/web-development', label: 'Website development' },
            { href: '/blog/ecommerce-expansion-kerala-to-uae-gcc', label: 'Selling online in the UAE & GCC' },
          ]}
        />

        <Faq id="ecom-faq" title="E-commerce FAQs" items={faqs} />

        <section className="space-y-8">
          <ContactBlock
            title="Tell us about your store"
            text="Share your products and plans, and we will reply within 24 hours with a recommended platform, timeline and quote."
          />
          <LeadForm />
        </section>
      </div>
    </>
  );
}
