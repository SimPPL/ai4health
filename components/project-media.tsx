// components/ProjectMedia.tsx
"use client";

import { useEffect, useRef } from "react";

type Project = {
  title?: string;
  heroMedia?: { type: "video" | "image"; src: string } | null;
  heroImage?: string | null;
};

export default function ProjectMedia({ project }: { project: Project }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // initial opacity
    el.style.opacity = "1";

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const height = Math.max(rect.height, 1);
      // opacity goes from 1 -> 0 as the bottom moves up; tweak 1.25 to change fade length
      const opacity = Math.max(0, Math.min(1, rect.bottom / (height * 1.25)));
      el.style.opacity = String(opacity);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const src =
    project.heroMedia?.src ??
    project.heroImage ??
    "/placeholder.svg?height=600&width=1200";

  return (
    <div
      ref={wrapperRef}
      className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl transition-opacity duration-300 ease-out"
    >
      {project.heroMedia?.type === "video" ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          // preload metadata so it can show quickly
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={src}
          alt={project.title ?? "project media"}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
