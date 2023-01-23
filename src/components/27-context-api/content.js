import React, { useContext, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import StoreContext from "../../store";

const Content = () => {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(0);

  const store = useContext(StoreContext);
  const { currencies } = store;

  useEffect(() => {
    const rslt = amount / currencies[currency];
    setResult(rslt);
  }, [amount, currency]);

  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Form.Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </Form.Select>
      <InputGroup.Text id="basic-addon1">
        result: {result.toFixed(2)}
      </InputGroup.Text>
    </InputGroup>
  );
};

export default Content;
