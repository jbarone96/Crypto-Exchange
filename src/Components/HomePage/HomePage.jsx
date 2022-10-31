import React from "react";
import AllCoins from "../AllCoins/AllCoins";
import TrendingSection from "../TrendingSection/TrendingSection";

function HomePage({ coins }) {
  return (
    <>
      <div>
        <AllCoins coins={coins} />
        <TrendingSection />
      </div>
    </>
  );
}

export default HomePage;
