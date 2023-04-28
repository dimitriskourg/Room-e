migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.name = "reservations"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  collection.name = "reservation"

  return dao.saveCollection(collection)
})
