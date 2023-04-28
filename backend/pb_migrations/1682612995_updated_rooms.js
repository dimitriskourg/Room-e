migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "umlgladt",
    "name": "contains",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "9af0p7wemx0wluy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid")

  // remove
  collection.schema.removeField("umlgladt")

  return dao.saveCollection(collection)
})
