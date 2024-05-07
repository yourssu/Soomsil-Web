import { useMemo } from 'react';

import { EMAIL_DOMAIN } from '@/constants/email.constant';

export const useFullEmail = (email: string) => {
  const fullEmail = useMemo(() => {
    if (email.endsWith(EMAIL_DOMAIN)) return email;
    return email + EMAIL_DOMAIN;
  }, [email]);

  return fullEmail;
};
