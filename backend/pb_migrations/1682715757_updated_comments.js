migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2orugi1x0mm4kog")

  collection.updateRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2orugi1x0mm4kog")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
