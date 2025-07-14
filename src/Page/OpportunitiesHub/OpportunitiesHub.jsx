import React, { useState, useEffect } from "react";
import opportunitiesData from "./opportunitieshub.json";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faLaptopCode,
  faCalendarAlt,
  faTrophy,
  faCertificate,
  faUsers,
  faLightbulb,
  faMapMarkerAlt,
  faClock,
  faMoneyBillWave,
  faShareAlt,
  faFilter,
  faSearch,
  faCheckCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <div className="flex flex-1 items-center justify-center">
          <StyledButton onClick={onOpenModal}>
            <div className="blob1" />
            <div className="inner">Add Opportunities</div>
          </StyledButton>
        </div>
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
                  Opportunities Hub
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

// StyledButton copied from Roadmaps.jsx
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
  margin-top: 0;

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

// Filter and Search Bar
const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
  background: none;
  border-radius: 0;
  margin: 0 auto 1rem auto;
  max-width: 1400px;
  box-shadow: none;
  border: none;
`;

// Horizontally scrollable row for filter buttons
const FilterButtonsRow = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  scrollbar-width: thin;
  max-width: 100vw;
  box-sizing: border-box;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const FilterButton = styled.button`
  background: ${({ active }) =>
    active ? "rgba(0, 251, 105, 0.3)" : "rgba(0, 251, 105, 0.1)"};
  border: 1px solid #00fb69;
  color: ${({ active }) => (active ? "#fff" : "#c5e3bf")};
  border-radius: 18px;
  padding: 0.3rem 0.85rem;
  font-size: 0.92rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
  margin-right: 0.5rem;
  &:hover {
    background: rgba(0, 251, 105, 0.2);
    transform: translateY(-2px);
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: 600px) {
    max-width: 90vw;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px 12px 45px;
  border-radius: 30px;
  border: 1px solid #00fb69;
  background: rgba(13, 53, 40, 0.3);
  color: white;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 251, 105, 0.5);
  }

  &::placeholder {
    color: #8dac9a;
  }

  @media (max-width: 600px) {
    padding: 7px 14px 7px 36px;
    font-size: 13px;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #00fb69;
`;

// Opportunity Card Styles
const OpportunityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;

const OpportunityCard = styled.div`
  background: #162e1a;
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.18);
  padding: 1.25rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 0;
  @media (min-width: 600px) {
    padding: 1.5rem 1.25rem 1.25rem 1.25rem;
  }
  @media (min-width: 1000px) {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  background: #203a43;
`;

const HeaderInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

// Adjust font sizes for Title, Company, etc. for mobile
const Title = styled.div`
  color: #c5e3bf;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.15rem;
  white-space: pre-line;
  @media (min-width: 600px) {
    font-size: 1.25rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.35rem;
  }
`;

const Company = styled.div`
  color: #8dac9a;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

const SaveBtn = styled.div`
  background: rgba(197, 227, 191, 0.08);
  border-radius: 0.75rem;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c5e3bf;
  font-size: 1.2rem;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const MetaPill = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${({ color }) => color || "#1f4037"};
  color: ${({ textcolor }) => textcolor || "#cde6c4"};
  font-size: 0.98rem;
  font-weight: 500;
  border-radius: 1.5rem;
  padding: 0.3rem 1rem;
`;

const Requirements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Requirement = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  color: #c5e3bf;
  font-size: 1.05rem;
  line-height: 1.5;
`;

const CardFooter = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ApplyBtn = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #c5e3bf;
  color: #c5e3bf;
  background: transparent;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.7rem 0;
  text-decoration: none;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: rgba(197, 227, 191, 0.08);
    color: #fff;
  }
`;

const ShareBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(32, 67, 42);
  color: #c5e3bf;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.25rem;
  padding: 0 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgb(62, 100, 44);
  }
`;

// Sample categories array
const categories = [
  "All",
  "Internships",
  "Hackathon",
  "Jobs",
  "Bootcamps",
  "Competitions",
  "Events",
  "Courses",
  "Certifications",
  "Freelancing",
  "Startup Incubators",
];

// Placeholder OpportunityCardComponent
const OpportunityCardComponent = ({ opportunity }) => (
  <OpportunityCard>
    <CardHeader>
      <Logo
        src={
          opportunity.logo ||
          "https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg"
        }
        alt={opportunity.company}
      />
      <HeaderInfo>
        <Title>{opportunity.title}</Title>
        <Company>
          {opportunity.company}{" "}
          <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>&#183;</span>
        </Company>
      </HeaderInfo>
      <SaveBtn>
        <FontAwesomeIcon icon={faCheck} />
      </SaveBtn>
    </CardHeader>
    <MetaRow>
      <MetaPill color="#1f4037" textcolor="#a8e6cf">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        {opportunity.location}
      </MetaPill>
      <MetaPill color="#2e7d32" textcolor="#d0f0c0">
        <FontAwesomeIcon icon={faBriefcase} />
        {opportunity.type}
      </MetaPill>
    </MetaRow>

    <Requirements>
      {opportunity.description.map((item, idx) => (
        <Requirement key={idx}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ color: "#00fb69", marginTop: 2, fontSize: "1.1em" }}
          />
          <span>{item}</span>
        </Requirement>
      ))}
    </Requirements>
    <CardFooter>
      <ApplyBtn
        href={opportunity.applyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now &rarr;
      </ApplyBtn>
      <ShareBtn onClick={() => shareContent(opportunity.applyLink)}>
        <FontAwesomeIcon icon={faShareAlt} style={{ marginRight: 8 }} /> Share
      </ShareBtn>
    </CardFooter>
  </OpportunityCard>
);

const OpportunitiesHub = () => {
  const location = useLocation();
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
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

  // Filter opportunities based on selected category and search query
  const filteredOpportunities = opportunitiesData.filter((opportunity) => {
    // Check category filter
    const categoryMatch = filter === "All" || opportunity.category === filter;

    // Check search query
    const searchMatch =
      opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.description.some((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ||
      opportunity.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.employmentType
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="background-wrapper min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <Navbar onOpenModal={handleOpenModal} />
      <Hero />
      {/* Filter and Search Section */}
      <>
        {/* FilterBar can be a heading or label if needed, or just spacing */}
        <FilterBar />
        <FilterButtonsRow>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              <FontAwesomeIcon icon={faFilter} />
              {category}
            </FilterButton>
          ))}
        </FilterButtonsRow>
        <SearchContainer>
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search opportunities by title, company or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
        {filteredOpportunities.length > 0 ? (
          <OpportunityGrid>
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCardComponent
                key={opportunity.id}
                opportunity={opportunity}
              />
            ))}
          </OpportunityGrid>
        ) : (
          <div className="py-12 text-center">
            <h3 className="mb-4 text-2xl text-white">No opportunities found</h3>
            <p className="text-green-300">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </>
      <Footer />
      {/* Modal for Add Opportunity */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-[#092413] p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#cffab6]">
                Feature a Job, Internship, or Event
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-[#cffab6] hover:text-white"
              >
                X
              </button>
            </div>
            <iframe
              src="https://tally.so/r/3EVdlo"
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
    </div>
  );
};

export default OpportunitiesHub;
