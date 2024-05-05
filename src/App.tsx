import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Resume } from './layout/sections/resume/Resume';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Resume/>
    </div>
  );
}

export default App;
