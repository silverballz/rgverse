import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaUserCircle,
  FaCheckCircle,
  FaStackOverflow,
  FaYoutube,
  FaDev,
  FaBehance,
  FaDribbble,
  FaFigma,
  FaCoffee,
  FaProductHunt,
  FaMedium,
  FaDiscord,
  FaReddit,
  FaShareAlt,
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import {
  SiLeetcode,
  SiCodeforces,
  SiHashnode,
  SiReplit,
  SiHackerrank,
} from "react-icons/si";

const UnstopIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 225 225"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="112.5" cy="112.5" r="112.5" fill="#15457B" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="140"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      dy=".35em"
    >
      un
    </text>
  </svg>
);

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function Profile({ data }) {
  return <Card data={data} />;
}