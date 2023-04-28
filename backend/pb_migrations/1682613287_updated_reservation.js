migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z8tcbsm8",
    "name": "fromDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z8tcbsm8",
    "name": "fromDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": "2023-04-11 12:00:00.000Z"
    }
  }))

  return dao.saveCollection(collection)
})
