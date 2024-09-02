export const formatDateTime = (basedTime: string): string => {
  const dateObject = new Date(basedTime);
  const realTimeDate = {
    year: dateObject.getFullYear(),
    month: (dateObject.getMonth() + 1).toString(),
    day: dateObject.getDate().toString(),
    hour: dateObject.getHours().toString().padStart(2, '0'),
    minute: dateObject.getMinutes().toString().padStart(2, '0'),
  };
  return `${realTimeDate.year}년 ${realTimeDate.month}월 ${realTimeDate.day}일 ${realTimeDate.hour}:${realTimeDate.minute}`;
};
