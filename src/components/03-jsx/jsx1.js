import React from "react";

const Jsx1 = () => {
  const message =
    "class isimleri ClassName in içine yazılır ve camelCase olarak yazılır";
  return (
    //tüm elementler tek bir root tun içinde olmalı
    //class isimleri ClassName in içine yazılır
    <ul>
      <li>tüm elementler tek bir root tun içinde olmalı</li>
      <li className="title">{message}</li>
    </ul>
  );
};

export default Jsx1;
