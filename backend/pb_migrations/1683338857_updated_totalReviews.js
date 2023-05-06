migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkabpb2xjp84muf")

  collection.options = {
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  rooms.id as roomId,\n  rooms.name as roomName,\n  count(reviews.id) as totalReviews\nFROM rooms\nLEFT JOIN reviews on rooms.id = reviews.room\nGROUP BY reviews.id"
  }

  // remove
  collection.schema.removeField("hfxvnead")

  // remove
  collection.schema.removeField("rtx2dvea")

  // remove
  collection.schema.removeField("umqf1syv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l0lr2ks2",
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
    "id": "c39apntf",
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
    "id": "b5fpglnt",
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
    "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  rooms.id as roomId,\n  rooms.name as roomName,\n  reviews.room\nFROM rooms\nLEFT JOIN reviews on rooms.id = reviews.room"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hfxvnead",
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
    "id": "rtx2dvea",
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
    "id": "umqf1syv",
    "name": "room",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "unw00x9z0kfepid",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("l0lr2ks2")

  // remove
  collection.schema.removeField("c39apntf")

  // remove
  collection.schema.removeField("b5fpglnt")

  return dao.saveCollection(collection)
})
