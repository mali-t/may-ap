import React from "react";
import northLights from "../../assests/img/image1.jpg";

const Image = () => {
  return (
    <div>
      {/* external url */}
      <img
        src="https://images.unsplash.com/photo-1672572305595-c0a319dc09f3?ixlib=rb-4.0.3&ixid=MnwxM[…]G90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        width="300px"
      />

      {/* statik yöntemde görüntüler public klasöründe aranır */}
      <img src="assets/img/car.jpg" alt="" width="300px" />

      {/* import ve require yönteminde dosyalar src içinde olmalıdır */}

      {/* import */}
      <img src={northLights} alt="" width="300px" />

      {/* require */}
      <img src={require("../../assests/img/image2.jpg")} alt="" />

      {/*  */}
    </div>
  );
};

export default Image;
