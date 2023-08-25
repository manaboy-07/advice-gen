/** @format */

import Advice from "./Advice";
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState({
    slip: {
      id: 54,
      advice: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://api.adviceslip.com/advice";
  const FETCH_ADVICE = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(BASE_URL);

      setAdvice(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFetch = () => {
    FETCH_ADVICE();
  };
  console.log(advice);
  return (
    <div className='App'>
      <Advice handleFetch={handleFetch} Advice={advice} loading={loading} />
    </div>
  );
}

export default App;
