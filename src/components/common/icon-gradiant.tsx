import React from "react";

interface IconGradientProps {
  icon: React.ElementType;
  size?: number;
  className?: string;
}

const IconGradient: React.FC<IconGradientProps> = ({
  icon: IconComponent,
  size = 24,
  className = "",
}) => {
  // Generate unique ID for this instance
  const gradientId = React.useId();

  return (
    <div className={`inline-block ${className}`}>
      {/* Hidden SVG with gradient definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A259FF" />
            <stop offset="0%" stopColor="#A259FF" />
            <stop offset="100%" stopColor="#00F0B5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Icon with gradient applied */}
      <IconComponent
        size={size}
        style={{
          fill: `url(#${gradientId})`,
          color: `url(#${gradientId})`,
        }}
        aria-hidden="true"
        focusable="false"
      />
    </div>
  );
};

export default IconGradient;
