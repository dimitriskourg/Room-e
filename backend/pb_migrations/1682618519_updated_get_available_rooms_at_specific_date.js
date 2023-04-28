migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("etuk2avcu3x8xmo")

  collection.options = {
    "query": "SELECT id, rooms\nfrom reservations\n"
  }

  // remove
  collection.schema.removeField("ryvblytr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ma7czpcl",
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
  const collection = dao.findCollectionByNameOrId("etuk2avcu3x8xmo")

  collection.options = {
    "query": "SELECT r.id , r.name\nFROM rooms r\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryvblytr",
    "name": "name",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ma7czpcl")

  return dao.saveCollection(collection)
})
