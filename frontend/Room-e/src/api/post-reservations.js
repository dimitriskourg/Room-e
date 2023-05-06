import client from '@/pocketbase'

export const createReservation = async (reservation) => {
  if (!client.authStore.isValid)
    throw new Error('Not authenticated');
  const result = await client.collection('reservations').create(reservation);
  return result;
}