import moment from "moment";

export const getDateWithPage = (page: number) => {
  const start_date = moment()
    .subtract(page + 1, "months")
    .add(1, "days")
    .format("YYYY-MM-DD");
  const end_date = moment().subtract(page, "months").format("YYYY-MM-DD");
  return { start_date, end_date };
};

// Calculate the number of lines without cuttting off halfs.
export const calculateHeight = (totalHeight: number, lineHeight: number) => {
  const lines = Math.floor(totalHeight / lineHeight);
  return lines * lineHeight;
};
