import SearchSkill from './SearchSkill';

export default function SearchSkillsContainer({ searchSkills, setSearchSkills }) {
  return (
    <div className="relative mt-2 flex min-h-20 w-full flex-row flex-wrap rounded-lg bg-white p-2 dark:bg-[#0d3528]">
      {searchSkills.map((skill, idx) => {
        return (
          <SearchSkill
            skill={skill}
            key={idx}
            setSearchSkills={setSearchSkills}
          />
        );
      })}
    </div>
  );
}
