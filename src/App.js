// filepath:
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Homepage from './Homepage';
import ProfilePage from "./components/Profile/ProfilePage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <BrowserRouter>
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
        <Analytics />

        <meta name="theme-color" content="#317EFB" />

        <meta name="author" content="Piyush Gupta" />

        <meta property="og:locale" content="en_US" />
      </Helmet>

      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/profile/:name" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;