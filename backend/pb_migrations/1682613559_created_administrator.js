migrate((db) => {
  const collection = new Collection({
    "id": "wp8olitcyg87kav",
    "created": "2023-04-27 16:39:19.873Z",
    "updated": "2023-04-27 16:39:19.873Z",
    "name": "administrator",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wp8olitcyg87kav");

  return dao.deleteCollection(collection);
})
