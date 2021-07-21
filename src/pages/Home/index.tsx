import React, {useState} from 'react';
import GlobalStyles from '../../styles/globalStyles';
import { Container, BoxContainer, Wrapper } from './styles';
import Tabs from '../../components/Tabs'
import Timer from '../../components/Timer'
import Button from '../../components/Button';
import Radio from '../../components/Radio';
import { useEffect } from 'react';

const POMODORO_INITIAL_MINUTE = 25;
const BREAK_INITIAL_MINUTE = 5;

function Home() {
  const [run, setRun] = useState(false);
  const [currentState, setCurrentState] = useState("pomodoro");
  function handleClick(){
    setRun(!run)
  }
  function changeTab(){
    setRun(false);
    if(currentState==='pomodoro'){
      setCurrentState("break");
    } else {
      setCurrentState("pomodoro");
    }
  }
  function timeFinished(){
    if (Notification.permission === 'granted') {
      const notification = new Notification('Tempo acabou', {
        body: 'Xablau'
      });

      notification.onclick = (e) => {
        e.preventDefault();
        window.focus();
        notification.close();
      }
    }
    changeTab();
    const notification = document.getElementById("notification") as HTMLAudioElement;
    if(notification){
      notification.play();
    }
  }

  useEffect(() => {
    async function requestNotificationPermission(){
        if (Notification.permission !== 'denied') {
          await Notification.requestPermission();
        }
    }
    requestNotificationPermission();
  })

  return (
    <>
    <GlobalStyles />
    <Container theme={currentState}>
      <Wrapper>
      <BoxContainer>
        <Tabs changeTab={changeTab} current={currentState}/>
        <Timer
          timeFinished={timeFinished}
          run={run}
          initialMinute={currentState==="pomodoro" ? POMODORO_INITIAL_MINUTE : BREAK_INITIAL_MINUTE}
          initialSeconds={0}
          titlePrefix={currentState==="pomodoro" ? "Time to work!" : "Time for a break!"}
        />      
        <Button title={run ? "STOP": "START"} handleClick={handleClick}/>
      </BoxContainer>
      <Radio />
      </Wrapper>
    </Container>
    </>
    );
}

export default Home;