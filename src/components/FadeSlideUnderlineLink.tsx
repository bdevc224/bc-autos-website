import React, { type ReactNode } from "react";

interface FadeSlideUnderlineLinkProps {
  color?: "white" | "black" | "gray" | "blue" | "red";
  hoverColor?: "blue" | "red" | string;
  center?: boolean;
  active?: boolean;
  className?: string;
  children: ReactNode;
}

const FadeSlideUnderlineLink: React.FC<FadeSlideUnderlineLinkProps> = ({
  color = "black",
  hoverColor = "blue",
  center = false,
  active = false,
  className = "",
  children,
}) => {
  const colorMap: Record<string, string> = {
    white: "text-white",
    black: "text-black",
    gray: "text-gray-700",
    blue: "text-blue-500",
    red: "text-red-500",
  };

  const textColor = colorMap[color] || "text-black";
  
  // Handle hover color classes safely
  const getHoverColorClasses = (): string => {
    if (hoverColor === "red") {
      return "hover:text-blue-400 after:bg-blue-600";
    } else if (hoverColor === "blue") {
      return "hover:text-blue-500 after:bg-blue-500";
    } else {
      // For custom colors, use the color directly
      return `hover:text-${hoverColor} after:bg-${hoverColor}`;
    }
  };

  const hoverColorClasses = getHoverColorClasses();

  return (
    <span
      className={`
        relative inline-block cursor-pointer
        ${textColor} ${hoverColorClasses} ${className}
        transition-colors duration-300 ease-in-out
        after:content-[''] after:absolute 
        ${center ? "after:left-1/2 after:-translate-x-1/2 after:origin-center" : "after:left-0 after:origin-left"} 
        after:bottom-0 after:h-0.5 after:w-full
        after:transition-transform after:duration-300 after:ease-in-out
        ${
          active
            ? "text-blue-600 after:scale-x-100 after:opacity-100"
            : "after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100"
        }
      `}
    >
      {children}
    </span>
  );
};

export default FadeSlideUnderlineLink;