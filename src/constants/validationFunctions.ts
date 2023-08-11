import {Company, CompanyValidation, User, UserValidation} from "./types";

export const isValidName = (name: string): boolean => {
  return name !== '';
}

export const isValidPassword = (password: string) => {
  return true
}

export const isValidUsername = (username: string) => {
  return true
}

export const isValidEmail = (email: string) => {
  return true
}
export const getCompanyValidation = (company: Company): CompanyValidation => {
    return {name: isValidName(company.companyName)}
}

export const getUserValidation = (user: User): UserValidation => {
  const isNameValid = isValidName(user.name)
  const isFirstNameValid = isValidName(user.firstName)
  const isPasswordValid = isValidPassword(user.password)
  const isRepPasswordValid = isValidPassword(user.repPassword)
  const isUsernameValid = isValidUsername(user.username)
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
