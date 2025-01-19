interface SignUpData {
  firstName: string;
  setFirstName: (firstName: string) => void;

  lastName: string;
  setLastName: (lastName: string) => void;

  email: string;
  setEmail: (email: string) => void;

  password: string;
  setPassword: (password: string) => void;

  confirmedPassword: string;
  setConfirmedPassword: (password: string) => void;

  handleSignUp: () => void;
}

export default SignUpData;