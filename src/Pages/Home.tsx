import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";
import HeroVideo from "../components/HeroVideo";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import FadeInWhenVisibleLeft from "../components/FadeInWhenVisibleLeft";
import FadeInWhenVisibleRight from "../components/FadeInWhenVisibleRight";
import Footer from "../components/Footer";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <HeroVideo
        videoSrc="/Images/bcautoschristmas.MOV"
        overlay={false}
        className="w-full h-full object-cover flex items-center justify-center"
      />
    </div>
  );
};

function About() {
  return (
    <section
      id="about"
      className="bg-linear-to-b text-gray-900 dark:text-white my-8md:my-16 lg:my-20 scroll-mt-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center max-w-7xl mx-auto"
    >
      <FadeInWhenVisible>
        <h1 className="my-8 md:my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center px-2">
          ABOUT BC AUTOS
        </h1>
      </FadeInWhenVisible>

      <div className="font-body text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose px-2 sm:px-4">
        <FadeInWhenVisibleRight>
          <div className="mb-4 sm:mb-6 md:mb-8">
            <p className="mb-3 sm:mb-4 md:mb-6">
              BC Autos is a trusted automobile dealership based in Nigeria,
              with active operations in Enugu and Abuja. We specialize in
              providing high-quality vehicles including brand-new cars,
              Nigerian-used vehicles, and Direct Belgium (Tokunbo) imports.
            </p>
            <p className="mb-12 sm:mb-16 md:mb-20">
              Every vehicle we offer is carefully inspected to ensure
              reliability, durability, and value. Our commitment is to make car
              ownership simple, transparent, and stress-free for our customers
              across Nigeria.
            </p>
          </div>
        </FadeInWhenVisibleRight>

        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <FadeInWhenVisibleLeft>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 sm:mb-6">
              Mission
            </h2>
          </FadeInWhenVisibleLeft>
          <FadeInWhenVisibleRight>
            <p className="px-2 sm:px-4 md:px-6">
              Our mission is to provide reliable, high-quality vehicles at fair
              and transparent prices, while delivering exceptional customer
              service that builds long-term trust and satisfaction. We aim to
              make the car-buying experience smooth, honest, and accessible for
              everyone.
            </p>
          </FadeInWhenVisibleRight>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <FadeInWhenVisibleLeft>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 sm:mb-6">
              Vision
            </h2>
          </FadeInWhenVisibleLeft>
          <FadeInWhenVisibleRight>
            <p className="px-2 sm:px-4 md:px-6">
              Our vision is to become one of Nigeria's most trusted and
              recognized automobile dealerships, known for integrity, quality
              vehicles, and customer-first service. We aspire to set the
              standard for excellence in car sales across Enugu, Abuja, and
              beyond.
            </p>
          </FadeInWhenVisibleRight>
        </div>

        <div className="my-8 sm:my-12 md:my-16 lg:my-20">
          <FadeInWhenVisibleLeft>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 sm:mb-6">
              Why Choose BC Autos
            </h2>
          </FadeInWhenVisibleLeft>

          <div className="font-body flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-14 justify-center items-center">
            <FadeInWhenVisibleRight>
              <div className="w-96 h-72 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl shadow-blue-500 rounded-3xl hover:-translate-y-2.5">
                <h2 className="text-lg pt-8 sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-4 sm:mb-6">Extensivity</h2>
                <p className="p-5 mb-2 sm:mb-3">Wide selection of new, Nigerian-used, and Tokunbo (Belgium) cars</p>
              </div>
            </FadeInWhenVisibleRight>

            <FadeInWhenVisibleRight>
              <div className="w-96 h-72 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl shadow-blue-500 rounded-3xl hover:-translate-y-2.5">
                <h2 className="text-lg pt-8 sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-4 sm:mb-6">Visibility</h2>
                <p className="p-5 mb-2 sm:mb-3">Presence in Enugu and Abuja</p>
              </div>
            </FadeInWhenVisibleRight>

            <FadeInWhenVisibleLeft>
              <div className="w-96 h-72 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl shadow-blue-500 rounded-3xl hover:-translate-y-2.5">
                <h2 className="text-lg pt-8 sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-4 sm:mb-6">Certified</h2>
                <p className="p-5 mb-2 sm:mb-3">Carefully inspected and dependable vehicles</p>
              </div>
            </FadeInWhenVisibleLeft>
            </div>

            <div className="mt-10 font-body flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-14 justify-center items-center">
              <FadeInWhenVisibleRight>
              <div className="w-96 h-72 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl shadow-blue-500 rounded-3xl hover:-translate-y-2.5">
                <h2 className="text-lg pt-8 sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-4 sm:mb-6">Transparency</h2>
                <p className="p-5 mb-2 sm:mb-3">Honest pricing with no hidden charges</p>
              </div>
              </FadeInWhenVisibleRight>

              <FadeInWhenVisibleLeft>
              <div className="w-96 h-72 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl shadow-blue-500 rounded-3xl hover:-translate-y-2.5">
                <h2 className="text-lg pt-8 sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-4 sm:mb-6">Comprehensive</h2>
                <p className="p-5">Dedicated customer support before and after purchase</p>
              </div>
              </FadeInWhenVisibleLeft>

          </div>
        </div>

        <FadeInWhenVisible>
          <p className="mt-16 sm:mt-20 md:mt-24 font-body text-lg sm:text-xl md:text-2xl lg:text-3xl">
            <span className="font-bold">BC Autos</span> — Drive with confidence.
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="bg-linear-to-b text-gray-900 dark:text-white flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 transition-colors duration-300 scroll-mt-20 max-w-7xl mx-auto"
    >
      <FadeInWhenVisible>
        <h1 className="my-8 md:my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center px-2">
          SERVICES
        </h1>
      </FadeInWhenVisible>

      <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-14 justify-center items-center">
        <FadeInWhenVisibleRight>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="/Images/bc-autosF5.PNG"
              alt="BC autos services showing car selection"
              className="w-full h-auto aspect-square object-contain rounded-2xl sm:rounded-3xl shadow-lg shadow-black dark:shadow-white"
            />
          </div>
        </FadeInWhenVisibleRight>

        <FadeInWhenVisibleRight>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="/Images/bc-autosF4.PNG"
              alt="BC autos services showcasing vehicles"
              className="w-full h-auto aspect-square object-contain rounded-2xl sm:rounded-3xl shadow-lg shadow-yellow-400"
            />
          </div>
        </FadeInWhenVisibleRight>

        <FadeInWhenVisibleLeft>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="/Images/bc-autosF3.PNG"
              alt="BC autos automobile dealership"
              className="w-full h-auto aspect-square object-contain rounded-2xl sm:rounded-3xl shadow-lg shadow-blue-500"
            />
          </div>
        </FadeInWhenVisibleLeft>
      </div>

      <h2 className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-body font-semibold px-2 sm:px-4">
        I DEAL ON ANYTHING CARS: NEW, NIGERIAN USED, DIRECT BELGIUM/TOKUNBO.
      </h2>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-linear-to-b text-gray-900 dark:text-white flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 transition-colors duration-300 max-w-7xl mx-auto"
    >
      <FadeInWhenVisible>
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 sm:mb-6">
            CONTACT
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-4 md:px-6">
            Visit my socials to see the cars currently available for sale.{" "}
            <br className="hidden sm:block" />
            Contact me through the following links — let me know how to serve
            you better.
          </p>
        </div>
      </FadeInWhenVisible>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-20 xl:gap-28">
        <FadeInWhenVisibleRight>
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img
              src="/Images/bcautoschristmas.PNG"
              className="w-full h-full rounded-xl object-cover border-4 shadow-xl shadow-blue-600"
              alt="BC Autos Logo"
            />
          </div>
        </FadeInWhenVisibleRight>

        <FadeInWhenVisibleLeft>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 text-2xl sm:text-3xl md:text-4xl mt-6 sm:mt-8">
              <a
                href="mailto:benchrisike@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition p-2"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.facebook.com/share/1836nQVzqW/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition p-2"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/bc_autos1?igsh=MTE0a3d4aTZlc2hocQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition p-2"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@bc_autos?_r=1&_t=ZS-92H0U7uDqMh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition p-2"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="tel:+2349166226690"
                className="hover:text-green-600 transition p-2"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </div>
            <h1 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-center mt-6 sm:mt-8">
              BC AUTOS <br />
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-4 md:px-6">
              This is a New Year, make the most of it.
            </p>
          </div>
        </FadeInWhenVisibleLeft>
      </div>
    </section>
  );
}

const Home: React.FC = () => {
  return (
    <div className="m-0 overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;