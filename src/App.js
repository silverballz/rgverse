// filepath:
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

// Importing components
import Homepage from "./Homepage";
import ProfilePage from "./components/Profile/ProfilePage";
// Introducing RGVerse
import Home from "./Page/Home.jsx";
// Feature- Project Showcase
import ProjectShowcase from "./Page/ProjectShowcase/ProjectShowcase.jsx";
// Features Notes
import Notes from "./Page/Notes.jsx";
import Sem1 from "./Page/NotesHub/Sem1.jsx";
import Sem2 from "./Page/NotesHub/Sem2.jsx";
import Sem3 from "./Page/NotesHub/Sem3.jsx";
import Sem4 from "./Page/NotesHub/Sem4.jsx";
import Sem5 from "./Page/NotesHub/Sem5.jsx";
import Sem6 from "./Page/NotesHub/Sem6.jsx";
import Sem7 from "./Page/NotesHub/Sem7.jsx";
import Sem8 from "./Page/NotesHub/Sem8.jsx";
// Feature- OpenSourceProgram
import OpenSourceProgram from "./Page/OpenSourceProgram/OpenSourceProgram.jsx";
// Feature- Roadmaps
import Roadmaps from "./Page/Roadmaps/Roadmaps.jsx";
// Feature- ResourcesHub
import ResourcesHub from "./Page/ResourcesHub/ResourcesHub.jsx";
// About Us
import AboutUs from "./components/AboutUs.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

ReactGA.initialize("G-RPQTJTX11Z"); // Initialize Google Analytics with your tracking ID

// 👇 RouteTracker component to track page views
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

// Main App component
function App() {
  React.useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <BrowserRouter>
      <RouteTracker />
      <Helmet>
        <title>RGVerse - One Portal for Every RGIPTian</title>
        <meta
          name="description"
          content="One Central Hub for RGIPT Students to Discover Resources, Connect with Seniors, and Grow Together."
        />
        <meta
          name="keywords"
          content="RGVerse,RGIPT,RGIPT Jais, RGIPT Amethi, open source, community, tech skills, collaboration, tech platform, developers, RGVerse, Connect, Rajiv Gandhi Institute of Petroleum Technology, RGVerse org, developers, opensource, developer community, tech community, RGIPT, RGIPTIAN, Piyush Gupta"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#317EFB" />

        <meta name="author" content="Piyush Gupta" />

        <meta property="og:locale" content="en_US" />
      </Helmet>

      <Routes>
        <Route index element={<Homepage />} />
        {/* Introducing RGVerse */}
        <Route path="/Home" element={<Home />} />
        <Route path="/profile/:name" element={<ProfilePage />} />
        {/* Notes Page */}
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Sem1" element={<Sem1 />} />
        <Route path="/Sem2" element={<Sem2 />} />
        <Route path="/Sem3" element={<Sem3 />} />
        <Route path="/Sem4" element={<Sem4 />} />
        <Route path="/Sem5" element={<Sem5 />} />
        <Route path="/Sem6" element={<Sem6 />} />
        <Route path="/Sem7" element={<Sem7 />} />
        <Route path="/Sem8" element={<Sem8 />} />
        {/*  Feature- OpenSourceProgram */}
        <Route path="/OpenSourceProgram" element={<OpenSourceProgram />} />
        {/* Feature- Project Showcase */}
        <Route path="/ProjectShowcase" element={<ProjectShowcase />} />
        {/* Feature- Roadmaps */}
        <Route path="/Roadmaps" element={<Roadmaps />} />
        {/* Feature- ResourcesHub */}
        <Route path="/ResourcesHub" element={<ResourcesHub />} />
        {/* About Us */}
        <Route path="/AboutUs" element={<AboutUs />} />
        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
