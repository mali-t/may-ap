import React from "react";

const Country = (props) => {
  const { flag, name, capital, population, currencies } = props;
  return (
    <tr>
      <td>1</td>
      <td>
        <img src={flag} alt="" />
      </td>
      <td>{name}</td>
      <td>{population}</td>
      <td>{capital}</td>
      <td>{currencies}</td>
    </tr>
  );
};

export default Country;
