import React, { useState } from "react";

const randomNum = Math.floor(Math.random() * 101);

function App() {
  const [guess, setGuess] = useState(0);
  const [count, setCount] = useState(0);
  const correctNum = randomNum === Number(guess);

  function handleSubmit() {
    if (!correctNum) {
      setCount((c) => c + 1);
    }
  }
  return (
    <div className="App h-screen flex justify-center items-center text-center">
      <div className="flex flex-col rounded-lg shadow-md justify-between pt-6 border-2 min-w-[200px] min-h-[300px] bg-gray-100">
        <h1 className="text-2xl">Guess a Number?</h1>
        {/* <div className="">{randomNum}</div> */}
        <div className="">
          {correctNum ? "Correct" : guess < randomNum ? "too small" : "too big"}
        </div>
        <div className="">
          <input
            placeholder="Enter a number from 0-100"
            className="outline-none"
            value={guess}
            onChange={(e) => {
              setGuess(e.target.value);
            }}
          />
          <div className="">
            <button onClick={handleSubmit}>submit</button>
          </div>
          <div className="">{count > 1 ? count + " times" : ""}</div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
