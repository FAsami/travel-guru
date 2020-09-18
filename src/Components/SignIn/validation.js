export const validateFirstName = (firstName, error, setError) => {
  if (!firstName) {
    setError({
      ...error,
      firstName: 'FirstName is required',
      firstNameError: true,
    });
  } else if (firstName.length < 3) {
    setError({
      ...error,
      firstName: 'FirstName must contain at least 3 characters',
      firstNameError: true,
    });
  } else {
    setError({ ...error, firstName: '', firstNameError: false });
  }
};

export const validateLastName = (lastName, error, setError) => {
  if (!lastName) {
    setError({
      ...error,
      lastName: 'Last Name is required',
      lastNameError: true,
    });
  } else {
    setError({ ...error, lastName: '', lastNameError: false });
  }
};

export const validateEmail = (email, error, setError) => {
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email) {
    setError({ ...error, email: 'Email is required', emailError: true });
  } else if (!reg.test(email)) {
    setError({ ...error, email: 'Invalid email', emailError: true });
  } else {
    setError({ ...error, email: '', emailError: false });
  }
};

export const validatePassword = (password, error, setError) => {
  const reg = /^(?=.*\d).{6,32}$/;
  if (!reg.test(password)) {
    setError({
      ...error,
      password:
        'Password must contain at least 6 characters and at least one numeric digit',
      passwordError: true,
    });
  } else {
    setError({ ...error, password: '', passwordError: false });
  }
};

export const validateConfirmPassword = (
  previousPassword,
  passwordToConfirm,
  error,
  setError
) => {
  if (previousPassword !== passwordToConfirm) {
    setError({
      ...error,
      confirmPassword: 'Password do not match',
      confirmPasswordError: true,
    });
  } else {
    setError({ ...error, confirmPassword: '', confirmPasswordError: false });
  }
};
