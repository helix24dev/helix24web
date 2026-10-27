'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'meta-ads',
    message: '',
    location: 'Kerala',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');

    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem('bot-field') as HTMLInputElement | null;

    try {
      // Netlify Forms: posts to the static form definition in public/__forms.html
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact-form',
          'bot-field': honeypot?.value ?? '',
          ...formData,
        }).toString(),
      });

      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);

      setStatus('success');
      setResponseMsg(`Thank you, ${formData.name}! Your inquiry has been submitted. Our strategy team will contact you within 24 hours.`);
      setFormData({ name: '', email: '', phone: '', service: 'meta-ads', message: '', location: 'Kerala' });
    } catch {
      setStatus('error');
      setResponseMsg('We could not send your inquiry. Please try again, or message us on WhatsApp at +91 9048009044.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-5 max-w-xl mx-auto">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white">Request Free Strategy Proposal</h3>
        <p className="text-xs text-purple-200/70">Submit your project details to receive a customized ad & web strategy proposal within 24 hours.</p>
      </div>

      <p className="hidden">
        <label>Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <div>
        <label className="block text-xs font-semibold text-purple-200 mb-1.5">Full Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Rahul Nair"
          className="w-full py-2.5 px-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-purple-200 mb-1.5">Work Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="rahul@company.com"
            className="w-full py-2.5 px-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-purple-200 mb-1.5">Phone / WhatsApp *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 9048009044"
            className="w-full py-2.5 px-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-purple-200 mb-1.5">Requested Service</label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full py-2.5 px-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
        >
          <option value="meta-ads">Meta Ads & Lead Funnels (Facebook & Instagram)</option>
          <option value="social-media">Social Media Management (SMM)</option>
          <option value="google-ads">Google Ads PPC & Search Campaigns</option>
          <option value="local-seo">Local SEO & Google Maps Ranking</option>
          <option value="web-dev">Custom Website Development (Next.js)</option>
          <option value="ecommerce">Shopify / WooCommerce Online Store</option>
          <option value="branding">Branding & UI/UX Design</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-purple-200 mb-1.5">Project Details & Objectives *</label>
        <textarea
          required
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your target audience (Kerala, UAE, GCC), monthly budget, or current web requirements..."
          className="w-full py-2.5 px-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-purple-900/50 transition-all disabled:opacity-50"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting to Strategy Team...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Inquiry & Request Proposal →</span>
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{responseMsg}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{responseMsg}</span>
        </div>
      )}
    </form>
  );
}
