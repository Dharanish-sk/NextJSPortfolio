export const DOMAIN_URL = "https://www.dharanish.com"

export const SITE_CONFIG = {
  title: "Dharanish - Web Developer Portfolio | React & Next.js",
  description: "Portfolio of Dharanish, Seattle-based full-stack engineer. Specializing in Next.js, React, TypeScript, and Tailwind CSS.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Dharanish",
  keywords: ["Dharanish"  , "Next.js", "React", "TypeScript", "Full-Stack Engineer", "Seattle"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
 } as const

export const SITE_NAP = {
  name: "Dharanish",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Dharanish",
  contactTitle: "CEO",
  email: "dharanishselvarajk@gmail.com",
  phone: "+12066596727",
  formattedPhone: "+1 (206) 659-6727",
   street: "12601 NE 124th ST",
  city: "Kirkland",
  state: "WA",
  zipCode: "98034",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
   profiles: {
   
    linkedIn: "https://www.linkedin.com/in/dharanish-s-8901722a3",
      github: "https://github.com/dharanish-sk",
    x: "https://x.com/Dharanish_S_",
  } as const,
  
  favicon: "/favicon.ico",
   
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-Dharanish",
 
} as const

export const externalLinks = {
    CodeVerse: "https://github.com/Dharanish-sk/codingPlatformFrontend",
    NeuroMind:"https://github.com/Dharanish-sk/AI-agent-",
    StreamSphere:"https://github.com/Dharanish-sk/Youtube-clone",
    DockiTask:"https://github.com/Dharanish-sk/BreezeNotes",
 } as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
 