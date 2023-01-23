import React from "react";
import "./welcome.scss";

const Welcome = ({ firstName, lastName }) => {
  return (
    <div className="welcome">
      {/* //aşağıda h2 tagı içine props.firstname olarak yazmamak için bunu yapıyoruz
//eger props sayısı az ise const Welcome = (props) 'daki props yerine
//parametreleri direk yazıp aşağıdakini yazmam */}
      <h2>
        Welcome {firstName} {lastName}
      </h2>
    </div>
  );
};

export default Welcome;
