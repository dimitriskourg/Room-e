import client from '@/pocketbase'

export const getFilteredReservations = async (fromDate , toDate) => {
  // you can also fetch all records at once via getFullList
  const records = await client.collection('reservations').getFullList({
      sort: '-created',
      filter: `fromDate='${fromDate}' AND toDate='${toDate}'`
  });
}