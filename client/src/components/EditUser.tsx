import { useState } from "react";
import './EditUser.css';

const EditUser = (props: any) => {
    const [first_name, setFirstName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [id, setId] = useState(0)

    const clearInputs = () => {
        setFirstName('');
        setLastName('');
        setAvatar('');
        setEmail('');
    };

    return (
        <div className='edit-user'>
            <input placeholder={'First Name'} value={first_name} onChange={(e) => { setFirstName(e.target.value); setId(props.userId); }}></input>
            <input placeholder={'Last Name'} value={last_name} onChange={(e) => { setLastName(e.target.value); setId(props.userId); }}></input>
            <input placeholder={'Avatar'} value={avatar} onChange={(e) => { setAvatar(e.target.value); setId(props.userId); }}></input>
            <input placeholder={'Email'} value={email} onChange={(e) => { setEmail(e.target.value); setId(props.userId); }}></input>
            <button onClick={() => { props.updateUser(first_name, last_name, avatar, email, id); clearInputs(); }}>SUBMIT</button>
        </div>
    );
};

export default EditUser
