import {Company, CompanyValidation} from "../constants/types";

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
  const emailPattern = /^[a-zA-Z0-9äöüÄÖÜß._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
export const getCompanyValidation = (company: Company): CompanyValidation => {
    return {name: isValidName(company.companyName)}
}
