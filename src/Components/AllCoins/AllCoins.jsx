import React, { useState } from "react";
import Coin from "../Coin/Coin";

function AllCoins({ coins }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="rounded-div my-10 py-4">
        <div className="flex justify-end my-3">
          <input
            type="text"
            onChange={handleSearch}
            className="bg-gray-100 dark:bg-gray-600 rounded-md py-1 indent-3 outline-none"
            placeholder="Search for coin"
          />
        </div>
        <table className="w-full border-collapse text-center">
          <thead className="dark:text-white">
            <tr className="border-b">
              <th></th>
              <th>#</th>
              <th className="text-left">Coin</th>
              <th></th>
              <th>Price</th>
              <th>24hr</th>
              <th className="hidden md:table-cell">24hr Volume</th>
              <th className="hidden md:table-cell">Market Cap</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody className="dark:text-white">
            {coins
              // .filter((val) => {
              //   if (search === "") {
              //     return val;
              //   } else if (
              //     val.name.toLowerCase().includes(search.toLowerCase())
              //   ) {
              //     return val;
              //   } else {
              //     return "No coin found.";
              //   }
              // })
              .map((coin) => (
                <Coin key={coin.id} coin={coin} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllCoins;
