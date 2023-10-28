import './App.css';
import NavbarComponent from './components/navbar/Navbar';
import LiveList from './components/list/LiveList';

const App = () => {

  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className="bg-bgblack">
        <LiveList></LiveList>
      </div>
    </div>
  );
}

export default App;


