migrate((db) => {
  const collection = new Collection({
    "id": "etuk2avcu3x8xmo",
    "created": "2023-04-27 17:52:25.985Z",
    "updated": "2023-04-27 17:52:25.985Z",
    "name": "get_available_rooms_at_specific_date",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id\nFROM rooms"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("etuk2avcu3x8xmo");

  return dao.deleteCollection(collection);
})
