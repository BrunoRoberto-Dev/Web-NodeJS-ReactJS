import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';
import './index.css';
 
interface IAluno{
    id: number;
    nome: string;
    ra: string;
    cadastrado: boolean;
    data_nascimento: Date;
    idade: number;
    endereço: string;
}
 
const Alunos: React.FC = () => {
 
    const [alunos, setAlunos] = useState<IAluno[]>([])
    const history = useHistory()
 
    useEffect(() => {
        loadAlunos()
    }, [])
 
    async function loadAlunos() {
        const response = await api.get('/alunos')
        console.log(response);
        setAlunos(response.data)
    }
 
    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }
 
    function newAluno(){
        history.push('/alunos_cadastro')
    }
 
    function editAluno(id: number){
        history.push(`/alunos_cadastro/${id}`)
    }
 
    function viewAluno(id: number){
        history.push(`/alunos/${id}`)
    }
 
    async function finishedAluno(id: number){
        await api.patch(`/alunos/${id}`)
        loadAlunos()
    }
 
    async function deleteAluno(id: number){
        await api.delete(`/alunos/${id}`)
        loadAlunos()
    }
 
    return (
        
        <div className="container">
            <br />
            <div className="aluno-header">
                <h1>Cadastros</h1>
                <Button variant="dark" size="sm" onClick={newAluno}>Novo Cadastro</Button>
            </div>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>RA</th>
                    <th>Data de Nascimento</th>
                    <th>Cadastrado</th>
                    <th>Idade</th>
                    <th>Endereço</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.idade}</td>
                                <td>{aluno.cadastrado ? "Ativo" : "Inativo"}</td>
                                <td>
                                    <Button size="sm" disabled={aluno.cadastrado} variant="primary" onClick={() => editAluno(aluno.id)}>Editar</Button>{' '}
                                    <Button size="sm" disabled={aluno.cadastrado} variant="success" onClick={() => finishedAluno(aluno.id)}>Finalizar</Button>{' '}
                                    <Button size="sm" variant="warning" onClick={() => viewAluno(aluno.id)}>Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger" onClick={() => deleteAluno(aluno.id)}>Remover</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
 
export default Tasks;