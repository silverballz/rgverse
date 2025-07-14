import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#092413] px-6 py-12 text-[rgb(13,53,40)]">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[rgba(194,183,183,0.1)] bg-[rgb(243,244,246)] p-8 shadow-lg">
        <h1 className="mb-6 text-center text-4xl font-bold text-[#092413]">
          About RGVerse & RGIPT Community
        </h1>

        <p className="mb-6 text-lg leading-relaxed">
          <strong className="text-[#092413]">RGVerse</strong> is a
          student-driven platform designed to empower the community of
          <strong className="text-[#092413]">
            {" "}
            Rajiv Gandhi Institute of Petroleum Technology (RGIPT)
          </strong>
          . We’re building a centralized, collaborative space where students can
          explore, learn, and grow — together.
        </p>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold text-[rgb(13,53,40)]">
            🌐 What is RGVerse?
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-[rgb(13,53,40)]">
            <li>Showcase student profiles, skills, and achievements</li>
            <li>
              Access semester-wise resources like notes, PYQs, and lectures
            </li>
            <li>
              Explore curated roadmaps for technical skills and career paths
            </li>
            <li>Engage in meaningful discussions through a built-in forum</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold text-[rgb(13,53,40)]">
            🎯 Our Mission
          </h2>
          <p className="leading-relaxed text-[rgb(13,53,40)]">
            We aim to bridge the gap between students across batches by building
            a supportive, knowledge-sharing ecosystem. RGVerse is made by
            students, for students — to help everyone connect, collaborate, and
            excel.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold text-[rgb(13,53,40)]">
            🛠️ How It Started
          </h2>
          <p className="leading-relaxed text-[rgb(13,53,40)]">
            RGVerse was initiated by passionate students who recognized the need
            for a structured platform where academic resources and student
            talent could be organized and showcased — all in one place.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold text-[rgb(13,53,40)]">
            🤝 Open for Collaboration
          </h2>
          <p className="leading-relaxed text-[rgb(13,53,40)]">
            RGVerse is open-source and community-driven. Students can contribute
            to the platform, suggest features, report bugs, or even help manage
            resources. Together, we’re building something truly impactful for
            the RGIPT family.
          </p>
        </section>

        <p className="mt-10 border-t border-[rgba(20,47,33,0.1)] pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} RGVerse – Created with ❤️ by a RGIPT
          student.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
