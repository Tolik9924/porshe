import { useState, useEffect } from 'react';

const useGetColor = (arr) => {
    const [color, setColor] = useState([]);

    useEffect(() => {
        arr.forEach((item) => {
            if (item.active) {
                setColor(item.images);
            }
        })
    }, [color]);

    return color;
}

export default useGetColor;