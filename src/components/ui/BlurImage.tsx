
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-slate-100"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover ${isLoaded ? "opacity-100" : "opacity-0"}`}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: isLoaded ? 1 : 1.05, opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default BlurImage;
