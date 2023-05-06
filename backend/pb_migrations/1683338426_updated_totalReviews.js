migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkabpb2xjp84muf")

  collection.options = {
    "query": "SELECT \n  rooms.id,\n  rooms.name,\n  count(reviews.id) as totalReviews\nFROM rooms\nLEFT JOIN reviews on rooms.id = reviews.room\nGROUP BY reviews.id"
  }

  // remove
  collection.schema.removeField("ydu1djly")

  // remove
  collection.schema.removeField("0ykmjgrj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r39wzgbs",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4dhoxv0d",
    "name": "totalReviews",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkabpb2xjp84muf")

  collection.options = {
    "query": "SELECT \n  rooms.id,\n  rooms.name,\n  count(reviews.id) as totalReviews\nFROM rooms\nLEFT JOIN reviews on rooms.id = reviews.id\nGROUP BY reviews.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ydu1djly",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ykmjgrj",
    "name": "totalReviews",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("r39wzgbs")

  // remove
  collection.schema.removeField("4dhoxv0d")

  return dao.saveCollection(collection)
})
