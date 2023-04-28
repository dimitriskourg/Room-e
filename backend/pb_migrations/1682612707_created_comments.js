migrate((db) => {
  const collection = new Collection({
    "id": "2orugi1x0mm4kog",
    "created": "2023-04-27 16:25:07.166Z",
    "updated": "2023-04-27 16:25:07.166Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "keqlslr9",
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
        "id": "y8ci4hae",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2orugi1x0mm4kog");

  return dao.deleteCollection(collection);
})
