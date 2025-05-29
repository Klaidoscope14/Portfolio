"use client";
import React, { createContext, useContext, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={`flex items-center justify-center ${containerClassName}`}
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          ref={containerRef}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            scale: isMouseEntered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className={`flex items-center justify-center relative ${className}`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </motion.div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateXSpring = useSpring(rotateX);
  const rotateYSpring = useSpring(rotateY);
  const rotateZSpring = useSpring(rotateZ);

  const transform = useTransform(
    [mouseXSpring, mouseYSpring, rotateXSpring, rotateYSpring, rotateZSpring],
    (latestValues) => {
      const [mouseX, mouseY, rotateX, rotateY, rotateZ] = latestValues;
      return `translateX(${mouseX}px) translateY(${mouseY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * width);
    y.set(yPct * height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform.get(),
      }}
      className={`w-fit transition duration-200 ease-out ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
}; 