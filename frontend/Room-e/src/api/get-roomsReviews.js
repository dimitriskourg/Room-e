import client from '@/pocketbase'

export const getRoomsNumberOfReviews = async (RoomsId) => {
  try{
    const record = await client.collection('totalReviews').getFirstListItem(`roomId='${RoomsId}'`);
    if(record.totalReviews == 1)
      return record.totalReviews + " Review";
    return record.totalReviews + " Reviews";
  }
  catch(err){
    return "No Reviews";
  }
}
