export type Industry = {
  name: string
}

export type Company = {
  "companyName": string,
  "industry": string
}

export type User = {
  "name": string,
  "firstName": string,
  "username": string,
  "password": string,
  "repPassword": string,
  "email": string
}

export type UserValidation = {
  "name": boolean,
  "firstName": boolean,
  "username": boolean,
  "password": boolean,
  "repPassword": boolean,
  "passwordMatching": boolean,
  "email": boolean
}

export type CompanyValidation = {
  "name": boolean,
}

export type Language = {
  "headlines": {
    "dataCompany": string,
    "dataUser": string,
    "conclusion": string
  },
  "labelCompany": {
    "companyName": string,
    "industry": string,
  },
  "labelUser": {
    "name": string,
    "firstName": string,
    "username": string,
    "password": string,
    passwordHints: string,
    "repPassword": string,
    "email": string,
    "emailOptional": string,
  },
  "label": {
    "continue": string,
    "back": string,
    "finishForm": string,
    "acceptTermsOfService": string,
    "acceptTermsOfPrivacy": string
  },
  "alerts": {
    "companyNameInvalid": string,
  }
}
