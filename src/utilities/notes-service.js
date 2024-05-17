import * as notesAPI from './notes-api';

export async function create(noteData) {
    return notesAPI.create(noteData);
}

export async function getAll() {
    return notesAPI.getAll();
}

export async function deleteOne(id) {
    return notesAPI.deleteOne(id);
}

export async function update(noteData) {
    return notesAPI.update(noteData);
}

export async function getOne(id) {
    return notesAPI.getOne(id);
}

