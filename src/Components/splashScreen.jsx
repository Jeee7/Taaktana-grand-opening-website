import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import taaktana from "../Assets/Img/whiteTaaktana.png";
import luxury from "../Assets/Img/luxury.png";
import marriot from "../Assets/Img/marriot.png";
import "../Assets/Style/splashScreen.css";



const splashScreen = ({onOpenInvitation}) => {
    const handleClick = () => {
        onOpenInvitation();
    }
    return(
        <div className="splash-screen">
            <Container>
            <Row>
                <Col style={{color: 'white', position: 'absolute', bottom: 50, left: 50 }}>
                    <img src={luxury} style={{ width: "50%", maxWidth: "200px", height: "auto", filter: ('invert(100%)') }} alt="" />
                </Col>
                <Col style={{color: 'white', display: 'inline-block'}}>
                    <Container>
                        <Row>
                            <Col style={{ display: "inline-block"}}  >
                                <img src={taaktana} alt="" style={{ width: "100%", maxWidth: "200px", height: "auto" }} />
                            </Col>
                        </Row>
                    <h1>Welcome to our Grand Opening</h1>
                    <Button onClick={handleClick} style={{width: "50%", fontSize: 'smaller', border: "1px solid white", padding: '1px', color: "black", animation: "heartbeat 1.5s infinite alternate"}}>Open Invitation</Button>
                </Container>
                </Col>
                <Col style={{color: 'white',  position: 'absolute', bottom: 50, right: 50 }}>
                    <img src={marriot} style={{ width: "50%", maxWidth: "200px", height: "auto" }} alt="" />
                </Col>
            </Row>
            </Container>
        </div>
    )
}


export default splashScreen;