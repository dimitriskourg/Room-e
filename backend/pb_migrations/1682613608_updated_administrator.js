migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wp8olitcyg87kav")

  collection.name = "administrators"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wp8olitcyg87kav")

  collection.name = "administrator"

  return dao.saveCollection(collection)
})
