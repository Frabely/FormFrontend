import {Company, CompanyValidation, User, UserValidation} from "../constants/types";

export const isValidName = (name: string): boolean => {
  return name.trim() !== '';
}

export const isValidPassword = (password: string) => {
  //min 8 figures, big and small letters included
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordPattern.test(password);
}

export const isValidEmail = (email: string) => {
  if (!email || email === '')
    return true
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
export const getCompanyValidation = (company: Company): CompanyValidation => {
    return {name: isValidName(company.companyName)}
}

export const getUserValidation = (user: User): UserValidation => {
  const isNameValid = isValidName(user.name)
  const isFirstNameValid = isValidName(user.firstName)
  const isPasswordValid = isValidPassword(user.password)
  const isRepPasswordValid = isValidPassword(user.repPassword)
  const isUsernameValid = isValidName(user.username)
  const isEmailValid = isValidEmail(user.username)

  return {
    name: isNameValid,
    firstName: isFirstNameValid,
    password: isPasswordValid,
    repPassword: isRepPasswordValid,
    passwordMatching: (user.password === user.repPassword),
    username: isUsernameValid,
    email: isEmailValid
  }
}
