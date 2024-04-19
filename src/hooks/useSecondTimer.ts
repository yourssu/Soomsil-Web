import { useCallback, useEffect, useRef, useState } from 'react';

export const useSecondTimer = (seconds: number) => {
  const intervalRef = useRef<number | null>(null);
  const [leftTime, setLeftTime] = useState(seconds);

  const resetTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      setLeftTime(seconds);
    }

    intervalRef.current = setInterval(() => {
      if (intervalRef.current === null) {
        return;
      }

      setLeftTime((prev) => {
        const next = Math.max(prev - 1, 0);

        if (next === 0) {
          clearInterval(intervalRef.current as number);
          intervalRef.current = null;
        }

        return next;
      });
    }, 1000);
  }, [seconds]);

  useEffect(() => {
    resetTimer();

    return () => {
      clearInterval(intervalRef.current as number);
    };
  }, [resetTimer]);

  return {
    leftTime,
    isTimerEnd: leftTime === 0,
    resetTimer,
  };
};
