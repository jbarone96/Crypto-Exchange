import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import SignInPage from "./Components/SignInPage/SignInPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import CoinPage from "./Components/CoinPage/CoinPage";
import AccountPage from "./Components/AccountPage/AccountPage";
function App() {
  const [coins, setCoins] = useState([]);
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true";

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res);
      setCoins(res.data);
    });
  }, [URL]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage coins={coins} />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
