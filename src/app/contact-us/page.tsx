import { Contact2 } from "@/components/ui/contact-2";
import { Faq3 } from "@/components/blocks/faq3"



const demoData = {
    heading: "Frequently Asked Questions",
    description:
      "Everything you need to know about using Melone.ai. Can't find the answer you're looking for? Feel free to contact our support team.",
    items: [
      {
        id: "faq-1",
        question: "What is Melone.ai?",
        answer:
          "Melone.ai is a smart job application tracking system that helps you monitor your applications, interviews, rejections, and more — all in one place.",
      },
      {
        id: "faq-2",
        question: "How do I start using Melone.ai?",
        answer:
          "Simply sign up, add the jobs you've applied to, and start tracking your progress. You can log interviews, tests, rejections, and even see trends over time.",
      },
      {
        id: "faq-3",
        question: "Is Melone.ai free to use?",
        answer:
          "Yes, Melone.ai is free to use with all the core tracking features. We may offer premium features in the future for power users.",
      },
      {
        id: "faq-4",
        question: "Can I export my job application data?",
        answer:
          "Absolutely! You can export your data to CSV or PDF formats so you always have access to your records and insights.",
      },
      {
        id: "faq-5",
        question: "Does Melone.ai offer job recommendations?",
        answer:
          "Currently, we focus on tracking and analytics. Job recommendations are on our roadmap and will be available in upcoming updates.",
      },
    ],
    supportHeading: "Still have questions?",
    supportDescription:
      "Can't find the answer you're looking for? Our support team is here to help you with anything related to your job tracking journey.",
    supportButtonText: "Contact Support",
    supportButtonUrl: "/contact-us",
  };
  


export default function DemoOne () {
    return (
    <div className="max-w-5xl mx-auto overflow-y-auto rounded-lg">
      <Contact2 
        title="Contact Us"
        description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
        phone="(123) 34567890"
        email="info@meloneai.com"
        web={{ label: "melone.ai", url: "https://melone.ai" }}
      />
      <Faq3 {...demoData} />
    </div>
    );
  };
  

  