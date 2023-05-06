import client from '@/pocketbase'



export const getRooms = async (last) => {
  const rooms = await client.collection('rooms').getList(last, 10);
  return rooms;
}

export const getRoom = async (id) => {
  const room = await client.collection('rooms').getOne(id);
  return room;
}

export const getSelectedRooms = async (selectedRooms) => {
  const rooms = await client.collection("rooms").getFullList({
    filter: selectedRooms.map((id) => `id!="${id}"`).join("&&"),
  })
  return rooms;
}

export default getRooms;