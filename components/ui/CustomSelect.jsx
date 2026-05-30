"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, MessageCircle, Phone, Mail } from "lucide-react";

export default function CustomSelect({ 
  name, 
  value, 
  onChange, 
  options, 
  placeholder = "Select option",
  required = false,
  className = "",
  iconMap = {} // Add icon mapping prop
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

  // Get the current selected option's icon
  const getCurrentIcon = () => {
    if (!value) return null;
    const IconComponent = iconMap[value];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : null;
  };

  const CurrentIcon = getCurrentIcon();

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
        <div className="flex items-center gap-2 flex-1">
          {CurrentIcon && (
            <span className="text-[#5B5CF0]">
              {CurrentIcon}
            </span>
          )}
          <span className={`text-sm ${!selectedLabel ? "text-black/40" : "text-black"}`}>
            {selectedLabel || placeholder}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""} text-black/40 flex-shrink-0`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-black/10 rounded-xl shadow-lg overflow-hidden">
          {options.map((option, index) => {
            const IconComponent = iconMap[option.value];
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value, option.label)}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-[#FAFBFF] transition-colors flex items-center gap-2
                  ${value === option.value ? "bg-[#5B5CF0]/5 text-[#5B5CF0] font-medium" : "text-black"}
                  ${index !== options.length - 1 ? "border-b border-black/5" : ""}
                `}
              >
                {IconComponent && (
                  <span className={value === option.value ? "text-[#5B5CF0]" : "text-black/40"}>
                    <IconComponent className="w-4 h-4" />
                  </span>
                )}
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}