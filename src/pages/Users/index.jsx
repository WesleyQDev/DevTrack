import { useState, useEffect } from 'react';
import { UserCard } from '../../components/UserCard';
import './styles.css';
import { api } from '../../lib/axios';

export function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users/all')
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
    <div className="feedContainer">
      {users.map((user) => (
        <div key={user.id}>
          <UserCard id={user.id} name= {user.username} email={user.email} creationTimestamp={user.creationTimestamp}  onDeletePost={handleDeletePost}/>
        </div>
      ))}
    </div>
  );
}
