// Generates public/admin/config.yml for Decap CMS (runs before every build; see "prebuild" in package.json).
// Edit the CMS fields here, not in config.yml. JSON is valid YAML, so the output is written as JSON.
// Field names must match the types in src/lib/content.ts and src/lib/blog.ts.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const FE = join(dirname(fileURLToPath(import.meta.url)), '..');
const ICONS = JSON.parse(readFileSync(join(FE, 'src/data/icons.json'), 'utf8'));
const CONTENT = 'frontend/content'; // paths in Decap are relative to the repository root

// ---------- field helpers
const str = (name, label, extra = {}) => ({ name, label, widget: 'string', ...extra });
const text = (name, label, extra = {}) => ({ name, label, widget: 'text', ...extra });
const opt = (field) => ({ ...field, required: false });
const obj = (name, label, fields, extra = {}) => ({ name, label, widget: 'object', fields, ...extra });
const list = (name, label, fields, extra = {}) => ({ name, label, widget: 'list', fields, ...extra });
const strings = (name, label, extra = {}) => ({ name, label, widget: 'list', field: { name: 'item', label: 'Item', widget: 'string' }, ...extra });
const paragraphs = (name, label, extra = {}) => ({ name, label, widget: 'list', field: { name: 'paragraph', label: 'Paragraph', widget: 'text' }, ...extra });
const hidden = (name) => ({ name, label: name, widget: 'hidden' });
const link = (name = 'href', label = 'Link (e.g. /contact)') => str(name, label);

const seo = obj('seo', 'Search engine title & description', [
  str('title', 'Page title', { hint: 'Shown in Google results and the browser tab. Keep it under 60 characters.' }),
  text('description', 'Description', { hint: 'Shown under the title in Google. Keep it under 160 characters.' }),
], { collapsed: true });

// Picture for a card: choose up to two icons (brand logos or 3D icons), or upload an image instead.
// The picker reads the icon list from /admin/icons.json (written below) rather than repeating it in every field.
const iconFields = [
  {
    name: 'icons', label: 'Icon', widget: 'iconpicker', required: false, max: 2,
    hint: 'Pick a brand logo (for a service on that platform) or a 3D icon. Two at most. Avoid using the same logo twice on one page.',
  },
  opt({ name: 'image', label: 'Or upload your own icon', widget: 'image', hint: 'Optional. A square PNG or SVG; it replaces the icon above.' }),
];
const card = (extra = []) => [...iconFields, str('title', 'Title'), text('text', 'Text'), ...extra];
const faqs = (name = 'faqs', label = 'Questions & answers') => list(name, label, [str('q', 'Question'), text('a', 'Answer')], { summary: '{{fields.q}}', collapsed: true });

// ---------- collections
const servicePageFields = [
  seo,
  str('breadcrumb', 'Breadcrumb label'),
  obj('schema', 'Search engine service details', [str('name', 'Service name'), str('serviceType', 'Service type'), strings('areaServed', 'Areas served')], { collapsed: true }),
  obj('hero', 'Top of page', [
    str('eyebrow', 'Small label above the heading'), str('title', 'Heading'), opt(str('highlight', 'Coloured end of the heading')), text('intro', 'Intro'),
    str('primaryLabel', 'Main button text'), link('primaryHref', 'Main button link'),
    opt(str('secondaryLabel', 'Second button text')), opt(link('secondaryHref', 'Second button link')),
    opt(text('whatsappMessage', 'WhatsApp button message', { hint: 'Leave empty to hide the WhatsApp button.' })),
  ]),
  obj('servicesSection', 'Services heading', [str('title', 'Heading'), opt(text('intro', 'Intro'))]),
  list('services', 'Service cards', card([opt(strings('points', 'Bullet points'))]), { summary: '{{fields.title}}', collapsed: true }),
  opt(obj('highlight', 'Highlight box (optional)', [opt(str('title', 'Heading')), opt(paragraphs('paragraphs', 'Paragraphs')), opt(strings('points', 'Checklist'))], { collapsed: true })),
  opt(str('stepsTitle', 'Process heading')),
  opt(list('steps', 'Process steps', [str('title', 'Step'), text('text', 'Text')], { summary: '{{fields.title}}', collapsed: true })),
  opt(list('related', 'Related links', [str('label', 'Text'), link()], { summary: '{{fields.label}}', collapsed: true })),
  str('faqTitle', 'FAQ heading'),
  faqs(),
  opt(obj('contact', 'Text above the enquiry form', [str('title', 'Heading'), text('text', 'Text')], { collapsed: true })),
];

const SERVICE_FILES = [
  ['digital-marketing-seo', 'Digital Marketing & SEO'],
  ['social-media-marketing', 'Social Media Marketing'],
  ['web-development', 'Website Development'],
  ['ecommerce-development', 'E-Commerce Websites'],
  ['mobile-app-development', 'Mobile App Development'],
  ['branding-design', 'Branding & Design'],
];

const locationFields = [
  seo, hidden('slug'),
  str('city', 'City name'), str('crumb', 'Breadcrumb label'), strings('schemaAreas', 'Areas for search engines'),
  str('eyebrow', 'Small label above the heading'), str('title', 'Heading'), str('highlight', 'Coloured end of the heading'), text('intro', 'Intro'),
  text('whatsappMessage', 'WhatsApp button message'),
  str('marketTitle', 'Local market heading'), paragraphs('market', 'Local market paragraphs'),
  list('services', 'Service cards', card(), { summary: '{{fields.title}}', collapsed: true }),
  strings('areas', 'Neighbourhoods and towns served'),
  faqs(),
];

const blogCategories = [...new Set(readdirSync(join(FE, 'content/blog')).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(readFileSync(join(FE, 'content/blog', f), 'utf8')).category))];
const date = (name, label) => ({ name, label, widget: 'datetime', format: 'YYYY-MM-DD', date_format: 'YYYY-MM-DD', time_format: false, picker_utc: true });

const config = {
  backend: {
    name: 'github',
    repo: 'helix24dev/helix24web',
    branch: 'main',
    base_url: 'https://api.netlify.com', // Netlify's GitHub OAuth provider (Site configuration → Access & security → OAuth)
    auth_endpoint: 'auth',
    commit_messages: {
      create: 'content: create {{collection}} "{{slug}}"',
      update: 'content: update {{collection}} "{{slug}}"',
      delete: 'content: delete {{collection}} "{{slug}}"',
      uploadMedia: 'content: upload "{{path}}"',
      deleteMedia: 'content: delete "{{path}}"',
    },
  },
  local_backend: true, // `npx decap-server` + http://localhost:3005/admin edits files on this computer instead of GitHub
  site_url: 'https://helix24.in',
  display_url: 'https://helix24.in',
  logo_url: '/assets/helix-logo.png',
  media_folder: 'frontend/public/uploads',
  public_folder: '/uploads',
  editor: { preview: false },
  collections: [
    {
      name: 'pages', label: 'Pages', format: 'json', editor: { preview: false },
      files: [
        {
          name: 'home', label: 'Homepage', file: `${CONTENT}/home.json`,
          fields: [
            seo,
            obj('hero', 'Top of page', [
              str('quote', 'Quote (first part)'), str('quoteHighlight', 'Quote (coloured part)'), opt(str('quoteAuthor', 'Quote author')),
              str('heading', 'Main heading (H1)', { hint: 'The main search keyword for the site.' }), text('intro', 'Intro'),
              str('primaryLabel', 'Main button text'), link('primaryHref', 'Main button link'),
              opt(str('secondaryLabel', 'Second button text')), opt(link('secondaryHref', 'Second button link')),
            ]),
            obj('projects', 'Recent projects heading', [str('eyebrow', 'Small label'), str('title', 'Heading'), str('linkLabel', 'Link text')], { hint: 'The projects themselves are under Case studies (tick "Show on homepage").', collapsed: true }),
            obj('services', 'Services', [
              str('eyebrow', 'Small label'), str('title', 'Heading'), text('intro', 'Intro'),
              list('items', 'Service cards', card([str('tagline', 'Small label on the card'), strings('tags', 'Tags'), link('link', 'Link to the service page')]), { summary: '{{fields.title}}', collapsed: true }),
            ], { collapsed: true }),
            obj('trust', 'Why businesses trust us', [str('eyebrow', 'Small label'), str('title', 'Heading'), text('intro', 'Intro'), list('items', 'Cards', card(), { summary: '{{fields.title}}', collapsed: true })], { collapsed: true }),
            obj('areas', 'Where we work', [str('eyebrow', 'Small label'), str('title', 'Heading'), text('intro', 'Intro'), list('items', 'Areas', [str('name', 'Name'), link(), text('text', 'Text')], { summary: '{{fields.name}}', collapsed: true })], { collapsed: true }),
            obj('faq', 'FAQ', [str('eyebrow', 'Small label'), str('title', 'Heading'), faqs('items')], { collapsed: true }),
            obj('cta', 'Bottom call to action', [opt(str('badge', 'Badge')), str('title', 'Heading'), text('text', 'Text'), text('whatsappMessage', 'WhatsApp message')], { collapsed: true }),
          ],
        },
        {
          name: 'projects', label: 'Case studies (Our Work)', file: `${CONTENT}/projects.json`,
          fields: [
            seo, str('title', 'Heading'), str('highlight', 'Coloured end of the heading'), text('intro', 'Intro'),
            list('items', 'Case studies', [
              str('id', 'ID', { hint: 'Short unique name, lowercase with dashes, e.g. dental-clinic-kochi.' }),
              { name: 'category', label: 'Filter', widget: 'select', options: [{ label: 'Retail & e-commerce', value: 'retail' }, { label: 'Healthcare', value: 'healthcare' }, { label: 'Real estate', value: 'realestate' }] },
              { ...iconFields[0], name: 'icon', label: 'Icon', widget: 'iconpicker', max: 1, required: true, single: true },
              iconFields[1],
              str('sector', 'Business type', { hint: 'e.g. "Specialist clinic". Keep client names private unless they agree.' }),
              str('region', 'Region'),
              str('title', 'Title'),
              text('problem', 'The problem (one line)'),
              strings('journey', 'Customer steps', { hint: '3 or 4 short steps, e.g. "Google search nearby".' }),
              { name: 'featured', label: 'Show on homepage', widget: 'boolean', required: false, default: false, hint: 'The first three ticked case studies appear on the homepage.' },
              opt(strings('results', 'Confirmed results', { hint: 'Only results the client has confirmed.' })),
            ], { summary: '{{fields.title}}', collapsed: true }),
          ],
        },
        {
          name: 'platforms', label: 'Platforms we work with (logo wall)', file: `${CONTENT}/platforms.json`,
          fields: [
            str('title', 'Heading'), str('intro', 'Intro'),
            list('groups', 'Groups', [
              str('title', 'Group name'),
              list('items', 'Logos', [
                str('name', 'Platform name'),
                { name: 'logo', label: 'Logo', widget: 'image', hint: 'Use the official logo (SVG or PNG on a transparent background).' },
                { name: 'wordmark', label: 'The logo already shows the name', widget: 'boolean', required: false, default: false, hint: 'Tick for logos like "shopify" or "Razorpay" that include the brand name, so the name is not repeated.' },
              ], { summary: '{{fields.name}}', collapsed: true }),
            ], { summary: '{{fields.title}}' }),
          ],
        },
        {
          name: 'about', label: 'About page', file: `${CONTENT}/about.json`,
          fields: [
            seo,
            obj('hero', 'Top of page', [str('eyebrow', 'Small label'), str('title', 'Heading'), str('highlight', 'Coloured end of the heading'), text('intro', 'Intro')]),
            obj('story', 'What we do', [str('title', 'Heading'), paragraphs('paragraphs', 'Paragraphs', { hint: 'Add links as [link text](/page-address).' })]),
            obj('principles', 'How we work', [str('title', 'Heading'), list('items', 'Cards', card(), { summary: '{{fields.title}}', collapsed: true })]),
            obj('areas', 'Areas', [str('title', 'Heading'), text('intro', 'Intro'), list('items', 'Areas', [str('name', 'Name'), link(), text('text', 'Text')], { summary: '{{fields.name}}', collapsed: true })]),
            obj('cta', 'Bottom call to action', [str('title', 'Heading'), text('text', 'Text')]),
          ],
        },
        {
          name: 'contact', label: 'Contact page', file: `${CONTENT}/contact.json`,
          fields: [seo, str('title', 'Heading'), str('highlight', 'Coloured end of the heading'), text('intro', 'Intro', { hint: 'Phone, email, address and hours are under Site settings.' })],
        },
      ],
    },
    {
      name: 'services', label: 'Service pages', format: 'json', editor: { preview: false },
      files: SERVICE_FILES.map(([slug, label]) => ({ name: slug, label, file: `${CONTENT}/services/${slug}.json`, fields: servicePageFields })),
    },
    {
      name: 'locations', label: 'Location pages', format: 'json', editor: { preview: false },
      files: [['kochi', 'Kochi'], ['kozhikode', 'Kozhikode (Calicut)'], ['trivandrum', 'Trivandrum']].map(([slug, label]) => ({ name: slug, label, file: `${CONTENT}/locations/${slug}.json`, fields: locationFields })),
    },
    {
      name: 'blog', label: 'Blog posts', label_singular: 'Blog post', folder: `${CONTENT}/blog`, extension: 'json', format: 'json',
      create: true, slug: '{{fields.slug}}', identifier_field: 'title', summary: '{{title}} ({{publishedDate}})', sortable_fields: ['publishedDate', 'title'],
      editor: { preview: false },
      fields: [
        str('title', 'Title'),
        str('slug', 'Page address', { pattern: ['^[a-z0-9-]+$', 'Lowercase letters, numbers and dashes only'], hint: 'The URL becomes helix24.in/blog/<this>. Do not change it after publishing.' }),
        { name: 'draft', label: 'Draft (hidden from the site)', widget: 'boolean', required: false, default: false },
        str('metaTitle', 'Search engine title', { hint: 'Under 60 characters.' }),
        text('metaDescription', 'Search engine description', { hint: 'Under 160 characters.' }),
        { name: 'category', label: 'Category', widget: 'select', options: blogCategories },
        str('readTime', 'Read time', { default: '5 min read' }),
        date('publishedDate', 'Published'),
        date('updatedDate', 'Last updated'),
        obj('author', 'Author', [str('name', 'Name', { default: 'Helix24 Team' }), str('role', 'Role', { default: 'Digital marketing and web development' }), str('location', 'Location', { default: 'Kochi, Kerala' })], { collapsed: true }),
        text('excerpt', 'Summary', { hint: 'Shown on the blog list and at the top of the post.' }),
        strings('keyTakeaways', 'Key takeaways'),
        list('sections', 'Sections', [
          str('heading', 'Heading'),
          paragraphs('paragraphs', 'Paragraphs'),
          opt(strings('bulletPoints', 'Bullet points')),
          opt(obj('callout', 'Callout box', [
            { name: 'type', label: 'Type', widget: 'select', options: [{ label: 'Tip', value: 'pro-tip' }, { label: 'Warning', value: 'warning' }] },
            str('title', 'Title'), text('text', 'Text'),
          ], { collapsed: true })),
        ], { summary: '{{fields.heading}}', collapsed: true }),
        list('faq', 'Questions & answers', [str('question', 'Question'), text('answer', 'Answer')], { summary: '{{fields.question}}', collapsed: true }),
      ],
    },
    {
      name: 'settings', label: 'Site settings', format: 'json', editor: { preview: false },
      files: [{
        name: 'settings', label: 'Contact details & profiles', file: `${CONTENT}/settings.json`,
        fields: [
          str('companyName', 'Company name'),
          str('phone', 'Phone', { hint: 'As shown on the site, e.g. +91 9048009044.' }),
          str('whatsappNumber', 'WhatsApp number', { hint: 'Country code and number, digits only, e.g. 919048009044.' }),
          text('whatsappMessage', 'Default WhatsApp message'),
          str('email', 'Email'),
          obj('address', 'Registered office', [str('locality', 'City'), str('region', 'State'), str('postalCode', 'PIN code'), str('country', 'Country')], { hint: 'Keep identical to your Google Business Profile.' }),
          str('hours', 'Opening hours'),
          opt(str('cin', 'CIN', { hint: 'Company registration number. Leave empty to hide it.' })),
          str('googleBusinessProfile', 'Google Business Profile link'),
          obj('social', 'Social profiles', [str('linkedin', 'LinkedIn'), str('instagram', 'Instagram'), str('facebook', 'Facebook')]),
          str('servingLine', 'Areas line in the footer'),
          text('footerText', 'Footer description'),
        ],
      }],
    },
  ],
};

writeFileSync(join(FE, 'public/admin/icons.json'), `${JSON.stringify(ICONS.map(({ key, label, src }) => ({ value: key, label, src })))}\n`);
const out = join(FE, 'public/admin/config.yml');
writeFileSync(out, `# Generated by scripts/cms-config.mjs; edit that file instead (JSON is valid YAML).\n${JSON.stringify(config)}\n`);
console.log('wrote', out);
