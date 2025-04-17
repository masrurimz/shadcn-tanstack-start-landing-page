import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-medium"
      >
        {question}
        {isOpen ? (
          <ChevronUp className="text-muted-foreground h-5 w-5" />
        ) : (
          <ChevronDown className="text-muted-foreground h-5 w-5" />
        )}
      </button>
      {isOpen && (
        <div className="text-muted-foreground mt-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "How does the free trial work?",
      answer:
        "Our free trial gives you full access to all features for 14 days. No credit card required. At the end of the trial, you can choose the plan that fits your needs and continue using the platform.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect on your next billing cycle.",
    },
    {
      question: "What kind of support is included?",
      answer:
        "All plans include email support with varying response times based on your plan level. Enterprise plans include dedicated support with phone and video call options.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No, there are no setup fees for any of our plans. You only pay the advertised monthly or annual fee.",
    },
    {
      question: "Do you offer special pricing for non-profits?",
      answer:
        "Yes, we offer a 25% discount for registered non-profit organizations. Please contact our sales team for more information.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take security seriously. All data is encrypted at rest and in transit. We use industry-standard security measures and regularly undergo security audits.",
    },
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-24" id="faq">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Get answers to common questions about our platform
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
