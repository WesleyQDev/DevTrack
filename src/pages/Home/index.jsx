import Card from "react-bootstrap/Card";
import "./Home.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import { api } from "../../lib/axios";
import { UserCard } from "../../components/UserCard";

import { useAuth } from "../../provider/authProvider";
import { Col, Row } from "react-bootstrap";
import { Amigo } from "../../components/Amigo";
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
            <h1 className="fs-1">Olá {user}</h1>
            <p className="fs-4">Pronto para usar o DevTrack?</p>
          </div>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.nGRxZXh2mMH-0UhNfjNPYAHaEH?rs=1&pid=ImgDetMain"
                  />
                  <Card.Body>
                    <Card.Title>Projeto de exemplo</Card.Title>
                    <Card.Text>
                      Projeto de um software de edição de vídeo usando Python —
                      sim, Python! A ideia é facilitar a edição de vídeo e
                      permitir que programadores desenvolvam seus próprios
                      plugins de forma simples para o software.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="feedContaine mt-5">
          <h2>Amigos</h2>
          <Row xs={2} md={5} className="g-4">
            {users.map((user) => (
              <div key={user.id}>
                <Amigo
                  id={user.id}
                  name={user.username}
                  email={user.email}
                  creationTimestamp={user.creationTimestamp}
                  onDeletePost={handleDeletePost}
                />
              </div>
            ))}
          </Row>
        </div>
        <div className="feedContaine mt-5">
          <h2>Equipes/Organizações</h2>
          <Row xs={2} md={5} className="g-4">
            {users.map((user) => (
              <div key={user.id}>
                <Amigo
                  id={user.id}
                  name={user.username}
                  email={user.email}
                  creationTimestamp={user.creationTimestamp}
                  onDeletePost={handleDeletePost}
                />
              </div>
            ))}
          </Row>
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
                  <Button href="/singup" variant="primary">
                    Registrar
                  </Button>
                  <Button href="/login" variant="secondary" className="ml-2">
                    Já tenho conta
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
