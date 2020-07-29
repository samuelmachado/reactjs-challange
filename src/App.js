import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import './App.css';
// import backgroundImage from './assets/background.jpg'
import api from './services/api'

function App()
{   
    async function handleAddProject(){
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
        })
        const project = response.data;
        setProjects([...projects, project])
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects([response.data])
        })
    }, [])
    return (
        <>
        <Header  > 
            <ul >
               {projects.map(project => <li key={project.id}>{project.name}</li>)}
            </ul>
            <button  type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </Header>
        <Header title="Projects">
            <ul>
                <li>Projects</li>
            </ul>
        </Header>
        </>
    )
}

export default App;