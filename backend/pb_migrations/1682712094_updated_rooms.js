migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  collection.updateRule = "@request.auth.collectionName = 'administrators' || (@request.auth.collectionName = 'users' && @request.data.reviews:each ?= @collection.reviews.id && @request.data.reviews:isset = true)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
