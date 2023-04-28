migrate((db) => {
  const collection = new Collection({
    "id": "9af0p7wemx0wluy",
    "created": "2023-04-27 16:24:35.983Z",
    "updated": "2023-04-27 16:24:35.983Z",
    "name": "reviews",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6wirlgdl",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "btb7betv",
        "name": "rating",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("9af0p7wemx0wluy");

  return dao.deleteCollection(collection);
})
