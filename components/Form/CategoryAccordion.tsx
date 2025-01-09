'use client';

import { ChevronDown, ChevronUp } from 'react-feather';

interface CategoryAccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function CategoryAccordion({ title, children, isOpen, onToggle }: CategoryAccordionProps) {
  return (
    <div className="border p-4 rounded-lg">
      <button
        onClick={onToggle}
        className="w-full text-left text-lg font-semibold focus:outline-none flex items-center justify-between"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {/* Add a fixed height and scrollable area */}
      <div
        className={`mt-4 space-y-4 transition-all duration-300 ${isOpen ? 'max-h-96 overflow-y-auto' : 'max-h-0 overflow-hidden'}`}
      >
        {children}
      </div>
    </div>
  );
}