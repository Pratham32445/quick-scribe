
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(14,165,233,0.06)_0%,rgba(251,252,253,0)_100%)]" />
      
      <div className="content-wrap relative">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full px-3 md:px-4 py-1 text-xs font-medium bg-quikscribe-50 text-quikscribe-700 ring-1 ring-inset ring-quikscribe-600/20 mb-4">
              Introducing Quikscribe AI
            </span>
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-balance px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI-Powered {" "}
            <span className="bg-gradient-to-r from-quikscribe-600 to-quikscribe-500 bg-clip-text text-transparent">
            Note-Taking, 
            </span>{" "}
            Never Miss a Detail Again!
          </motion.h1>
          
          <motion.p
            className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform meetings, lectures, and interviews into searchable, shareable, 
            and actionable notes, all automatically with Quikscribe.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              className="bg-quikscribe-500 hover:bg-quikscribe-600 text-white px-4 sm:px-6 py-2 sm:py-3 h-auto text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
            >
              Start for free
            </Button>
            <Button 
              variant="outline" 
              className="border-slate-300 text-slate-800 hover:bg-slate-50 px-4 sm:px-6 py-2 sm:py-3 h-auto text-sm md:text-base transition-all duration-300"
              size="lg"
            >
              See how it works
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="bg-slate-800 h-6 sm:h-8 flex items-center px-4 space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
          </div>
          
          <div className="bg-white p-2 sm:p-4">
            <div className="bg-slate-50 rounded-lg p-3 sm:p-6 h-[250px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
              <div className="max-w-2xl w-full overflow-y-auto max-h-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
                  <div>
                    <h3 className="text-base sm:text-xl font-semibold">Marketing Team Sync</h3>
                    <p className="text-xs sm:text-sm text-slate-500">Today at 10:30 AM • 45 min</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs py-1 h-7 sm:h-8">Share</Button>
                    <Button variant="outline" size="sm" className="text-xs py-1 h-7 sm:h-8">Export</Button>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                  <div className="border-l-2 border-quikscribe-400 pl-3 sm:pl-4 py-1">
                    <p className="font-medium text-slate-900">Sarah (Marketing Lead):</p>
                    <p className="text-slate-600">
                      We need to finalize the campaign assets for the Q3 product launch.
                      The deadline is approaching fast.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-slate-300 pl-3 sm:pl-4 py-1">
                    <p className="font-medium text-slate-900">Alex (Designer):</p>
                    <p className="text-slate-600">
                      I've completed 80% of the social media visuals. I'll send the final 
                      versions by tomorrow afternoon.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-slate-300 pl-3 sm:pl-4 py-1">
                    <p className="font-medium text-slate-900">Michael (Content):</p>
                    <p className="text-slate-600">
                      The blog post draft is ready for review. I've incorporated the 
                      product specifications and customer testimonials as requested.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-quikscribe-400 pl-3 sm:pl-4 py-1 bg-quikscribe-50/50 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] sm:text-xs font-medium bg-quikscribe-100 text-quikscribe-800 px-1.5 sm:px-2 py-0.5 rounded-full">
                        AI Summary
                      </span>
                    </div>
                    <p className="text-slate-700">
                      The team is on track with Q3 product launch assets. Social media visuals 
                      at 80% completion due tomorrow. Blog post draft ready for review.
                      <span className="ml-1 text-quikscribe-600 text-[10px] sm:text-xs">View full summary →</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 md:mt-12 flex justify-center gap-4 md:gap-8 flex-wrap px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-slate-500 text-xs sm:text-sm font-medium w-full text-center mb-2 sm:mb-4">
            Trusted by innovative teams at
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8">
            {["StreamNota", "Globex", "Stark Industries", "Initech", "Umbrella Corp"].map((company, index) => (
              <div 
                key={index} 
                className="text-slate-400 font-medium text-sm md:text-base lg:text-lg"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
