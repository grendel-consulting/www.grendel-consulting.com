import { z } from "zod/mini";

const Business = z.readonly(
  z.object({
    LEGAL_NAME: z.string(),
    SHORT_NAME: z.string(),
    PURPOSE: z.string(),
    TAGLINE: z.string(),
    WEBSITE: z.url(),
    CONTACT: z.object({
      RECEPTION: z.email(),
      PRIVACY: z.email(),
      SECURITY: z.email(),
      BOOKINGS: z.url(),
    }),
    SOCIALS: z.object({
      LINKEDIN: z.url(),
      GITHUB: z.url(),
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
  }),
);

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
    STREET_ADDRESS: "1 Consort Way",
    LOCALITY: "Burgess Hill",
    POSTAL_CODE: "RH15 9TJ",
    COUNTRY_NAME: "United Kingdom",
    COUNTRY_CODE: "UK",
  },
  JURISDICTION: "England and Wales",
  REGISTRATION: "10125435",
  FOUNDING: "2016",
});

export type Business = z.infer<typeof Business>;
