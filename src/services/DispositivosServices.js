//Regrase e Comandos do banco de dados

const db = require('../db')

module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM dispositivos', (error, result)=>{
                if(error){
                    rejeitado(error)
                    return
                }
                aceito(result)
            })
        })
    },

    buscarUm: (id)=>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM dispositivos WHERE id = ?',[id], (error, result)=>{
                if(error){
                    rejeitado(error)
                    return
                }

                //Caso ache mais de um, retorna o que tiver na posição 0
                if(result.length > 0){
                    aceito(result[0])
                }else{
                    aceito(false)
                }
            })
        })
    },

    inserir: (category, color, partNumber)=>{
        return new Promise((aceito,rejeitado)=>{
            db.query('INSERT INTO dispositivos (category, color, partNumber) VALUES (?, ?, ?)',
                [category, color, partNumber], (error, result)=>{

                    if(error){
                        rejeitado(error)
                        return
                    }
                    aceito(result)
                })
        })
    },

    
    alterar: (category, color, partNumber,id)=>{
        return new Promise((aceito,rejeitado)=>{
            db.query('UPDATE dispositivos SET category = ?, color = ?, partNumber = ? WHERE id = ?',
                [category, color, partNumber, id], (error, result)=>{

                    if(error){
                        rejeitado(error)
                        return
                    }
                    aceito(result)
                })
        })
    },  
    
    excluir: (id)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM dispositivos WHERE id = ?', [id], (error, result)=>{
                if(error){
                    rejeitado(error)
                    return
                }
                aceito(result)
            })
        })
    }
}