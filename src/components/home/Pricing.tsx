import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Free",
    description: "Basic features for individuals getting started",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      "300 minutes/month",
      "30 minutes per meeting",
      "Up to 3 audio/video files (lifetime)",
      "Real-time transcription, AI meeting summaries, speaker identification, integrations with Zoom, Google Meet, MS Teams, standard email support",
      "Standard email support (normal response times)",
    ],
    cta: "Start for free",
    highlight: false,
  },
  {
    name: "Pro",
    description: "Perfect for individuals and small teams",
    price: {
      monthly: 9.99,
      yearly: (7.99*12).toFixed(2),
    },
    features: [
      "1,200 minutes/month",
      "90 minutes per meeting",
      "Up to 10 audio/video files per month",
      "All Basic features plus shared custom vocabulary, speaker tagging, action item assignments, advanced search, export (PDF, TXT, DOCX, SRT), and basic CRM integrations (Slack, Zapier, calendar tools)",
      "Priority email support with faster turnaround",
    ],
    cta: "Start 7-day free trial",
    highlight: true,
  },
  {
    name: "Business",
    description: "Advanced features for teams and organizations",
    price: {
      monthly: 22,
      yearly: (18*12).toFixed(2),
    },
    features: [
      "6,000 minutes/month",
      "Up to 4 hours per meeting",
      "	Unlimited file imports",
      "Advanced analytics and reporting",
      "Everything in Pro plus administrative tools (usage analytics & reporting), ability to join 3 concurrent meetings, enhanced collaboration (shared recordings view, folders, comments, mentions, keyword alerts), advanced CRM integrations, and custom branding options",
      "Priority support with faster resolution times",
    ],
    cta: "Buy now",
    highlight: false,
  },
  {
    name: "Enterprise",
    description: "Custom solution for your organization",
    price: {
      monthly: null,
      yearly: null,
    },
    features: [
      "	Unlimited minutes",
      "No limit on meeting length",
      "Unlimited file imports",
      "All Business features plus unlimited workspace members, advanced security & compliance (SSO, encryption, audit logs), dedicated account management, custom API options, and specialized AI meeting assistant functions (e.g., sales assistance, automated follow-ups)",
      "Dedicated support with SLAs and white-glove service",
    ],
    cta: "Contact our sales team",
    highlight: false,
    isEnterprise: true,
  },
];

const Pricing = () => {
  const [annually, setAnnually] = useState(true);

  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="content-wrap">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 px-4 sm:px-0">
          <motion.span
            className="inline-flex items-center rounded-full px-3 md:px-4 py-1 text-xs font-medium bg-quikscribe-50 text-quikscribe-700 ring-1 ring-inset ring-quikscribe-600/20 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.span>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Simple, transparent pricing
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-slate-600 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose the plan that works best for you and your team.
            All plans include a 7-day free trial.
          </motion.p>
          
          <motion.div
            className="inline-flex items-center bg-white p-1 rounded-full border border-slate-200 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setAnnually(false)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                !annually
                  ? "bg-quikscribe-500 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnually(true)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all flex items-center ${
                annually
                  ? "bg-quikscribe-500 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Annual
              <span className="ml-1 text-[10px] md:text-xs font-normal bg-quikscribe-200 text-quikscribe-800 rounded-full px-1.5 md:px-2 py-0.5">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden border ${
                plan.highlight
                  ? "border-quikscribe-200 shadow-lg"
                  : "border-slate-200 shadow-sm"
              } bg-white transition-all duration-300 hover:shadow-xl ${
                plan.highlight ? "relative z-10" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {plan.highlight && (
                <div className="bg-quikscribe-500 text-white text-xs font-medium text-center py-1.5">
                  Most Popular
                </div>
              )}
              <div className="p-5 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-xs md:text-sm mb-4 md:mb-6">{plan.description}</p>
                
                <div className="mb-4 md:mb-6">
                  {plan.price.monthly !== null ? (
                    <>
                      <div className="flex items-baseline">
                        <span className="text-2xl md:text-4xl font-bold">
                          ${annually ? (Number(plan.price.yearly) / 12).toFixed(2) : plan.price.monthly}
                        </span>
                        <span className="text-slate-600 ml-2 text-sm md:text-base">
                          {plan.price.monthly > 0 ? "/user/month" : ""}
                        </span>
                      </div>
                      {annually && plan.price.monthly > 0 && (
                        <p className="text-xs md:text-sm text-slate-500 mt-1">
                          ${plan.price.yearly} billed annually
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl md:text-4xl font-bold">_</div>
                  )}
                </div>
                
                <Button
                  className={`w-full mb-6 md:mb-8 py-1.5 md:py-2 h-auto text-sm ${
                    plan.highlight || plan.isEnterprise
                      ? "bg-quikscribe-500 hover:bg-quikscribe-600 text-white"
                      : "bg-white border-slate-200 border text-slate-800 hover:bg-slate-50"
                  }`}
                  variant={plan.highlight || plan.isEnterprise ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-3 md:space-y-4">
                  <p className="text-xs md:text-sm font-medium">What's included:</p>
                  <ul className="space-y-2 md:space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm">
                        <div className="mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-quikscribe-50 text-quikscribe-600 flex items-center justify-center">
                          <svg 
                            width="12" 
                            height="12" 
                            viewBox="0 0 12 12" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 h-2.5"
                          >
                            <path 
                              d="M10 3L4.5 8.5L2 6" 
                              stroke="currentColor" 
                              strokeWidth="1.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-base md:text-lg font-medium mb-3 md:mb-4">Frequently Asked Questions</h4>
          <a 
            href="#" 
            className="text-quikscribe-600 hover:text-quikscribe-700 transition-colors text-sm md:text-base"
          >
            Visit our FAQ page for more information
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
