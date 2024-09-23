function generateOTP(passwordLength,includeNumbers){
    const numbersChars = "0123456789";
    let allowedChars="";
    let password = '';
    allowedChars += includeNumbers ? numbersChars : '';
    if(allowedChars.length === 4){
        const OTP = Math.floor(Math.random());
        password+=allowedChars[OTP];
    }
    return password;

}
const passwordLength = 4;
const includeNumbers = true;
const password = generateOTP(passwordLength,includeNumbers);
console.log(password);
