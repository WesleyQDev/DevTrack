import { useNavigate } from "react-router-dom";
import "./styles.css";
import { MdDelete } from "react-icons/md";
import { Card, Button} from "react-bootstrap";

export function UserCard({ name, creationTimestamp , email, id }) {
  const navigate = useNavigate();

  return (
    <Card className="m-2 cardContainer">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Text>Criado em: {creationTimestamp}</Card.Text>
        <Button className="button" variant="primary" onClick={() => navigate(`/user/${id}`)}>Ver mais</Button>
        <Button variant="secondary" onClick={() => navigate(`/updateUser/${id}`)}>Atualizar</Button>
        <Button variant="link"><MdDelete onClick={() => onDeletePost(id)} size={28} color="#ed4337" /></Button>
      </Card.Body>
    </Card>
  );
}
