import axios from 'axios';
import { useEffect, useState } from 'react';
import { CreatedUser } from '../models/model';
import EditUser from './EditUser';
import CreateUser from './CreateUser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import './UserList.css';
import 'react-toastify/dist/ReactToastify.css';

// interface UserListProps {
//     users: CreatedUser[];
// }

// const UserList: React.FC<UserListProps> = (props) => {



const UserList = () => {
    const [users, setUsers] = useState<CreatedUser[]>([]);

    useEffect(() => {
        async function getUsers() {
            const response = await axios.get('/api/users');
            setUsers(response.data.data);
            toast('test');
        };
        getUsers();
    }, [setUsers]);

    const sendNewUser = (first_name: string, last_name: string, avatar: string, email: string) => {
        axios.post(`/api/createUser`, { first_name, last_name, avatar, email })
            .then((res) => {
                setUsers(res.data);
                toast('User added!');
            })
            .catch(err => console.log(err))
    };

    const updateUser = (first_name: string, last_name: string, avatar: string, email: string, id: number) => {
        axios.put(`/api/updateUser/${id}`, { first_name, last_name, avatar, email })
            .then(res => { toast('User Updated!'); setUsers(res.data); })
            .catch(err => console.log(err))

    };

    const deleteUser = (id: number) => {
        axios.delete(`/api/deleteUser/${id}`)
            .then(res => {
                toast('User Deleted!');
                setUsers(res.data);
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <CreateUser sendNewUser={sendNewUser} />
            <div className='user-list-parent'>
                {users.map((user) => {
                    return <div key={user.id} className='user-list-display'>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <img src={user.avatar} alt={'user avatar'} />
                        <h1 className='email'>{user.email}</h1>
                        <div className='user-edit-btns'>
                            {/* {console.log(user.id)} */}
                            <EditUser updateUser={updateUser} userId={user.id} />
                            <button className='delete-btn' onClick={() => deleteUser(user.id)}>DELETE</button>
                        </div>
                    </div>
                })}
                <ToastContainer draggable={false} transition={Bounce} autoClose={3000} hideProgressBar={true} />
            </div>
        </div>
    );
};


export default UserList;