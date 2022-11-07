import React from 'react';

// styles
import {
    ArrowButton
} from './styled';

const Button = ({
    children, 
    className,
    onClick,
}) => {
    return(
        <ArrowButton className={className} onClick={onClick}>
            {children}
        </ArrowButton>
    );
};

export default Button;
