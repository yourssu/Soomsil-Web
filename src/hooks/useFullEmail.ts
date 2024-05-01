import { EMAIL_DOMAIN } from '@/constants/email.constant';

export const useFullEmail = (email: string) => {
  const getFullEmail = () => {
    if (!email.endsWith(EMAIL_DOMAIN)) return email + EMAIL_DOMAIN;
    return email;
  };

  return getFullEmail;
};
