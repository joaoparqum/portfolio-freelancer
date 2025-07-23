import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Spring",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",

      className: "h-10 w-14",
    },
    {
      title: "Digital Ocean",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",

      className: "h-10 w-10",
    },
    {
      title: "Vue.Js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",

      className: "h-10 w-10",
    },
    {
      title: "Nginx",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",

      className: "h-10 w-10",
    },
    {
      title: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",

      className: "h-10 w-14",
    },
    {
      title: "Node",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",

      className: "h-10 w-12",
    },
    {
      title: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",

      className: "h-10 w-14",
    },
    {
      title: "Tailwind",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",

      className: "h-10 w-14",
    },
    /*{ 
      title: "Ant-Design",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-plain.svg",
      className: "h-10 w-14"
    }*/
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="text-neutral-400 font-black text-lg md:text-lg lg:text-lg mt-14 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
