import './App.css';
import UserList from './components/UserList';
import Header from './components/Header';


const App = () => {

  return (
    <div className="App">
      <Header />
      <UserList />
    </div>
  );
};

export default App;