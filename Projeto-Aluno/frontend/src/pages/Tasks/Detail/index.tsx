import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom'
import './index.css';
import api from '../../../services/api';
import moment from 'moment';
 
interface IAluno{
    id: number;
    nome: string;
    ra: string;
    cadastrado: boolean;
    data_nascimento: Date;
    idade: number;
    endereco: string;
}
 
const Detail: React.FC = () => {
 
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
    const [aluno, setAluno] = useState<IAluno>()
 
    function back(){
        history.goBack()
    }
 
    async function findAluno(){
        const response = await api.get<IAluno>(`/alunos/${id}`)
        console.log(response)
        setAluno(response.data)
    }
 
    useEffect(() => {
        findAluno()
    }, [id])
 
    return (
        <div className="container">
            <br />
            <div className="aluno-header">
                <h1>Detalhes do Aluno</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />
 
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{aluno?.nome}</Card.Title>
                    
                    <Card.Text>
                    {aluno?.endereco}
                    <br/>
                    {aluno?.cadastrado ? "Inativo" : "Ativo"}
                    <br />
                    <strong>Data de Nascimento: </strong>
                    {moment(aluno?.data_nascimento).format('DD/MM/YYYY')}
                    </Card.Text>
                </Card.Body>
            </Card>
 
        </div>
    );
}
 
export default Detail;