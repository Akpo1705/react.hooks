import React from "react";
import useInput from '../../hooks/input.hook'

const InputTest = () => {
        const userName = useInput('');
        return (
                <>
                        
                                <input placeholder='name' type='text' {...userName}></input>
                                <button onClick={() => { console.log(userName.value) }}>button</button>

                </>
        );
};


export default InputTest;
