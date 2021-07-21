import React, { useState, useEffect } from 'react';

import { Container } from './styles';

interface TimerProps {
    initialMinute: number;
    initialSeconds: number;
    run: boolean;
    titlePrefix: string;
    timeFinished(): any;
}

function Timer({initialMinute, initialSeconds, run, titlePrefix, timeFinished}: TimerProps) {
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        setMinutes(initialMinute);
        setSeconds(initialSeconds);
    },[initialMinute,initialSeconds])

    useEffect(() => {
        if(seconds < 10){
            document.title = `${minutes}:0${seconds} - ${titlePrefix}`;
        } else {
            document.title = `${minutes}:${seconds} - ${titlePrefix}`;
        }
        if(run){
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    timeFinished();
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    }
    });

    return (
        <Container>
            <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        </Container>
    );
}

export default Timer;