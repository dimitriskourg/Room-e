migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2orugi1x0mm4kog")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gl9ll93s",
    "name": "review",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "9af0p7wemx0wluy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2orugi1x0mm4kog")

  // remove
  collection.schema.removeField("gl9ll93s")

  return dao.saveCollection(collection)
})
