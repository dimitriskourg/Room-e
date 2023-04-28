migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wp8olitcyg87kav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nejhopa6",
    "name": "fname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ywvo2pce",
    "name": "lname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wp8olitcyg87kav")

  // remove
  collection.schema.removeField("nejhopa6")

  // remove
  collection.schema.removeField("ywvo2pce")

  return dao.saveCollection(collection)
})
