migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  collection.updateRule = "@request.auth.collectionName = 'administrators'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
