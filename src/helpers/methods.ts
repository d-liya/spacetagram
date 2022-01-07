export const formatDate = (yourDate: Date) => {
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  return yourDate.toISOString().split("T")[0];
};

export const createDateObject = (page: number) => {
  const offSet = 24 * 60 * 60 * 1000;
  const end_date = new Date();
  end_date.setTime(end_date.getTime() - offSet * (page - 1) * 30);
  const start_date = new Date();
  start_date.setTime(start_date.getTime() - offSet * page * 30);
  return { start_date, end_date };
};

// Calculate the number of lines without cuttting off halfs.
export const calculateHeight = (totalHeight: number, lineHeight: number) => {
  const lines = Math.floor(totalHeight / lineHeight);
  return lines * lineHeight;
};
