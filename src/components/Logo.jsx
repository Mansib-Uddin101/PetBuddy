import React from 'react';
import { PawPrint } from 'lucide-react';

export default function Logo() {
  return (
    <div className={`flex items-center gap-1.5 `}>
      {/* "Pet" in deep slate/blue-gray */}
      <span className="text-5xl font-extrabold tracking-tight text-[#315579]">
        Pet
      </span>
      <span className="text-5xl font-extrabold tracking-tight text-[#D66237]">
        Buddy
      </span>
      
      {/* Paw Icon matching the "Buddy" color, slightly tilted */}
      <PawPrint 
        className="w-12 h-12 text-[#D66237] transform rotate-12 stroke-[2.5]" 
        fill="currentColor" 
      />
    </div>
  );
}