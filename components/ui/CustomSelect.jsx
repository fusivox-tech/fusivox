"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect({ 
  name, 
  value, 
  onChange, 
  options, 
  placeholder = "Select option",
  required = false,
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");
  const dropdownRef = useRef(null);

  // Update selected label when value changes externally
  useEffect(() => {
    const selectedOption = options.find(opt => opt.value === value);
    setSelectedLabel(selectedOption ? selectedOption.label : "");
  }, [value, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue, optionLabel) => {
    onChange({
      target: { name, value: optionValue }
    });
    setSelectedLabel(optionLabel);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl border transition-all text-left flex items-center justify-between
          ${isOpen 
            ? "border-[#5B5CF0] ring-2 ring-[#5B5CF0]/20" 
            : "border-black/10 hover:border-black/20"
          } bg-white`}
      >
        <span className={`text-sm ${!selectedLabel ? "text-black/40" : "text-black"}`}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""} text-black/40`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-black/10 rounded-xl shadow-lg overflow-hidden">
          {options.map((option, index) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value, option.label)}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-[#FAFBFF] transition-colors
                ${value === option.value ? "bg-[#5B5CF0]/5 text-[#5B5CF0] font-medium" : "text-black"}
                ${index !== options.length - 1 ? "border-b border-black/5" : ""}
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}