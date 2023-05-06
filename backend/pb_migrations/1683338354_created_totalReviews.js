migrate((db) => {
  const collection = new Collection({
    "id": "zkabpb2xjp84muf",
    "created": "2023-05-06 01:59:14.522Z",
    "updated": "2023-05-06 01:59:14.522Z",
    "name": "totalReviews",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lcqlkzmm",
        "name": "totalReviews",
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
    "options": {
      "query": "SELECT \n  rooms.id,\n  count(reviews.id) as totalReviews\nFROM rooms\nLEFT JOIN reviews on rooms.id = reviews.id\nGROUP BY reviews.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zkabpb2xjp84muf");

  return dao.deleteCollection(collection);
})
