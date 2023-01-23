import React from "react";

const Jsx4 = () => {
  const age = 5;

  return (
    <div>
      {age >= 18 && <h1>ehliyet alabilir</h1>}
      {age >= 18 || <h1>ehliyet alamaz</h1>}
    </div>
  );
};

export default Jsx4;
