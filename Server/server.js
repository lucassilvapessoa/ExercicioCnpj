
        const express = require("express")
        const app = express()
        const bodyParser = require("body-parser")
        const fs = require("fs")
        const cors = require('cors')
        app.use(cors())

        function ListarTarefas(callback){
            fs.readFile("bdd.txt",'utf-8',(err,data)=>{
                let resultado =  JSON.parse(data)
                return callback(resultado)
            })
        }
        function CadastrarTarefa(id,tarefa){
            let obj = {id,tarefa}
            ListarTarefas((resultado)=>{
                let modificado = resultado
                modificado.push(obj)
                fs.writeFile("bdd.txt",JSON.stringify(modificado),()=>console.log(`Tarefa ${obj.tarefa} adicionada com sucesso`))
            })
        }
            function ExcluirTarefa(id){
            ListarTarefas((resultado)=>{
                let modificado = resultado
                let resultado2 = modificado.filter(x=> x.id!=id)
                fs.writeFile("bdd.txt",JSON.stringify(resultado2),()=> console.log(`Tarefa de id ${id} excluida com sucesso`))
            })
        }
        app.get("/",(req,res)=>{
            ListarTarefas((resultado)=>{
            res.json(resultado)
            })
        })
        app.post('/cadastrartarefa/:id/:tarefa',(req,res)=>{
            let {id,tarefa} = req.params
            CadastrarTarefa(id,tarefa)
            res.send("Tarefa cadastrada com sucesso")
        })
        app.post('/excluirtarefa/:id',(req,res)=>{
        ExcluirTarefa(req.params.id)
        res.send("Tarefa excluida com sucesso")
        })

        app.listen(8081,()=>{
            console.log("Servidor rodando na port 8081")
        })