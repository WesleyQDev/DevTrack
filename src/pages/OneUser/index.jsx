import { useEffect } from "react";
import "./styles.css";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function OneUser() {

  const [user, setUser] = useState ({})

  const { id } = useParams();

  useEffect(() => {
    api.get(`/users/${id}`)
    .then(response => setUser(response.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <article className="onePostContainer">
      <h2>{user.username}</h2>
      <p>
        Email: {user.email}
      </p>
    </article>
  );
}
