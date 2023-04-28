migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.listRule = "@request.auth.collectionName = \"administrators\" || (@request.auth.id != \"\")"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.listRule = null

  return dao.saveCollection(collection)
})
