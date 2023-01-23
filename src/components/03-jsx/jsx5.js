import React from "react";

const Jsx5 = () => {
  const names = ["ali", "veli", "ayşe", "fatma"];
  const cities = ["istanbul", "izmir", "london", "paris"];

  return (
    <div>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>

      <select>
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default Jsx5;
