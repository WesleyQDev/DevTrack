import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { UserForm } from '../../components/UserForm'

export function Register(){
    const navigate = useNavigate();

    const handleCreatePost = (data) => {
      api.post('/users', data)
      navigate('/users')
      // reset();
    }
    return(
    <div className="px-14 py-5">
        <UserForm onAction={handleCreatePost} title="Novo usuario" textButton="Registrar"/>
    </div>
    )
}