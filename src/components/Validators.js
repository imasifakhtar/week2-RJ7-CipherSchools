const EMAIL_REG_EX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

export const isEmail = (email) => {
  if (typeof email !== "string") {
    return false;
  }
  return EMAIL_REG_EX.test(email);
};

export const isValidUser = (user) =>
  isEmail(user.email) && user.password && user.firstName && user.lastName;
