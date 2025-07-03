import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <a href="/AboutUs" className="text-sm hover:text-[#08fb00]">
                About Us
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="*" className="text-sm hover:text-[#08fb00]">
                Contact
              </a>
              <button
                type="button"
                className="m-0 border-none bg-transparent p-0 text-left text-sm outline-none hover:text-[#08fb00]"
                style={{ font: "inherit", cursor: "pointer" }}
                onClick={() => setIsModalOpen(true)}
              >
                Feedback
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center">
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
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-[#092413] p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#cffab6]">
                Share Your Feedback for RGVerse!
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#cffab6] hover:text-white"
              >
                X
              </button>
            </div>
            <iframe
              src="https://tally.so/r/3lj8rv"
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
    </footer>
  );
};
