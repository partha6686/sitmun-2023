import React from "react";
import "../../css/msgsecgen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MsgSecGen() {
  return (
    <Container className="msg-secgen">
      <section>
        <div className="msg-container">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <h1>Greeting to the delegates and my secretariat</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                assumenda dolore reprehenderit ullam blanditiis ex sapiente
                pariatur tempore incidunt facilis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                assumenda dolore reprehenderit ullam blanditiis ex sapiente
                pariatur tempore incidunt facilis?
              </p>

              {/* <a href="#" className="btn">Click Me</a> */}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default MsgSecGen;
