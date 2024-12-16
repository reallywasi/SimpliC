import Image from "next/image";
import OmyxCHome from "@/components/OmyxCHome ";
export default function Home() {
  return (
    <div >
  <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-center">
      {/* Language Name */}
      <h1 className="text-8xl font-bold text-orange-500 mb-4">Simpli-C</h1>
      
      {/* Tagline */}
      <p className="text-lg text-gray-300 mb-6">The most user-intuitive programming language</p>
      
      {/* NPM Install Command */}
      <div className="bg-gray-800 text-gray-300 p-2 rounded mb-6">
        <code>npm i -g omyx-c</code>
      </div>
      
      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">
          Playground
        </button>
        <button className="bg-gray-300 text-gray-900 py-2 px-6 rounded hover:bg-gray-400">
          View Source
        </button>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-8 text-white text-2xl font-semibold">
        Playground
      </div>
      
      {/* Run & Clear Buttons */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Run
        </button>
        <button className="bg-gray-300 text-gray-900 py-2 px-4 rounded hover:bg-gray-400">
          Clear
        </button>
      </div>
    </div>   
    
    <OmyxCHome />
     </div>
  );
}
