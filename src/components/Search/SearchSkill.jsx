import { FaTimes } from "react-icons/fa";

//it is the design of each skill box
export default function SearchSkill({ skill, setSearchSkills }) {
  const handleRemoveSkill = (value) => {
    setSearchSkills((prev) => {
      return prev.filter((prevSkill) => prevSkill !== skill);
    });
  };

  return (
    <div className=" m-2 flex flex-row items-center rounded-md border border-[#cffab6] bg-[#163e00] p-2 text-[#c5e3bf] transition-colors duration-1000 ease-in-out   hover:bg-white hover:text-[#cffab6] dark:text-white dark:hover:bg-[#0d3528]">
      <p className="mr-4">{skill}</p>
      <FaTimes
        onClick={() => {
          handleRemoveSkill(skill);
        }}
      />
    </div>
  );
}
