import { FeatureSteps } from "@/components/blocks/feature-section"
import { BentoGrid, type BentoItems } from "@/components/ui/bento-grid"
import {
    LayoutDashboard,
    CalendarCheck2,
    Ban,
    Briefcase,
} from "lucide-react";



const itemsBento: BentoItem[] = [
    {
        title: "Application Dashboard",
        meta: "v1.0.0",
        description:
          "Track all your job applications with real-time updates, visual summaries, and AI-powered insights.",
        icon: <LayoutDashboard className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Applications", "Insights", "Dashboard"],
        colSpan: 2,
        hasPersistentHover: true,
      },
      {
        title: "Interview Tracker",
        meta: "5 interviews scheduled",
        description: "Stay on top of upcoming interviews, follow-ups, and outcomes with automated reminders.",
        icon: <CalendarCheck2 className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Reminders", "Automation"],
      },
      {
        title: "Rejection Insights",
        meta: "12 logged",
        description: "Understand where and why applications failed to refine your approach and improve success rates.",
        icon: <Ban className="w-4 h-4 text-purple-500" />,
        tags: ["Feedback", "Strategy", "Reports"],
        colSpan: 2,
      },
      {
        title: "Company Tracker",
        meta: "23 companies applied",
        description: "Visualize which companies you've applied to and identify patterns or focus areas.",
        icon: <Briefcase className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Visualization", "Network", "Focus"],
      },
];

const features = [
    { 
        step: 'Step 1', 
        title: 'Add Your Applications',
        content: 'Log every job you’ve applied to, including company name, role, date, and status updates.', 
        image: '/images/application-tracking.avif'
      },
      { 
        step: 'Step 2',
        title: 'Track Your Progress',
        content: 'Monitor interviews, rejections, tests, and follow-ups all in one streamlined dashboard.',
        image: '/images/progress-tracking.avif'
      },
      { 
        step: 'Step 3',
        title: 'Get Insights & Stay Ahead',
        content: 'Visualize your job search with powerful insights to optimize your strategy and stay motivated.',
        image: '/images/job-insights.avif'
      },
]

export default function FeatureStepsDemo() {
  return (
    <div className="w-full h-full py-24 space-y-16">
    <FeatureSteps 
      features={features}
      title="Take Control of Your Job Search"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
    <BentoGrid items={itemsBento} />
  </div>
  )
}