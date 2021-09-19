import { getRepository } from "typeorm";
import { Alunos } from '../entity/Cadastros';
import { Request, Response } from "express";

export const getCadastros = async(request: Request, response: Response) => {
    const cadastros = await getRepository(Alunos).find()
    return response.json(cadastros);
}; // Exibe todos os cadastros

export const saveCadastro = async(request: Request, response: Response) => {
    const cadastro = await getRepository(Alunos).save(request.body)
    return response.json(cadastro);
}; // Adiciona novo cadastro

export const getCadastro = async(request: Request, response: Response) => {
    const {id} = request.params
    const cadastro = await getRepository(Alunos).findOne(id)
    return response.json(cadastro);
}; // Exibe um cadastro com ID especifico

export const updateCadastro = async(request: Request, response: Response) => 
{
    const {id} = request.params
    const cadastro = await getRepository(Alunos).update(id, request.body)

    if (cadastro.affected == 1){
        const cadastroAtualizado = await getRepository(Alunos).findOne(id)
        return response.json(cadastroAtualizado);
    }
    else{
        return response.status(404).json( {message: 'Cadastro não encontrado!'})
    }
}; // Atualiza algum cadastro com ID já criado 

export const deleteCadastro = async(request: Request, response: Response) =>
{
    const {id} = request.params
    const cadastro = await getRepository(Alunos).delete(id)

    if(cadastro.affected == 1){
        return response.status(200).json( {message: "Cadastro excluído com sucesso!"})
    }
    else{
        return response.status(404).json( {message: 'Cadastro não encontrado!'})
    }
}; // Deleta algum cadastro de ID especifico

export const finishedCadastro = async(request: Request, response: Response) =>
{
    const {id} = request.params
    const cadastro = await getRepository(Alunos).update(id, {
        cadastrado: false,
    })

    if (cadastro.affected == 1){
        const cadastroFinalizado = await getRepository(Alunos).findOne(id)
        return response.json(cadastroFinalizado);
    }
    else{
        return response.status(404).json( {message: 'Cadastro não encontrado!'})
    }
}; // Encerra algum cadastro criado anteriormente