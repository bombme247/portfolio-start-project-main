import './App.css';
import { Header } from './layout/header/Header';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Languages } from './layout/sections/languages/Languages';
import { Main } from './layout/sections/main/Main';
import { Resume } from './layout/sections/resume/Resume';
import { Skills } from './layout/sections/skills/Skills';
import { Footer } from './layout/footer/Footer';
import { Works } from './layout/sections/works/Works';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Resume/>
      <Skills/>
      <Works/>
      <Languages/>
      <Slogan/>
      <Footer/>
    </div>
  );
}

export default App;
