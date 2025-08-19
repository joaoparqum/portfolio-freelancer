"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              key={product.href}
              className="group relative flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 hover:bg-white/5 rounded-xl transition-all duration-300 p-4 overflow-hidden"
            >
              <div className="relative w-full md:w-72 aspect-video md:aspect-square flex-shrink-0">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="rounded-lg object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <Heading
                    as="h4"
                    className="text-white font-black text-xl md:text-2xl group-hover:text-purple-400 transition-colors duration-300"
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-neutral-400 text-sm md:text-base mt-3 max-w-xl mb-4">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex flex-wrap gap-2 md:mb-1 mt-4">
                  {product.stack?.map((stack: string, index: number) => (
                    <span
                      key={stack}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-300 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  Visualizar projeto
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
