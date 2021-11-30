import {get, post, destroy as _destroy, put} from '../utils/http.utils';


const url = (operation = '') => `persons/${operation}`;

export const findById = async (id) => get(url(id));

export const create = async (person) => post(url(), person);

export const update = async (id, person) => put(url(id), person);

export const destroy = async (id) => _destroy(url(id));

export const findAll = async () => get(url());

export const search = async (query) => get(url(`search?query=${query}`));
