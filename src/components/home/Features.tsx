
import React from "react";
import { motion } from "framer-motion";

const featuresList = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-quikscribe-500"
      >
        <path d="M17.5 5.5C19 7 20.5 9 21 11c.5 2 .5 4 0 6-1 4-4.5 6-7 7-.5 0-1 .5-1.5.5-1 0-2 0-3-.5-.5 0-1 0-1.5-.5"></path>
        <path d="M5.5 15.5C3 14 1.5 12 1 10c-.5-2-.5-4 0-6 1-4 4.5-6 7-7 .5 0 1-.5 1.5-.5 1 0 2 0 3 .5.5 0 1 0 1.5.5"></path>
        <path d="M8 16a3 3 0 0 0 3-3c0-1.1-.9-2-2-2h0V8h0c1.1 0 2-.9 2-2a3 3 0 0 0-3-3"></path>
        <path d="M16 8a3 3 0 0 0-3 3c0 1.1.9 2 2 2h0v3h0c-1.1 0-2 .9-2 2a3 3 0 0 0 3 3"></path>
      </svg>
    ),
    title: "AI-Powered Transcription",
    description:
      "Advanced AI technology transcribes audio with high accuracy, even in noisy environments and multiple speakers.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-quikscribe-500"
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
        <path d="m15 5 4 4"></path>
      </svg>
    ),
    title: "Smart Notes",
    description:
      "Automatically organize and structure notes with headings, bullet points, and formatting for better readability.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-quikscribe-500"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    ),
    title: "Searchable Content",
    description:
      "Find exactly what you need with powerful search capabilities across all your transcriptions and notes.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-quikscribe-500"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <line x1="3" x2="21" y1="9" y2="9"></line>
        <line x1="9" x2="9" y1="21" y2="9"></line>
      </svg>
    ),
    title: "Multi-platform Integration",
    description:
      "Seamlessly integrate with Zoom, Google Meet, Microsoft Teams, and other popular meeting platforms.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-quikscribe-500"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path>
        <path d="M14 12a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1 1 1 0 0 0-1 1v1a1 1 0 0 1-1 1"></path>
      </svg>
    ),
    title: "Export & Share",
    description:
      "Export notes in multiple formats (PDF, Word, Markdown) and share with team members with just a few clicks.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-quikscribe-500"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    title: "Collaborative Editing",
    description:
      "Collaborate in real-time with team members to highlight important points and add comments to transcriptions.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="features" className="section-padding bg-white">
      <div className="content-wrap">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 px-4 sm:px-0">
          <motion.span
            className="inline-flex items-center rounded-full px-3 md:px-4 py-1 text-xs font-medium bg-quikscribe-50 text-quikscribe-700 ring-1 ring-inset ring-quikscribe-600/20 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Features
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything You Need to Take Notes Like a Pro
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Quikscribe combines cutting-edge AI technology with intuitive design to
            transform the way you capture and utilize information.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card p-5 md:p-6 flex flex-col items-start"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-2 md:p-3 bg-quikscribe-50 rounded-lg mb-4 md:mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="px-4 sm:px-0">
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              AI-generated summaries save you time and effort
            </motion.h3>
            <motion.p 
              className="text-sm md:text-base text-slate-600 mb-4 md:mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Quikscribe doesn't just transcribe — it understands. Our AI analyzes your 
              meetings to generate concise summaries, action items, and key takeaways, 
              so you never miss important details.
            </motion.p>
            <motion.ul 
              className="space-y-2 md:space-y-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {[
                "Automatic meeting summaries",
                "Action item extraction",
                "Key topics identification",
                "Decision tracking"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-quikscribe-100 text-quikscribe-600 flex items-center justify-center">
                    <svg 
                      width="10" 
                      height="10" 
                      viewBox="0 0 12 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 h-2.5 md:w-3 md:h-3"
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
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg mt-4 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
          >
            <div className="bg-white p-3 md:p-5">
              <div className="bg-slate-50 rounded-lg p-4 md:p-6">
                <h4 className="font-medium text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] md:text-xs font-medium bg-quikscribe-100 text-quikscribe-800 px-1.5 md:px-2 py-0.5 rounded-full">
                    AI Summary
                  </span>
                  <span>Product Launch Meeting</span>
                </h4>
                
                <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-1">Key Points:</h5>
                    <ul className="text-slate-600 space-y-1 list-disc pl-4 md:pl-5">
                      <li>Launch date confirmed for October 15th</li>
                      <li>Marketing campaign will begin 2 weeks prior</li>
                      <li>Initial focus on North American market</li>
                      <li>Budget approved for social media ads and influencer partnerships</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-slate-900 mb-1">Action Items:</h5>
                    <ul className="text-slate-600 space-y-1 list-disc pl-4 md:pl-5">
                      <li><span className="font-medium">Sarah:</span> Finalize press release by Friday</li>
                      <li><span className="font-medium">Alex:</span> Complete design assets by next Tuesday</li>
                      <li><span className="font-medium">Michael:</span> Schedule influencer outreach meetings</li>
                      <li><span className="font-medium">Team:</span> Review final marketing plan at next week's meeting</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-slate-900 mb-1">Decisions Made:</h5>
                    <ul className="text-slate-600 space-y-1 list-disc pl-4 md:pl-5">
                      <li>Premium tier will include API access</li>
                      <li>Early adopter discount of 20% approved</li>
                      <li>Customer webinar scheduled for October 20th</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
