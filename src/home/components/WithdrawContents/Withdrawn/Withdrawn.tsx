import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Withdrawn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <p>계정 탈퇴가 완료되었습니다.</p>;
};
