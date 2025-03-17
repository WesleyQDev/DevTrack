import Card from 'react-bootstrap/Card';
import './Home.css'
import Button from 'react-bootstrap/Button';
export function Home(){
    return(
    <div className='main '>
        <div className=" ">
            <div className='  justify-content-center banner'>
                <h1 className='fs-1'>Projeto Engenharia de Software</h1>
                <p className='fs-4'>
                Desenvolva com sua equipe o seu projeto e compartilhe o seu trabalho com o publico! 🧑‍💻
                </p>
            </div>
            <div className='nsection'>
                <Card>
                    <Card.Header>Hello World!</Card.Header>
                    <Card.Body>
                    <Card.Title>Crie uma conta</Card.Title>
                    <Card.Text>
                        Criar uma conta de usuario é o primeiro passo para manter registrado os projetos e a equipe ao qual você se encontra.
                    </Card.Text>
                    <Button variant="primary">Criar</Button>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    </div>
    )
}