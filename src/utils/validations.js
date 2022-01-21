import { VALIDATION_MESSAGES } from "../constants";

const MIN_PASSWORD_LENGTH = 6;

export const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let error = null,
    isEmailValid = true;
  const trimmedeEmail = email?.trim();

  if (!trimmedeEmail) {
    error = VALIDATION_MESSAGES.EMAIL_REQUIRED;
    isEmailValid = false;
  } else if (!emailRegex.test(trimmedeEmail)) {
    error = VALIDATION_MESSAGES.EMAIL_INVALID;
    isEmailValid = false;
  }

  return { error, isEmailValid };
};

export const validatePassword = (password) => {
  let error = null;
  let isPasswordValid = true;
  const trimmedPassword = password?.trim();

  if (!trimmedPassword) {
    error = VALIDATION_MESSAGES.PASSWORD_REQUIRED;
    isPasswordValid = false;
  } else if (trimmedPassword.length < MIN_PASSWORD_LENGTH) {
    error = VALIDATION_MESSAGES.PASSWORD_VALID;
    isPasswordValid = false;
  }
  return { error, isPasswordValid };
};

export const validateName = (name, type) => {
  let error = null;
  const trimmedName = name?.trim();

  if (!trimmedName) {
    error =
      type === 1
        ? VALIDATION_MESSAGES.FIRST_NAME_REQUIRED
        : VALIDATION_MESSAGES.LAST_NAME_REQUIRED;
  }

  return error;
};

export const validateMobile = (mobile) => {
  // const mobileRegex = /^[0-9]$/;
  let error = null,
    isMobileValid = true;
  const trimmedMobile = mobile?.trim();

  // if (!trimmedMobile) {
  //   error = VALIDATION_MESSAGES.MOBILE_REQUIRED;
  //   isMobileValid = false;
  // } else

  if (trimmedMobile.length < 10) {
    error = VALIDATION_MESSAGES.MOBILE_REQUIRED;
    isMobileValid = false;
  }
  // else if (!mobileRegex.test(trimmedMobile)) {
  //   error = VALIDATION_MESSAGES.MOBILE_REQUIRED;
  //   isMobileValid = false;
  // }
  return { error, isMobileValid };
};
export const validateNameField = (name) => {
  let name_regex = /^[a-zA-Z]+$/;
  let error = null,
    isNameValid = true;
  const trimmedName = name?.trim();
  if (!trimmedName) {
    error = VALIDATION_MESSAGES.LAST_NAME_REQUIRED;
    isNameValid = false;
  } else if (!name_regex.test(trimmedName)) {
    error = VALIDATION_MESSAGES.LAST_NAME_REQUIRED;
    isNameValid = false;
  }
  return { error, isNameValid };
};

export const validateZipCodeField = (name) => {
  let error = null,
    isZipValid = true;
  const trimmedName = name?.trim();
  if (!trimmedName) {
    error = VALIDATION_MESSAGES.ZIP_CODE;
    isZipValid = false;
  }
  return { error, isZipValid };
};

export const validateFirstName = (name) => {
  const result = validateNameField(name);
  if (result.error != null)
    result.error = VALIDATION_MESSAGES.FIRST_NAME_REQUIRED;
  return result;
};
