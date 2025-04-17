import { useNavigate } from "react-router-dom";

import { MdDelete } from "react-icons/md";
import { Card, Button, Row, Col } from "react-bootstrap";

export function Amigo({ name, creationTimestamp, email, id, onDeletePost }) {
  const navigate = useNavigate();

  return (
    <Col>
      <Card>
      <Card.Img

            variant="top"
            src="https://th.bing.com/th/id/R.163491cb0bf68d2a0eda47658a3459e2?rik=BPWOS0VTZd%2fUgQ&pid=ImgRaw&r=0"
          />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
          <Button
            className="button"
            variant="primary"
            onClick={() => navigate(`/users/${id}`)}
          >
            Ver mais
          </Button>
          <Button variant="link">
            <MdDelete
              onClick={() => onDeletePost(id)}
              size={28}
              color="#ed4337"
            />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
