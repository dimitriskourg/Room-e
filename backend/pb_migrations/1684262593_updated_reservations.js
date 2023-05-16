migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.updateRule = "@request.auth.collectionName = \"administrators\" || (@request.auth.collectionName = \"users\" && user = @request.auth.id && @request.data.status = \"pending\" && @request.data.fromDate >= @now)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
