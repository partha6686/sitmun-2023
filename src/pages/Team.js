import React from "react";
import "../App.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../components/common/profilecard";
import { useState } from 'react';
import '../css/team.css'
import HeroTeam from "../components/Team/HeroTeam";
import CoreTeam from "../components/Team/coreteam";
import Footer from "../components/common/Footer";




function TeamPage() {

    return (
        <div className="team-section">
            <HeroTeam />
            <CoreTeam />


            <Footer />
        </div>
    );
}

export default TeamPage;
