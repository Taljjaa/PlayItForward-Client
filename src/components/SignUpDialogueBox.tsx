import React from 'react';

// Custom imports

type DialogueProps = {
    isVolunteer: boolean,
    setIsVolunteer: any,
}

const SignUpDialogueBox = (props: DialogueProps) => {
    return (
        <div className="flex flex-col h-full bg-red-800">
            In Sign Up
        </div>
    );
};

export default SignUpDialogueBox;