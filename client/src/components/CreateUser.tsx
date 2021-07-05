import { useState } from 'react';
import './CreateUser.css'

const CreateUser = ({ sendNewUser }: any) => {
    const [first_name, setFirstName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const clearInputs = () => {
        setFirstName('');
        setLastName('');
        setAvatar('');
        setEmail('');
    };

    return (
        <div className='create-user-parent'>
            <div className='create-user-display'>
                <h1 className='create-user-text'>ADD USER</h1>
                <input className='create-input' placeholder={'First Name'} value={first_name} onChange={(e) => setFirstName(e.target.value)}></input>
                <input className='create-input' placeholder={'Last Name'} value={last_name} onChange={(e) => setLastName(e.target.value)}></input>
                <input className='create-input' placeholder={'Avatar'} value={avatar} onChange={(e) => setAvatar(e.target.value)}></input>
                <input className='create-input' placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <button className='create-btn' onClick={() => { sendNewUser(first_name, last_name, avatar, email); clearInputs(); }}>SUBMIT</button>
            </div>
        </div>
    );
};

export default CreateUser;
