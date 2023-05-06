migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.viewRule = "@request.auth.collectionName = \"administrators\" || (@request.auth.collectionName = \"users\" && user = @request.auth.id)"
  collection.createRule = "@request.auth.collectionName = \"administrators\" || (@request.auth.collectionName = \"users\" && user = @request.auth.id)"
  collection.updateRule = "@request.auth.collectionName = \"administrators\" || (@request.auth.collectionName = \"users\" && user = @request.auth.id)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
