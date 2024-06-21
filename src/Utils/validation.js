
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validateName = (name) => {
    return name.trim() !== '';
};

const validateMobile = (mobile) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
};


export  {validateEmail, validateName, validateMobile};