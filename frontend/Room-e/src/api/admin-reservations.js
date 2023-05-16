import client from '@/pocketbase'

export const getAllPendingReservations =() => {
  return client.collection('reservations').getFullList({
    filter: 'status = "pending"',
    expand: 'room'
  });
}

export const updateReservationStatus = async (reservationId, status) => {
  return await client.collection('reservations').update(reservationId, {status: status});
}
