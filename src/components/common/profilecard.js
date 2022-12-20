import React from 'react';
import '../../css/team.css';
import aboutimg from '../../img/about-img.jpg'

export default function Profilecard(props) {
    return (
        <div class="card-container">
            <div class="card">
                <img
                    src={props.image}
                    alt="host"
                />
                <div class="content">
                    <div class="contentBx">
                        <h3>{props.name} <br /><span>{props.position}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
