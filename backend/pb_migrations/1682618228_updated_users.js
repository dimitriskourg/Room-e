migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fim5kti7",
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
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fim5kti7",
    "name": "reserves",
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
})
