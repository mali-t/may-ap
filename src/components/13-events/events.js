import React from "react";

const Events = () => {
  const sayHello1 = () => {
    alert(" hello");
  };
  const sayHello2 = (name) => {
    alert(`hello ${name}`);
  };

  return (
    <div>
      {/* Event handler parametresiz kullanılacaksa aşağıdaki gibi 
         fonksiyon kullanmadan çağrılabilir. */}
      <div onClick={sayHello1}>say hello</div>

      {/* Event handler a  parametre gönderilecekse aşağıdaki gibi 
       fonksiyon kullanmak zorunludur ? */}
      <div onClick={() => sayHello2("ali")}>say hello</div>
    </div>
  );
};

export default Events;
