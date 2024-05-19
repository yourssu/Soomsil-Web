import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';

export const useRedirectLoggedInEffect = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(LogInState);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);
};
