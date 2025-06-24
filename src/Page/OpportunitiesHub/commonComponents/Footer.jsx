import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Footer = () => {
  return (
    <footer className="w-full bg-white p-4 py-8 text-white shadow dark:bg-textPrimary">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <a href="/Home" className="text-sm hover:text-[#08fb00]">
                Home
              </a>
              <a href="/about" className="text-sm hover:text-[#08fb00]">
                About Us
              </a>
              <a href="/contact" className="text-sm hover:text-[#08fb00]">
                Contact
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="/privacy" className="text-sm hover:text-[#08fb00]">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm hover:text-[#08fb00]">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-[#08fb00]">RGVerse</h4>
            <p className="mt-2 text-sm">
              One Central Hub for RGIPT Students to Discover Resources, Connect
              with Seniors, and Grow Together.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex items-center justify-center space-x-6 md:justify-end">
            <a
              href="https://github.com/Piyush-t24/rgverse"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#08fb00]"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-gupta-rgipt/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#08fb00]"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/PiyushGupt30132?t=HiSepRYFY1xXMerJYGY0kg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#08fb00]"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/piyush_t24/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#08fb00]"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 RGVerse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
