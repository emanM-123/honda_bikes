// import React, { useState } from "react";
// import axios from 'axios';

// const RsaEw = () => {
//     const [selected, setSelected] = useState('TITLE');
//     const [selectedBranch, setSelectedBranch] = useState('');
//     const [renewInsuranceChecked, setRenewInsuranceChecked] = useState(false);
//     const [extendedWarrantyChecked, setExtendedWarrantyChecked] = useState(false);
//     const [selectedModel, setSelectedModel] = useState('');

//     const branches = [
//         { label: 'SELECT BRANCH', value: '' },
//         { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
//         { label: 'BANASHANKARI', value: 'BANASHANKARI' },
//         { label: 'REJESHWARI NAGAR', value: 'REJESHWARI NAGAR' },
//     ];

//     const modelOptions = [
//         { label: 'SELECT MODEL', value: '' },
//         { label: 'CB300F', value: 'CB300F' },
//         { label: 'CB300R', value: 'CB300R' },
//         { label: 'CB350', value: 'CB350' },
//         { label: 'H’nessCB350', value: 'H’nessCB350' },
//         { label: 'CB350RS', value: 'CB350RS' },
//         { label: 'NX500', value: 'NX500' },
//         { label: 'TRANSALP', value: 'TRANSALP' },
//         { label: 'GOLDWING', value: 'GOLDWING' },
//     ]
//     const options = [
//         { label: 'TITLE', value: '' },
//         { label: 'Mr.', value: 'Mr.' },
//         { label: 'Mrs.', value: 'Mrs.' },
//     ];

//     const [formData, setFormData] = useState({
//         selected: 'TITLE',
//         selectedBranch: '',
//         selectedModel: '',
//         renewInsuranceChecked: false,
//         extendedWarrantyChecked: false,
//         fname: '',
//         lname: '',
//         email: '',
//         phone: '',
//         stdCode: '',
//         phoneNumber: '',
//         description: '',
//     });

//     const handleInputChange = (event) => {
//         const { name, value, type, checked } = event.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!formData.fname || !formData.phone || !formData.email || !formData.selectedBranch || !formData.selectedModel) {
//             alert('Please fill out all mandatory fields: First Name, Phone Number, Email, Branch, and Model');
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:3001/api/send-email', {
//                 templateType: 'emailTemplateRsaEw',
//                 templateData: formData,
//                 to: 'eman.maharana@gmail.com',
//             });
//             console.log('Email sent successfully:', response.data);
//             alert('Email sent successfully');
//             setFormData({
//                 selected: 'TITLE',
//                 selectedBranch: '',
//                 selectedModel: '',
//                 renewInsuranceChecked: false,
//                 extendedWarrantyChecked: false,
//                 fname: '',
//                 lname: '',
//                 email: '',
//                 phone: '',
//                 stdCode: '',
//                 phoneNumber: '',
//                 description: '',
//             });
//         } catch (error) {
//             console.error('Error sending email:', error);
//             alert('Error sending email');
//         }
//     };

//     const handleReset = () => {
//         setFormData({
//             selected: 'TITLE',
//             selectedBranch: '',
//             selectedModel: '',
//             renewInsuranceChecked: false,
//             extendedWarrantyChecked: false,
//             fname: '',
//             lname: '',
//             email: '',
//             phone: '',
//             stdCode: '',
//             phoneNumber: '',
//             description: '',
//         });
//     };

//     return (
//         <div className="slideshow1-container">
//             <div className="reach-us-container">
//                 <img className="reach-us-image" src="/images/spirite_icon4.png" alt="getInTouch-icon" />
//                 <div className="reach-us-text">ROADSIDE ASSISTANCE (RSA) & EXTENDED WARRANTY</div>
//             </div>
//             <div className="rsa-form-container">
//                 <div className="rsa-row1">
//                     <div>
//                         <select className="rsa-select-model" onChange={handleInputChange} value={formData.selectedModel}>
//                             {modelOptions.map((option) => (
//                                 <option key={option.value} value={option.value}>
//                                     {option.label}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <div>
//                         <select className="rsa-select-branch" onChange={handleInputChange} value={formData.selectedBranch}>
//                             {branches.map((option) => (
//                                 <option key={option.value} value={option.value}>
//                                     {option.label}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
//                 <div className="rsa-row2">
//                     <select className='rsa-title-input' onChange={handleInputChange} value={formData.selected}>
//                         {options.map((option) => (
//                             <option key={option.value} value={option.value}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </select>
//                     <input className="rsa-name-input" type="text" placeholder="FIRST NAME" onChange={handleInputChange} value={formData.fname}/>
//                     <input className="rsa-name-input" type="text" placeholder="LAST NAME" onChange={handleInputChange} value={formData.lname}/>
//                 </div>
//                 <div className="rsa-row3">
//                     <input className="rsa-email-input" type="email" placeholder="ENTER EMAIL" onChange={handleInputChange} value={formData.email}/>
//                     <input className="rsa-mob-input" type="text" placeholder="ENTER MOBILE NO."  onChange={handleInputChange} value={formData.phone}/>
//                     <button className='rsa-otp-btn' type="button">Get OTP</button>
//                 </div>
//                 <div className="rsa-row4">
//                     <input className="rsa-std-input" type="email" placeholder="ENTER STD CODE" onChange={handleInputChange} value={formData.stdCode} />
//                     <input className="rsa-phone-input" type="email" placeholder="ENTER PHONE NO." onChange={handleInputChange} value={formData.phoneNumber}/>
//                 </div>
//                 <div className="rsa-row5">
//                     <textarea className="rsa-desc-input" type="text" placeholder="DESCRIPTION" onChange={handleInputChange} value={formData.description}/>
//                 </div>
//                 <div className='rsa-row6'>
//                     <label
//                         htmlFor="renew-insurance"
//                         className={`rsa-checkbox-label ${renewInsuranceChecked ? 'checked' : ''}`}
//                         onChange={handleInputChange} value={formData.renewInsuranceChecked}
//                     >
//                         <input type="checkbox" id="renew-insurance" className="rsa-checkbox-input" checked={renewInsuranceChecked} readOnly />
//                         <span className="rsa-checkbox-custom"></span>
//                         <span className="rsa-checkbox-text">DO YOU WANT TO RENEW INSURANCE?</span>
//                     </label>
//                     <div className="gap"></div>
//                     <label
//                         htmlFor="extended-warranty"
//                         className={`rsa-checkbox-label ${extendedWarrantyChecked ? 'checked' : ''}`}
//                         onChange={handleInputChange} value={formData.extendedWarrantyChecked}
//                     >
//                         <input type="checkbox" id="extended-warranty" className="rsa-checkbox-input" checked={extendedWarrantyChecked} readOnly />
//                         <span className="rsa-checkbox-custom"></span>
//                         <span className="rsa-checkbox-text">DO YOU WANT TO EXTENDED WARRANTY?</span>
//                     </label>
//                 </div>
//                 <div className="rsa-row7">
//                     <button className='rsa-btn' type="submit" onClick={handleSubmit}>Submit</button>
//                     <button className='rsa-btn' type="button" onClick={handleReset}>Reset</button>
//                 </div>
//             </div >
//             <div className="frame">
//                 <img src="/images/frame1.png" alt="Frame1" />
//                 <img src="/images/frame2.png" alt="frame2" />
//                 <img src="/images/frame3.png" alt="frame3" />
//             </div>
//         </div>
//     );
// };

// export default RsaEw;



import React, { useState } from "react";
import axios from 'axios';

const RsaEw = () => {
    const [formData, setFormData] = useState({
        selected: 'TITLE',
        selectedBranch: '',
        selectedModel: '',
        renewInsuranceChecked: false,
        extendedWarrantyChecked: false,
        fname: '',
        lname: '',
        email: '',
        phone: '',
        stdCode: '',
        phoneNumber: '',
        description: '',
    });

    const branches = [
        { label: 'SELECT BRANCH', value: '' },
        { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
        { label: 'BANASHANKARI', value: 'BANASHANKARI' },
        { label: 'REJESHWARI NAGAR', value: 'REJESHWARI NAGAR' },
    ];

    const modelOptions = [
        { label: 'SELECT MODEL', value: '' },
        { label: 'CB300F', value: 'CB300F' },
        { label: 'CB300R', value: 'CB300R' },
        { label: 'CB350', value: 'CB350' },
        { label: 'H’nessCB350', value: 'H’nessCB350' },
        { label: 'CB350RS', value: 'CB350RS' },
        { label: 'NX500', value: 'NX500' },
        { label: 'TRANSALP', value: 'TRANSALP' },
        { label: 'GOLDWING', value: 'GOLDWING' },
    ];

    const options = [
        { label: 'TITLE', value: '' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.fname || !formData.phone || !formData.email || !formData.selectedBranch || !formData.selectedModel) {
            alert('Please fill out all mandatory fields: First Name, Phone Number, Email, Branch, and Model');
            return;
        }

        const rsaWeData = {
            ...formData,
            templateType: 'rsaWe',  
            emailSubject: 'RSA WE',           
            to: 'eman.maharana@gmail.com',
        };


        try {
            const response = await axios.post('http://localhost:3001/api/send-email',rsaWeData);
            console.log('Email sent successfully:', response.data);
            alert('Email sent successfully');
            setFormData({
                selected: 'TITLE',
                selectedBranch: '',
                selectedModel: '',
                renewInsuranceChecked: false,
                extendedWarrantyChecked: false,
                fname: '',
                lname: '',
                email: '',
                phone: '',
                stdCode: '',
                phoneNumber: '',
                description: '',
            });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        }
    };

    const handleReset = () => {
        setFormData({
            selected: 'TITLE',
            selectedBranch: '',
            selectedModel: '',
            renewInsuranceChecked: false,
            extendedWarrantyChecked: false,
            fname: '',
            lname: '',
            email: '',
            phone: '',
            stdCode: '',
            phoneNumber: '',
            description: '',
        });
    };

    return (
        <div className="slideshow1-container">
            <div className="reach-us-container">
                <img className="reach-us-image" src="/images/spirite_icon4.png" alt="getInTouch-icon" />
                <div className="reach-us-text">ROADSIDE ASSISTANCE (RSA) & EXTENDED WARRANTY</div>
            </div>
            <div className="rsa-form-container">
                <div className="rsa-row1">
                    <div>
                        <select className="rsa-select-model" name="selectedModel" onChange={handleInputChange} value={formData.selectedModel}>
                            {modelOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select className="rsa-select-branch" name="selectedBranch" onChange={handleInputChange} value={formData.selectedBranch}>
                            {branches.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="rsa-row2">
                    <select className='rsa-title-input' name="selected" onChange={handleInputChange} value={formData.selected}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <input className="rsa-name-input" type="text" placeholder="FIRST NAME" name="fname" onChange={handleInputChange} value={formData.fname}/>
                    <input className="rsa-name-input" type="text" placeholder="LAST NAME" name="lname" onChange={handleInputChange} value={formData.lname}/>
                </div>
                <div className="rsa-row3">
                    <input className="rsa-email-input" type="email" placeholder="ENTER EMAIL" name="email" onChange={handleInputChange} value={formData.email}/>
                    <input className="rsa-mob-input" type="text" placeholder="ENTER MOBILE NO." name="phone" onChange={handleInputChange} value={formData.phone}/>
                    <button className='rsa-otp-btn' type="button">Get OTP</button>
                </div>
                <div className="rsa-row4">
                    <input className="rsa-std-input" type="email" placeholder="ENTER STD CODE" name="stdCode" onChange={handleInputChange} value={formData.stdCode} />
                    <input className="rsa-phone-input" type="email" placeholder="ENTER PHONE NO." name="phoneNumber" onChange={handleInputChange} value={formData.phoneNumber}/>
                </div>
                <div className="rsa-row5">
                    <textarea className="rsa-desc-input" type="text" placeholder="DESCRIPTION" name="description" onChange={handleInputChange} value={formData.description}/>
                </div>
                <div className='rsa-row6'>
                    <label
                        htmlFor="renew-insurance"
                        className={`rsa-checkbox-label ${formData.renewInsuranceChecked ? 'checked' : ''}`}
                    >
                        <input
                            type="checkbox"
                            id="renew-insurance"
                            className="rsa-checkbox-input"
                            name="renewInsuranceChecked"
                            checked={formData.renewInsuranceChecked}
                            onChange={handleInputChange}
                        />
                        <span className="rsa-checkbox-custom"></span>
                        <span className="rsa-checkbox-text">DO YOU WANT TO RENEW INSURANCE?</span>
                    </label>
                    <div className="gap"></div>
                    <label
                        htmlFor="extended-warranty"
                        className={`rsa-checkbox-label ${formData.extendedWarrantyChecked ? 'checked' : ''}`}
                    >
                        <input
                            type="checkbox"
                            id="extended-warranty"
                            className="rsa-checkbox-input"
                            name="extendedWarrantyChecked"
                            checked={formData.extendedWarrantyChecked}
                            onChange={handleInputChange}
                        />
                        <span className="rsa-checkbox-custom"></span>
                        <span className="rsa-checkbox-text">DO YOU WANT TO EXTENDED WARRANTY?</span>
                    </label>
                </div>
                <div className="rsa-row7">
                    <button className='rsa-btn' type="submit" onClick={handleSubmit}>Submit</button>
                    <button className='rsa-btn' type="button" onClick={handleReset}>Reset</button>
                </div>
            </div >
            <div className="frame">
                <img src="/images/frame1.png" alt="Frame1" />
                <img src="/images/frame2.png" alt="frame2" />
                <img src="/images/frame3.png" alt="frame3" />
            </div>
        </div>
    );
};

export default RsaEw;
