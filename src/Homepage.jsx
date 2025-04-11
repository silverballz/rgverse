import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>RGVerse – Connect with RGIPTians</title>
        <meta name="description" content="One platform to explore seniors, notes, roadmaps & more for RGIPT." />
      </Helmet>

      <div className="text-white">
        <h1 className="text-4xl font-bold">Welcome to RGVerse</h1>
      </div>
    </>
  );
};

export default Homepage;
