import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const FAQ = () => {
  // State to keep track of the expanded item
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to handle the toggle of an item
  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  // FAQ data
  const faqItems = [
    {
      question: "How do I start planning for medical treatment in India?",
      answer: "To start planning for medical treatment in India, you should first research and choose a reputed hospital or clinic. Contact us for assistance in choosing the right facility based on your needs and budget. We'll help with arranging consultations, travel, and accommodation.",
    },
    {
      question: "What types of medical treatments are available in India?",
      answer: "India offers a wide range of medical treatments, including but not limited to cardiac surgery, orthopedic procedures, cosmetic surgery, fertility treatments, and oncology. Our partner hospitals are equipped with state-of-the-art facilities and experienced doctors across various specialties.",
    },
    {
      question: "How can I ensure the quality and safety of medical care in India?",
      answer: "We work with accredited hospitals and experienced doctors who adhere to international standards of care. We also provide information on hospital ratings, patient reviews, and accreditations to ensure you receive safe and high-quality medical care.",
    },
    {
      question: "What is the cost of medical treatment in India compared to other countries?",
      answer: "Medical treatment in India is generally much more affordable compared to Western countries. Costs can vary based on the type of treatment, hospital, and city. We provide detailed cost estimates and options to suit your budget while ensuring high-quality care.",
    },
    {
      question: "What are the visa requirements for medical tourists visiting India?",
      answer: "Medical tourists typically need a medical visa to enter India for treatment. We can assist with the visa application process and provide guidance on the required documents. It's important to apply for the visa well in advance to avoid any delays.",
    },
    {
      question: "Can you help with travel and accommodation arrangements?",
      answer: "Yes, we offer comprehensive support with travel and accommodation arrangements. We can assist with booking flights, arranging airport transfers, and finding suitable accommodation near the hospital or clinic of your choice.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Get answers to common questions about medical tourism and affordable healthcare in India.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                onClick={() => toggleItem(index)}
              >
                <span className="flex text-lg font-semibold text-black">{item.question}</span>
                {expandedIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-base mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="/contact" title="" className="font-semibold text-black hover:underline">
            Contact our support team
          </a>
        </p>
      </div>
    </section>
  )
}

export default FAQ
