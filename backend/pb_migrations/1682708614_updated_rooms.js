migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  collection.viewRule = "@request.auth.collectionName = 'administrators' || availability = true"
  collection.createRule = "@request.auth.collectionName = 'administrators'"
  collection.deleteRule = "@request.auth.collectionName = 'administrators'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  collection.viewRule = null
  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
