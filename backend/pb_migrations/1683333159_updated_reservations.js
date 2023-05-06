migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.createRule = "@request.auth.collectionName = \"administrators\" || (@request.auth.collectionName = \"users\" && user = @request.auth.id && status = \"pending\")"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.createRule = null

  return dao.saveCollection(collection)
})
