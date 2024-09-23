function generateOTP(passwordLength,includeNumbers){
    const numbersChars = "0123456789";
    let allowedChars="";
    let password = '';
    allowedChars += includeNumbers ? numbersChars : '';
        for(let i=0;i<passwordLength;i++){
        const OTP = Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[OTP];
        }
    return password;

}
const passwordLength = 4;
const includeNumbers = true;
const password = generateOTP(passwordLength,includeNumbers);
console.log(password);
