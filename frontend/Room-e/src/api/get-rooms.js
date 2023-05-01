import client from '@/pocketbase'



const getRooms = async (last) => {
  const rooms = await client.collection('rooms').getList(last, last + 20);
  console.log(rooms);
  return rooms;
}

export default getRooms;