const checkValidateData = (email,password,name) =>{
    let emailValidate = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    let passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    let nameValidate = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(name)

    if(!emailValidate) return "Email is not Valid";
    if(!passwordValidate) return "Password is not Valid";
    if(!nameValidate) return "Name is not valid"

    return null;
    
}

export default checkValidateData;