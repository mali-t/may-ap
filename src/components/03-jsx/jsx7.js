import React from "react";

const Jsx7 = ({ rate = 3 }) => {
  /* const arr = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      arr.push("o");
    } else {
      arr.push("x");
    }
  } */

  return (
    <div>
      {/* {arr.join("")} */}

      {[...new Array(5)].map((item, i) =>
        i < rate ? <span key={i}>o</span> : <span key={i}>x</span>
      )}
    </div>
  );
};

export default Jsx7;
