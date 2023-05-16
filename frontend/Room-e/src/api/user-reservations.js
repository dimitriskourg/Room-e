import client from '@/pocketbase'

export const getAllReservations =() => {
  return client.collection('reservations').getFullList({
    expand: 'room',
    sort: '-created'
  });
}

export const updateReservationStatus = async (reservationId, status) => {
  return await client.collection('reservations').update(reservationId, {status: status});
}

export const updateReservationDate = async (reservationId, fromDate, toDate) => {
  return await client.collection('reservations').update(reservationId, {
    fromDate: fromDate,
    toDate: toDate,
    status: 'pending'
  });
}