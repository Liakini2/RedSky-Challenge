import './App.css';
import UserList from './components/UserList';
import Header from './components/Header';


const App = () => {
  // const [users, setUsers] = useState<CreatedUser[]>([]);

  // useEffect(() => {
  //   async function getUsers() {
  //     const response = await axios.get('/api/users');
  //     setUsers(response.data.data)
  //   };
  //   getUsers();
  // }, []);

  // const deleteUser = async (id: number) => {
  //   const response = await axios.delete(`/api/deleteUser?id=${id}`);
  //   setUsers(response.data.data)
  // };

  return (
    <div className="App">
      <Header />
      <UserList />
      {/* {users.length > 0 && <UserList users={users} />} */}
    </div>
  );
}

export default App;