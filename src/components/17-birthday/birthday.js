import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PersonCard from "./person-card";
import data from "./people.json";

const Birthday = () => {
  const [people, setPeople] = useState(data);

  return (
    <Container>
      <h1>Bugün Doğanlar</h1>
      <p>Bugün Doğan {people.length} kişi bulundu</p>

      {people.map((item) => (
        <PersonCard {...item} key={item.id} />
      ))}
    </Container>
  );
};

export default Birthday;
