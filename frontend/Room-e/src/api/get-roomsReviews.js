import client from '@/pocketbase'

export const getRoomsNumberOfReviews = async (RoomsId) => {
  try{
    const record = await client.collection('totalReviews').getFirstListItem(`roomId='${RoomsId}'`);
    if(record.totalReviews == 1)
      return {
        totalReviews: record.totalReviews + " Review",
        totalStars: record.totalRating
      } 
    return {
      totalReviews: record.totalReviews + " Reviews",
      totalStars: record.totalRating
    }
  }
  catch(err){
    return {
      totalReviews: "No Reviews",
      totalStars: 0
    }
  }
}

export const getRoomsReviews = async (RoomId) => {
    const record = await client.collection('roomsReviews').getFullList({
      filter: `room='${RoomId}'`
  });
  return record;
}