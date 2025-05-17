const date = new Date();

const currentDate = {
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate()};

console.log(currentDate.year + "年" + currentDate.month + "月" + currentDate.day + "日");