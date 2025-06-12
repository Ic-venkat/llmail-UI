"use client";

import { About3 } from "@/components/ui/about-3";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DemoOne() {
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/white_melone.ai.svg");

  useEffect(() => {
    if (theme === "dark") {
      setLogoSrc("/white_melone.ai.svg");
    } else {
      setLogoSrc("/black_melone.ai.svg");
    }
  }, [theme]);

  return (
    <About3
      title="About Us"
      description="melone.ai is dedicated to empowering job seekers by providing a smart job tracking platform that simplifies application management and unlocks powerful insights."
      mainImage={{
        src: logoSrc,
        alt: "melone.ai logo",
      }}
      secondaryImage={{
        src: theme === "dark" ? "/job-search-svgrepo-com-black.svg" : "/job-search-svgrepo-com-white.svg",
        alt: "Melone.ai platform preview",
      }}
      breakout={{
        src: theme === "dark" ? "/growth-svgrepo-com white.svg" : "/growth-svgrepo-com white.svg",
        alt: "melone.ai insights",
        title: "Built for Every Job Seeker",
        description:
          "melone.ai transforms how individuals track job applications, interviews, and outcomes — giving clarity, saving time, and driving smarter career decisions.",
        buttonText: "Explore Features",
        buttonUrl: "/features",
      }}
      companiesTitle="Used by applicants across industries"
      companies={[
        {
          src: theme === "dark" ? "https://www.svgrepo.com/show/123456/spotify-dark.svg" : "https://www.svgrepo.com/show/123456/spotify-light.svg",
          alt: "Spotify",
        },
        {
          src: theme === "dark" ? "https://www.svgrepo.com/show/123456/klarna-dark.svg" : "https://www.svgrepo.com/show/123456/klarna-light.svg",
          alt: "Klarna",
        },
        {
          src: theme === "dark" ? "https://www.svgrepo.com/show/123456/ericsson-dark.svg" : "https://www.svgrepo.com/show/123456/ericsson-light.svg",
          alt: "Ericsson",
        },
        {
          src: theme === "dark" ? "https://www.svgrepo.com/show/123456/h&m-dark.svg" : "https://www.svgrepo.com/show/123456/h&m-light.svg",
          alt: "H&M",
        },
        {
          src: theme === "dark" ? "https://www.svgrepo.com/show/123456/ikea-dark.svg" : "https://www.svgrepo.com/show/123456/ikea-light.svg",
          alt: "IKEA",
        },
        {
          src: theme === "dark" ? "https://www.svgrepo.com/show/123456/volvo-dark.svg" : "https://www.svgrepo.com/show/123456/volvo-light.svg",
          alt: "Volvo",
        },
      ]}
      achievementsTitle="melone.ai in Numbers"
      achievementsDescription="We're committed to helping people land their dream jobs with data-driven tools and clear career tracking."
      achievements={[
        { label: "Applications Tracked", value: "100K+" },
        { label: "Users Onboarded", value: "5,000+" },
        { label: "Resume Uploads", value: "20K+" },
        { label: "Success Stories", value: "1,200+" },
      ]}
    />
  );
}
