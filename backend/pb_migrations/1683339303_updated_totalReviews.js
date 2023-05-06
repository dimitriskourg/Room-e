migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkabpb2xjp84muf")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("l0lr2ks2")

  // remove
  collection.schema.removeField("c39apntf")

  // remove
  collection.schema.removeField("b5fpglnt")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zkabpb2xjp84muf")

  collection.listRule = null
  collection.viewRule = null

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

  // remove
  collection.schema.removeField("c1c7yose")

  // remove
  collection.schema.removeField("vjgi2js4")

  // remove
  collection.schema.removeField("lejwup1g")

  return dao.saveCollection(collection)
})
