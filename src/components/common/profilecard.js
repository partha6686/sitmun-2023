import React from 'react';
import '../../css/team.css';
import aboutimg from '../../img/about-img.jpg'

export default function Profilecard() {
    return (
        <div class="card-container">
            <div class="card">
                <div class="imgBx">
                    <img
                        src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt=""
                    />
                </div>
                <div class="content">
                    <div class="contentBx">
                        <h3>John <br /><span>Web Developer</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
