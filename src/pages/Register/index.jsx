import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { UserForm } from '../../components/UserForm'

export function Register(){
    const navigate = useNavigate();

    const handleCreatePost = (data) => {
      api.post('/posts', data)
      navigate('/')
      // reset();
    }
    return(
    <div className="px-14 py-5">
        <UserForm title="Criar publicação" textButton="Criar" onAction={handleCreatePost}/>
    </div>
    )
}