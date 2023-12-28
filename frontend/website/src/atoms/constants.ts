import { z } from "zod";

const Business = z
  .object({
    LEGAL_NAME: z.string(),
    SHORT_NAME: z.string(),
    PURPOSE: z.string(),
    TAGLINE: z.string(),
    WEBSITE: z.string().url(),
    CONTACT: z.object({
      RECEPTION: z.string().email(),
      PRIVACY: z.string().email(),
      SECURITY: z.string().email(),
      BOOKINGS: z.string().url(),
    }),
    SOCIALS: z.object({
      LINKEDIN: z.string().url(),
      GITHUB: z.string().url(),
    }),
    OFFICE: z.object({
      STREET_ADDRESS: z.string(),
      LOCALITY: z.string(),
      POSTAL_CODE: z.string(),
      COUNTRY_NAME: z.string(),
      COUNTRY_CODE: z.string(),
    }),
    JURISDICTION: z.string(),
    REGISTRATION: z.string(),
    FOUNDING: z.string(),
  })
  .readonly();

export const BUSINESS = Business.parse({
  LEGAL_NAME: "Grendel Consulting Limited",
  SHORT_NAME: "Grendel Consulting",
  PURPOSE:
    "We are a boutique consultancy providing fractional CTO and CISO services to startups and small businesses.",
  TAGLINE: "Building and repairing teams and processes",
  WEBSITE: "https://www.grendel-consulting.com",
  CONTACT: {
    RECEPTION: "hello@grendel-consulting.com",
    PRIVACY: "privacy@grendel-consulting.com",
    SECURITY: "security@grendel-consulting.com",
    BOOKINGS: "https://calendly.com/ramirezj/30min",
  },
  SOCIALS: {
    LINKEDIN: "https://www.linkedin.com/company/grendel-consulting/",
    GITHUB: "https://github.com/grendel-consulting/",
  },
  OFFICE: {
    STREET_ADDRESS: "25 Victoria Gardens",
    LOCALITY: "Burgess Hill",
    POSTAL_CODE: "RH15 9NB",
    COUNTRY_NAME: "United Kingdom",
    COUNTRY_CODE: "UK",
  },
  JURISDICTION: "England and Wales",
  REGISTRATION: "10125435",
  FOUNDING: "2016",
});

export type Business = z.infer<typeof Business>;

const Principal = z
  .object({
    FULL_NAME: z.string(),
  })
  .readonly();

export const PRINCIPAL = Principal.parse({
  FULL_NAME: "James Ramirez",
});

export type Principal = z.infer<typeof Principal>;
