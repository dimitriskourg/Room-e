import client from '@/pocketbase'

export const getFilteredReservations = async (fromDate , toDate) => {
  console.log("Dimitris filters: ", fromDate, toDate);
  // you can also fetch all records at once via getFullList
  const currentYear = new Date().getFullYear(); 
  //desired string format "YYYY-MM-DD HH:MM:SS", now is 2023-06-04T05:00:00.000Z'
  let fromDateFormattedDate = new Date(` 08:00 ${fromDate} ${currentYear}`).toISOString().split('T')[0];

  let toDateFormattedDate = new Date(`23:59 ${toDate} ${currentYear}`).toISOString().split('T')[0];

  console.log("Dimitris filters final: ", fromDateFormattedDate, toDateFormattedDate);
  return await client.collection('reservations').getFullList({
      filter: `(fromDate<='${fromDateFormattedDate}' && toDate >= "${toDateFormattedDate}") || (fromDate ~ '${fromDateFormattedDate}' && toDate ~ "${toDateFormattedDate}") || (fromDate ~ '${fromDateFormattedDate}' && toDate >= "${toDateFormattedDate}") || (fromDate<='${fromDateFormattedDate}' && toDate ~ "${toDateFormattedDate}") && status != "cancelled"`
  });
}