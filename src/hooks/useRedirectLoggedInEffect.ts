import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useIsLoggedIn } from './useIsLoggedIn';

export const useRedirectLoggedInEffect = () => {
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (!isLoggedIn) return;
    navigate('/');
  }, [isLoggedIn, navigate]);
};
