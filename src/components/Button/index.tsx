import React from 'react';
import {Container} from './styles';

interface ButtonProps {
    title: string;
    handleClick(): any;
}

function Button({title, handleClick}: ButtonProps){
    function buttonHandleClick(){
        handleClick();
    }
    return (
        <Container onClick={buttonHandleClick}>
            {title}
        </Container>
    )
}

export default Button;