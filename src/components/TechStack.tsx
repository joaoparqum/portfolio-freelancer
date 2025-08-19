import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Spring",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      className: "h-8 w-12 sm:h-10 sm:w-14 hover:scale-110 transition-transform",
    },
    {
      title: "DOcean",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
      className: "h-8 w-8 sm:h-10 sm:w-10 hover:scale-110 transition-transform",
    },
    {
      title: "Vue.Js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      className: "h-8 w-8 sm:h-10 sm:w-10 hover:scale-110 transition-transform",
    },
    {
      title: "Nginx",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
      className: "h-8 w-8 sm:h-10 sm:w-10 hover:scale-110 transition-transform",
    },
    {
      title: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      className: "h-8 w-10 sm:h-10 sm:w-14 hover:scale-110 transition-transform",
    },
    {
      title: "Node",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      className: "h-8 w-10 sm:h-10 sm:w-12 hover:scale-110 transition-transform",
    },
    {
      title: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      className: "h-8 w-10 sm:h-10 sm:w-14 hover:scale-110 transition-transform",
    },
    {
      title: "Tailwind",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      className: "h-8 w-10 sm:h-10 sm:w-14 hover:scale-110 transition-transform",
    },
    /*{ 
      title: "Ant-Design",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-plain.svg",
      className: "h-10 w-14"
    }*/
  ];
  return (
    <div className="w-full">
      <Heading
        as="h2"
        className="text-neutral-400 font-black text-base sm:text-lg md:text-xl mb-6"
      >
        Tech Stack
      </Heading>
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6">
        {stack.map((item) => (
          <div key={item.title} className="group relative flex items-center justify-center">
            <Image
              src={item.src}
              width={80}
              height={80}
              alt={item.title}
              className={twMerge(
                "object-contain transition-all duration-300 hover:scale-110",
                item.className
              )}
            />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-neutral-400">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
