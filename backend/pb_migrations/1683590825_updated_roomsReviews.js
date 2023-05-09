migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("upf03m14l5cbvnp")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  reviews.id as reviewId,\n  reviews.rating,\n  reviews.user,\n  users.username,\n  reviews.room,\n  comments.dateAndTime,\n  comments.content\nFROM reviews\nJOIN users on reviews.user = users.id\nLEFT JOIN comments on reviews.id = comments.review"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cmauhyij",
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
    "id": "3cbislxu",
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
    "id": "igmen8g0",
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
    "id": "egmckjgy",
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
    "id": "pgslerju",
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
    "id": "ohnprbqz",
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
    "id": "epp6rcom",
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

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  reviews.id as reviewId,\n  reviews.rating,\n  reviews.user,\n  users.username,\n  reviews.room,\n  comments.dateAndTime,\n  comments.content\nFROM reviews\nJOIN comments on reviews.id = comments.review\nJOIN users on reviews.user = users.id"
  }

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

  // remove
  collection.schema.removeField("cmauhyij")

  // remove
  collection.schema.removeField("3cbislxu")

  // remove
  collection.schema.removeField("igmen8g0")

  // remove
  collection.schema.removeField("egmckjgy")

  // remove
  collection.schema.removeField("pgslerju")

  // remove
  collection.schema.removeField("ohnprbqz")

  // remove
  collection.schema.removeField("epp6rcom")

  return dao.saveCollection(collection)
})
