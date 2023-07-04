import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../molecules/seo";
import * as styles from "../styles/site.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Grendel Consulting</h1>
      <p className={styles.paragraph}>
        We are a boutique consultancy providing interim, advisory services in{" "}
        the areas of innovation, product and technology management and{" "}
        development, digital platforms, and cyber security.
      </p>
      <p className={styles.paragraph}>
        We work with experienced founders and managers as well as those just{" "}
        starting out in leadership roles, bringing a range of experience in top{" "}
        tier enterprises and early stage statups.
      </p>
      <p className={styles.paragraph}>
        We operate as a force multiplier, whether that be through: providing a{" "}
        capability where you have a gap; delivery of coaching, mentoring or{" "}
        workshops to enhance your existing team; or supporting them to deliver a{" "}
        step-change to your business.
      </p>
      <footer className={styles.footer}>
        <p>
          Grendel Consulting Limited, a company registered in England and Wales,
          with company number 10125435. Registered office: 25 Victoria Gardens,
          Burgess Hill, RH15 9NB.
        </p>
        <p>
          &copy; 2016-{new Date().getFullYear()} Grendel Consulting Limited. All{" "}
          rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO/>;
