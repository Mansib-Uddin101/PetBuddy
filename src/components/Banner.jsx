import Image from 'next/image'
import React from 'react'
import banner from '@/assets/pet_hero.png'

const Banner = () => {
  return (
    <section className="max-w-5/6 mx-auto rounded-xl mt-8 bg-[#F4EEE2] py-12 md:py-24 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-6 flex flex-col space-y-6 text-center lg:text-left z-10">
          <span className="text-sm font-bold tracking-wider text-[#D66237] uppercase">
            Find Your Perfect Match
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight leading-tight">
            Every pet deserves a <span className="text-[#D66237] italic font-serif">loving home</span>
          </h1>
          <p className="text-base md:text-lg atext-slate-600 max-w-xl mx-auto lg:mx-0">
            Open your heart and your home to a furry, feathered, or scaled companion. Connect with pet owners and adopt your new best buddy today.
          </p>
          
          <div>
            <button className="bg-[#D66237] mt-2 hover:bg-[#8e5c36] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 shadow-md">
              Adopt A Pet
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-6 flex justify-center relative w-full">
          
          <Image
            src={banner}
            alt="A diverse group of happy shelter pets waiting for adoption"
            width={750}
            height={450}
            priority
            className="w-full max-w-xl h-auto object-contain mix-blend-multiply"
          />
        </div>

      </div>
    </section>
  )
}

export default Banner