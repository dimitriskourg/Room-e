migrate((db) => {
  const collection = new Collection({
    "id": "0uoeq72nf2v39wr",
    "created": "2023-04-27 16:23:19.477Z",
    "updated": "2023-04-27 16:23:19.477Z",
    "name": "reservation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z8tcbsm8",
        "name": "fromDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": "2023-04-11 12:00:00.000Z"
        }
      },
      {
        "system": false,
        "id": "lgstoysa",
        "name": "toDate",
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
        "id": "vw26fcsb",
        "name": "purpose",
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
        "id": "m2sfak9k",
        "name": "status",
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
        "id": "eyj2srrw",
        "name": "contains",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "unw00x9z0kfepid",
          "cascadeDelete": false,
          "minSelect": 1,
          "maxSelect": null,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("0uoeq72nf2v39wr");

  return dao.deleteCollection(collection);
})
