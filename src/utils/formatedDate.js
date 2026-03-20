export const formatedDate = (dateToFormatted) => {
   const date = new Date(dateToFormatted);

   const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
   const formatted = new Intl.DateTimeFormat('en-US', options).format(date);

   return `${formatted}`;
}