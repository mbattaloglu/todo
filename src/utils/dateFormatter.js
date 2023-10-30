const formatDate = (date) => {
  //date: 2023-10-27 14:35:00 as a string

  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export default formatDate;
