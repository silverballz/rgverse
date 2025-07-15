import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import StyledButton from "../StyledButton";
import { RxCross2 } from "react-icons/rx";
// import SvgLoader from "../SvgLoader/SvgLoader";

function Sidebar() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleHome() {
    navigate("/Home");
  }

  const handleKnowGithub = () => {
    window.open(
      "https://github.com/Piyush-t24/rgverse/blob/main/CONTRIBUTING.md",
      "_blank",
      "noreferrer",
    );
  };

  const handleDontKnowGithub = () => {
    setShowForm(true);
    setOpenDropdown(false);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const fullName = form.fullName.value;
    const branch = form.branch.value;
    const linkedin = form.linkedin.value;
    const message = form.message.value;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/profile`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, branch, linkedin, message }),
        },
      );
      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setShowForm(false);
        alert(
          "Form submitted successfully, your profile will be added within 24 hours.",
        );
      } else {
        const data = await response.json();
        alert(
          "Failed to submit the form: " + (data.message || "Unknown error"),
        );
      }
    } catch (error) {
      alert("Failed to submit the form. Please try again.");
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:px-7">
      <StyledWrapper className="flex flex-col items-center gap-6 pt-6">
        {/* Modified Button */}
        <div className="relative flex w-full justify-center">
          <button
            id="btn-message"
            className="button-message"
            onClick={() => setOpenDropdown((prev) => !prev)}
          >
            <div className="content-avatar">
              <div className="status-user" />
              <div className="avatar">
                <svg
                  className="user-img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z" />
                </svg>
              </div>
            </div>
            <div className="notice-content">
              <div className="username">RGIPTIAN</div>
              <div className="lable-message">
                Add Your Profile
                <FaCheckCircle className="ml-2 rounded-full border-[1px] border-[#0ee94c] p-0.5 text-xl text-[#0ee93d]" />
              </div>
              <div className="user-id">@rgiptian</div>
            </div>
          </button>

          {/* Dropdown */}
          {openDropdown && (
            <div
              className="absolute top-full z-20 mt-2 w-48 rounded-md border-2  shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-textPrimary"
              style={{ borderColor: "#ffffff50" }}
            >
              <div className="py-1">
                <button
                  onClick={handleKnowGithub}
                  className="w-full px-4 py-2 text-left text-sm text-white hover:bg-secondaryColor"
                >
                  Know GitHub
                </button>
                <button
                  onClick={handleDontKnowGithub}
                  className="w-full px-4 py-2 text-left text-sm text-white hover:bg-secondaryColor"
                >
                  Don't Know GitHub
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Form */}
        {showForm && (
          <div
            className="relative mt-4 w-full rounded-lg border-2 p-4 shadow-md"
            style={{ backgroundColor: "#092413", borderColor: "#ffffff50" }}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-3 top-3 text-2xl font-bold"
              style={{ color: "#cccccc" }}
            >
              <RxCross2 />
            </button>

            <h2 className="mb-4 text-center text-lg font-semibold text-white">
              Fill Your Details
            </h2>
            {submitted ? (
              <div className="py-8 text-center font-semibold text-green-600">
                Thank you for submitting your profile! We'll add it within 24
                hours.
              </div>
            ) : (
              <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="rounded border p-2 text-black"
                  required
                />
                <input
                  type="text"
                  name="branch"
                  placeholder="Branch"
                  className="rounded border p-2 text-black"
                  required
                />
                <input
                  type="text"
                  name="linkedin"
                  placeholder="LinkedIn Link"
                  className="rounded border p-2 text-black"
                  required
                />
                <textarea
                  name="message"
                  placeholder={`Your Message\n- Skills\n- Update my profile\n- Any other message`}
                  className="rounded border p-2 text-black"
                  required
                  rows={3}
                />

                <StyledButton type="submit" disabled={loading}>
                  <div className="inner">
                    {loading ? "Submitting..." : "Submit"}
                  </div>
                </StyledButton>
              </form>
            )}
          </div>
        )}

        {/* Other Sidebar content (Unchanged) */}
        <div className="text-center text-secondaryColor dark:text-white">
          One Central Hub for RGIPT Students to Discover Resources, Connect with
          Seniors, and Grow Together.
        </div>
        <button className="button" onClick={handleHome}>
          <div className="blob1" />
          <div className="blob2" />
          <div className="inner">Explore more</div>
        </button>
        {/* <SvgLoader /> */}
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap");

  font-family: "Merriweather Sans", sans-serif;

  .button {
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 16px;
    border: none;
    padding: 2px;
    background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b19);
    position: relative;
    transition:
      background 0.3s,
      transform 0.3s;
    animation: zoom 3s ease-in-out infinite;
  }

  .button:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  .button::after {
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

  .button:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 70px;
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

  .button:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 14px 25px;
    border-radius: 14px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    transition: background 0.3s;
    white-space: nowrap;
  }

  .button:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 14px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #00e1ff1a,
      #0000ff11,
      transparent
    );
    position: absolute;
    transition: opacity 0.3s;
  }

  .button:hover .inner::before {
    opacity: 0;
  }

  /* Add Your Profile button styles */
  #btn-message {
    --text-color: rgb(24, 255, 109);
    --bg-color-sup: rgb(255, 255, 255);
    --bg-color: rgb(20, 47, 29);
    --bg-hover-color: rgba(20, 47, 29, 1);
    --online-status: rgb(24, 255, 109);
    --font-size: 16px;
    --btn-transition: all 0.2s ease-out;
  }

  .button-message {
    display: flex;
    justify-content: center;
    align-items: center;
    font:
      400 var(--font-size) "Merriweather Sans",
      sans-serif;
    box-shadow:
      0 0 2.17382px rgba(0, 0, 0, 0.049),
      0 1.75px 6.01034px rgba(0, 0, 0, 0.07),
      0 3.63px 14.4706px rgba(0, 0, 0, 0.091),
      0 22px 48px rgba(0, 0, 0, 0.14);
    background-color: var(--bg-color);
    border-radius: 68px;
    cursor: pointer;
    padding: 6px 10px 6px 6px;
    width: fit-content;
    height: 40px;
    border: 1px solid rgb(24, 255, 109);
    overflow: hidden;
    position: relative;
    transition: var(--btn-transition);
  }

  .button-message:hover {
    height: 56px;
    padding: 8px 20px 8px 8px;
    background-color: var(--bg-hover-color);
    transition: var(--btn-transition);
  }

  .button-message:active {
    transform: scale(0.99);
  }

  .content-avatar {
    width: 30px;
    height: 30px;
    margin: 0;
    transition: var(--btn-transition);
    position: relative;
  }

  .button-message:hover .content-avatar {
    width: 40px;
    height: 40px;
  }

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--bg-color-sup);
  }

  .user-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .status-user {
    position: absolute;
    width: 6px;
    height: 6px;
    right: 1px;
    bottom: 1px;
    border-radius: 50%;
    outline: solid 2px var(--bg-color);
    background-color: var(--online-status);
    transition: var(--btn-transition);
    animation: active-status 2s ease-in-out infinite;
  }

  .button-message:hover .status-user {
    width: 10px;
    height: 10px;
    right: 1px;
    bottom: 1px;
    outline: solid 3px var(--bg-hover-color);
  }

  .notice-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 8px;
    text-align: initial;
    color: var(--text-color);
  }

  .username {
    letter-spacing: -6px;
    height: 0;
    opacity: 0;
    transform: translateY(-20px);
    transition: var(--btn-transition);
  }

  .user-id {
    font-size: 12px;
    letter-spacing: -6px;
    height: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: var(--btn-transition);
  }

  .lable-message {
    display: flex;
    align-items: center;
    opacity: 1;
    transform: scaleY(1);
    transition: var(--btn-transition);
  }

  .button-message:hover .username {
    height: auto;
    letter-spacing: normal;
    opacity: 1;
    transform: translateY(0);
    transition: var(--btn-transition);
  }

  .button-message:hover .user-id {
    height: auto;
    letter-spacing: normal;
    opacity: 1;
    transform: translateY(0);
    transition: var(--btn-transition);
  }

  .button-message:hover .lable-message {
    height: 0;
    transform: scaleY(0);
    transition: var(--btn-transition);
  }

  .lable-message,
  .username {
    font-weight: 600;
  }

  @keyframes active-status {
    0% {
      background-color: var(--online-status);
    }
    33.33% {
      background-color: rgb(24, 255, 109);
    }
    66.33% {
      background-color: rgba(20, 47, 29, 1);
    }
    100% {
      background-color: var(--online-status);
    }
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

export default Sidebar;
