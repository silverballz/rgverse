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

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [prevSearchValue, setPrevSearchValue] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("name");
  const searchInput = useRef(null);

  const [searchSkills, setSearchSkills] = useState([]);

  //voice search
  const [voiceText, setVoiceText] = useState(""); // to store recognized text
  const [isListening, setIsListening] = useState(false); // to toggle listening state

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

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedValue !== prevSearchValue && searchCriteria !== "skill") {
      onSearch({ value: debouncedValue, criteria: searchCriteria });
      setPrevSearchValue(debouncedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleSearch = () => {
    if (
      (searchValue !== prevSearchValue && searchCriteria !== "skill") ||
      searchValue.trim() === ""
    ) {
      onSearch({ value: searchValue, criteria: searchCriteria });
      setPrevSearchValue(searchValue);
    }
  };

  const handleSearchOnEnter = (event) => {
    if (event.keyCode === 13) {
      let searchvalue = normalizeString(searchValue);
      searchvalue = searchvalue.trim();
      if (searchvalue.length > 0) {
        var set = new Set(searchSkills);
        set.add(searchvalue);
        setSearchSkills((prev) => [...set]);
      }
      setSearchValue("");
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

  return (
    <div className="relative pb-6">
      {/* Added logo here */}
      <div className="mb-4 flex justify-center">
        <img src={WordMark} alt="RGVerse Logo" className="h-16 md:h-20 lg:h-24 w-auto"  />
      </div>

      <div className="relative flex items-center justify-end space-x-4">
        <select
          className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight border-borderSecondary bg-primaryColor text-secondaryColor dark:border-borderColor dark:bg-secondaryColor h-12 rounded-lg border-2 px-4 py-3 text-base outline-none dark:text-white"
          value={searchCriteria}
          onChange={handleCriteriaChange}
        >
          <option value="name">Name</option>
          <option value="branch">Branch</option>
          <option value="skill">Skill</option>
          <option value="location">Location</option>
        </select>
        <div className="relative w-full">
          <input
            className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight border-borderSecondary bg-primaryColor font-spaceMono text-secondaryColor dark:border-borderColor dark:bg-secondaryColor h-12 w-full rounded-lg border-2 px-4 py-3 pr-20 text-base outline-none dark:text-white"
            ref={searchInput}
            type="text"
            onChange={handleInputChange}
            value={searchValue}
            placeholder={`Search user by ${searchCriteria}`}
            onKeyDown={handleSearchOnEnter}
          />
          {searchValue ? (
            <FontAwesomeIcon
              onClick={handleDeleteButtonClick}
              className="hover:text-primaryFocus dark:hover:text-secondaryFocus text-secondaryColor absolute right-4 top-1/2 -translate-y-1/2 scale-125 transform cursor-pointer text-xl dark:text-white"
              icon={faXmark}
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleSearchButtonClick}
              className="hover:text-primaryFocus dark:hover:text-secondaryFocus text-secondaryColor absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer text-xl dark:text-white"
              icon={faMagnifyingGlass}
            />
          )}
          <FontAwesomeIcon
            onClick={() => setIsListening((prev) => !prev)}
            className="hover:text-primaryFocus dark:hover:text-secondaryFocus text-secondaryColor absolute right-12 top-1/2 -translate-y-1/2 transform cursor-pointer text-xl dark:text-white"
            icon={faMicrophone}
          />
        </div>
      </div>

      {searchCriteria === "skill" && searchSkills && searchSkills.length > 0 ? (
        <>
          <button
            onClick={handleClearSkills}
            className="m-2 cursor-pointer self-end rounded-md bg-white p-2 font-semibold dark:bg-[#1E2A47] dark:text-white"
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
