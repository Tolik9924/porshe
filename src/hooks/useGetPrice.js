import { useState, useEffect } from 'react';

const useGetPrice = (arr) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        arr.forEach((item) => {
            if (item.active) {
                setPrice(item.price);
            }
        })
    }, [price]);

    return price;
}

export default useGetPrice;
