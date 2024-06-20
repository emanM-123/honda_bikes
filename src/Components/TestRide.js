import React, { useState } from 'react';

const TestRide = () => {
    const [selected, setSelected] = useState('TITLE');
    const options = [
        { label: 'TITLE', value: '' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];

    const options1 = [
        { label: 'SELECT STATE', value: '' },
    ];
    const options2 = [
        { label: 'SELECT CITY', value: '' },
    ];

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div className="slideshow-container">
            <div className="ride-container">
                <img src="/images/Rectangle1.png" alt="div-image" className='ride-div' />
                <div className='ride-sprite-icon'>
                    <img src="/images/spirite_icon.png" alt="test-ride-icon" />
                    <span style={{ marginBottom:'10px' }}>BOOK A TEST RIDE</span>
                </div>
                <div className="ride-form">
                    <div>
                        <select className='ride-title-input' onChange={handleSelectChange} value={selected}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <input className="ride-name-input" type="text" placeholder="ENTER NAME" />
                        <input className="ride-email-input" type="email" placeholder="ENTER EMAIL" />
                    </div>
                    <div className='ride-mobile-div'>
                        <input className="ride-mob-input" type="text" placeholder="ENTER MOBILE NO." />
                        <button className='ride-otp-btn1' type="button">Get OTP</button>
                    </div>
                    <div>
                        <select className='ride-add-select' onChange={handleSelectChange} value={selected}>
                            {options1.map((option1) => (
                                <option key={option1.value} value={option1.value}>
                                    {option1.label}
                                </option>
                            ))}
                        </select>
                        <select className='ride-add-select' onChange={handleSelectChange} value={selected}>
                            {options2.map((option2) => (
                                <option key={option2.value} value={option2.value}>
                                    {option2.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div htmlFor="terms" className="ride-checkbox-label">
                        <span className="ride-checkbox-custom"></span>
                        <span className="ride-checkbox-text">I agree to the Terms & Conditions</span>
                    </div>
                    <div className="ride-input-btn1">
                        <button className='ride-btn1' type="submit">Submit</button>
                        <button className='ride-btn1' type="button">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestRide;
