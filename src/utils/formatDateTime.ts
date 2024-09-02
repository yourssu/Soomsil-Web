export const formatDateTime = (basedTime: string): string => {
  const dateObject = new Date(basedTime);
  const realTimeDate = {
    year: dateObject.getFullYear(),
    month: (dateObject.getMonth() + 1).toString().padStart(2, '0'),
    day: dateObject.getDate().toString().padStart(2, '0'),
    hour: dateObject.getHours().toString().padStart(2, '0'),
    minute: dateObject.getMinutes().toString().padStart(2, '0'),
  };
  return `${realTimeDate.year}.${realTimeDate.month}.${realTimeDate.day} ${realTimeDate.hour}:${realTimeDate.minute}`;
};
