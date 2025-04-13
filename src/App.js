// filepath:
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Homepage from './Homepage';

function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>RGVerse - One Portal for Every RGIPTian</title>
        <meta name="description" content="One Central Hub for RGIPT Students to Discover Resources, Connect with Seniors, and Grow Together." />
        <meta
          name="keywords"
          content="RGVerse, open source, community, tech skills, Paradise for developers, collaboration, tech platform, developers, RGVerse, Connect, Collab, Code, Create, Conquer, RGVerse org, developers, opensource, developer community, tech community, RGIPT, RGIPTIAN"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

       
        <meta name="theme-color" content="#317EFB" />

        <meta name="author" content="Piyush Gupta" />

        <meta property="og:locale" content="en_US" />
      </Helmet>

      <Routes>
        <Route index element={<Homepage />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;