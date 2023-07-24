import React, { useState } from 'react';

const useInput = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const onChangeHandler = (e) => {
        setValue(e.target.checked);
    };
    return [value, onChangeHandler];
};

export default useInput;
