// components/Preloader.js
import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-500 via-purple-500 to-gray-300 z-50">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="relative flex items-center justify-center"
      >
        {/* iPhone Mockup */}
        <div className="w-64 h-128 bg-white rounded-3xl shadow-lg p-4 flex justify-center items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1726754457459-d2dfa2e3a434?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your iPhone mockup image path
            alt="iPhone Mockup"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Rotating Circle Animation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-8 border-t-4 border-white border-solid rounded-full animate-spin"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Preloader;
