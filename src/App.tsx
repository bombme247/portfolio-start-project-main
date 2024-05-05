import './App.css';
import { Header } from './layout/header/Header';
import { Languages } from './layout/sections/languages/Languages';
import { Main } from './layout/sections/main/Main';
import { Resume } from './layout/sections/resume/Resume';
import { Skills } from './layout/sections/skills/Skills';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Resume/>
      <Skills/>
      <Languages/>
    </div>
  );
}

export default App;
