migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkabpb2xjp84muf")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  rooms.id as roomId,\n  rooms.name as roomName,\n  count(reviews.id) as totalReviews\nFROM rooms\nJOIN reviews on rooms.id = reviews.room\nGROUP BY reviews.id"
  }

  // remove
  collection.schema.removeField("c1c7yose")

  // remove
  collection.schema.removeField("vjgi2js4")

  // remove
  collection.schema.removeField("lejwup1g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dyngwmwk",
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
    "id": "5scavxcy",
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
    "id": "uw063t9f",
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
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  rooms.id as roomId,\n  rooms.name as roomName,\n  count(reviews.id) as totalReviews\nFROM rooms\nLEFT JOIN reviews on rooms.id = reviews.room\nGROUP BY reviews.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c1c7yose",
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
    "id": "vjgi2js4",
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
    "id": "lejwup1g",
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
  collection.schema.removeField("dyngwmwk")

  // remove
  collection.schema.removeField("5scavxcy")

  // remove
  collection.schema.removeField("uw063t9f")

  return dao.saveCollection(collection)
})
