interface LoginData {
  email: string;
  setEmail: (email: string) => void;

  password: string;
  setPassword: (password: string) => void;

  handleLogin: () => void;
}

export default LoginData;
