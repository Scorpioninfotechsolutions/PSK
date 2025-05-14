
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion } from "framer-motion";

interface TiltOptions {
  max: number;
  scale: number;
  speed: number;
  glare?: boolean;
  "max-glare"?: number;
}

export const useTilt = (options: TiltOptions = { max: 10, scale: 1.05, speed: 1000 }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: options.max,
        scale: options.scale,
        speed: options.speed,
        glare: options.glare || false,
        "max-glare": options["max-glare"] || 0.5,
        gyroscope: true
      });
    }
    return () => {
      if (tiltNode) {
        (tiltNode as any).vanillaTilt?.destroy();
      }
    };
  }, [options]);

  return tiltRef;
};
