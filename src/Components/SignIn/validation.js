export const validateFirstName = (firstName, error, setError) => {
  if (!firstName) {
    setError({ ...error, firstName: 'FirstName is required' });
  } else if (firstName.length < 4) {
    setError({
      ...error,
      firstName: 'FirstName must contain at least 3 characters',
    });
  } else {
    setError({ ...error, firstName: '' });
  }
};

export const validateLastName = (lastName, error, setError) => {
  if (!lastName) {
    setError({ ...error, lastName: 'Last Name is required' });
  } else {
    setError({ ...error, lastName: '' });
  }
};

export const validateEmail = (email, error, setError) => {
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email) {
    setError({ ...error, email: 'Email is required' });
  } else if (!reg.test(email)) {
    setError({ ...error, email: 'Invalid email' });
  } else {
    setError({ ...error, email: '' });
  }
};

export const validatePassword = (password, error, setError) => {
  const reg = /^(?=.*\d).{6,32}$/;
  if (!reg.test(password)) {
    setError({
      ...error,
      password:
        'Password must contain at least 6 characters and at least one numeric digit',
    });
  } else {
    setError({ ...error, password: '' });
  }
};

export const validateConfirmPassword = (
  previousPassword,
  passwordToConfirm,
  error,
  setError
) => {
  if (previousPassword !== passwordToConfirm) {
    setError({ ...error, confirmPassword: 'Password do not match' });
  } else {
    setError({ ...error, confirmPassword: '' });
  }
};
