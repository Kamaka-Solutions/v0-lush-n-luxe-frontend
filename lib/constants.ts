// Site-wide navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/#collections" },
  { label: "About", href: "/about" },
  { label: "B2B", href: "/b2b" },
  { label: "Subscription", href: "/subscription" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
] as const;

// Featured collections for homepage grid
export const FEATURED_COLLECTIONS = [
  {
    title: "Home & Bedroom",
    description:
      "Luxury bed with crisp linens and throw cushions. Indulge in breathable, durable bedding crafted for both elegance and performance.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    href: "/#",
    cta: "Shop Bedroom",
  },
  {
    title: "Bathroom & Spa",
    description:
      "Stack of plush towels with bathrobe on side. Ultra-absorbent, quick-dry, and designed to withstand repeated commercial laundering.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    href: "/#",
    cta: "Shop Bathroom",
  },
  {
    title: "Lifestyle & Leisure",
    description:
      "Loungewear and tote bags for the beach. Sustainable comfort for every occasion and every lifestyle.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    href: "/#",
    cta: "Shop Lifestyle",
  },
  {
    title: "Kitchenware",
    description:
      "Elegant kitchen towels, aprons, and table linen on the counter. Artisan textiles for the discerning home chef.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    href: "/#",
    cta: "Shop Kitchenware",
  },
  {
    title: "Decor & Accessories",
    description:
      "Wall hangings, decorative cushions, and curtains in the living space. Curated accents to elevate every room.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    href: "/#",
    cta: "Shop Decor",
  },
] as const;

// Carousel collections
export const CAROUSEL_COLLECTIONS = [
  {
    title: "Signature Bedding Collection",
    description:
      "Our flagship organic cotton collection, designed for the ultimate sleep sanctuary.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  },
  {
    title: "Luxury Towels & Spa Range",
    description:
      "Zero-twist Egyptian cotton towels with unmatched absorbency and cloud-like softness.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
  },
  {
    title: "Hospitality Essentials",
    description:
      "Professional-grade linens tailored for commercial durability while maintaining a luxurious aesthetic.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  },
  {
    title: "Seasonal & Event Linen Themes",
    description:
      "Refresh your space with curated seasonal palettes and limited-edition textile designs.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
  },
] as const;

// About page promises (from PDF "Our Promise")
export const BRAND_PROMISES = [
  "Sustainable & responsibly sourced textiles",
  "Designed for longevity & comfort",
  "Flexible B2B supply solutions",
  "Linen recycling & replacement programs",
  "Subscription-based supply options",
] as const;

// B2B partner types
export const B2B_PARTNERS = [
  { title: "Hotels & Boutique Stays", icon: "Building2" },
  { title: "Airbnb Hosts", icon: "Home" },
  { title: "Hospitals", icon: "Heart" },
  { title: "Nursing Homes", icon: "Users" },
  { title: "Corporate Housing", icon: "Briefcase" },
  { title: "Event Organisers", icon: "Calendar" },
] as const;

// B2B features
export const B2B_FEATURES = [
  {
    title: "Tiered Wholesale Pricing",
    description:
      "Volume-based pricing that rewards loyalty and large-scale procurement.",
    icon: "TrendingUp",
  },
  {
    title: "Recurring Supply Contracts",
    description:
      "Set-and-forget supply agreements tailored to your operational calendar.",
    icon: "RefreshCw",
  },
  {
    title: "Custom Quantity Ordering",
    description:
      "Flexible order sizes from boutique minimums to enterprise-scale fulfilment.",
    icon: "Package",
  },
  {
    title: "Seasonal Refresh Options",
    description:
      "Scheduled textile refreshes to maintain impeccable presentation standards.",
    icon: "Sparkles",
  },
  {
    title: "Tender Bid Support",
    description:
      "Dedicated support for public and private sector procurement processes.",
    icon: "FileText",
  },
  {
    title: "Flexible Invoicing",
    description:
      "Net-30, net-60, and custom payment terms to match your cash flow.",
    icon: "CreditCard",
  },
] as const;

// Subscription steps (from PDF "How It Works")
export const SUBSCRIPTION_STEPS = [
  {
    step: 1,
    title: "Select Your Linen Package",
    description: "Choose your textile category and quality tier.",
  },
  {
    step: 2,
    title: "Choose Delivery Frequency",
    description: "Pick your preferred refresh frequency and quantity.",
  },
  {
    step: 3,
    title: "Receive Seasonal Upgrades",
    description:
      "Get pristine, freshly sourced textiles delivered to your door.",
  },
  {
    step: 4,
    title: "Return Used Linens",
    description: "Send back used items for recycling in our prepaid return bags.",
  },
  {
    step: 5,
    title: "Receive Refreshed Replacements",
    description:
      "We clean, repair, or recycle — and you receive fresh stock.",
  },
] as const;

// Subscription benefits (from PDF "Why Subscribe?")
export const SUBSCRIPTION_BENEFITS = [
  {
    title: "Predictable Budgeting",
    description:
      "Fixed monthly costs replace unpredictable capital expenditure on textile replacement.",
  },
  {
    title: "No Emergency Shortages",
    description:
      "Consistent quality without the hassle of sourcing, laundering, or disposing of worn textiles.",
  },
  {
    title: "Sustainable Textile Lifecycle",
    description:
      "Every subscription cycle extends textile life and diverts waste from landfill.",
  },
  {
    title: "Always Fresh, Always Professional",
    description:
      "Scale up, scale down, pause, or cancel — your subscription adapts to your needs.",
  },
] as const;

// Sustainability metrics
export const SUSTAINABILITY_METRICS = [
  { value: "12,000+", label: "Textiles recycled annually" },
  { value: "85%", label: "Water reduction vs. conventional" },
  { value: "Zero", label: "Textiles sent to landfill" },
  { value: "100%", label: "Renewable energy in operations" },
] as const;

// Social media links (from PDF)
export const SOCIAL_LINKS = {
  pinterest: "https://www.pinterest.com/lush_nluxe/",
  tiktok:
    "https://www.tiktok.com/@lush.nluxe?_t=ZM-8y8TotCiZoG&_r=1",
  instagram: "https://www.instagram.com/lush.nluxe/",
  facebook:
    "https://www.facebook.com/profile.php?id=61578270008831",
  linkedin: "https://www.linkedin.com/company/lush-n-luxe/",
} as const;

// Footer link columns (updated from PDF)
export const FOOTER_LINKS = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Our Brands", href: "/#" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Bedroom", href: "/#" },
      { label: "Bathroom", href: "/#" },
      { label: "Kitchenware", href: "/#" },
      { label: "Decor", href: "/#" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "B2B Solutions", href: "/b2b" },
      { label: "Subscription", href: "/subscription" },
      { label: "Corporate Accounts", href: "/b2b" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping & Delivery", href: "/#" },
      { label: "Returns & Refund", href: "/#" },
      { label: "Privacy Policy", href: "/#" },
      { label: "Terms & Conditions", href: "/#" },
    ],
  },
] as const;
