migrate((db) => {
  const collection = new Collection({
    "id": "unw00x9z0kfepid",
    "created": "2023-04-27 16:20:30.205Z",
    "updated": "2023-04-27 16:20:30.205Z",
    "name": "rooms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qtkqdhdx",
        "name": "capacity",
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
        "id": "ygyywhny",
        "name": "availability",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "jurxgm6r",
        "name": "purpose",
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
  const collection = dao.findCollectionByNameOrId("unw00x9z0kfepid");

  return dao.deleteCollection(collection);
})
