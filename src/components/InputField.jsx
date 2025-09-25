import React, { useState } from 'react';

const InputField = ({
  as: Component = 'input',
  label,
  icon: Icon,
  type = 'text',
  id,
  name,
  value,
  placeholder,
  autoComplete,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const hasValue = value && String(value).length > 0;
  const isFloated = isFocused || hasValue;

  const isTextArea = Component === 'textarea';

  return (
    // The main container for positioning
    <div className="relative">
      
      {/* The input or textarea element */}
      <Component
        id={id || name}
        name={name}
        type={isTextArea ? undefined : type}
        value={value}
        autoComplete={autoComplete}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={label || placeholder}
        className={`
          w-full rounded-xl bg-white/5 border-2 text-white placeholder:text-transparent
          focus:outline-none transition-all duration-300
          ${isFocused ? 'border-indigo-500/50' : 'border-white/20'}
          ${isTextArea 
            ? 'px-12 pt-7 pb-2 h-36 resize-none' // Padding for textarea to make room for the label
            : 'h-14 px-4 pl-12' // Padding for input
          }
        `}
        {...props}
      />

      {/* The Icon */}
      {Icon && (
        <div className={`
          absolute left-4 pointer-events-none transition-colors duration-300
          ${isFloated ? 'text-indigo-400' : 'text-gray-400'}
          ${isTextArea 
            ? 'top-6' 
            : 'top-1/2 -translate-y-1/2' 
          }
        `}>
          <Icon className="w-5 h-5" />
        </div>
      )}

      {/* The Floating Label */}
      <label
        htmlFor={id || name}
        className={`
          absolute left-12 pointer-events-none transition-all duration-300
          // These are the new, explicit positions that CANNOT fail.
          ${isTextArea 
            ? (isFloated ? 'top-2 text-xs text-indigo-400' : 'top-5 text-base text-gray-400')
            : (isFloated ? 'top-1.5 text-xs text-indigo-400' : 'top-1/2 -translate-y-1/2 text-base text-gray-400')
          }
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;

