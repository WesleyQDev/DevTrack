import { UserForm } from "../../components/UserForm";
import { useNavigate, useParams } from 'react-router-dom'
import { api } from "../../lib/axios";


export function UpdateUser() {
    const navigate = useNavigate();
    const { id } = useParams()

    function handleUpdatePost(data) {
        api.put(`/users/${id}`, data)
        navigate("/users");
    }


    
    return (
        <div className="px-14 py-5">
            <UserForm title="Atualizar usuario" textButton="Atualizar" onAction={handleUpdatePost}/>
        </div>
    )
}