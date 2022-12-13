import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import {
  barbershopInfo,
  logo,
} from "../src/data/constants"
import {
  Hero,
  Navbar,
  Services,
  About,
  Footer,
  Logo,
  Gallery,
  Socials,
  BookNow,
} from "../src/components";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gradient-dark py-8">
      <Head>
        <title>{barbershopInfo.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR========================================================================================== */}
      <div className="py-4 z-10 flex justify-between px-10 items-center bg-background bg-opacity-50 backdrop-blur-md w-11/12 rounded-t-[45px] ">
        <Navbar />
      </div>
      {/* NAVBAR========================================================================================== */}

      {/* HERO SECTION==================================================================================== */}
      <div className="mt-10 py-4 flex justify-center items-center bg-background bg-opacity-80 text-black backdrop-blur-md w-11/12  ">
        <div className="flex justify-center items-center py-4 px-4 w-full">
          <Hero />
        </div>
      </div>
      {/* HERO SECTION==================================================================================== */}

      {/* Socials========================================================================================*/}
      <div id="TheEstablishment" className="py-4 mt-10 z-10 flex flex-col px-2 md:px-10 items-center bg-background bg-opacity-80 backdrop-blur-md w-11/12 rounded-br-[45px] ">
        <h1 className="lg:text-8xl sm:text-6xl text-4xl text-center font-zilla font-bold py-6">
          <Logo name={logo.establishment} />
        </h1>

        <Socials />
      </div>

      {/* Socials========================================================================================*/}

      {/* Gallery SECTION==================================================================================== */}
      <div
        id="Gallery"
        className="mt-10 py-4 flex justify-center items-center bg-background bg-opacity-80 text-black backdrop-blur-md w-11/12 rounded-br-[45px] "
      >
        <div className="flex justify-center items-center py-4 px-2 md:px-10 w-full">
          <Gallery />
        </div>
      </div>
      {/* Gallery SECTION==================================================================================== */}

      {/* SERVICES======================================================================================== */}

      <div
        id="Services"
        className="mt-10 py-4 flex flex-col justify-center items-center bg-background bg-opacity-80 text-black backdrop-blur-md w-11/12 "
      >
        <h1 className="lg:text-8xl sm:text-6xl text-4xl  font-zilla font-bold py-6">
          <Logo name="SERVICES" />
        </h1>
        <Services />
      </div>

      {/* SERVICES========================================================================================*/}
      {/* About======================================================================================== */}

      <div
        id="About"
        className="mt-10 py-4 flex flex-col justify-center items-center bg-background bg-opacity-80 text-black backdrop-blur-md w-11/12 "
      >
        <h1 className="lg:text-8xl sm:text-6xl text-4xl font-zilla font-bold py-6">
          <Logo name="ABOUT" />
        </h1>
        <About />
        <div className=" flex justify-center items-center p-10 md:text-7xl text-3xl">
          <BookNow />
        </div>
      </div>

      {/* About========================================================================================*/}
      {/* FOOTER========================================================================================*/}
      <div className="py-4 mt-10 z-10 flex justify-between sm:px-8 items-center bg-background bg-opacity-80 backdrop-blur-md w-11/12 rounded-b-[45px] ">
        <Footer />
      </div>

      {/* FOOTER========================================================================================*/}
    </div>
  );
};

export default Home;
