import { Router } from 'express';
import { retrieve, retrieveById, create, update, remove } from '../controllers/character.controller';

export const characterRoute = Router();

characterRoute.get('/', retrieve);
characterRoute.get('/:id', retrieveById);
characterRoute.post('/', create);
characterRoute.put('/:id', update);
characterRoute.delete('/:id', remove);
