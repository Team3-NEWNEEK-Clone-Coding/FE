import React, { useState, useEffect } from 'react';

const useDelay = () => {

    const [isDelayOver, setIsDelayOver] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDelayOver(true);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return { isDelayOver }
}

export default useDelay;