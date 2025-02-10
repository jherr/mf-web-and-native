import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import useStore from "MyRemote/store";

const App = () => {
  const { count, increment, decrement, reset } = useStore();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: my-web-host</div>
      <div>Framework: react-18</div>
      <div>Count: {count}</div>
      <div className="flex mt-2 gap-2">
        <button
          onClick={increment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
