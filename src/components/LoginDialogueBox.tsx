// React imports
import React, {useState, SyntheticEvent} from 'react';

// Custom imports

type DialogueProps = {
    isVolunteer: boolean,
    setIsVolunteer: any,
}

const LoginDialogueBox = (props: DialogueProps) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername =  (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setUsername(e.target.value);
    }

    const onChangePassword =  (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setPassword(e.target.value);
    }

    return (
        <div className="flex flex-col h-full bg-red-800 px-4 pt-4">
            <p className="text-center text-white font-semibold text-xl pb-4">Welcome Back!</p>
            <input className="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 mb-4" placeholder="Enter Username" value={username} onChange={onChangeUsername}/>
            <input className="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 mb-4" type="password" placeholder="Enter Password" value={password} onChange={onChangePassword}/>
            <button>SUBMIT</button>
        </div>
    );
};

export default LoginDialogueBox;