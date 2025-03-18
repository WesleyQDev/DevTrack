import Card from 'react-bootstrap/Card';
import './Home.css'
import Button from 'react-bootstrap/Button';
export function Home(){
    return(
    <div className='main '>
        <div className=" ">
            <div className='  justify-content-center banner'>
                <h1 className='fs-1'>DevTrack</h1>
                <p className='fs-4'>
                DevTrack – Colabore com sua equipe, desenvolva seu projeto com eficiência e compartilhe suas conquistas com o público!💻
                </p>
            </div>
            <div className='nsection'>
                <Card className='pr-10'>
                    <Card.Body>
                    <Card.Title>Primeiro passo</Card.Title>
                    <Card.Text>
                    Registre sua conta no DevTrack e comece a desenvolver seus projetos em equipe. Conecte-se com outros profissionais, organize suas tarefas e compartilhe seu trabalho com o público.
                    </Card.Text>
                    <Button href="/register" variant="success">Registrar</Button>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    </div>
    )
}