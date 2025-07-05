import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useDebounce from "../../hooks/useDebouncer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import SearchSkillsContainer from "./SearchSkillsContainer";
import VoiceSearch from "./VoiceSearch";
import WordMark from "./WordMark.png";

const criteriaOptions = [
  { value: "name", label: "Name" },
  { value: "branch", label: "Branch" },
  { value: "skill", label: "Skill" },
  { value: "location", label: "Location" },
];

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [prevSearchValue, setPrevSearchValue] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("name");
  const searchInput = useRef(null);

  const [searchSkills, setSearchSkills] = useState([]);

  //voice search
  const [voiceText, setVoiceText] = useState(""); // to store recognized text
  const [isListening, setIsListening] = useState(false); // to toggle listening state

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setSearchValue(voiceText);
  }, [voiceText]);

  const normalizeString = (str) =>
    str
      .toLowerCase()
      .replace(/\s*,\s*/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCriteriaChange = (event) => {
    if (event.target.value !== "skill") {
      handleClearSkills();
    }
    setSearchCriteria(event.target.value);
  };

  const handleSearch = () => {
    if (searchCriteria === "skill") {
      // Do nothing on search button click for skills
      return;
    } else {
      if (
        (searchValue !== prevSearchValue && searchCriteria !== "skill") ||
        searchValue.trim() === ""
      ) {
        onSearch({ value: searchValue, criteria: searchCriteria });
        setPrevSearchValue(searchValue);
      }
    }
  };

  const handleSearchOnEnter = (event) => {
    if (event.keyCode === 13) {
      let searchvalue = normalizeString(searchValue).trim();
      if (searchvalue.length > 1 && !searchSkills.includes(searchvalue)) {
        setSearchSkills((prev) => {
          const updated = [...prev, searchvalue];
          // Trigger search in parent with the new skill list
          onSearch({ value: updated, criteria: "skill" });
          return updated;
        });
        setSearchValue("");
      }
    } else {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchCriteria === "skill") {
      onSearch({ value: searchSkills, criteria: searchCriteria });
      setPrevSearchValue("");
    }
  }, [searchSkills]);

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  const handleDeleteButtonClick = () => {
    if (searchValue) {
      setSearchValue("");
      setPrevSearchValue("");
      onSearch({ value: "", criteria: searchCriteria });
      searchInput.current.focus();
    }
  };

  const handleClearSkills = () => {
    setSearchSkills([]);
    setSearchValue("");
    setPrevSearchValue("");
    onSearch({ value: [], criteria: "skill" });
    searchInput.current.focus();
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  // Custom dropdown component
  const CustomDropdown = () => (
    <div className="relative w-40">
      <button
        type="button"
        className="flex h-12 w-full items-center justify-between rounded-lg border border-gray-600 bg-[#092413] px-4 py-2 text-left font-semibold text-gray-400 transition-all focus:outline-none focus:ring focus:ring-gray-400"
        onClick={() => setDropdownOpen((open) => !open)}
      >
        <span className="w-full overflow-hidden truncate whitespace-nowrap">
          {criteriaOptions.find((o) => o.value === searchCriteria)?.label}
        </span>
        <svg
          className="ml-2 h-4 w-4 flex-shrink-0 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {dropdownOpen && (
        <ul className="absolute z-20 mt-1 w-full rounded-lg border border-gray-600 bg-[#092413] shadow-lg">
          {criteriaOptions.map((option) => (
            <li
              key={option.value}
              className={`w-full cursor-pointer px-4 py-3 text-gray-400 transition-all ${searchCriteria === option.value ? "bg-[#163e00] font-bold text-[#00fb69]" : ""}`}
              onClick={() => {
                setSearchCriteria(option.value);
                setDropdownOpen(false);
                if (option.value !== "skill") handleClearSkills();
              }}
            >
              <span className="block w-full overflow-hidden truncate whitespace-nowrap">
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="relative pb-6">
      {/* Added logo here */}
      <div className="mb-4 flex justify-center">
        <img
          src={WordMark}
          alt="RGVerse Logo"
          className="h-16 w-auto md:h-20 lg:h-24"
        />
      </div>

      <div className="relative flex items-center justify-end space-x-4">
        <CustomDropdown />
        <div className="relative w-full">
          <input
            className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight h-12 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-3 pr-20 font-spaceMono text-base text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            ref={searchInput}
            type="text"
            onChange={handleInputChange}
            value={searchValue}
            placeholder={
              searchCriteria === "skill"
                ? "Search user by skill & press enter"
                : `Search user by ${searchCriteria}`
            }
            onKeyDown={handleSearchOnEnter}
          />
          {searchValue ? (
            <FontAwesomeIcon
              onClick={handleDeleteButtonClick}
              className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-4 top-1/2 -translate-y-1/2 scale-125 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
              icon={faXmark}
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleSearchButtonClick}
              className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
              icon={faMagnifyingGlass}
            />
          )}
          <FontAwesomeIcon
            onClick={() => setIsListening((prev) => !prev)}
            className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-12 top-1/2 -translate-y-1/2 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
            icon={faMicrophone}
          />
        </div>
      </div>

      {searchCriteria === "skill" && searchSkills && searchSkills.length > 0 ? (
        <>
          <button
            onClick={handleClearSkills}
            className="m-2 cursor-pointer self-end rounded-md bg-white p-2 font-semibold dark:bg-[#0d3528] dark:text-gray-400"
          >
            Clear All
          </button>
          <SearchSkillsContainer
            searchSkills={searchSkills}
            setSearchSkills={setSearchSkills}
          />
        </>
      ) : null}

      <VoiceSearch
        setVoiceText={setVoiceText}
        isListening={isListening}
        setIsListening={setIsListening}
      />
    </div>
  );
}

export default Search;
