import client from '@/pocketbase'

export const getFilteredReservations = async (fromDate , toDate) => {
  console.log("Dimitris filters: ", fromDate, toDate);
  // you can also fetch all records at once via getFullList
  const currentYear = new Date().getFullYear(); 
  //desired string format "YYYY-MM-DD HH:MM:SS", now is 2023-06-04T05:00:00.000Z'
  let fromDateFormattedDate = new Date(` 08:00 ${fromDate} ${currentYear}`).toISOString();
  fromDateFormattedDate = fromDateFormattedDate.replace('T', ' ');
  fromDateFormattedDate = fromDateFormattedDate.replace('.000Z', '');
  //replace last 0 with 9
  fromDateFormattedDate = fromDateFormattedDate.slice(0, -1) + '9';

  let toDateFormattedDate = new Date(`23:59 ${toDate} ${currentYear}`).toISOString();
  toDateFormattedDate = toDateFormattedDate.replace('T', ' ');
  toDateFormattedDate = toDateFormattedDate.replace('.000Z', '');
  //replace last 0 with 9
  toDateFormattedDate = toDateFormattedDate.slice(0, -1) + '9';

  console.log("Dimitris filters: ", fromDateFormattedDate, toDateFormattedDate);
  return await client.collection('reservations').getFullList({
      filter: `fromDate>='${fromDateFormattedDate}' && toDate <= "${toDateFormattedDate}"`
  });
}