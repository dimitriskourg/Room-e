migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("upf03m14l5cbvnp")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("uskldq5j")

  // remove
  collection.schema.removeField("b6ku7onh")

  // remove
  collection.schema.removeField("izoiwcxq")

  // remove
  collection.schema.removeField("j4pkwstg")

  // remove
  collection.schema.removeField("30tlzvdb")

  // remove
  collection.schema.removeField("hnxzjbet")

  // remove
  collection.schema.removeField("krgayr6y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cmdbfok8",
    "name": "reviewId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "9af0p7wemx0wluy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xspf15j7",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "icsga7gz",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tfx8e28t",
    "name": "username",
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
    "id": "0sxwndco",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgtgacxq",
    "name": "dateAndTime",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmqxur4g",
    "name": "content",
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
  const collection = dao.findCollectionByNameOrId("upf03m14l5cbvnp")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uskldq5j",
    "name": "reviewId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "9af0p7wemx0wluy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b6ku7onh",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izoiwcxq",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j4pkwstg",
    "name": "username",
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
    "id": "30tlzvdb",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnxzjbet",
    "name": "dateAndTime",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "krgayr6y",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("cmdbfok8")

  // remove
  collection.schema.removeField("xspf15j7")

  // remove
  collection.schema.removeField("icsga7gz")

  // remove
  collection.schema.removeField("tfx8e28t")

  // remove
  collection.schema.removeField("0sxwndco")

  // remove
  collection.schema.removeField("jgtgacxq")

  // remove
  collection.schema.removeField("tmqxur4g")

  return dao.saveCollection(collection)
})
