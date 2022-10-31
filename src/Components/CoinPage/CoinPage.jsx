import React, { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";

function CoinPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const URL = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  const coinData = async () => {
    try {
      await axios.get(URL).then((res) => {
        console.log(res);
        setData(res.data);
      });
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    coinData();
    setIsLoading(false);
  }, [URL]);

  return (
    <>
      <div className="rounded-div mt-6 py-4">
        {isLoading ? (
          <div className="flex justify-between">
            <div className="flex-col">
              <div className="flex mt-5">
                <img
                  className="w-8 mr-2"
                  src={data.image && data.image.small}
                  alt={data.id}
                />
                <h1 className="font-bold text-xl">
                  {data.name} ({data.symbol && data.symbol.toUpperCase()})
                </h1>
              </div>
              <div className="flex mt-3">
                <h1 className="font-bold text-3xl">
                  ${data.market_data?.current_price.usd.toString()}
                </h1>
                <div className="flex ml-2 relative top-1">
                  {data.market_data?.price_change_percentage_24h > 0
                    ? "red"
                    : "green"}
                  <p
                    className={
                      data.market_data?.price_change_percentage_24h > 0
                        ? "text-green-600 font-semibold text-[18px]"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {data.market_data?.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              </div>
              <small>{data.market_data?.current_price.btc} BTC</small>
              <div className="mt-4">
                <Sparklines
                  svgWidth={380}
                  data={data.market_data?.sparkline_7d.price}
                >
                  <SparklinesLine color="green" />
                </Sparklines>
              </div>
            </div>
            <div className="my-4 hidden sm:block">
              <h2 className="text-xl font-semibold">Info</h2>
              <div className="my-1">
                <div className="my-2">
                  <small className="text-gray-600 dark:text-gray-400 font-semibold">
                    Website
                  </small>
                  <div className="my-1">
                    <a
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg text-center px-3 py-1 text-sm font-semibold"
                      href={data.links?.homepage[0]}
                    >
                      Official Site
                    </a>
                  </div>
                </div>
                <div>
                  <small className="text-gray-600 dark:text-gray-400 font-semibold">
                    Community
                  </small>
                  <div className="grid gap-1 grid-cols-2 my-1">
                    <a
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg text-center px-3 py-1 text-sm font-semibold"
                      href={data.links?.subreddit_url}
                    >
                      Reddit
                    </a>
                    <a
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg text-center px-3 py-1 text-sm font-semibold"
                      href={`https://www.facebook.com/${data.links?.facebook_username}`}
                    >
                      Facebook
                    </a>
                    <a
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg text-center px-3 py-1 text-sm font-semibold"
                      href={`https://www.twitter.com/${data.links?.twitter_screen_name}`}
                    >
                      Twitter
                    </a>
                    <a
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg text-center px-3 py-1 text-sm font-semibold"
                      href={data.links?.official_forum_url[0]}
                    >
                      Forum
                    </a>
                  </div>
                </div>
                <div>
                  <small className="text-gray-600 dark:text-gray-400 font-semibold">
                    Source Code
                  </small>
                  <div className="my-1">
                    <a
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg text-center px-3 py-1 text-sm font-semibold"
                      href={data.links?.repos_url.github[0]}
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <ReactLoading type="spinningBubbles" color="black" />
            {data.market_data && (
              <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1 mt-4">
                <div className="border-b">
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm">
                    Market Cap
                  </h4>
                  <p className="font-semibold">
                    ${data.market_data.market_cap.usd.toString()}
                  </p>
                </div>
                <div className="border-b">
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm">
                    24 Hr. Trading Volume
                  </h4>
                  <p className="font-semibold">
                    ${data.market_data.total_volume.usd.toString()}
                  </p>
                </div>
                {data.market_data.fully_diluted_valuation.usd && (
                  <div className="border-b">
                    <h4 className="text-gray-500 dark:text-gray-400 text-sm">
                      Fully Diluted Valuation
                    </h4>
                    <p className="font-semibold">
                      ${data.market_data.fully_diluted_valuation.usd.toString()}
                    </p>
                  </div>
                )}
                <div className="border-b">
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm">
                    Circulating Supply
                  </h4>
                  <p className="font-semibold">
                    ${data.market_data.circulating_supply.toString()}
                  </p>
                </div>
                <div className="border-b">
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm">
                    24 Hr. High
                  </h4>
                  <p className="font-semibold">
                    ${data.market_data.high_24h.usd.toString()}
                  </p>
                </div>
                <div className="border-b">
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm">
                    24 Hr. Low
                  </h4>
                  <p className="font-semibold">
                    ${data.market_data.low_24h.usd.toString()}
                  </p>
                </div>
              </div>
            )}
            {isLoading && (
              <div>
                <h1 className="text-2xl font-semibold mt-8 mb-4">
                  About {data.name} ({data.symbol?.toUpperCase()})
                </h1>
                <div
                  className="about-text whitespace-pre-wrap tracking-wide"
                  dangerouslySetInnerHTML={{ __html: data.description?.en }}
                ></div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CoinPage;
