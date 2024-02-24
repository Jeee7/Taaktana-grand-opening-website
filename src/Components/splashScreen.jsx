import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import taaktana from "../Assets/Img/whiteTaaktana.png";
import luxury from "../Assets/Img/luxury.png";
import splashReal from "../Assets/Img/pgSplash.png";
import "../Assets/Style/splashScreen.css";



const splashScreen = ({onOpenInvitation}) => {
    const handleClick = () => {
        onOpenInvitation();
    }
    return(
        <div className="splash-screen">
            <Container>
                <Col style={{color: 'white', display: 'inline-block'}}>
                    <Container>
                    <img src={splashReal} alt="" className="textSplash" />
                    <div className="overlay">
                        <h1 className="text-splash">Welcome to our Grand Opening</h1>
                    <Button onClick={handleClick} style={{width: "50%", fontSize: 'smaller', border: "1px solid white", padding: '1px', color: "black", animation: "heartbeat 1.5s infinite alternate"}}>Open Invitation</Button>
                    </div>
                </Container>
                </Col>
            </Container>
        </div>
    )
}


export default splashScreen;