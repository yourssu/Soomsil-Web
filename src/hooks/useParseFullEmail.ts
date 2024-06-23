import { useCallback } from 'react';

import { EMAIL_DOMAIN } from '@/constants/email.constant';

export const useParseFullEmail = () => {
  const parseFullEmail = useCallback((email: string) => {
    if (email.endsWith(EMAIL_DOMAIN)) return email;
    return email + EMAIL_DOMAIN;
  }, []);

  return parseFullEmail;
};
