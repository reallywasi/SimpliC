"use client"
import React from 'react';
import { motion } from 'framer-motion'; // for animations

const OmyxCHome = () => {
  // Animation settings
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4">
      {/* Header Section */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-6xl font-bold text-orange-500 mt-16 mb-6"
      >
        Welcome to Simpli-C
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-xl text-gray-300 mb-8 text-center max-w-3xl"
      >
        Simpli-C is a user-intuitive programming language built on top of C. It combines the simplicity 
        needed for beginners to get started with the raw power of C, making it perfect for both 
        learners and advanced developers.
      </motion.p>

{/* Features Section */}
<div className="max-w-6xl mx-auto mb-20 px-6">
  <motion.h2
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="text-5xl font-bold text-orange-400 mb-12 text-center"
  >
    Features
  </motion.h2>
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
  >
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-3xl text-orange-400 mb-6">Beginner Friendly</h3>
      <p className="text-gray-300 text-lg">Simpli-C is designed with beginners in mind. It's easy to learn and has simplified syntax.</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-3xl text-orange-400 mb-6">C Power</h3>
      <p className="text-gray-300 text-lg">Get the full power of C, with none of the complex syntax. Simpli-C streamlines your learning process.</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-3xl text-orange-400 mb-6">Most Simplified Syntax</h3>
      <p className="text-gray-300 text-lg">Run your Simpli-C programs with the most simplified syntax structure.</p>
    </div>
  </motion.div>
</div>

{/* Image Section */}


{/* Syntax Examples Section */}
<div className="max-w-6xl mx-auto mb-24 px-6">
  <motion.h2
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="text-5xl font-bold text-orange-400 mb-12 text-center"
  >
    Simpli-C Syntax: User-Friendly and Intuitive
  </motion.h2>
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {/* Example Tiles */}
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-2xl text-orange-400 mb-4">Print Hello World</h3>
      <code className="block text-gray-300 text-lg">see "Hello, World!";</code>
      <p className="text-sm text-gray-400 mt-2">This replaces the usual complexity of C's `printf` with a more readable `see` command.</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-2xl text-orange-400 mb-4">Declare Variables</h3>
      <code className="block text-gray-300 text-lg">int myAge = 25;</code>
      <p className="text-sm text-gray-400 mt-2">Declaring variables stays familiar, but without excess syntax.</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-2xl text-orange-400 mb-4">If Conditions</h3>
      <code className="block text-gray-300 text-lg">if isHungry openFridge</code>
      <p className="text-sm text-gray-400 mt-2">A simplified if-statement structure.</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-2xl text-orange-400 mb-4">Loops</h3>
      <code className="block text-gray-300 text-lg">repeat 5 see "Looping!"</code>
      <p className="text-sm text-gray-400 mt-2">Simpler loop syntax for beginners, replacing C's `for` loops.</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-2xl text-orange-400 mb-4">Functions</h3>
      <code className="block text-gray-300 text-lg">do myFunction</code>
      <p className="text-sm text-gray-400 mt-2">Functions made simple with a `do` keyword.</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-2xl text-orange-400 mb-4">Boolean Expressions</h3>
      <code className="block text-gray-300 text-lg">bool isHappy = true;</code>
      <p className="text-sm text-gray-400 mt-2">Boolean values are easier to declare and manage.</p>
    </div>
    {/* Add more tiles for other intuitive syntax examples */}
  </motion.div>
</div>

{/* Advanced Features Section */}
<div className="max-w-7xl mb-16">
  <motion.h2
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="text-5xl font-bold mb-8 text-center text-blue-400"
  >
    Unlock the Advanced Power of Simpli-C
  </motion.h2>
  
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="flex flex-wrap justify-center gap-6"
  >
    <div className="relative w-full sm:w-1/2 lg:w-1/3 bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
      <h3 className="text-2xl text-white font-semibold mb-4">Memory Management</h3>
      <p className="text-gray-200">
      Simpli-C retains C's low-level memory access while simplifying syntax for dynamic memory management.
      </p>
      <div className="absolute bottom-0 right-0 p-2 text-xs text-white opacity-50">Advanced</div>
    </div>

    <div className="relative w-full sm:w-1/2 lg:w-1/3 bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
      <h3 className="text-2xl text-white font-semibold mb-4">Error Handling</h3>
      <p className="text-gray-200">
      Simpli-C offers more intuitive error handling, allowing beginners to quickly debug issues.
      </p>
      <div className="absolute bottom-0 right-0 p-2 text-xs text-white opacity-50">Advanced</div>
    </div>

    <div className="relative w-full sm:w-1/2 lg:w-1/3 bg-gradient-to-r from-green-500 to-green-700 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
      <h3 className="text-2xl text-white font-semibold mb-4">Concurrency</h3>
      <p className="text-gray-200">
        Learn the basics of multithreading and concurrency, with built-in support for thread-safe operations.
      </p>
      <div className="absolute bottom-0 right-0 p-2 text-xs text-white opacity-50">Advanced</div>
    </div>
  </motion.div>
</div>


{/* Why Choose OMYX-C Section */}
<div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="max-w-5xl mx-auto px-4 text-center"
  >
    <h2 className="text-5xl font-bold text-yellow-400 mb-6">
      Why Choose Simpli-C?
    </h2>
    <p className="text-lg text-gray-300 mb-12">
      Simpli-C is the ultimate choice for anyone looking to harness the power of C while embracing a modern, user-friendly experience.
    </p>

    <ul className="list-none space-y-4 text-left">
      <li className="text-2xl text-white mb-2">
        <span className="text-orange-400 font-semibold">1. </span>
        <span className="text-yellow-400 font-semibold">Simplified Syntax</span> — Easy to learn and teach, perfect for beginners and educators alike.
      </li>
      <li className="text-2xl text-white mb-2">
        <span className="text-orange-400 font-semibold">2. </span>
        <span className="text-yellow-400 font-semibold">Interpreter-Based</span> — Execute your code instantly without the need for complex setups.
      </li>
      <li className="text-2xl text-white">
        <span className="text-orange-400 font-semibold">3. </span>
        <span className="text-yellow-400 font-semibold">Fast as C</span> — Retain the blazing speed of C for optimal performance.
      </li>
    </ul>
  </motion.div>
</div>




      {/* Getting Started Section */}
{/* Getting Started Section */}
<div className="bg-gray-900 py-20 px-20">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="max-w-12xl mx-auto px-24 text-center"
  >
    <h2 className="text-5xl font-bold text-pink-400 mb-12">
      Getting Started with Simpli-C
    </h2>

    {/* Vertical Timeline */}
    <div className="relative text-left">
      <div className="border-l-2 border-pink-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

      <div className="mb-12 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex justify-end items-center w-full">
          <div className="w-full lg:w-3/5 bg-gray-800 p-8 rounded-lg shadow-lg relative">
            <h3 className="text-2xl text-pink-400 mb-4">Step 1: Download Simpli-C</h3>
            <p className="text-gray-300">Start by downloading Simpli-C from the official repository. It’s lightweight and easy to install!</p>
            <span className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 bg-pink-500 w-6 h-6 rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="mb-12 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex justify-start items-center w-full">
          <div className="w-full lg:w-3/5 bg-gray-800 p-8 rounded-lg shadow-lg relative ml-auto">
            <h3 className="text-2xl text-pink-400 mb-4">Step 2: Explore the Documentation</h3>
            <p className="text-gray-300">Check out the comprehensive documentation to understand the basics and dive into Simpli-C’s core features.</p>
            <span className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 bg-pink-500 w-6 h-6 rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="mb-12 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex justify-end items-center w-full">
          <div className="w-full lg:w-3/5 bg-gray-800 p-8 rounded-lg shadow-lg relative">
            <h3 className="text-2xl text-pink-400 mb-4">Step 3: Start Coding</h3>
            <p className="text-gray-300">Use Simpli-C’s tools and features to start building your first project.</p>
            <span className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 bg-pink-500 w-6 h-6 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</div>

{/* Features Highlight Section */}

{/* Footer Section */}
<footer className="bg-gray-900 text-white py-12 border-t border-gray-700 my-20">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* About Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">About Simpli-C</h3>
        <p className="text-gray-400 mb-4">
        Simpli-C is a modern programming language that combines the simplicity needed for beginners with the power of C. Perfect for learning and advanced projects alike.
        </p>
        <a href="#"
           className="text-orange-500 hover:underline">Learn More</a>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#features" className="text-gray-400 hover:text-orange-500">Features</a></li>
          <li><a href="#projects" className="text-gray-400 hover:text-orange-500">Projects</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-orange-500">Contact</a></li>
          <li><a href="#privacy" className="text-gray-400 hover:text-orange-500">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none"/>
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none"/>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg transition-all">Send Message</button>
        </form>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="text-center">
      <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
      <div className="flex justify-center gap-6">
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.225 0h-20.45c-1.099 0-1.975.876-1.975 1.975v20.45c0 1.099.876 1.975 1.975 1.975h20.45c1.099 0 1.975-.876 1.975-1.975v-20.45c0-1.099-.876-1.975-1.975-1.975zm-11.063 19.038h-2.519v-8.32h2.519v8.32zm-1.259-9.516c-.845 0-1.52-.675-1.52-1.52s.675-1.52 1.52-1.52 1.52.675 1.52 1.52-.675 1.52-1.52 1.52zm10.069 9.516h-2.519v-4.366c0-1.046-.37-1.764-1.286-1.764-.703 0-1.122.472-1.305.927-.067.162-.084.387-.084.612v4.591h-2.519v-8.32h2.519v1.188c.335-.533.891-1.295 2.178-1.295 1.589 0 2.784 1.045 2.784 3.297v5.23zm-6.586-17.313c.671 0 1.335.266 1.829.738.495.471.773 1.093.773 1.743 0 .65-.278 1.272-.773 1.743-.494.472-1.158.738-1.829.738-.671 0-1.335-.266-1.829-.738-.495-.471-.773-1.093-.773-1.743 0-.65.278-1.272.773-1.743.494-.472 1.158-.738 1.829-.738zm6.575 7.868v-.016c0-.077.005-.156.014-.232.016-.138.058-.272.132-.398.175-.326.483-.539.815-.684.067-.04.141-.061.214-.086.102-.032.197-.073.297-.115.138-.055.265-.117.401-.186.104-.066.203-.143.303-.214.233-.185.438-.4.585-.635.204-.295.334-.63.369-.978.008-.067.01-.136.01-.203 0-.2-.015-.398-.044-.596-.045-.303-.116-.606-.217-.897-.183-.527-.456-1.026-.812-1.493-.346-.469-.758-.911-1.218-1.309-.508-.447-1.034-.872-1.558-1.292-.49-.389-.977-.783-1.46-1.188-.342-.287-.629-.603-.877-.927-.133-.243-.238-.492-.318-.743-.047-.135-.085-.271-.115-.407-.059-.245-.079-.49-.079-.735v-.017c0-.255.02-.511.059-.765.055-.377.144-.749.278-1.114.188-.435.48-.84.832-1.207.482-.485.949-.97 1.448-1.419.516-.485 1.042-.948 1.553-1.423.535-.493 1.026-1.004 1.513-1.541.231-.247.445-.5.663-.756.38-.389.767-.774 1.165-1.147.065-.066.132-.133.194-.204.043-.047.088-.092.131-.138.074-.076.144-.15.224-.224.049-.049.104-.097.159-.144.09-.073.187-.137.282-.197.144-.082.295-.138.452-.173.124-.031.241-.092.363-.174.136-.087.273-.187.387-.303.11-.116.207-.239.283-.374.08-.145.145-.294.195-.446.087-.242.138-.497.156-.755.023-.497.03-.993.016-1.49zm-1.169 9.708h-2.519v-8.32h2.519v8.32zm-1.259-9.516c-.845 0-1.52-.675-1.52-1.52s.675-1.52 1.52-1.52 1.52.675 1.52 1.52-.675 1.52-1.52 1.52zm8.073 6.298h-2.519v-4.591c0-.225-.017-.451-.084-.612-.183-.455-.602-.927-1.305-.927-.916 0-1.286.718-1.286 1.764v4.366h-2.519v-8.32h2.519v1.188c.335-.533.891-1.295 2.178-1.295 1.589 0 2.784 1.045 2.784 3.297v5.23z"/></svg> */}
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm0 12.5c-2.773 0-5-2.227-5-5s2.227-5 5-5 5 2.227 5 5-2.227 5-5 5zm-2.5-7.5h5v1h-5v-1zm0 3h5v1h-5v-1zm0 3h5v1h-5v-1z"/></svg> */}
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm0 12.5c-2.773 0-5-2.227-5-5s2.227-5 5-5 5 2.227 5 5-2.227 5-5 5zm-2.5-7.5h5v1h-5v-1zm0 3h5v1h-5v-1zm0 3h5v1h-5v-1z"/></svg> */}
        </a>
      </div>
    </div>

    {/* Bottom Text */}
    <div className="text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} Simpli-C. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default OmyxCHome;
