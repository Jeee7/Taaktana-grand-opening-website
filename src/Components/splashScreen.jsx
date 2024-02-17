import React from "react";
import { Container, Button } from "react-bootstrap";
import splash from "../Assets/Img/splashImage.jpg";
import "../Assets/Style/splashScreen.css";



const splashScreen = ({onOpenInvitation}) => {
    const handleClick = () => {
        onOpenInvitation();
    }
    return(
        <div className="splash-screen">
            <Container>
                <h1>Welcome to our Grand Opening</h1>
                <button>Open Invitation</button>
            </Container>
        </div>
    )
}


export default splashScreen;