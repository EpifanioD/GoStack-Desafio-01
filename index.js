const express = require('express');

const server = express();

server.use(express.json());

const projects = []

/*
  Middleware que checa se existe algum project
*/

function checarProjetos(req, res, next) {
    const { id } = req.params;
    const project = projects.find(p => p.id == id);
  
    if (!project) {
      return res.status(400).json({ error: 'Project not found' });
    }
  
    return next();
  }
  
  /*
    Middleware que faz a contagem de requisições que foram feitas
  */
  function Requests(req, res, next) {
  
    console.count("Número de requisições");
  
    return next();
  }
  
  server.use(Requests);
  
server.post('/projects', (req, res) => {
    const { id, title } = req.body;
    
    const project = {
        id,
        title,
        tasks: []
    }

    projects.push(project);
    return res.json(project)
})

server.get('/projects', (req , res) => {
    return res.json(projects)
})

server.put('/projects/:id', checarProjetos, (req, res)=>{
    const { id } = req.params;
    console.log(id)
    const { title } = req.body;
    console.log(title)

    const project = projects.find(p => p.id == id);

    project.title = title;

    return res.json(project);
})

server.delete('/projects/:id', (req, res) =>{
    const { id } = req.params;

    deletar = projects.findIndex(p => p.id == id);

    projects.splice(deletar, 1);

    return res.send();

})


server.post('/projects/:id/tasks', (req, res) =>{
    const { id } = req.params;
    const {title } = req.body;

    const project = projects.find(p => p.id == id);

    project.tasks.push(title);

    return res.json(project)
})


server.listen(3000)
