//Resposável por todo o controle da Api

const DispositivosServices = require('../services/DispositivosServices')
const dispositivoService = require('../services/DispositivosServices')

module.exports = {

    //Retorna uma Array de Objetos
    buscarTodos: async(req, res)=>{
        
        try {
            let dispositivos = await dispositivoService.buscarTodos()
            res.status(200).json(dispositivos)
        } catch (error) {
            res.status(500).json({error: error})
        }
    },

    //Retorna um Objeto
    buscarUm: async(req, res) =>{

        let id = req.params.id

        try {
            const dispositivo = await DispositivosServices.buscarUm(id)

            if(!dispositivo){
                res.status(422).json({message: "Dispositivo não encontrado"})
            }

            res.status(200).json(dispositivo)

        } catch (error) {
            res.status(500).json({error: error})
        }
    },

    inserir: async(req, res) =>{

        const category = req.body.category
        const color = req.body.color
        const partNumber = req.body.partNumber

        //Verifica se todos os campos foram inserido
        if(!category){
            res.status(422).json({error:`A inserção de category é obrigatória!`})
            return
        }

        if(!color){
            res.status(422).json({error:`A inserção de color é obrigatória!`}) 
            return
        }

        if(!partNumber){
            res.status(422).json({error:`A inserção de partNumber é obrigatória!`}) 
            return
        }

        try {
            await DispositivosServices.inserir(category, color, partNumber)
            res.status(200).json({message: "Dispositivo inserido com sucesso!"})
        } catch (error) {
            res.status(500).json({error: "Campos não enviados!"})
        }
    },

    
    alterar: async(req, res) =>{

        const id = req.params.id
        const category = req.body.category
        const color = req.body.color
        const partNumber = req.body.partNumber

        //Verifica se todos os campos foram inserido
        if(!id){
            res.status(422).json({error:`A inserção do id é obrigatória!`})
            return
        }

        if(!category){
            res.status(422).json({error:`A inserção de category é obrigatória!`})
            return
        }

        if(!color){
            res.status(422).json({error:`A inserção de color é obrigatória!`}) 
            return
        }

        if(!partNumber){
            res.status(422).json({error:`A inserção de partNumber é obrigatória!`}) 
            return
        }

        try {
            await DispositivosServices.alterar(category, color, partNumber,id)
            res.status(200).json({message: "Dispositivo inserido com sucesso!"})
        } catch (error) {
            res.status(500).json({error: "Campos não enviados!"})
        }
    },

    excluir: async(req, res)=>{
        try {
            await DispositivosServices.excluir(req.params.id)
            res.status(200).json({message: "Dispositivo excluído com sucesso!"})
        } catch (error) {
            res.status(500).json({error: "Campo não foi Excluído!"})
        }
    }
}