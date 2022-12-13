import './App.css';
import Logo from './components/logo';
import ListaDeTareas from './components/ListaTareas'



function App() {
  return (
    <div className="app-tareas">
      <Logo logo="logofree"/>

      <div className='tareas-main'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
