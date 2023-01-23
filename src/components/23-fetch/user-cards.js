import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./user-card";
const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://63c1c53a99c0a15d28f1d880.mockapi.io/users")
        .then((resp) => resp.json())
        .then((data) => {
          setUsers(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 5000);
    /* timeout loading spinner görmek için */
  }, []);
  return (
    <Container className="mt-5">
      {loading && <Spinner animation="border" variant="primary" />}
      <Row className="g-4">
        {users.map((user) => (
          <Col key={user.id} sm={6} md={4} lg={3} xl={2}>
            <UserCard {...user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default UserCards;
