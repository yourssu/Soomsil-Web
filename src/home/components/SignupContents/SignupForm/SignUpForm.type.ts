export interface SignupFormProps {
  onConfirm: () => void;
  email: string;
}

export interface SignupFormStates {
  nickname: string;
  password: string;
}
