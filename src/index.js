import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const SomeComponent = props => <p>{props.name}</p>;

// const useInterval = ()=> {
//   const [value, setValue] = useState(0);
//   setInterval(()=>{
//     setValue(value + 1);
//   }, 2500);

//   return value;
// }

const useScreenWidth = () => {
  const [value, setValue] = useState(window.innerWidth);

  const handleResize = () => {
    setValue(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return value;
};

function App() {
  // const value = useInterval();
  const value = useScreenWidth();

  useEffect(() => {
    // console.log(`state: ${state}`);
    // console.log(`people: ${people.join(',')}`);
    // someFunction();
    // console.log(value);
  });

  return (
    <div className="App">
      {/* {people.map(name => (
        <SomeComponent name={name} />
      ))} */}
      <SomeComponent name={value} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
