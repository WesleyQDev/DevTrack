import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const postSchema = yup.object({
  username: yup.string().required("*Digite um nome de usuario"),
  email: yup.string().required("*É necesario um e-mail valido"),
  password: yup.string().required("*É necesario uma senha valida"),
});

export function UserForm({ onAction }) {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  async function getDataUpdate() {
    const response = await api.get(`/users/${id}`);
    reset(response.data);
  }

  useEffect(() => {
    // Só chame getDataUpdate se houver um ID
    if (id) {
      getDataUpdate();
    }
  }, [id]);

  return (
    <Form onSubmit={handleSubmit(onAction)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome"
          {...register("username")}
        />
        <Form.Text className="text-muted">{errors.name?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        <Form.Text className="text-muted">{errors.email?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <Form.Text className="text-muted">{errors.password?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Concordo com os termos" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
}
