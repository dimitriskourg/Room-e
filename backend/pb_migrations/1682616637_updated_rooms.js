migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
