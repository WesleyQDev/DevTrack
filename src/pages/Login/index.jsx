import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken(user);
    navigate("/", { replace: true });
  };

  const [user, setUser] = useState("");

  // setTimeout(() => {
  //   handleLogin();
  // }, 3 * 1000);

  return (
    <div className="px-14 py-5">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h2>Faça login para começar a usar o DevTrack</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            placeholder="Digite seu nome de usuario"
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link className="ml-2 no-underline" to={"/esqueci-minha-senha"}>
          Esqueci minha senha
        </Link>
      </Form>
    </div>
  );
};

export default Login;
