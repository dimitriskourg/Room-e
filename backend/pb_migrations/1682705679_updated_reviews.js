migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9af0p7wemx0wluy")

  // remove
  collection.schema.removeField("6wirlgdl")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9af0p7wemx0wluy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6wirlgdl",
    "name": "description",
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
})
