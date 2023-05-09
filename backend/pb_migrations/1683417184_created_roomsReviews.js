migrate((db) => {
  const collection = new Collection({
    "id": "upf03m14l5cbvnp",
    "created": "2023-05-06 23:53:04.337Z",
    "updated": "2023-05-06 23:53:04.337Z",
    "name": "roomsReviews",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wxtg6rp9",
        "name": "rating",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "1h5cgly3",
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
      },
      {
        "system": false,
        "id": "y9km6o4h",
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
      },
      {
        "system": false,
        "id": "mjjfkp7r",
        "name": "dateAndTime",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "mq7bpoy4",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  reviews.id, \n  reviews.rating,\n  reviews.user,\n  reviews.room,\n  comments.dateAndTime,\n  comments.content\nFROM reviews\nJOIN comments on reviews.id = comments.review"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("upf03m14l5cbvnp");

  return dao.deleteCollection(collection);
})
