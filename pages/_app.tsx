import "../styles/globals.css";

import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BarberPole, Loader } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-hidden w-full h-full relative">
      <div className="bg-contrast absolute w-full h-full z-[100] 
      animate-loaderBg overflow-hidden pointer-events-none">
        <div className="flex justify-center items-center z-20 relative top-20">
          <div className="flex justify-center items-center">
            <div className="animate-loaderLeft">
            <BarberPole />
            </div>
            <div className="animate-loaderRight">
            <BarberPole />
            </div>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
