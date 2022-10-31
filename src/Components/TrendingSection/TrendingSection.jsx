import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendingCoin from "../TrendingCoin/TrendingCoin";

function TrendingSection() {
  const [coins, setCoins] = useState([]);
  const URL = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res);
      setCoins(res.data.coins);
    });
  }, [URL]);
  return (
    <>
      <div className="rounded-div py-5">
        <h1 className="text-3xl font-semibold my-5">Trending Coins</h1>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1">
          {coins.map((coin) => (
            <TrendingCoin key={coin.item.id} coin={coin} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingSection;
