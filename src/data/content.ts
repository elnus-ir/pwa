export type Service = {
  id: string;
  title: string;
  href: string;
  icon: "car" | "plate" | "card" | "iban" | "check" | "passport" | "id" | "sana" | "post" | "edu" | "postal" | "bounced";
};

export const popularServices: Service[] = [
  { id: "car-fine", title: "خلافی خودرو", href: "/services#car-fine", icon: "car" },
  { id: "plate", title: "استعلام پلاک", href: "/services#plate", icon: "plate" },
  { id: "bank-card", title: "استعلام کارت بانکی", href: "/services#bank-card", icon: "card" },
  { id: "iban", title: "استعلام شماره شبا", href: "/services#iban", icon: "iban" },
  { id: "sayad", title: "استعلام چک صیادی", href: "/services#sayad", icon: "check" },
  { id: "passport", title: "وضعیت گذرنامه", href: "/services#passport", icon: "passport" },
  { id: "identity", title: "استعلام هویت ثبت احوال", href: "/services#identity", icon: "id" },
  { id: "sana", title: "استعلام ثنا", href: "/services#sana", icon: "sana" },
  { id: "post", title: "رهگیری مرسوله پستی", href: "/services#post", icon: "post" },
  { id: "edu", title: "استعلام وضعیت معافیت تحصیلی", href: "/services#edu", icon: "edu" },
  { id: "postal-code", title: "استعلام کد پستی", href: "/services#postal-code", icon: "postal" },
  { id: "bounced", title: "استعلام چک برگشتی", href: "/services#bounced", icon: "bounced" },
];

export const heroSlides = [
  "نسل جدید خدمات دیجیتال",
  "تجربه جدید دریافت خدمات دیجیتال",
  "بدون مراجعه، بدون انتظار، کمترین هزینه",
  "ساده‌ترین راه دسترسی به خدمات دیجیتال",
];
