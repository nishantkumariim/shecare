"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 py-12">
      {/* Logo + Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12"
      >
        <Image src="/logo.png" alt="SheCare Logo" width={80} height={80} />
        <h1 className="text-4xl font-bold mt-4 text-pink-600">SheCare</h1>
        <p className="mt-2 text-lg text-gray-700">
          Daily gummies to naturally ease period pain.
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/product.png"
          alt="SheCare Gummies"
          width={400}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Care, Comfort, Confidence
        </h2>
        <p className="mt-3 text-gray-600 max-w-md">
          A clinically backed blend of natural ingredients to support women’s
          wellness every day.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition">
          Shop Now
        </button>
      </motion.div>
    </main>
  );
}
