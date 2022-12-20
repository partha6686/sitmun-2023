import React from "react";
import "../../css/msgsecgen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../common/heading";

function MsgSecGen() {
  return (
    <Container className="msg-secgen">
      <Heading head='MESSAGE FROM SECRETARY GENERAL' />
      <section>
        <div className="msg-container">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              {/* <h1>Greeting to the delegates and my secretariat</h1> */}
              <p>
                "Reverberating the domain with indomitable resolutions", SITMUN has, since time immemorial believed in such similar notions and has henceforth conducted the most exciting and intriguing debating competitions of all time. Despite the pandemic in 2021 or let it be the dire market conditions in 2022, the unassailable psyche that drove us, bought the greatest of the interests and most of the minds in a conglomeration to build this event. This time in the forthcoming and exhilarating year of 2023, we bring forth the 5th edition of SITMUN. We believe that the world needs a revolution, it demands individualistic mindsets to articulate a new pathway,  join us this February 2023 to build the future and clash our words for a new understanding!
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
