import client from '@/pocketbase'



const getRooms = async (last) => {
  const rooms = await client.collection('rooms').getList(last, 10);
  console.log(rooms);
  return rooms;
}

export default getRooms;