const formatDate = (date) => {
  //date: 2023-10-27 14:35:00 as a string

  const dateObj = new Date(date);
  let day = dateObj.getDate();
  day = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  let hours = dateObj.getHours();
  hours = dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours();
  let minutes = (dateObj.getMinutes() + "");
  minutes = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : dateObj.getMinutes();

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export default formatDate;
