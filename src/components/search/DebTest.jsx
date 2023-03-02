import React, { useState } from 'react'

import useDebounce from '../../hooks/useDebounce'

const Debtest = () => {

        const [value, setValue] = useState();
        const debouncedCallback = useDebounce(search, 500);

        function search(query) {
                fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
                        .then(response => response.json)
                        .then(json => console.log(json))
        }

        const onChange = e => {
                setValue(e.target.value);
                debouncedCallback(e.target.value);
        }

        return (
                <div>
                        <input type='test' value={value} onChange={onChange}></input>
                </div>
        );

};

export default Debtest;