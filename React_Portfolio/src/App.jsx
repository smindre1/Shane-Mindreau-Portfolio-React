import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectDisplay from './components/ProjectDisplay';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="mainPage">
      <Header />
      <AboutMe />
      <ProjectDisplay />
      <Contacts />
    </div>
  );
}

export default App;

/*
Sections:
{
header: (name, menu)
about Me: (title, profile img, description),
my work: (title, 5 project images, more projects button),
contact me: (title, links)
}

*/