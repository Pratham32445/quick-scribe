
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(14,165,233,0.06)_0%,rgba(251,252,253,0)_100%)]" />
      
      <div className="content-wrap px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="inline-flex items-center rounded-full px-3 md:px-4 py-1 text-xs font-medium bg-quikscribe-50 text-quikscribe-700 ring-1 ring-inset ring-quikscribe-600/20 mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get Started Today
          </motion.span>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Transform your note-taking experience with Quikscribe
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of professionals who have already streamlined their workflow, 
            saved time, and improved productivity with Quikscribe's AI-powered note-taking solution.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              className="bg-quikscribe-500 hover:bg-quikscribe-600 text-white px-6 md:px-8 py-2 md:py-3 lg:py-6 h-auto text-sm md:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
            >
              Start your free trial
            </Button>
            <Button 
              variant="outline" 
              className="border-slate-300 text-slate-800 hover:bg-slate-50 px-6 md:px-8 py-2 md:py-3 lg:py-6 h-auto text-sm md:text-base font-medium transition-all duration-300"
              size="lg"
            >
              Schedule a demo
            </Button>
          </motion.div>
          
          <motion.div
            className="p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-slate-600 mb-4 text-xs sm:text-sm">
              "Quikscribe has revolutionized our team meetings. The automatic transcription and 
              AI-powered summaries have cut our meeting follow-up time by 75% and ensured we never 
              miss important details. It's become an essential tool for our entire organization."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Testimonial"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mr-3"
              />
              <div className="text-left">
                <p className="font-medium text-slate-900 text-xs sm:text-sm">David Mitchell</p>
                <p className="text-slate-500 text-[10px] sm:text-xs">CTO, InnovateX</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
};

export default CallToAction;
