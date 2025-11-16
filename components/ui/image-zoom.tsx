"use client";

import { Plus } from 'lucide-react';
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type ImageZoomProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Zoom>;

export const ImageZoom = (props: ImageZoomProps) => {
  const { children, ...rest } = props;
  return (
    <Zoom zoomMargin={10} {...rest}>
      {children}
    </Zoom>
  );
};

interface ProfileImageZoomProps {
  src: string;
  alt: string;
  name: string;
}

export const ProfileImageZoom: React.FC<ProfileImageZoomProps> = ({ src, alt, name }) => {
  return (
    <div className="flex justify-center mb-12 print:hidden">
      <div className="relative mx-auto border-4 border-[--glow-cyan] rounded-2xl shadow-2xl shadow-[--glow-cyan]/30 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 w-fit">
        <Plus
          strokeWidth={0.5}
          className="text-[--glow-cyan] absolute -left-4 -top-4 h-8 w-8 z-10 pointer-events-none"
        />
        <Plus
          strokeWidth={0.5}
          className="text-[--glow-cyan] absolute -bottom-4 -left-4 h-8 w-8 z-10 pointer-events-none"
        />
        <Plus
          strokeWidth={0.5}
          className="text-[--glow-cyan] absolute -right-4 -top-4 h-8 w-8 z-10 pointer-events-none"
        />
        <Plus
          strokeWidth={0.5}
          className="text-[--glow-cyan] absolute -bottom-4 -right-4 h-8 w-8 z-10 pointer-events-none"
        />
        <div className="relative overflow-hidden rounded-xl">
          <ImageZoom>
            <img
              src={src}
              alt={alt}
              className="w-[250px] h-[336px] md:w-[384px] md:h-[448px] object-cover block"
            />
          </ImageZoom>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black/0 to-black/80 text-white py-4 pointer-events-none">
            <h1 className="text-center text-3xl md:text-5xl font-black tracking-tighter">
              {name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
