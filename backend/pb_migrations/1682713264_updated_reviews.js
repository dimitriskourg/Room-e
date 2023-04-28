migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9af0p7wemx0wluy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "skxbyyt3",
    "name": "comments",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "2orugi1x0mm4kog",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9af0p7wemx0wluy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "skxbyyt3",
    "name": "comments",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "2orugi1x0mm4kog",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
