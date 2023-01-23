import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const Useeffect2 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `hello ${counter} kere tıkladın`;
  }, [counter]);

  return (
    <Container className="text-center mt-5">
      <h1>{counter} kere tıkladın </h1>
      <Button variant="info" onClick={() => setCounter((prev) => prev + 1)}>
        click me
      </Button>
    </Container>
  );
};

export default Useeffect2;
