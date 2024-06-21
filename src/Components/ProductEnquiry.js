
import React, { useState } from 'react';
import axios from 'axios';

const ProductEnquiry = () => {
    const [selected, setSelected] = useState('TITLE');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: 'BANGALORE',
        dealer: '',
    });

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const handleDealerChange = (event) => {
        setFormData({ ...formData, dealer: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!checked) {
            alert("You must agree to the terms and conditions to submit the form.");
            return;
        }

        const data = {
            ...formData,
            title: selected,
            branch: selectedBranch,
            renewInsuranceChecked: true,
            extendedWarrantyChecked: false,
            templateType: 'productEnquiry',
            emailSubject: 'Product Enquiry',
            to: "eman.maharana@gmail.com"
        };

        try {
            const response = await axios.post('http://localhost:3001/api/send-email', data);
            if (response.status === 200) {
                alert('Email sent successfully');
                handleReset();
            } else {
                alert('Failed to send email');
            }

        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again.');
        }
    };

    const options = [
        { label: 'TITLE', value: '' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];

    const branchOptions = [
        { label: 'SELECT BRANCH', value: '' },
        { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
        { label: 'BANASHANKARI', value: 'BANASHANKARI' },
        { label: 'REJESHWARI NAGAR', value: 'REJESHWARI NAGAR' },
    ];

    const options3 = [
        { label: "SELECT DEALER", value: '' }
    ];

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            mobile: '',
            address: 'BANGALORE',
            dealer: '',
        });
        setSelected('');
        setSelectedBranch('');
        setChecked(false);
    };

    return (
        <div className="slideshow-container">
            <div className="ride-container">
                <img src="/images/Rectangle1.png" alt="div-image" className='ride-div' />
                <div className='ride-sprite-icon'>
                    <img src="/images/spirite_icon.png" alt="test-ride-icon" />
                    <span>PRODUCT ENQUIRY</span>
                </div>
                <div className="pro-enq-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <select className='ride-title-input' onChange={handleSelectChange} value={selected}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <input
                                className="ride-name-input"
                                type="text"
                                placeholder="ENTER NAME"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                className="ride-email-input"
                                type="email"
                                placeholder="ENTER EMAIL"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='ride-mobile-div'>
                            <input
                                className="ride-mob-input"
                                type="text"
                                placeholder="ENTER MOBILE NO."
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                            <button className='ride-otp-btn1' type="button">Get OTP</button>
                        </div>
                        <div>
                            <input
                                className='ride-add-input'
                                type='text'
                                value='BANGALORE'
                                readOnly
                            />
                            <select className='ride-add-select' onChange={handleBranchChange} value={selectedBranch}>
                                {branchOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select className='ride-dealer-select' onChange={handleDealerChange} value={formData.dealer}>
                                {options3.map((option2) => (
                                    <option key={option2.value} value={option2.value}>
                                        {option2.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div htmlFor="terms" className="product-enquiry-checkbox-label">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={checked}
                                onChange={handleCheckboxChange}
                                className="ride-checkbox-input"
                            />
                            <span className="checkbox-custom"></span>
                            <span className="checkbox-text">I agree to the Terms & Conditions</span>
                        </div>
                        <div className="ride-input-btn1">
                            <button className='ride-btn1' type="submit">Submit</button>
                            <button className='ride-btn1' type="reset" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductEnquiry;
