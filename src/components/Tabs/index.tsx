import React from "react";
import { Container } from "./styles";

interface TabsProps {
  current: string;
  changeTab(): any;
}

function Tabs({ current, changeTab }: TabsProps) {
  function handleChangeTab() {
    changeTab();
  }
  return (
    <Container>
      <div>
        <h2 onClick={handleChangeTab} className={current === "pomodoro" ? "active" : ""}>Pomodoro</h2>
        <h2 onClick={handleChangeTab} className={current === "break" ? "active" : ""}>Break</h2>
      </div>
    </Container>
  );
}

export default Tabs;
