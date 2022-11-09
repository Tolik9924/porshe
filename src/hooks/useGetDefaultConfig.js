import { useState, useEffect } from 'react';

const useGetDefaultConfig = (arr) => {
    const [defaultConfig, setDefaultConfig] = useState({});

    useEffect(() => {
        arr.forEach((item) => {
            if (item.active) {
                setDefaultConfig(item);
            }
        })
    }, [defaultConfig]);

    return defaultConfig;
}

export default useGetDefaultConfig;
