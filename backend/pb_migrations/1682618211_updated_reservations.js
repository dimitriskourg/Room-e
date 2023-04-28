migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyj2srrw",
    "name": "rooms",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "unw00x9z0kfepid",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyj2srrw",
    "name": "contains",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "unw00x9z0kfepid",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
