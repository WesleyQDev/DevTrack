import Card from "react-bootstrap/Card";
import "./Home.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import { api } from "../../lib/axios";
import { UserCard } from "../../components/UserCard";

import { useAuth } from "../../provider/authProvider";
import { Col, Row } from "react-bootstrap";
export function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  function handleDeletePost(id) {
    setUsers(users.filter((user) => user.id !== id));
    api.delete(`/users/${id}`);
  }

  //Auth
  const { token } = useAuth();
  let user = token;

  if (user) {
    return (
      <div className="main ">
        <div className=" ">
          <div className="  justify-content-center banner">
            <h1 className="fs-1">Olá User</h1>
            <p className="fs-4">Pronto para usar o DevTrack?</p>
          </div>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="feedContainer">
          <h2>Amigos:</h2>
          {users.map((user) => (
            <div key={user.id}>
              <UserCard
                id={user.id}
                name={user.username}
                email={user.email}
                creationTimestamp={user.creationTimestamp}
                onDeletePost={handleDeletePost}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="main ">
          <div className=" ">
            <div className="  justify-content-center banner">
              <h1 className="fs-1">DevTrack</h1>
              <p className="fs-4">
                DevTrack – Colabore com sua equipe, desenvolva seu projeto com
                eficiência e compartilhe suas conquistas com o público!💻
              </p>
            </div>
            <div className="nsection">
              <Card className="pr-10">
                <Card.Body>
                  <Card.Title>Primeiro passo</Card.Title>
                  <Card.Text>
                    Registre sua conta no DevTrack e comece a desenvolver seus
                    projetos em equipe. Conecte-se com outros profissionais,
                    organize suas tarefas e compartilhe seu trabalho com o
                    público.
                  </Card.Text>
                  <Button href="/singup" variant="success">
                    Registrar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}
