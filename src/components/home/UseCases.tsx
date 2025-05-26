
import React from "react";
import { motion } from "framer-motion";
import BlurImage from "../ui/BlurImage";

const useCases = [
  {
    title: "Business Meetings",
    description:
      "Capture every detail in team meetings, client calls, and boardroom discussions, with automatic action item extraction.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Higher Education",
    description:
      "Transform lectures and seminars into comprehensive notes that improve study efficiency and academic performance.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Legal Professionals",
    description:
      "Document client consultations, depositions, and case discussions with accurate, timestamped transcriptions.",
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1787&q=80",
  },
  {
    title: "Healthcare",
    description:
      "Streamline patient consultations and medical discussions with HIPAA-compliant transcriptions and summaries.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="section-padding bg-slate-50">
      <div className="content-wrap">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 px-4 sm:px-0">
          <motion.span
            className="inline-flex items-center rounded-full px-3 md:px-4 py-1 text-xs font-medium bg-quikscribe-50 text-quikscribe-700 ring-1 ring-inset ring-quikscribe-600/20 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Use Cases
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Transforming note-taking across industries
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            See how Quikscribe empowers professionals in various fields to 
            capture and utilize information more effectively.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden bg-white shadow-md group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-40 sm:h-52 relative overflow-hidden">
                <BlurImage
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {useCase.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-sm md:text-base text-slate-600">{useCase.description}</p>
                <a
                  href="#"
                  className="mt-3 md:mt-4 inline-flex items-center text-quikscribe-600 font-medium text-xs md:text-sm group-hover:text-quikscribe-700 transition-colors"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-16 p-6 md:p-8 lg:p-12 bg-white rounded-xl shadow-md border border-slate-100 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Ready to transform your note-taking experience?
          </h3>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mb-6 md:mb-8">
            Join thousands of professionals who have already streamlined their workflow
            and improved productivity with Quikscribe.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-quikscribe-500 text-white font-medium text-sm md:text-base rounded-full hover:bg-quikscribe-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Start your free trial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 w-3 h-3 md:w-4 md:h-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
