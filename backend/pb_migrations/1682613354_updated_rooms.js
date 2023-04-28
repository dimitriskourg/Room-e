migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wk5fbpde",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  // remove
  collection.schema.removeField("wk5fbpde")

  return dao.saveCollection(collection)
})
