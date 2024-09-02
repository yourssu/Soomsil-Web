export const formatDateTime = (basedTime: string): string => {
  const dateObject = new Date(basedTime);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const hour = dateObject.getHours().toString().padStart(2, '0');
  const minute = dateObject.getMinutes().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${day}일 ${hour}:${minute}`;
};
