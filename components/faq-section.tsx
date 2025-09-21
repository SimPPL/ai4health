"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the mission of your organization?",
    answer:
      "Our mission is to rebuild trust in medical health through transparent research, community engagement, and evidence-based healthcare solutions. We work to bridge the gap between medical research and public understanding.",
  },
  {
    question: "How do you ensure research transparency?",
    answer:
      "We maintain complete transparency by publishing all research methodologies, sharing data openly where possible, and involving community members in the research process. All studies undergo rigorous peer review and ethical oversight.",
  },
  {
    question: "Can I participate in your research studies?",
    answer:
      "Yes! We welcome community participation in our research. Each project has specific eligibility criteria, and we ensure all participants are fully informed about the study process and their rights as research participants.",
  },
  {
    question: "How do you measure the impact of your work?",
    answer:
      "We track multiple metrics including health outcomes, community engagement levels, policy changes influenced by our research, and feedback from healthcare professionals and community members who benefit from our work.",
  },
  {
    question: "How can healthcare professionals get involved?",
    answer:
      "Healthcare professionals can collaborate with us through research partnerships, advisory roles, or by implementing our evidence-based recommendations in their practice. We offer various levels of engagement to match different schedules and interests.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 text-pretty">
            Learn more about our mission and how we work to improve healthcare
            outcomes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-pretty">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-pretty">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
