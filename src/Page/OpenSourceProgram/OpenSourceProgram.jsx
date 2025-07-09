import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faShareAlt,
  faCalendarAlt,
  faClock,
  faBookOpen,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[rgba(20,47,33,0.1)] bg-[#0d3528] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/home">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-[#092413]">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>
        </a>

        <div className="text-2xl font-bold">
          <img src="./RGVerse ICON.png" alt="RGVerse" className="h-12 w-12" />
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
                <div className="flex w-full items-center justify-center">
                  Open Source Display
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

const StyledOSProgramCard = styled.div`
  display: flex;
  flex-direction: column; /* Default to column for smaller screens */
  border: 1px solid rgb(182, 250, 184);
  background: linear-gradient(
    to right,
    rgba(15, 53, 19, 0.44),
    rgba(22, 62, 0, 0.43)
  );
  border-radius: 0.5rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 90%; /* Adjust width for better responsiveness */
  max-width: 800px;
  margin: 1rem auto;
  padding: 1rem;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px rgba(0, 255, 4, 0.6);
  }

  .poster {
    width: 100%; /* Full width for smaller screens */
    height: auto;
    flex-shrink: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;

    img {
      width: 100%; /* Ensure the image scales properly */
      max-height: 200px;
      object-fit: cover;
      display: block;
      border: 1px solid white;
      border-radius: 8px;
    }
  }

  .apply-button-wrapper {
    margin-top: 0.5rem;
    text-align: center; /* Center-align the button */

    .info-row {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 0.8rem;
      gap: 0.5rem;

      /* Timeline button styling */
      .timeline-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(0, 251, 105, 0.1);
        border: 1px solid #00fb69;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        color: white;
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.3s;

        &:hover {
          background: rgba(0, 251, 105, 0.2);
          transform: translateY(-2px);
        }
      }

      /* Stipend box styling */
      .stipend-box {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.9rem;
      }

      .stipend-yes {
        background-color: rgba(40, 167, 69, 0.2); /* Green background */
        border: 1px solid #28a745;
        color: #28a745;
      }

      .stipend-no {
        background-color: rgba(220, 53, 69, 0.2); /* Red background */
        border: 1px solid #dc3545;
        color: #dc3545;
      }
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: 1px solid rgb(0, 251, 46);
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      color: rgb(0, 251, 17);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.875rem;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(121, 251, 0, 0.2);
      }

      .status-user {
        width: 8px;
        height: 8px;
        margin-right: 8px;
        border-radius: 50%;
        outline: solid 2px #fff;
        background-color: rgb(17, 251, 0);
        animation: active-status 2s ease-in-out infinite;
      }

      @keyframes active-status {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.2;
        }
      }
    }
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #00fb69;
    background: rgba(0, 251, 105, 0.1);
    padding: 0.8rem 1rem;
    width: 100%;
    min-height: 50px;
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
      background: rgba(0, 251, 105, 0.2);
      transform: translateY(-2px);
    }
  }

  .explore-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    width: 100%;
    height: 100%;

    span {
      white-space: nowrap;
    }
  }

  .content {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .organizer {
      font-size: 1rem;
      font-weight: bold;
      color: white;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: rgba(105, 251, 0, 0.2);
      border: 1px solid rgb(100, 251, 0);
      border-radius: 0.5rem;
      padding: 0.4rem 0.8rem;
      color: white;
      font-size: 0.8rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(0, 251, 50, 0.4);
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h2 {
      color: white;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: white;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .info {
      display: grid;
      grid-template-columns: 1fr; /* Single column for smaller screens */
      gap: 0.5rem;
      font-size: 0.9rem;
      color: rgb(0, 251, 13);

      span,
      a {
        display: flex;
        align-items: center;

        svg {
          margin-right: 0.5rem;
          color: white;
        }
      }
    }
  }

  /* Responsive styles */
  @media (min-width: 768px) {
    flex-direction: row; /* Side-by-side layout for tablets and above */
    .poster {
      width: 300px; /* Fixed width for larger screens */
    }

    .details .info {
      grid-template-columns: repeat(
        2,
        1fr
      ); /* Two columns for medium screens */
    }
  }

  @media (min-width: 1024px) {
    .details h2 {
      font-size: 1.5rem; /* Larger title for desktops */
    }

    .details p {
      font-size: 1rem; /* Larger description for desktops */
    }

    .details .info {
      grid-template-columns: repeat(
        3,
        1fr
      ); /* Three columns for larger screens */
    }
  }
`;

const OSProgramCardComponent = ({
  organizer,
  title,
  description,
  timelineLink,
  stipend,
  exploreLink,
  applyLink,
  poster,
  shareLink,
}) => {
  const shareContent = (url) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  // Fixed stipend logic - handles both boolean and string values
  const hasStipend =
    stipend === true ||
    stipend === "true" ||
    stipend === "yes" ||
    stipend === "Yes";

  return (
    <StyledOSProgramCard id={shareLink.substring(1)}>
      <div className="poster">
        <img
          src={poster}
          alt={`${title} Poster`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/default.png";
          }}
        />
        <div className="apply-button-wrapper">
          <a href={applyLink} target="_blank" rel="noopener noreferrer">
            <div className="status-user" />
            Apply Now
          </a>
          <div className="info-row">
            <a
              href={timelineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="timeline-button"
            >
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-[#00fb69]"
              />
              <span>Timeline</span>
            </a>

            <div
              className={`stipend-box ${hasStipend ? "stipend-yes" : "stipend-no"}`}
            >
              <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />
              <span>Stipend: {hasStipend ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <span className="organizer">
            <FontAwesomeIcon icon={faFlag} className="mr-1 text-[#00fb69]" />{" "}
            {organizer}
          </span>
          <button
            onClick={() =>
              shareContent(window.location.href.split("#")[0] + shareLink)
            }
            className="bg-green-1000 hover:bg-slate-1000 flex items-center justify-center gap-2 rounded-xl border border-[#00fb69] bg-opacity-50 px-2 py-1 text-xs text-white backdrop-blur-md transition-colors"
          >
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
        </div>
        <div className="details flex flex-col items-center gap-4">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <p className="text-center text-sm text-green-300">{description}</p>
          <div className="info mt-2 flex flex-col items-center gap-1 rounded-lg border border-[#00fb69] bg-green-900 bg-opacity-50 px-14 py-3 text-sm text-white shadow-lg backdrop-blur-md transition-all hover:bg-green-800">
            <a
              href={exploreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="explore-button flex h-full w-full items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faBookOpen} className="text-[#00fb69]" />
              <span className="font-medium">Explore More</span>
            </a>
          </div>
        </div>
      </div>
    </StyledOSProgramCard>
  );
};

const OSProgramList = [
  {
    organizer: "Google",
    title: "Google Summer of Code",
    description:
      "Global 12‑week program where beginners contribute to open-source projects under mentorship and earn a stipend.",
    timelineLink: "https://developers.google.com/open-source/gsoc/timeline",
    stipend: "yes",
    type: "Student‑friendly, Open Source",
    exploreLink: "https://summerofcode.withgoogle.com/how-it-works/",
    applyLink: "https://summerofcode.withgoogle.com/",
    poster: "/assets/opensourceProgram/GSOC.png",
    shareLink: "#gsoc",
  },
  {
    organizer: "MLH",
    title: "MLH Fellowship Spring",
    description:
      "Remote 12‑week program to work on real open‑source projects with peers, mentors, and receive an educational stipend.",
    timelineLink: "https://fellowship.mlh.io/",
    stipend: "yes",
    type: "Student‑friendly, Open Source",
    exploreLink: "https://fellowship.mlh.io/programs/open-source",
    applyLink: "https://fellowship.mlh.io/",
    poster: "/assets/opensourceProgram/MLH.png",
    shareLink: "#mlhfellowship",
  },
  {
    organizer: "GirlScript Foundation",
    title: "GirlScript Summer of Code",
    description:
      "Three‑month summer program helping beginners contribute to open‑source projects, with mentorship, swag, and prizes.",
    timelineLink: "https://gssoc.girlscript.tech/#timeline",
    stipend: "no",
    type: "Student‑friendly, Open Source",
    exploreLink: "https://gssoc.girlscript.tech/",
    applyLink: "https://gssoc.girlscript.tech/",
    poster: "/assets/opensourceProgram/gssoc.png",
    shareLink: "#gssoc",
  },
  {
    organizer: "Outreachy",
    title: "Outreachy",
    description:
      "Remote, paid 3‑month internships for underrepresented contributors in open source, across diverse roles and projects.",
    timelineLink: "https://www.outreachy.org/",
    stipend: "yes",
    type: "Diversity‑focused, Open Source",
    exploreLink: "https://www.outreachy.org/apply/",
    applyLink: "https://www.outreachy.org/apply/",
    poster: "/assets/opensourceProgram/outreachy.webp",
    shareLink: "#outreachy",
  },
  {
    organizer: "DigitalOcean",
    title: "Hacktoberfest",
    description:
      "October-long event encouraging quality open-source contributions—make 4 valid PRs to earn a badge and community rewards.",
    timelineLink: "https://hacktoberfest.com/participation/",
    stipend: "no",
    type: "Community-friendly, Open Source",
    exploreLink: "https://hacktoberfest.com/",
    applyLink: "https://hacktoberfest.com/",
    poster: "/assets/opensourceProgram/hack.jpeg",
    shareLink: "#hacktoberfest",
  },
  // {
  //   organizer: "Google",
  //   title: "Google Summer of Earth Engine",
  //   description:
  //     "3‑month summer research program for Indian students to work on Earth Engine projects with mentors and receive stipends.",
  //   timelineLink: "https://sites.google.com/view/summerofearthengine/timeline",
  //   stipend: "yes",
  //   type: "Student‑friendly, Open Source",
  //   exploreLink: "https://sites.google.com/view/summerofearthengine/home",
  //   applyLink: "https://sites.google.com/view/summerofearthengine/apply",
  //   poster: "/assets/opensourceProgram/GSoEE.png",
  //   shareLink: "#summerofearthengine",
  // },
  {
    organizer: "MCN/UNAI",
    title: "Millennium Fellowship",
    description:
      "Semester-long leadership program empowering undergraduates to drive SDG-impact projects on campus with training, network, and recognition.",
    timelineLink: "https://www.millenniumfellows.org/",
    stipend: "no",
    type: "Student‑leadership, Social Impact",
    exploreLink: "https://www.millenniumfellows.org/",
    applyLink: "https://www.millenniumfellows.org/apply",
    poster: "/assets/opensourceProgram/millennium.jpeg",
    shareLink: "#millenniumfellowship",
  },
  {
    organizer: "Google",
    title: "Season of Docs",
    description:
      "Grant‑based program pairing technical writers with open‑source projects to improve documentation over 3–6 months.",
    timelineLink: "https://developers.google.com/season-of-docs/docs",
    stipend: "yes",
    type: "Professional, Open Source",
    exploreLink: "https://developers.google.com/season-of-docs/",
    applyLink: "https://developers.google.com/season-of-docs/docs/about",
    poster: "/assets/opensourceProgram/SOD.png",
    shareLink: "#seasonofdocs",
  },
  {
    organizer: "Social",
    title: "Social Summer of Code",
    description:
      "2‑month solo open‑source program pairing contributors with OSS projects, mentorship, prizes, and certificates.",
    timelineLink: "https://ssoc.devfolio.co/overview",
    stipend: "no",
    type: "Student‑friendly, Open Source",
    exploreLink: "https://ssoc.devfolio.co/overview",
    applyLink: "https://ssoc.devfolio.co/overview",
    poster: "/assets/opensourceProgram/SSOC.webp",
    shareLink: "#ssoc",
  },

  {
    organizer: "DigitalOcean",
    title: "DigitalOcean Open Source Credits",
    description:
      "Grants cloud credits to support development and testing needs of approved open-source projects.",
    timelineLink:
      "https://www.digitalocean.com/open-source/credits-for-projects",
    stipend: "yes",
    type: "Open Source, Infrastructure Support",
    exploreLink:
      "https://www.digitalocean.com/open-source/credits-for-projects",
    applyLink: "https://www.digitalocean.com/open-source/credits-for-projects",
    poster: "/assets/opensourceProgram/DO.png",
    shareLink: "#dooscredits",
  },
  {
    organizer: "LF",
    title: "Linux Kernel Mentorship Program",
    description:
      "Mentorship-based program helping contributors get started with Linux kernel and related OSS projects.",
    timelineLink: "https://www.linuxfoundation.org/about/mentorship-programs",
    stipend: "yes",
    type: "Professional, Open Source",
    exploreLink: "https://mentorship.lfx.linuxfoundation.org/",
    applyLink: "https://mentorship.lfx.linuxfoundation.org/",
    poster: "/assets/opensourceProgram/LFX.avif",
    shareLink: "#linuxmentorship",
  },
  {
    organizer: "Redox",
    title: "Redox Summer of Code",
    description:
      "Rust-based open source internship where contributors work on Redox OS projects during summer.",
    timelineLink: "https://www.redox-os.org/uk/rsoc/",
    stipend: "yes",
    type: "Student-friendly, Open Source",
    exploreLink: "https://www.redox-os.org/uk/rsoc/",
    applyLink: "https://www.redox-os.org/uk/rsoc/",
    poster: "/assets/opensourceProgram/redoxsoc.png",
    shareLink: "#rsoc",
  },
  {
    organizer: "FOSSASIA",
    title: "FOSSASIA Internship Programme",
    description:
      "Open source internships with mentorship, project-based tasks, and Codeheat contests for beginners.",
    timelineLink: "https://fossasia.org/internship/",
    stipend: "yes",
    type: "Student-friendly, Open Source",
    exploreLink: "https://fossasia.org/internship/",
    applyLink: "https://fossasia.org/internship/",
    poster: "/assets/opensourceProgram/fossasia.webp",
    shareLink: "#fossasiaintern",
  },
  {
    organizer: "LF",
    title: "Open Mainframe Project Mentorship",
    description:
      "Part of Linux Foundation programs mentoring students on mainframe-related open source technologies.",
    timelineLink: "https://www.openmainframeproject.org/projects/mentorship",
    stipend: "yes",
    type: "Student-friendly, Open Source",
    exploreLink: "https://www.openmainframeproject.org/projects/mentorship",
    applyLink: "https://mentorship.lfx.linuxfoundation.org/",
    poster: "/assets/opensourceProgram/OMPM.jpeg",
    shareLink: "#mainframeMentorship",
  },
  {
    organizer: "OSS Community",
    title: "24 Pull Requests",
    description:
      "Annual December initiative to encourage developers to submit daily open source pull requests.",
    timelineLink: "https://24pullrequests.com/",
    stipend: "no",
    type: "Community Event, Open Source",
    exploreLink: "https://24pullrequests.com/",
    applyLink: "https://24pullrequests.com/",
    poster: "/assets/opensourceProgram/24pull.webp",
    shareLink: "#24pr",
  },
  {
    organizer: "Processing",
    title: "Processing Foundation Fellowship",
    description:
      "Supports artists and developers contributing to open source creative coding tools.",
    timelineLink: "https://processingfoundation.org/fellowships",
    stipend: "yes",
    type: "Creative, Open Source",
    exploreLink: "https://processingfoundation.org/fellowships",
    applyLink: "https://processingfoundation.org/fellowships",
    poster: "/assets/opensourceProgram/processing.jpg",
    shareLink: "#processingfellowship",
  },
  {
    organizer: "Haskell.org",
    title: "Summer of Haskell",
    description:
      "Summer internship program to promote Haskell open source development through mentorship.",
    timelineLink: "https://summer.haskell.org/",
    stipend: "yes",
    type: "Student-friendly, Open Source",
    exploreLink: "https://summer.haskell.org/",
    applyLink: "https://summer.haskell.org/",
    poster: "/assets/opensourceProgram/haskell.org.png",
    shareLink: "#summerofhaskell",
  },
];

const OpenSourceProgram = () => {
  const location = useLocation();

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
      <Navbar />
      <Hero />
      <Tags />
      <div className="my-4"></div>
      {/* <div className="flex flex-wrap justify-center gap-4"> */}
      <div className="grid grid-cols-1 gap-2 px-3 sm:gap-2  md:grid-cols-1 lg:grid-cols-2">
        {OSProgramList.map((program, index) => (
          <OSProgramCardComponent
            key={index}
            organizer={program.organizer}
            title={program.title}
            description={program.description}
            timelineLink={program.timelineLink}
            stipend={program.stipend}
            type={program.type}
            exploreLink={program.exploreLink}
            applyLink={program.applyLink}
            poster={program.poster}
            shareLink={program.shareLink}
          />
        ))}
      </div>
      <div className="my-8"></div> {/* Adds vertical spacing */}
      <Footer />
    </div>
  );
};

export default OpenSourceProgram;
