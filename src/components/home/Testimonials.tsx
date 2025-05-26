
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Quikscribe has completely transformed our team meetings. No more scrambling to take notes or missing key details. The automatic action item extraction alone has saved us countless hours.",
    author: "Sarah Johnson",
    title: "Product Manager, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote:
      "As a law student, Quikscribe has been a game-changer for my lecture notes. The transcription quality is exceptional, and the AI summaries help me focus on understanding concepts rather than just trying to write everything down.",
    author: "Michael Chen",
    title: "Law Student, Harvard University",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote:
      "The integration with our video conferencing tools is seamless. Our sales team now has perfect records of client calls, which has improved our follow-up process and ultimately our conversion rates.",
    author: "Emma Rodriguez",
    title: "Sales Director, GrowthMakers",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-white" />
      
      <div className="content-wrap relative">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 px-4 sm:px-0">
          <motion.span
            className="inline-flex items-center rounded-full px-3 md:px-4 py-1 text-xs font-medium bg-quikscribe-50 text-quikscribe-700 ring-1 ring-inset ring-quikscribe-600/20 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.span>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What our users are saying
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of satisfied users who have transformed their 
            note-taking and meeting experiences with Quikscribe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 * index }}
            >
              <svg
                width="45"
                height="36"
                className="mb-4 md:mb-6 text-quikscribe-100 opacity-80 w-8 h-6 md:w-10 md:h-8"
                viewBox="0 0 45 36"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 18H9C9 12.4772 13.4772 8 19 8V12C15.6863 12 13 14.6863 13 18V18.75C13 19.9926 14.0074 21 15.25 21H19.75C20.9926 21 22 19.9926 22 18.75V14.25C22 13.0074 20.9926 12 19.75 12H19V8H19.75C23.2018 8 26 10.7982 26 14.25V18.75C26 22.2018 23.2018 25 19.75 25H15.25C11.7982 25 9 22.2018 9 18.75V18H13.5ZM34.5 18H30C30 12.4772 34.4772 8 40 8V12C36.6863 12 34 14.6863 34 18V18.75C34 19.9926 35.0074 21 36.25 21H40.75C41.9926 21 43 19.9926 43 18.75V14.25C43 13.0074 41.9926 12 40.75 12H40V8H40.75C44.2018 8 47 10.7982 47 14.25V18.75C47 22.2018 44.2018 25 40.75 25H36.25C32.7982 25 30 22.2018 30 18.75V18H34.5Z" />
              </svg>
              
              <p className="text-slate-700 mb-4 md:mb-6 relative z-10 text-sm md:text-base">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
                />
                <div>
                  <h4 className="font-medium text-slate-900 text-sm md:text-base">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 p-6 sm:p-8 md:p-12 bg-gradient-to-r from-quikscribe-50 to-blue-50 rounded-xl border border-quikscribe-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center md:text-left">Join our growing community</h3>
            <p className="text-slate-600 text-sm md:text-base text-center md:text-left">
              Over 10,000+ teams and individuals trust Quikscribe for their note-taking needs.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <img
                  key={num}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
                  src={`https://randomuser.me/api/portraits/${num % 2 === 0 ? 'women' : 'men'}/${num + 5}.jpg`}
                  alt="User"
                />
              ))}
              <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-quikscribe-100 text-quikscribe-700 text-xs font-medium">
                +5k
              </span>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-quikscribe-500 text-white font-medium text-sm rounded-full hover:bg-quikscribe-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Get started
              </a>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
