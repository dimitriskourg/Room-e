migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9af0p7wemx0wluy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p3wsrhuz",
    "name": "room",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "unw00x9z0kfepid",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9af0p7wemx0wluy")

  // remove
  collection.schema.removeField("p3wsrhuz")

  return dao.saveCollection(collection)
})
