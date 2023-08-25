/** @format */

import React from "react";
import Icon from "./images/icon-dice.svg";
import Divider from "./images/pattern-divider-desktop.svg";
import Loading from "./Loading";
function Advice({ handleFetch, Advice, loading }) {
  const {
    slip: { id, advice },
  } = Advice;
  return (
    <div className='advice-container'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h3>Advice {`#${id ? id : "no id"}`}</h3>
          <h1 className='advice-text'>{` " ${
            advice ? advice : "No advice"
          } "`}</h1>
          <div className='icons'>
            <img src={Divider} alt='img'/>
          </div>
        </>
      )}
      <button className='btn' onClick={handleFetch}>
        <img src={Icon} alt='dice'/>
      </button>
    </div>
  );
}

export default Advice;
