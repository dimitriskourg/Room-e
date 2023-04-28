migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9af0p7wemx0wluy")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9af0p7wemx0wluy")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
