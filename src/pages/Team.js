import React from "react";
import "../App.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../components/common/profilecard";
import { useState } from 'react';
import '../css/team.css'




function TeamPage() {

    return (
        <div className="team-container">

            <Row>
                <Col xs={12} md={4}>
                    <Profilecard />
                </Col>
                <Col xs={12} md={4}>
                    <Profilecard />
                </Col>
                <Col xs={12} md={4}>
                    <Profilecard />
                </Col>
            </Row>





        </div>
    );
}

export default TeamPage;
