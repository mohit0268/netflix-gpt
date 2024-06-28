const checkValidateData = (email,password) =>{
    let emailValidate = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    let passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailValidate) return "Email is not Valid";
    if(!passwordValidate) return "Password is not Valid";

    return null;
    
}

export default checkValidateData;