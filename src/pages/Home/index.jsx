import Card from "react-bootstrap/Card";
import "./Home.css";
import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { API_URL } from "../../config";
import { api } from '../../lib/axios';
import { UserCard } from '../../components/UserCard';

export function Home() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      api.get('/users')
      .then((response) => {
        setUsers(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
    }, []);
  
  function handleDeletePost(id){
    setUsers(users.filter(user => user.id !== id))
    api.delete(`/users/${id}`)
  }
  return (
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
                organize suas tarefas e compartilhe seu trabalho com o público.
              </Card.Text>
              <Button href="/register" variant="success">
                Registrar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      
          <div className="feedContainer">
          <h2>Usuarios registrados:</h2>
            {users.map((user) => (
              <div key={user.id}>
                <UserCard id={user.id} name= {user.username} email={user.email} creationTimestamp={user.creationTimestamp}  onDeletePost={handleDeletePost}/>
              </div>
            ))}
          </div>
    </div>
  );
}
