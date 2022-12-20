import React from "react";
import "../App.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../components/common/profilecard";
import { useState } from 'react';
import '../css/team.css'
import HeroTeam from "../components/Team/HeroTeam";
import CoreTeam from "../components/Team/coreteam";
import Footer from "../components/common/Footer";
import CreativeTeam from "../components/Team/creatived";
import DATeam from "../components/Team/daAffairs";
import PrTeam from "../components/Team/pr";
import WebTeam from "../components/Team/webteam";
import Finance from "../components/Team/finance";
import Logistics from "../components/Team/logistics";
import SponsorshipTeam from "../components/Team/sponsorteam";
import Hospitality from "../components/Team/hospitality";
import EBATeam from "../components/Team/eAffairs";
function TeamPage() {

    return (
        <div className="team-section">
            <HeroTeam />
            <CoreTeam />
            <CreativeTeam />
            <DATeam />
            <PrTeam />
            <WebTeam />
            <Logistics />
            <EBATeam />
            <SponsorshipTeam />
            <Hospitality />
            <Finance />
            <Footer />
        </div>
    );
}

export default TeamPage;
