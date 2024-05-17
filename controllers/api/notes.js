const User = require("../../models/user");
const Note = require("../../models/note");
module.exports = {
  create,
  index,
  delete: deleteOne,
  update,
  show,
};

async function create(req, res) {
  req.body.user = req.user._id;
  const note = await Note.create(req.body);
  res.json(note);
}

async function index(req, res) {
    const notes = await Note.find({ user: req.user._id });
    res.json(notes);

}

async function deleteOne(req, res) {
    const note = await Note.findOne({ user: req.user._id, _id: req.params.id });
    if (!note) return res.status(401).json('Not Authorized');
    note.remove();
    res.json(note);

}

async function update(req, res) {
    const note
    = await Note.findOne({ user: req.user._id, _id: req.params.id });
    if (!note) return res.status(401).json('Not Authorized');
    Object.assign(note, req.body);
    note.save();
}

async function show(req, res) {
    const note = await Note.findOne({ user: req.user._id, _id: req.params.id });
    if (!note) return res.status(401).json('Not Authorized');
    res.json(note);

}
