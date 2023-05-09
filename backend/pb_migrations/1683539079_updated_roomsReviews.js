migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("upf03m14l5cbvnp")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  reviews.id as reviewId,\n  reviews.rating,\n  reviews.user,\n  users.username,\n  reviews.room,\n  comments.dateAndTime,\n  comments.content\nFROM reviews\nJOIN comments on reviews.id = comments.review\nJOIN users on reviews.user = users.id"
  }

  // remove
  collection.schema.removeField("8exhg64s")

  // remove
  collection.schema.removeField("c0xdcgvd")

  // remove
  collection.schema.removeField("13rxhqpi")

  // remove
  collection.schema.removeField("itghlzj7")

  // remove
  collection.schema.removeField("tabgiuqo")

  // remove
  collection.schema.removeField("kqlsghhg")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("upf03m14l5cbvnp")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  reviews.id as reviewId,\n  reviews.rating,\n  reviews.user,\n  reviews.room,\n  comments.dateAndTime,\n  comments.content\nFROM reviews\nJOIN comments on reviews.id = comments.review"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8exhg64s",
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
    "id": "c0xdcgvd",
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
    "id": "13rxhqpi",
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
    "id": "itghlzj7",
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
    "id": "tabgiuqo",
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
    "id": "kqlsghhg",
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

  return dao.saveCollection(collection)
})
