import React from "react";
import { Router } from "@reach/router";
import LogReg from "./views/LogReg.jsx";
import Welcome from "./views/Welcome";
import UserMain from "./views/UserMain";
import { Container } from "react-bootstrap";
import song from "./audio/lofiplaylist.mp3";

function App() {
  return (
    <>
      <div>
        <Container>
          <Router>
            <UserMain path="/" />
            <Welcome path="/welcome" />
            <LogReg path="/login" />
          </Router>
          <div stye={{ display: "inline-block", verticalalign: "auto" }}>
            <audio controls autoPlay>
              <source src={song} type="audio/mpeg"></source>
            </audio>
          </div>
        </Container>
      </div>
      <hr />
    </>
  );
}

export default App;
