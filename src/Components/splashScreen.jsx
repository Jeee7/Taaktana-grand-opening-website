import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import taaktana from "../Assets/Img/whiteTaaktana.png";
import "../Assets/Style/splashScreen.css";



const splashScreen = ({onOpenInvitation}) => {
    const handleClick = () => {
        onOpenInvitation();
    }
    return(
        <div className="splash-screen">
            <Container>
                <img src={taaktana} alt="" />
                <h1>Welcome to our Grand Opening</h1>
                <Button onClick={handleClick} style={{ border: "2px solid white", color: "white", backgroundColor: "transparent"}}>Open Invitation</Button>
            </Container>

        </div>
    )
}


export default splashScreen;