"use client";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 w-full bg-zinc-900 py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Get in Touch
        </h2>

        <form className="bg-zinc-800 rounded-2xl p-8 shadow-lg space-y-6 transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white-500 transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white-500 transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white-500 transition-all duration-200"
              placeholder="Tell us how we can help you..."
            ></textarea>
          </div>

          <div className="text-center">
            {/* <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="cursor-pointer px-6 py-3 border-solid border-white bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-lg transition duration-300"
            >
              Send Message
            </motion.button> */}

            <motion.button className="cursor-pointer p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Submit
              </div>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
