import React from 'react';

function Card({ icon1, text1, link1, icon2, text2, link2 }) {
    const handleClick1 = () => {
        if (link1) {
            window.location.href = link1;
        }
    };

    const handleClick2 = () => {
        if (link2) {
            window.location.href = link2;
        }
    };

    return (
        <div className="slideshow-container">
            <div className='card-wrapper'>
                <div className="card-container" onClick={handleClick1}>
                    <img src={icon1} alt="Icon 1" className="card-icon" />
                    <p className="card-text">{text1}</p>
                </div>
                <div className="card-container" onClick={handleClick2}>
                    <img src={icon2} alt="Icon 2" className="card-icon" />
                    <p className="card-text">{text2}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
