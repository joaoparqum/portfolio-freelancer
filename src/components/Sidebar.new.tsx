"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

const SidebarHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <Link href="/" className="flex items-center space-x-3">
        <div className="relative">
          <Image
            src="/images/perfil.jpeg"
            alt="Avatar"
            height="48"
            width="48"
            className="rounded-full object-cover object-top ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105"
          />
          <motion.div 
            className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/20 to-white/5 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
            initial={false}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium text-white group-hover:text-primary transition-colors duration-300">João P. Arquim</h2>
          <p className="text-sm text-white/50">Fullstack Developer</p>
        </div>
      </Link>
    </motion.div>
  );
};

const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col space-y-1 my-10 relative z-[100]"
    >
      {navlinks.map((link: Navlink, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96]
          }}
        >
          <Link
            href={link.href}
            onClick={() => isMobile() && setOpen(false)}
            className={twMerge(
              "text-white/80 hover:text-white transition-all duration-300 flex items-center space-x-3 py-2.5 px-4 rounded-lg text-sm relative group",
              isActive(link.href) && "bg-gradient-to-r from-primary/20 to-primary/10 text-white font-medium"
            )}
          >
            <div className={twMerge(
              "absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-300",
              "group-hover:opacity-100"
            )} />
            <link.icon
              className={twMerge(
                "h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                isActive(link.href) ? "text-primary" : "text-white/70"
              )}
            />
            <span className="relative z-10">{link.label}</span>
            {isActive(link.href) && (
              <div className="absolute left-0 w-1 h-full bg-primary rounded-full" />
            )}
          </Link>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Heading as="p" className="text-neutral-300/70 text-xs uppercase tracking-wider font- pt-10 px-4">
          Redes Sociais
        </Heading>
      </motion.div>

      {socials.map((link: Navlink, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: (index + navlinks.length) * 0.1,
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96]
          }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
              "text-white/70 hover:text-white transition-all duration-300 flex items-center space-x-3 py-2.5 px-4 rounded-lg text-sm group",
              "hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent"
            )}
          >
            <link.icon
              className={twMerge(
                "h-4 w-4 flex-shrink-0 transition-all duration-300",
                "group-hover:scale-110 group-hover:text-primary"
              )}
            />
            <span>{link.label}</span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3
              }}
              className="px-6 z-[100] py-10 bg-gradient-to-b from-neutral-900/95 to-neutral-950/95 max-w-[16rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between border-r border-white/5 backdrop-blur-xl shadow-2xl shadow-black/20 lg:shadow-none"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-neutral-700/50 scrollbar-track-transparent hover:scrollbar-thumb-neutral-600 transition-colors"
              >
                <SidebarHeader />
                <Navigation setOpen={setOpen} />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => isMobile() && setOpen(false)}
                className="pt-6 border-t border-white/5"
              >
                <Badge href="/resume" text="Ler Currículo" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <motion.button
        initial={false}
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed lg:hidden bottom-4 right-4 h-12 w-12 bg-neutral-900/90 border border-white/10 rounded-full backdrop-blur-xl flex items-center justify-center z-50 shadow-lg shadow-black/20 hover:bg-neutral-800 transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-5 w-5 text-white/80" />
      </motion.button>
    </>
  );
};
