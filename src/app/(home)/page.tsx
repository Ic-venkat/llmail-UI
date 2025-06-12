import { HeroSection } from "@/components/blocks/hero-section-dark"
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"


const testimonials = [
  {
    author: {
      name: "Ayesha Patel",
      handle: "@ayeshacodes",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Melone.ai made it so easy to stay on top of my job search. I finally feel organized and in control.",
    href: "https://twitter.com/ayeshacodes"
  },
  {
    author: {
      name: "Liam Johansson",
      handle: "@liamjobhunt",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "From tracking interviews to logging rejections, Melone.ai is a game changer for serious job seekers.",
    href: "https://twitter.com/liamjobhunt"
  },
  {
    author: {
      name: "Chen Wei",
      handle: "@chencareer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    text: "Before Melone.ai, I was using spreadsheets. Now I can visualize my entire job hunt in one beautiful dashboard."
  }
]


export default function Home() {
  return (
    <div>
      <HeroSection
      title="Welcome to Melone.ai"
      subtitle={{
        regular: "Track every step of your job hunt with ",
        gradient: "clarity and confidence",
      }}
      description="Melone.ai helps you monitor your job applications, interviews, rejections, assessments, and more — all in one place."
      ctaText="Start Tracking"
      ctaHref="/signin"
      bottomImage={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
    <TestimonialsSection
      title="Loved by job seekers around the world"
      description="Join thousands of developers who are already building the future with our AI platform"
      testimonials={testimonials}
    />
    </div>
  );
}
