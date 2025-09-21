import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  variant?:
    | "blue"
    | "green"
    | "teal"
    | "purple"
    | "indigo"
    | "success"
    | "pink"
    | "orange"
    | "yellow"
    | "gray"
    | "rose"
    | "dustyRose"
    | "mauve"
    | "roseToPlum";
  className?: string;
}

const gradientVariants = {
  blue: "bg-gradient-to-r from-sky-400 to-blue-800",
  green: "bg-gradient-to-r from-emerald-400 to-teal-700",
  teal: "bg-gradient-to-r from-teal-400 to-cyan-700",
  purple: "bg-gradient-to-r from-purple-400 to-indigo-700",
  indigo: "bg-gradient-to-r from-indigo-400 to-purple-700",
  success: "bg-gradient-to-r from-green-400 to-emerald-700",
  pink: "bg-gradient-to-r from-pink-400 to-rose-700",
  orange: "bg-gradient-to-r from-orange-400 to-red-700",
  yellow: "bg-gradient-to-r from-yellow-400 to-amber-600",
  gray: "bg-gradient-to-r from-gray-400 to-gray-700",

  // pink/rose inspired
  rose: "bg-gradient-to-r from-rose-300 to-rose-700",
  dustyRose: "bg-gradient-to-r from-rose-400 to-pink-700",
  mauve: "bg-gradient-to-r from-pink-300 to-rose-600",
  roseToPlum: "bg-gradient-to-r from-rose-400 to-[#62305C]",
};

export default function GradientText({
  children,
  variant = "blue",
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`${gradientVariants[variant]} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
