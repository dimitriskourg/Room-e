migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("etuk2avcu3x8xmo")

  collection.options = {
    "query": "SELECT r.id , r.name\nFROM rooms r\n"
  }

  // remove
  collection.schema.removeField("mdri7knk")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("etuk2avcu3x8xmo")

  collection.options = {
    "query": "SELECT r.id , r.name\nFROM rooms r\nLEFT JOIN reservations res\nON r.name "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdri7knk",
    "name": "name",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ryvblytr")

  return dao.saveCollection(collection)
})
