import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import roadmapsData from "./roadmaps.json";

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
            <div className="inner">Add Roadmap</div>
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

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: "Check out this Open Source opportunity!",
        text: "Join the Open Source Program and contribute to amazing projects.",
        url: url,
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  } else {
    alert("Web Share API is not supported in your browser.");
  }
};

const Hero = () => {
  return (
    <section className="hero-section mb-0 flex min-h-[10vh] flex-col items-center justify-center text-white">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <div className="my-6"></div>
        <StyledWrapper>
          <div className="modgp relative inline-block w-full py-3">
            <div className="relative">
              <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                <div className="flex w-full items-center justify-center text-5xl sm:text-6xl md:text-6xl lg:text-6xl">
                  Guided Roadmaps
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
    </section>
  );
};

const Tags = () => {
  const tags = [
    // 🧠 Core Tech Roles
    "Frontend",
    "Backend",
    "Full Stack",
    "DevOps",
    "AI Engineer",
    "Data Analyst",
    "AI and Data Scientist",
    "MLOps",
    "QA",
    "Software Architect",
    "Cyber Security",
    "Blockchain",
    "Technical Writer",
    "Product Manager",
    "Developer Relations",
    "Engineering Manager",

    // 📱 Platform-Specific
    "Android",
    "iOS",
    "Game Developer",
    "UX Design",

    // 🧰 Tools & Stack Specific
    "PostgreSQL",
    "MongoDB",
    "Docker & Kubernetes",

    // 🎓 Core/Branch Specific
    "GATE CSE",
    "GATE EE",
    "GATE ME",
    "GATE CH",
    "Electrical Core",
    "Mechanical Core",
    "Chemical Core",

    // 🌍 Non-Tech/Hybrid
    "Management",
    "Entrepreneurship",
    "Consulting",
    "Digital Marketing",
    "Finance & Analyst Roles",

    // 🚀 Special
    "New",
    "Beginner Friendly",
    "Career Switchers",
  ];

  return (
    <section id="tags" className="mb-0 w-full pt-12 sm:py-16">
      <h4 className="text-md text-primary font-lg mb-8 text-center text-[#00fb69] lg:text-2xl">
        Discover Roadmaps to Shape Your Future!
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
    background-color: rgba(15, 53, 19, 0);
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

const RoadmapCard = ({ field, icon, roadmapsForField }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="roadmap-card mx-auto mb-6 overflow-hidden rounded-xl border border-green-700 bg-gradient-to-r from-[#0f3513]/40  to-[#163e00]/40 transition-all duration-300 hover:border-green-400"
      style={{ width: "100%", maxWidth: "1300px" }}
    >
      {/* Field Card Header */}
      <div
        className="field-header flex cursor-pointer items-center justify-between bg-[rgba(13,53,40,0.6)] p-5"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-bold text-white">{field}</h3>
        </div>
        <span className="expand-icon text-xl text-[#00fb69]">
          {isExpanded ? "▼" : "▶"}
        </span>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="roadmap-detail bg-[#092413]">
          {roadmapsForField.map((roadmap, idx) => (
            <React.Fragment key={idx}>
              {/* Senior Info */}
              <div className="senior-info flex items-center justify-between gap-4 border-b border-[rgba(182,250,184,0.2)] p-5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white">
                    <img
                      src={roadmap.senior.avatar}
                      alt={roadmap.senior.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {roadmap.senior.name}
                    </h4>
                    <p className="text-[#00fb69]">{roadmap.senior.role}</p>
                  </div>
                </div>
                {roadmap.senior.socialId && roadmap.senior.socialUrl && (
                  <a
                    href={roadmap.senior.socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-10 whitespace-nowrap text-lg text-blue-400 hover:underline"
                    style={{ marginLeft: "auto" }}
                  >
                    {roadmap.senior.socialId}
                  </a>
                )}
              </div>

              {/* Roadmap Content */}
              <div className="roadmap-content max-h-[400px] overflow-y-auto p-5">
                <h4 className="mb-4 text-lg font-bold text-[#00fb69]">
                  Learning Path:
                </h4>

                {roadmap.stages.map((stage, index) => (
                  <div key={index} className="mb-6">
                    <div className="stage-header mb-3 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#00fb69]">
                        <span className="text-sm font-bold text-[#092413]">
                          {index + 1}
                        </span>
                      </div>
                      <h5 className="text-lg font-semibold text-white">
                        {stage.title}
                      </h5>
                    </div>

                    <ul className="ml-12 space-y-2">
                      {stage.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="mr-2 mt-1 text-[#00fb69]">•</span>
                          <span className="text-white">{topic}</span>
                        </li>
                      ))}
                    </ul>

                    {stage.resources && stage.resources.length > 0 && (
                      <div className="ml-12 mt-3">
                        <h6 className="mb-2 text-sm font-semibold text-[#00fb69]">
                          Resources:
                        </h6>
                        <ul className="space-y-1">
                          {stage.resources.map((resource, resIndex) => (
                            <li key={resIndex} className="flex">
                              <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 hover:underline"
                              >
                                {resource.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* External Resources */}
              <div className="external-resources border-t border-[rgba(182,250,184,0.2)] p-5">
                <h4 className="mb-3 text-lg font-bold text-[#00fb69]">
                  External Resources:
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {roadmap.externalResources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-lg border border-[#00fb69] bg-[rgba(0,251,105,0.1)] p-3 text-center text-white transition-all hover:bg-[rgba(0,251,105,0.2)]"
                    >
                      {resource.name}
                    </a>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

const RoadmapsGrid = () => {
  // Group roadmaps by unique field (case-insensitive, trimmed)
  const uniqueFields = Array.from(
    new Set(roadmapsData.map((r) => r.field.trim().toLowerCase())),
  );
  return (
    <section className="roadmaps-section mx-auto w-full px-2 py-10">
      <div className="flex w-full flex-col items-center gap-4">
        {uniqueFields.map((fieldKey) => {
          // Find the first roadmap with this field for icon and display name
          const roadmapsForField = roadmapsData.filter(
            (r) => r.field.trim().toLowerCase() === fieldKey,
          );
          const { icon, field } = roadmapsForField[0];
          return (
            <RoadmapCard
              key={fieldKey}
              field={field}
              icon={icon}
              roadmapsForField={roadmapsForField}
            />
          );
        })}
      </div>
    </section>
  );
};

const ROLE_BASED_ROADMAPS = [
  { label: "Frontend", url: "https://roadmap.sh/frontend" },
  { label: "Backend", url: "https://roadmap.sh/backend" },
  { label: "DevOps", url: "https://roadmap.sh/devops" },
  { label: "Full Stack", url: "https://roadmap.sh/full-stack" },
  { label: "AI Engineer", url: "https://roadmap.sh/ai-engineer" },
  { label: "Data Analyst", url: "https://roadmap.sh/data-analyst" },
  {
    label: "AI and Data Scientist",
    url: "https://roadmap.sh/ai-data-scientist",
  },
  { label: "Android", url: "https://roadmap.sh/android" },
  { label: "iOS", url: "https://roadmap.sh/ios" },
  { label: "PostgreSQL", url: "https://roadmap.sh/postgresql" },
  { label: "Blockchain", url: "https://roadmap.sh/blockchain" },
  { label: "QA", url: "https://roadmap.sh/qa" },
  { label: "Software Architect", url: "https://roadmap.sh/software-architect" },
  { label: "Cyber Security", url: "https://roadmap.sh/cyber-security" },
  { label: "UX Design", url: "https://roadmap.sh/ux-design" },
  { label: "Game Developer", url: "https://roadmap.sh/game-developer" },
  { label: "Technical Writer", url: "https://roadmap.sh/technical-writer" },
  { label: "MLOps", url: "https://roadmap.sh/mlops" },
  { label: "Product Manager", url: "https://roadmap.sh/product-manager" },
  {
    label: "Engineering Manager",
    url: "https://roadmap.sh/engineering-manager",
  },
  {
    label: "Developer Relations",
    url: "https://roadmap.sh/developer-relations",
  },
];

const RoleBasedRoadmaps = () => (
  <section className="w-full px-4 py-12">
    <h2 className="mb-8 text-center text-2xl font-bold text-[#00fb69]">
      Role-based Roadmaps
    </h2>
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {ROLE_BASED_ROADMAPS.map((role) => (
        <a
          key={role.label}
          href={role.url}
          target="_blank"
          rel="noopener noreferrer"
          //   className="flex h-24 items-center justify-center rounded-xl border border-[#00fb69] bg-[#0d3528] text-lg font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-[#092413] hover:text-[#00fb69]"
          className="font-regular text-md group relative block overflow-hidden rounded-lg border border-green-700 bg-gradient-to-r from-[#0f3513]/40 to-[#163e00]/40  p-2.5 text-slate-400 no-underline hover:border-green-400 hover:text-slate-100 sm:p-3.5"
        >
          {role.label}
        </a>
      ))}
    </div>
  </section>
);
const Roadmaps = () => {
  const location = useLocation();
  // Modal state for Add Roadmap
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="background-wrapper min-h-screen bg-green-900">
      <Navbar onOpenModal={handleOpenModal} />
      <Hero />
      <Tags />
      {/* Info message about dummy data */}
      <div className="mx-auto my-6 max-w-3xl rounded-lg border border-yellow-400 bg-yellow-100 bg-opacity-10 px-6 py-4 text-center text-lg font-semibold text-yellow-300 shadow">
        These are sample roadmaps for now — the real ones will be added shortly.
      </div>
      <RoadmapsGrid />
      <RoleBasedRoadmaps />
      {/* Modal for Add Roadmap */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-[#092413] p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#cffab6]">
                Are You a Senior? Share Your Roadmap!
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-[#cffab6] hover:text-white"
              >
                X
              </button>
            </div>
            <iframe
              src="https://tally.so/r/3x7WWE"
              width="100%"
              height="500px"
              frameBorder="0"
              title="Tally Form"
              className="rounded-lg"
            ></iframe>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-lg bg-[#00fb69] px-4 py-2 text-black transition-colors hover:bg-[#4c6d4a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Roadmaps;
