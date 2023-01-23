import React from "react";

const Style2 = () => {
  const styleTitle = {
    fontSize: "2rem",
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div>
      <h2 style={styleTitle}>Jsx loops</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis placeat
        molestiae nesciunt hic! Consequuntur nulla eaque nisi consequatur ipsam
        vero quasi voluptatum in! Dolores aperiam aut repellat nobis assumenda
        harum!
      </p>

      <h2 style={{ ...styleTitle, color: "blue" }}>component props</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis placeat
        molestiae nesciunt hic! Consequuntur nulla eaque nisi consequatur ipsam
        vero quasi voluptatum in! Dolores aperiam aut repellat nobis assumenda
        harum!
      </p>
    </div>
  );
};

export default Style2;
