// check if the string only contains letters
export const nameRegex = /^[A-Za-z]+$/;

// check if the string contains at least 1 letter
export const usernameRegex = /.*[A-Za-z].*/;

// email regex
export const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;

// check if the string contains at least 1 specail character
export const passwordRegex =  /[!@#$%^&*(),.?":{}|<>]/;