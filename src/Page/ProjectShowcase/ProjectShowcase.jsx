import React, { useState, useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import projectsData from "./projectShowcase.json";
import styled from "styled-components";
import { ArrowLeft } from "lucide-react";
import Marquee from "react-fast-marquee";

const Navbar = ({ onOpenModal }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[rgba(20,47,33,0.1)] bg-[#0d3528] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/home">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-[#092413]">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>
        </a>
        <div className="flex items-center justify-center">
          <StyledButton onClick={onOpenModal}>
            <div className="blob1" />
            <div className="inner">Add Your Project!</div>
          </StyledButton>
        </div>
        <div className="text-2xl font-bold">
          <img
            src="./RGVerse ICON.png"
            alt="RGVerse"
            className="h-12 w-12"
            loading="lazy"
          />
        </div>
      </div>
    </nav>
  );
};
const StyledWrapper = styled.div`
  .relative {
    position: relative;
  }

  .inline-block {
    display: inline-block;
  }

  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  :backdrop {
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
  }

  .pointer-events-none {
    pointer-events: none;
  }

  .absolute {
    position: absolute;
  }

  .inset-0 {
    inset: 0;
  }

  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    width: 300px !important;
  }

  button {
    text-transform: none;
  }

  button {
    cursor: pointer;
  }

  .inline-flex {
    display: inline-flex;
  }

  .justify-center {
    justify-content: center;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgba(15, 27, 53, 0);
  }

  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .py-2\.5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .font-medium {
    font-weight: 500;
  }

  .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  #style-AQliM.style-AQliM {
    top: 1%;
    left: 99%;
  }
  #style-WCb99.style-WCb99 {
    top: 7%;
    left: 1%;
  }
  #style-dBNZV.style-dBNZV {
    top: 93%;
    left: 23%;
  }
  #style-tiisO.style-tiisO {
    top: 43%;
    left: 15%;
  }
  #style-re9B7.style-re9B7 {
    top: 93%;
    left: 9%;
  }
  #style-BKG4G.style-BKG4G {
    top: 21%;
    left: 88%;
  }
  #style-NaoVe.style-NaoVe {
    top: 99%;
    left: 95%;
  }
  #style-pwIlv.style-pwIlv {
    top: 64%;
    left: 99%;
  }
  #style-QmcAd.style-QmcAd {
    top: 14%;
    left: 45%;
  }
  #style-VG2eL.style-VG2eL {
    top: 2%;
    left: 48%;
  }

  /* Keyframes for sparkle animation */
  @keyframes sparkle {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* Add animation to sparkle elements */
  .animate-magic-sparkle {
    animation: sparkle 2s infinite;
  }

  .style-AQliM {
    animation-delay: 0.5s;
  }
  .style-WCb99 {
    animation-delay: 0.33s;
  }
  .style-dBNZV {
    animation-delay: 0.6s;
  }
  .style-tiisO {
    animation-delay: 0.9s;
  }
  .style-re9B7 {
    animation-delay: 1.2s;
  }
  .style-BKG4G {
    animation-delay: 1.5s;
  }
  .style-NaoVe {
    animation-delay: 1.8s;
  }
  .style-pwIlv {
    animation-delay: 1.9s;
  }
  .style-QmcAd {
    animation-delay: 1.4s;
  }
  .style-VG2eL {
    animation-delay: 1.7s;
  }
`;

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search projects..."
        onChange={(e) => onSearch(e.target.value)}
        className="bg-white-100 w-full rounded-lg px-4 py-2 pl-10 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00fb69]"
      />
      <svg
        className="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

const StyledProjectCard = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(207, 250, 182);
  background: linear-gradient(
    to right,
    rgba(35, 53, 15, 0.44),
    rgba(0, 62, 28, 0.43)
  );
  border-radius: 0.5rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 4, 0.6);
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 0;
    top: 0;
    animation: moveDot 6s linear infinite;
  }
  .font-handwritten {
    font-family: "Comic Neue", cursive;
  }

  @keyframes moveDot {
    0% {
      top: 0;
      right: 0;
    }
    25% {
      top: 0;
      right: calc(100% - 5px);
    }
    50% {
      top: calc(100% - 5px);
      right: calc(100% - 5px);
    }
    75% {
      top: calc(100% - 5px);
      right: 0;
    }
    100% {
      top: 0;
      right: 0;
    }
  }

  @media (max-width: 640px) {
    height: 320px;
    padding: 0.75rem;
    .space-y-4 > * + * {
      margin-top: 0.75rem !important;
    }
    .h-8 {
      height: 2.2rem !important;
      width: 2.2rem !important;
    }
    .h-40 {
      height: 160px !important;
    }
    .text-xl {
      font-size: 1.25rem !important;
    }
    .text-base {
      font-size: 1.05rem !important;
    }
    .text-lg {
      font-size: 1.15rem !important;
    }
    .px-4 {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
    .py-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .px-3 {
      padding-left: 0.7rem !important;
      padding-right: 0.7rem !important;
    }
    .py-1 {
      padding-top: 0.3rem !important;
      padding-bottom: 0.3rem !important;
    }
    .rounded-md {
      border-radius: 0.5rem !important;
    }
    .rounded-lg {
      border-radius: 0.7rem !important;
    }
    .font-handwritten {
      font-size: 1.1rem !important;
    }
    .p-4 {
      padding: 0.75rem !important;
    }
    button,
    .text-sm {
      font-size: 1rem !important;
    }
    .gap-2 {
      gap: 0.6rem !important;
    }
  }
`;

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  padding: 1px;
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b19);
  position: relative;
  transition:
    background 0.3s,
    transform 0.3s;
  animation: zoom 3s ease-in-out infinite;
  margin-top: 16px;

  &:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  &::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
    transition: box-shadow 0.3s;
  }

  &:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 50px;
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #00ff91,
      #228504,
      transparent
    );
    box-shadow: -10px 10px 30px #00ff482d;
    transition:
      background 0.3s,
      box-shadow 0.3s;
  }

  &:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 10px 20px;
    border-radius: 12px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f110f);
    transition: background 0.3s;
  }

  &:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #33ff001a,
      #00ff2f11,
      transparent
    );
    position: absolute;
    transition: opacity 0.3s;
  }

  &:hover .inner::before {
    opacity: 0;
  }

  @keyframes zoom {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const Tags = () => {
  const tags = [
    "Google Summer of Code",
    "MLH Fellowship",
    "Linux Kernel Mentorship Program",
    "Outreachy",
    "Hacktoberfest",
    "Google Summer of Earth Engine",
    "Millennium Fellowship",
    "Season of Docs",
    "Redox Summer of Code",
    "Hyperledger Internship Program",
    "FOSSASIA Internship Programme",
    "Processing Foundation Fellowship",
    "Open Mainframe Project Mentorship Program",
    "Summer of Haskell",
    "Free Software Foundation Internship",
    "Mozilla Open Source Support Program",
    "24 Pull Requests",
    "GirlScript Summer of Code",
    "Social Summer of Code",
    "KOSS Winter of Code",
    "Apache Software Foundation Mentorship",
    "Red Hat Open Source Contest",
    "Script Winter of Code",
    "DevScript Winter of Code",
    "LetsGrowMore Summer of Code",
    "CodePeak",
    "Delta Winter of Code",
    "PClub Summer of Code",
    "NJACK Winter of Code",
    "Amrita InCTF Open",
    "OpenCode",
    "Hack In The North Open Source Program",
    "IIT-BHU Open Source Program",
  ];

  return (
    <section id="tags" className="mb-0 w-full pt-12 sm:py-16">
      <h4 className="text-md text-primary font-lg mb-8 text-center text-[#00fb69] lg:text-2xl">
        Explore the World of Open Source Opportunities!
      </h4>
      {/* Right to Left Scrolling */}
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        loop={0}
        className="w-full"
      >
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>
      <div className="my-4"></div>
      {/* Left to Right Scrolling */}
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        loop={0}
        direction="right"
        className="w-full"
      >
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>
      <style jsx>{`
        .tag-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid #00fb69;
          background-color: rgba(13, 53, 40, 0.6);
          color: #e2e8f0;
          font-size: 0.915rem;
          text-align: center;
          min-width: max-content;
        }
      `}</style>
    </section>
  );
};

const ProjectShowcase = ({ isModalOpen, setIsModalOpen }) => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const shuffledProjects = shuffleArray(projectsData); // Shuffle projects
    setProjects(shuffledProjects); // Load shuffled projects from JSON file
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <div className="my-4"></div>
        <StyledWrapper>
          <div className="modgp relative inline-block w-full py-3">
            <div className="relative">
              <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                <div className="flex w-full items-center justify-center">
                  Project Showcase
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0">
              <StyledWrapper>
                <div className="modgp relative inline-block w-full py-3">
                  <div className="relative">
                    <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                      <div className="flex w-full items-center justify-center">
                        Project Showcase
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      id="style-AQliM"
                      className="animate-magic-sparkle style-AQliM pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={8}
                        width={8}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="style-WCb99"
                      className="animate-magic-sparkle style-WCb99 pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={11}
                        width={11}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="style-dBNZV"
                      className="animate-magic-sparkle style-dBNZV pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={9}
                        width={9}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="style-tiisO"
                      className="animate-magic-sparkle style-tiisO pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={8}
                        width={8}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="style-re9B7"
                      className="animate-magic-sparkle style-re9B7 pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={11}
                        width={11}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="style-BKG4G"
                      className="animate-magic-sparkle style-BKG4G pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={7}
                        width={7}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="style-NaoVe"
                      className="animate-magic-sparkle style-NaoVe pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={8}
                        width={8}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="style-pwIlv"
                      className="animate-magic-sparkle style-pwIlv pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={11}
                        width={11}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="style-QmcAd"
                      className="animate-magic-sparkle style-QmcAd pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={7}
                        width={7}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="style-VG2eL"
                      className="animate-magic-sparkle style-VG2eL pointer-events-none absolute z-10"
                    >
                      <svg
                        style={{
                          filter: "drop-shadow(rgb(99, 250, 96) 0px 0px 2px)",
                        }}
                        fill="none"
                        viewBox="0 0 68 68"
                        height={11}
                        width={11}
                        className="animate-spin-slow"
                      >
                        <path
                          fill="white"
                          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </StyledWrapper>
            </div>
          </div>
        </StyledWrapper>
        <div className="my-6"></div>
      </div>
      <div className="mb-8 flex justify-center">
        <div className="w-64">
          <SearchBar onSearch={setSearchTerm} />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-[#092413] p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#cffab6]">
                Feature Your Project on RGVerse!
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#cffab6] hover:text-white"
              >
                X
              </button>
            </div>
            <iframe
              src="https://tally.so/r/nW6ZyP"
              width="100%"
              height="500px"
              frameBorder="0"
              title="Tally Form"
              className="rounded-lg"
            ></iframe>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg bg-[#cffab6] px-4 py-2 text-black transition-colors hover:bg-[#4c6d4a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};
const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <StyledProjectCard className="rounded-lg p-4 shadow-md">
      {!showDetails ? (
        // ======== FRONT VIEW ========
        <div className="space-y-4">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={project.profilePic}
                className="h-8 w-8 rounded-full border border-[#cffab6]"
                alt="Profile"
                loading="lazy"
              />
              <span className="font-semibold text-white">{project.author}</span>
            </div>
            <button
              onClick={() => setShowDetails(true)}
              className="rounded-md border border-[#cffab6] px-3 py-1 text-sm text-white transition hover:bg-green-100 hover:text-black"
            >
              See Detail
            </button>
          </div>

          {/* Project Image */}
          <div className="h-40 w-full overflow-hidden rounded-md">
            <img
              src={project.screenshot}
              alt="Project"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Project Name */}
          <div className="font-handwritten mb-2 mt-2 flex w-full items-center justify-between text-xl text-white">
            <span>{project.title}</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-1000 ml-4 flex items-center rounded-full rounded-lg border border-[#cffab6] px-4 py-2 text-[#cffab6]"
              title="View Project"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.split(",").map((tag, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-md border border-[#cffab6] px-3 py-1 text-xs text-white"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      ) : (
        // ======== BACK VIEW ========
        <div className="flex h-full flex-col justify-between space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={project.profilePic}
                className="h-8 w-8 rounded-full border border-white"
                alt="Profile"
                loading="lazy"
              />
              <span className="font-semibold text-white">{project.author}</span>
            </div>
            <button
              onClick={() => setShowDetails(false)}
              className="text-xl text-white"
            >
              ✕
            </button>
          </div>

          {/* Description */}
          <div>
            <h3
              className="mb-2 text-lg font-bold text-white"
              style={{ fontSize: "1.35rem" }}
            >
              Project Description
            </h3>
            <p className="font-handwritten whitespace-pre-line text-base text-white">
              {project.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white"
            >
              <i className="fab fa-github text-xl" />
              View on GitHub
            </a>
            <a
              href={`https://github.com/${project.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              @{project.githubUsername}
            </a>
          </div>
        </div>
      )}
    </StyledProjectCard>
  );
};

const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="background-wrapper1 flex min-h-screen flex-col bg-gray-900">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <div className="flex-grow">
        <ProjectShowcase
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <Footer onOpenModal={() => setIsModalOpen(true)} />
    </div>
  );
};

export default ProjectsPage;
