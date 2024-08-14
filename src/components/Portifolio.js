import React, { useState } from 'react';
import { Button, Typography, Card, CardContent, CardMedia, Container, Box, CardActions } from '@mui/material';
import './Portifolio.css';

const projects = [
  {
    id: 8,
    title: 'Projeto React JS - IgniteTimer',
    category: 'React JS',
    imageUrl: 'https://github.com/PabloXT14/Ignite-Timer/raw/main/.github/images/ignite_timer-demonstration.gif?raw=true',
    description: 'O Ignite Timer é que um projeto que permite ao usuário cronometrar as suas tarefas no dia a dia, além de lhe permite ver um histórico de todos as tarefas já realizadas.',
    link: 'https://github.com/otaviomartinsl/Ignite-timer',
  },
  {
    id: 2,
    title: 'Projeto React JS - ToDoListWeb',
    category: 'React JS',
    imageUrl: 'https://user-images.githubusercontent.com/48845273/219043254-c12511d4-43aa-4108-a5a0-fceae7106330.gif',
    description: 'O projeto se trata é uma api gerenciamento de tarefas, onde o usuário pode adicionar, listar, remover e editar tarefas.',
    link: 'https://github.com/otaviomartinsl/ToDoListWeb',
  },
  {
    id: 1,
    title: 'Projeto React Native - Ignite Teams',
    category: 'React Native',
    imageUrl: 'https://user-images.githubusercontent.com/48845273/215354134-89ad9108-91aa-4eb0-bebb-78d93e2cae46.png',
    description: 'O projeto consiste em um sistema de gerenciamento de times, no qual o usuário possa cadastrar turma, seus times e os participantes de cada um desses times.',
    link: 'https://github.com/otaviomartinsl/igniteteams',
  },
  {
    id: 3,
    title: 'Projeto C# - Launcher Quiz Enem',
    category: 'C#',
    imageUrl: 'https://play-lh.googleusercontent.com/4AYv6S1IbBuSCPataQU7YKPLk30H2QCQKOAplKLEQ6NWYzxYC6NYxqy0hMmcctobuxSa=w2560-h1440-rw',
    description: 'A Launcher Quiz Enem é um aplicativo com os assuntos que mais caem no Enem, para você revisar e estudar tudo de forma simples e divertida, unificando ferramentas inteligentes com o melhor método de estudo comprovado para Provas e Vestibulares você aumenta sua chance de aprovação no Curso dos seus sonhos.',
    link: 'https://play.google.com/store/apps/details?id=com.PlataformaLauncher.QuizPlataformaLaucher',
  },
  {
    id: 4,
    title: 'Projeto Unity, C# - Matemago',
    category: 'C#',
    imageUrl: 'https://static.wixstatic.com/media/39161c_168736816176461bb0050595ba79e89a~mv2.png/v1/fill/w_1225,h_450,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/39161c_168736816176461bb0050595ba79e89a~mv2.png',
    description: 'Jogo feito na Unity para praticar operações matematicas de forma interativa.',
    link: 'https://play.google.com/store/apps/details?id=com.edtek.matemago',
  },
  {
    id: 5,
    title: 'Projeto React Native - ToDos',
    category: 'React Native',
    imageUrl: 'https://user-images.githubusercontent.com/48845273/215354492-c6857732-5004-41ca-b8b0-8c5c31a1af11.png',
    description: 'Esse projeto foi desenvolvido para obter conhecimentos a respeito do framework NestJS, o projeto se trata é uma api gerenciamento de tarefas, onde o usuário pode adicionar, listar, remover e editar tarefas.',
    link: 'https://github.com/otaviomartinsl/ReactNativeTodos',
  },
  {
    id: 6,
    title: 'Projeto React Native - App Tarefas',
    category: 'React Native',
    imageUrl: 'https://user-images.githubusercontent.com/48845273/215357278-2d774940-f235-4988-a733-e8e2ee40c4fa.png',
    description: 'Aplicação de lembrete de tarefas. Funcionalidades: Contagem de tarefas, Adicionar uma nova tarefa, Remover uma tarefa, Marcar e desmarcar uma tarefa como concluída.',
    link: 'https://github.com/otaviomartinsl/apptarefas',
  },
  {
    id: 7,
    title: 'Projeto Unity, C# - Matemago AR',
    category: 'C#',
    imageUrl: 'https://play-lh.googleusercontent.com/EZlwc9hhFZwXI46sWPdwInnRSffPV7P3xlwKC9hDV4w6WKL4BhH-vbZH8WDT54J2F4az=w2560-h1440-rw',
    description: 'Jogo feito na Unity para praticar operações matematicas de forma interativa em Realidade Aumentada.',
    link: 'https://play.google.com/store/apps/details?id=com.Edtek.MatemagoAR',
  },
  {
    id: 7,
    title: 'Projeto Unity, C# - Control Ball',
    category: 'C#',
    imageUrl: 'https://play-lh.googleusercontent.com/jMjQ_K0SrxVlTZlmDmFfLVU8g8472ox0v-9OY4Jat-Npue9ey5cKm-MSrDVeCyW7vik=w2560-h1440-rw',
    description: 'Jogo que usa o giroscópio do dispositivo para controlar uma bola com o objetivo de desviar os obstáculos e chegar ao chekcpoint.',
    link: 'https://play.google.com/store/apps/details?id=com.studioseteg.controlballchallenge',
  },

];

function Portifolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <Container>
      <Typography variant="h2" gutterBottom sx={{ fontSize: '2rem' }}>
        Portifólio
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
        <Button variant="contained" onClick={() => setFilter('All')} sx={{ backgroundColor: '#000', borderRadius: '10px', border: '1px solid #fff' }}>
          Todos
        </Button>
        <Button variant="contained" onClick={() => setFilter('React Native')} sx={{ backgroundColor: '#000', borderRadius: '10px', border: '1px solid #fff' }}>
          <img src="https://www.rocketseat.com.br/_next/static/media/react-native-icon.891a299a.svg" alt="React Native" style={{ width: 20, height: 20, marginRight: 5 }} />
          React Native
        </Button>
        <Button variant="contained" onClick={() => setFilter('React JS')} sx={{ backgroundColor: '#000', borderRadius: '10px', border: '1px solid #fff' }}>
          <img src="https://www.rocketseat.com.br/_next/static/media/react-icon.38930335.svg" alt="React JS" style={{ width: 20, height: 20, marginRight: 5 }} />
          React JS
        </Button>
        <Button variant="contained" onClick={() => setFilter('C#')} sx={{ backgroundColor: '#000', borderRadius: '10px', border: '1px solid #fff' }}>
          <img src="https://www.rocketseat.com.br/_next/static/media/csharp-icon.d39a10dc.svg" alt="C#" style={{ width: 20, height: 20, marginRight: 5 }} />
          C#
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
        {filteredProjects.map(project => (
          <Card key={project.id} sx={{ width: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
              component="img"
              height="250"
              image={project.imageUrl}
              alt={project.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small" href={project.link} target="_blank" sx={{ backgroundColor: '#000', color: '#fff', border: '1px solid #fff', borderRadius: '10px' }}>
                Visualizar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Portifolio;