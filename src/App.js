import './App.css';
import { DashBoard } from './DashBoard';
import { SideBar } from './SideBar';

function App() {
  return (
    <div className="App">
      <div className="SideBar">
      <SideBar/>
      </div>
      <div className='DashBoard'>
      <DashBoard/>
      </div>
    </div>
  );
}

export default App;



