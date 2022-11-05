const {
  addNoteHandler,
  getAllNotesHandler,
  getNotByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./hendler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes{id}",
    handler: getNotByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes{id}",
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
