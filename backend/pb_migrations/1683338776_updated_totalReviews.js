migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkabpb2xjp84muf")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  rooms.id as roomId,\n  rooms.name as roomName\nFROM rooms\nLEFT JOIN reviews on rooms.id = reviews.room"
  }

  // remove
  collection.schema.removeField("k0nckdsh")

  // remove
  collection.schema.removeField("k7awacpd")

  // remove
  collection.schema.removeField("4m279sqz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "adnlpi7j",
    "name": "roomId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "unw00x9z0kfepid",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ru5sgfmh",
    "name": "roomName",
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
  const collection = dao.findCollectionByNameOrId("zkabpb2xjp84muf")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  rooms.id as roomId,\n  rooms.name as roomName,\n  count(reviews.id) as totalReviews\nFROM rooms\nLEFT JOIN reviews on rooms.id = reviews.room\nGROUP BY reviews.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k0nckdsh",
    "name": "roomId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "unw00x9z0kfepid",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k7awacpd",
    "name": "roomName",
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
    "id": "4m279sqz",
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
  collection.schema.removeField("adnlpi7j")

  // remove
  collection.schema.removeField("ru5sgfmh")

  return dao.saveCollection(collection)
})
