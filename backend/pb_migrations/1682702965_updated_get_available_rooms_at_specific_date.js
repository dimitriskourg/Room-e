migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("etuk2avcu3x8xmo")

  collection.options = {
    "query": "SELECT id, reservations\nfrom users\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vlqfprmx",
    "name": "reservations",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "0uoeq72nf2v39wr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("etuk2avcu3x8xmo")

  collection.options = {
    "query": "SELECT id\nfrom reservations\n"
  }

  // remove
  collection.schema.removeField("vlqfprmx")

  return dao.saveCollection(collection)
})
