import React, { useState, useEffect, useRef } from "react";
import Layout from "./components/Layout/Layout";
import SocialCards from "./components/SocialCards/SocialCards";
import Data from "./data";
import OverviewCards from "./components/OverviewCards/OverviewCards";
function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
  }, [isDark]);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Layout toggleDarkMode={toggleDarkMode} isDark={isDark}>
        <SocialCards isDark={isDark} data={Data.profiles} />
        <OverviewCards isDark={isDark} data={Data.overview} />
      </Layout>
    </>
  );
}

export default App;
