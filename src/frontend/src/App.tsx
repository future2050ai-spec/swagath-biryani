import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  Flame,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShoppingBag,
  Star,
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ── Fade-in on scroll helper ──────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Gold divider ──────────────────────────────────────────────────────────────
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16 bg-gold" />
      <UtensilsCrossed className="w-4 h-4 text-gold" />
      <div className="h-px w-16 bg-gold" />
    </div>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({
  title,
  subtitle,
}: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon tracking-wide uppercase">
        {title}
      </h2>
      <GoldDivider />
      {subtitle && (
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Nav links data ────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Specialties", href: "#specialties" },
  { label: "Menu", href: "#menu" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

// ── Menu data ─────────────────────────────────────────────────────────────────
const menuData = {
  biryani: [
    {
      name: "Chicken Biryani",
      telugu: "చికెన్ బిర్యానీ",
      price: 180,
      tag: "Bestseller",
    },
    { name: "Mutton Biryani", telugu: "మటన్ బిర్యానీ", price: 220, tag: "Premium" },
    { name: "Veg Biryani", telugu: "వెజ్ బిర్యానీ", price: 140, tag: "" },
    {
      name: "Chicken Family Pack",
      telugu: "చికెన్ ఫ్యామిలీ ప్యాక్",
      price: 650,
      tag: "Family",
    },
    {
      name: "Mutton Family Pack",
      telugu: "మటన్ ఫ్యామిలీ ప్యాక్",
      price: 780,
      tag: "Family",
    },
  ],
  nonveg: [
    {
      name: "Chicken Manchurian",
      telugu: "చికెన్ మంచూరియన్",
      price: 200,
      tag: "Spicy",
    },
    { name: "Chicken Wings", telugu: "చికెన్ వింగ్స్", price: 220, tag: "" },
    { name: "Chilli Chicken", telugu: "చిల్లీ చికెన్", price: 200, tag: "Spicy" },
    { name: "Chicken 65", telugu: "చికెన్ 65", price: 190, tag: "Classic" },
    {
      name: "Boneless Chicken Fry",
      telugu: "బోన్‌లెస్ చికెన్ ఫ్రై",
      price: 210,
      tag: "",
    },
    { name: "Egg Curry", telugu: "గుడ్డు కర్రీ", price: 140, tag: "" },
  ],
  veg: [
    { name: "Veg Manchurian", telugu: "వెజ్ మంచూరియన్", price: 160, tag: "" },
    { name: "Chilli Paneer", telugu: "చిల్లీ పనీర్", price: 180, tag: "Popular" },
    { name: "Paneer Fry", telugu: "పనీర్ ఫ్రై", price: 170, tag: "" },
  ],
};

// ── Reviews data ──────────────────────────────────────────────────────────────
const reviews = [
  {
    name: "రాజేశ్వర రెడ్డి",
    nameEn: "Rajeshwara Reddy",
    rating: 5,
    text: "Best biryani in Hyderabad! The dum cooking makes all the difference. Mutton biryani is absolutely divine — juicy, aromatic, and perfect spice level.",
    date: "March 2026",
  },
  {
    name: "ప్రియంక శర్మ",
    nameEn: "Priyanka Sharma",
    rating: 5,
    text: "Ordered a family pack for my daughter's birthday party. Everyone loved it! The quantity was generous and the taste was authentic Hyderabadi style.",
    date: "February 2026",
  },
  {
    name: "వెంకటేశ్ నాయుడు",
    nameEn: "Venkatesh Naidu",
    rating: 5,
    text: "Chicken 65 and biryani combo is unbeatable. The starters are crispy and perfectly spiced. Very affordable pricing for such quality food!",
    date: "March 2026",
  },
  {
    name: "లక్ష్మి దేవి",
    nameEn: "Lakshmi Devi",
    rating: 4,
    text: "The Chilli Paneer starter was amazing — fresh and flavorful. Veg biryani is excellent too. Great option for vegetarians who want authentic taste.",
    date: "January 2026",
  },
  {
    name: "సురేష్ కుమార్",
    nameEn: "Suresh Kumar",
    rating: 5,
    text: "We catered our office lunch from Swagath. 50+ people and everyone was satisfied! The service was prompt and food was piping hot on arrival.",
    date: "February 2026",
  },
  {
    name: "అనీల కృష్ణ",
    nameEn: "Anil Krishna",
    rating: 5,
    text: "The Chicken Manchurian here is the best I've had outside my mother's kitchen. Swagath Biryani is now our family's weekly ritual — every Sunday!",
    date: "March 2026",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => i).map((starIdx) => (
        <Star
          key={starIdx}
          className={`w-4 h-4 ${
            starIdx < count ? "text-gold fill-gold" : "text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── Utility bar ─────────────────────────────────────────────────── */}
      <div
        className="hidden md:block w-full py-1.5 px-6 text-xs"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.22 0.09 20), oklch(0.28 0.10 20))",
        }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center text-white/80">
          <span className="italic">
            అసలైన హైదరాబాదీ దమ్ బిర్యానీ — Authentic Hyderabadi Dum Biryani
          </span>
          <span className="flex items-center gap-1.5 font-medium text-gold">
            <Phone className="w-3 h-3" />
            +91 9177865323
          </span>
        </div>
      </div>

      {/* ── Header / Nav ─────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{
          background:
            "linear-gradient(90deg, oklch(0.22 0.09 20), oklch(0.34 0.11 20), oklch(0.28 0.10 20))",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-3 group"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gold/40"
              style={{ background: "oklch(0.34 0.11 20)" }}
            >
              <Flame className="w-5 h-5 text-gold" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg font-bold text-white tracking-widest uppercase">
                Swagath
              </div>
              <div className="text-gold text-xs tracking-widest uppercase font-medium">
                Biryani
              </div>
              <div
                className="text-gold/70 text-[10px] font-normal tracking-wide"
                style={{ fontFamily: "sans-serif" }}
              >
                బిర్యాని
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid={`nav.${link.label.toLowerCase().replace(" ", "-")}.link`}
                onClick={() => scrollTo(link.href)}
                className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            type="button"
            data-ocid="nav.order_now.button"
            onClick={() => scrollTo("#contact")}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.71 0.10 68), oklch(0.78 0.09 70))",
              color: "oklch(0.22 0.09 20)",
            }}
          >
            ORDER NOW
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            data-ocid="nav.menu.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
              style={{ background: "oklch(0.22 0.09 20)" }}
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-white/80 hover:text-gold text-left text-sm font-medium tracking-wide"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold w-full"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.71 0.10 68), oklch(0.78 0.09 70))",
                    color: "oklch(0.22 0.09 20)",
                  }}
                >
                  ORDER NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          id="home"
          className="relative min-h-[92vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: `url('assets/generated/biryani-hero.dim_1200x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(34,9,7,0.88) 0%, rgba(34,9,7,0.65) 55%, rgba(34,9,7,0.2) 100%)",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-xl"
            >
              <span
                className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full border border-gold/50"
                style={{
                  color: "oklch(0.71 0.10 68)",
                  background: "rgba(201,163,106,0.12)",
                }}
              >
                🔥 స్వాగతం — Welcome to Swagath Biryani
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-wide uppercase">
                Swagath
                <br />
                <span style={{ color: "oklch(0.78 0.09 70)" }}>Biryani</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl font-light text-white/80 italic font-serif">
                Authentic Hyderabadi Taste, Served with Warmth
              </p>
              <p
                className="mt-1 text-base text-gold/80 italic"
                style={{ fontFamily: "sans-serif" }}
              >
                ప్రేమతో వండిన అసలైన రుచి
              </p>
              <p className="mt-5 text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                We bring you the true essence of Hyderabadi Dum Biryani—rich in
                aroma, perfectly spiced, and cooked with passion. Whether you're
                dining in with family or grabbing a quick takeaway, every meal
                is crafted to satisfy your cravings.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  data-ocid="hero.order_now.primary_button"
                  onClick={() => scrollTo("#contact")}
                  className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-gold shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.71 0.10 68), oklch(0.78 0.09 70))",
                    color: "oklch(0.22 0.09 20)",
                  }}
                >
                  Order Now
                </button>
                <button
                  type="button"
                  data-ocid="hero.menu.secondary_button"
                  onClick={() => scrollTo("#menu")}
                  className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide border border-white/40 text-white/90 hover:border-gold/60 hover:text-gold transition-all duration-200"
                >
                  View Menu
                </button>
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
        </section>

        {/* ── Specialties ────────────────────────────────────────────────── */}
        <section
          id="specialties"
          className="py-20 px-4"
          style={{ background: "oklch(0.93 0.03 75)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <SectionHeading
                title="Our Specialties"
                subtitle="ప్రతి వంటకం ప్రత్యేకమైనది — Every dish is prepared with authentic recipes, premium ingredients, and the love of true Hyderabadi cuisine."
              />
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Biryani card */}
              <FadeIn delay={0.1}>
                <div
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full"
                  style={{ background: "oklch(0.97 0.02 72)" }}
                  data-ocid="specialties.item.1"
                >
                  <div
                    className="h-3"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.28 0.10 20), oklch(0.34 0.11 20))",
                    }}
                  />
                  <div className="p-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "oklch(0.93 0.03 75)" }}
                    >
                      <span className="text-2xl">🥇</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-maroon mb-3 tracking-wide">
                      Hyderabadi Dum Biryani
                    </h3>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      {[
                        "Traditional dum cooking method",
                        "Premium basmati rice & fresh spices",
                        "Juicy, tender meat with rich flavor",
                        "Available in Chicken, Mutton & Family Packs",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Non-veg starters */}
              <FadeIn delay={0.2}>
                <div
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full"
                  style={{ background: "oklch(0.97 0.02 72)" }}
                  data-ocid="specialties.item.2"
                >
                  <div
                    className="h-3"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.71 0.10 68), oklch(0.78 0.09 70))",
                    }}
                  />
                  <div className="p-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "oklch(0.93 0.03 75)" }}
                    >
                      <span className="text-2xl">🍗</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-maroon mb-3 tracking-wide">
                      Non-Veg Starters
                    </h3>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      {[
                        "Chicken Manchurian – Spicy & flavorful",
                        "Special Chicken Wings – Crispy & juicy",
                        "Chilli Chicken – Perfect spicy starter",
                        "Chicken 65 – Classic Hyderabadi favorite",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Veg starters */}
              <FadeIn delay={0.3}>
                <div
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full"
                  style={{ background: "oklch(0.97 0.02 72)" }}
                  data-ocid="specialties.item.3"
                >
                  <div
                    className="h-3"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.22 0.09 20), oklch(0.28 0.10 20))",
                    }}
                  />
                  <div className="p-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "oklch(0.93 0.03 75)" }}
                    >
                      <span className="text-2xl">🥦</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-maroon mb-3 tracking-wide">
                      Veg Starters
                    </h3>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      {[
                        "Veg Manchurian – Crispy and tangy delight",
                        "Chilli Paneer – Fresh & flavorful",
                        "More vegetarian options available",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Menu ───────────────────────────────────────────────────────── */}
        <section
          id="menu"
          className="py-20 px-4"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.28 0.10 20) 0%, oklch(0.22 0.09 20) 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
                  Our Menu
                </h2>
                <p
                  className="text-gold text-lg mt-1 italic"
                  style={{ fontFamily: "sans-serif" }}
                >
                  మెనూ
                </p>
                <div className="flex items-center justify-center gap-3 my-4">
                  <div className="h-px w-16 bg-gold" />
                  <UtensilsCrossed className="w-4 h-4 text-gold" />
                  <div className="h-px w-16 bg-gold" />
                </div>
                <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
                  రుచికరమైన వంటకాలు — Delicious dishes crafted with love and
                  authenticity.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Tabs defaultValue="biryani" data-ocid="menu.tab">
                <TabsList
                  className="w-full mb-8 rounded-full p-1 h-auto"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <TabsTrigger
                    value="biryani"
                    data-ocid="menu.biryani.tab"
                    className="flex-1 rounded-full text-sm font-semibold tracking-wide py-2.5 data-[state=active]:text-maroon transition-all"
                    style={
                      {
                        // active state handled via data-[state=active] in tailwind
                      }
                    }
                  >
                    🍚 Biryani
                  </TabsTrigger>
                  <TabsTrigger
                    value="nonveg"
                    data-ocid="menu.nonveg.tab"
                    className="flex-1 rounded-full text-sm font-semibold tracking-wide py-2.5 data-[state=active]:text-maroon transition-all"
                  >
                    🍗 Non-Veg Starters
                  </TabsTrigger>
                  <TabsTrigger
                    value="veg"
                    data-ocid="menu.veg.tab"
                    className="flex-1 rounded-full text-sm font-semibold tracking-wide py-2.5 data-[state=active]:text-maroon transition-all"
                  >
                    🥦 Veg Starters
                  </TabsTrigger>
                </TabsList>

                {(
                  Object.entries(menuData) as [
                    keyof typeof menuData,
                    typeof menuData.biryani,
                  ][]
                ).map(([category, items]) => (
                  <TabsContent key={category} value={category}>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="grid sm:grid-cols-2 gap-3"
                    >
                      {items.map((item, i) => (
                        <div
                          key={item.name}
                          data-ocid={`menu.item.${i + 1}`}
                          className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/10 hover:border-gold/30 transition-all duration-200 group"
                          style={{ background: "rgba(255,255,255,0.05)" }}
                        >
                          <div className="flex-1 min-w-0 pr-3">
                            <div className="font-semibold text-white text-sm group-hover:text-gold transition-colors">
                              {item.name}
                            </div>
                            <div
                              className="text-gold/60 text-xs mt-0.5"
                              style={{ fontFamily: "sans-serif" }}
                            >
                              {item.telugu}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {item.tag && (
                              <span
                                className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
                                style={{
                                  background: "rgba(201,163,106,0.18)",
                                  color: "oklch(0.78 0.09 70)",
                                }}
                              >
                                {item.tag}
                              </span>
                            )}
                            <span
                              className="font-bold text-base"
                              style={{ color: "oklch(0.78 0.09 70)" }}
                            >
                              ₹{item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 text-center">
                <p className="text-white/50 text-xs">
                  * Prices may vary slightly. Call us for bulk order pricing.
                </p>
                <button
                  type="button"
                  data-ocid="menu.order_now.primary_button"
                  onClick={() => scrollTo("#contact")}
                  className="mt-5 inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.71 0.10 68), oklch(0.78 0.09 70))",
                    color: "oklch(0.22 0.09 20)",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Order via Phone
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Services ───────────────────────────────────────────────────── */}
        <section
          id="services"
          className="py-20 px-4"
          style={{ background: "oklch(0.93 0.03 75)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <SectionHeading
                title="Our Services"
                subtitle="We serve you in every way — dine in, carry out, or let us cater your celebrations."
              />
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="w-7 h-7 text-gold" />,
                  title: "Dine-In Experience",
                  emoji: "🍽️",
                  items: [
                    "👨‍👩‍👧‍👦 Family dinners",
                    "🎉 Friends outings",
                    "🥂 Casual hangouts",
                    "Cozy & welcoming space",
                  ],
                  id: "services.item.1",
                },
                {
                  icon: <ShoppingBag className="w-7 h-7 text-gold" />,
                  title: "Takeaway & Quick Service",
                  emoji: "🥡",
                  items: [
                    "Hot, fresh biryani ready",
                    "Fast & convenient",
                    "No compromise on taste",
                    "Perfect for busy days",
                  ],
                  id: "services.item.2",
                },
                {
                  icon: <CalendarCheck className="w-7 h-7 text-gold" />,
                  title: "Bulk Orders & Catering",
                  emoji: "🎊",
                  items: [
                    "🎂 Birthdays & parties",
                    "🏢 Office events",
                    "Custom menu options",
                    "Large quantity orders",
                  ],
                  id: "services.item.3",
                },
              ].map((service, i) => (
                <FadeIn key={service.id} delay={i * 0.15}>
                  <div
                    className="rounded-2xl p-7 h-full border border-maroon/10 hover:border-gold/30 transition-all duration-300 group shadow-sm"
                    style={{ background: "oklch(0.97 0.02 72)" }}
                    data-ocid={service.id}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {service.icon}
                      <h3 className="font-serif text-lg font-bold text-maroon tracking-wide">
                        {service.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-foreground/70 text-sm flex items-start gap-2"
                        >
                          <span className="mt-0.5 shrink-0 text-gold">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ──────────────────────────────────────────────── */}
        <section
          id="why-us"
          className="py-20 px-4"
          style={{ background: "oklch(0.88 0.04 72)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <SectionHeading
                title="Why Choose Us"
                subtitle="We take pride in every plate we serve. Here's what makes us special."
              />
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                {
                  icon: "🏆",
                  title: "Authentic Hyderabadi Flavors",
                  desc: "True dum cooking with traditional spices and recipes",
                },
                {
                  icon: "✨",
                  title: "Fresh & Hygienic Preparation",
                  desc: "Daily fresh ingredients, clean kitchen, quality assured",
                },
                {
                  icon: "💰",
                  title: "Affordable Pricing",
                  desc: "Premium taste without burning a hole in your pocket",
                },
                {
                  icon: "👥",
                  title: "Perfect for Groups & Events",
                  desc: "Ideal for gatherings large and small",
                },
                {
                  icon: "⚡",
                  title: "Fast Service",
                  desc: "Quick dine-in service & speedy takeaway",
                },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div
                    className="rounded-xl p-5 text-center hover:shadow-md transition-shadow duration-300"
                    style={{ background: "oklch(0.97 0.02 72)" }}
                    data-ocid={`why-us.item.${i + 1}`}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-serif font-bold text-maroon text-sm mb-2 tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        <section
          id="reviews"
          className="py-20 px-4"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.09 20) 0%, oklch(0.28 0.10 20) 60%, oklch(0.22 0.09 20) 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
                  Customer Reviews
                </h2>
                <p
                  className="text-gold text-base mt-1 italic"
                  style={{ fontFamily: "sans-serif" }}
                >
                  మా కస్టమర్ల అభిప్రాయాలు
                </p>
                <div className="flex items-center justify-center gap-3 my-4">
                  <div className="h-px w-16 bg-gold" />
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <div className="h-px w-16 bg-gold" />
                </div>
                <p className="text-white/60 max-w-xl mx-auto text-sm">
                  Hear what our happy customers say about their experience at
                  Swagath Biryani.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <FadeIn key={review.nameEn} delay={i * 0.1}>
                  <div
                    data-ocid={`reviews.item.${i + 1}`}
                    className="rounded-2xl p-6 h-full border border-white/10 hover:border-gold/30 transition-all duration-300 flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {/* Quote icon */}
                    <Quote className="w-6 h-6 text-gold/40 shrink-0" />

                    {/* Review text */}
                    <p className="text-white/75 text-sm leading-relaxed flex-1 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div>
                        <div
                          className="font-bold text-white text-sm"
                          style={{ fontFamily: "sans-serif" }}
                        >
                          {review.name}
                        </div>
                        <div className="text-white/40 text-xs mt-0.5">
                          {review.nameEn} · {review.date}
                        </div>
                      </div>
                      <StarRow count={review.rating} />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Aggregate rating strip */}
            <FadeIn delay={0.5}>
              <div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 py-6 px-8 rounded-2xl border border-white/10"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold text-gold">
                    4.9
                  </div>
                  <div className="flex justify-center mt-1">
                    <StarRow count={5} />
                  </div>
                  <div className="text-white/50 text-xs mt-1">
                    Average Rating
                  </div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/10" />
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold text-gold">
                    500+
                  </div>
                  <div className="text-white/50 text-xs mt-1">
                    Happy Customers
                  </div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/10" />
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold text-gold">
                    100%
                  </div>
                  <div className="text-white/50 text-xs mt-1">Recommend Us</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-24 px-4"
          style={{ background: "oklch(0.93 0.03 75)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="mb-8">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-maroon tracking-wide uppercase">
                  Contact & Orders
                </h2>
                <GoldDivider />
                <p className="text-foreground/70 text-base">
                  Craving something delicious? Call now!
                </p>
                <p
                  className="mt-1 text-gold text-sm italic"
                  style={{ fontFamily: "sans-serif" }}
                >
                  రుచికరమైన బిర్యానీ కోసం ఇప్పుడే కాల్ చేయండి!
                </p>
              </div>

              <a
                href="tel:+919177865323"
                data-ocid="contact.phone.button"
                className="inline-flex items-center gap-3 px-8 py-5 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.28 0.10 20), oklch(0.34 0.11 20))",
                  color: "oklch(0.78 0.09 70)",
                }}
              >
                <Phone className="w-6 h-6" />
                +91 9177865323
              </a>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {[
                  { icon: <Users className="w-4 h-4" />, label: "Dine-In" },
                  {
                    icon: <ShoppingBag className="w-4 h-4" />,
                    label: "Takeaway",
                  },
                  {
                    icon: <CalendarCheck className="w-4 h-4" />,
                    label: "Bulk Orders",
                  },
                ].map((tag) => (
                  <div
                    key={tag.label}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-maroon/20 text-foreground/70 text-sm font-medium"
                    style={{ background: "oklch(0.97 0.02 72)" }}
                  >
                    <span className="text-gold">{tag.icon}</span>
                    {tag.label} Available
                  </div>
                ))}
              </div>

              <p
                className="mt-6 text-maroon/60 text-sm italic"
                style={{ fontFamily: "sans-serif" }}
              >
                అతిథి దేవో భవ — Our guest is our God
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6 text-foreground/50 text-sm">
                <span className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" /> Guduru, Telangana
                </span>
                <span className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" /> Duggondi, Telangana
                </span>
                <span className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gold" /> Open Daily — Lunch &
                  Dinner
                </span>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer
        className="py-6 px-4 text-center text-xs text-white/40"
        style={{ background: "oklch(0.18 0.08 20)" }}
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span style={{ fontFamily: "sans-serif" }}>స్వాగత్ బిర్యానీ</span> Swagath
          Biryani. All rights reserved. &nbsp;|&nbsp; Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/70 hover:text-gold transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>

      {/* ── WhatsApp Bubble ─────────────────────────────────────────────── */}
      <a
        href="https://wa.me/919177865323"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
        style={{
          background: "oklch(0.67 0.23 150)", // Green WhatsApp color
          filter: "drop-shadow(0 0 8px rgba(37, 211, 102, 0.3))",
        }}
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
        
        {/* Tooltip-like label */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-white text-maroon text-sm font-semibold whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none shadow-md">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
