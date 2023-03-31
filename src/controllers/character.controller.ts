import {Request , Response} from 'express';
import { characterModel } from '../models/characters.entity';

export const retrieve = async (req: Request, res: Response) => {
    const character = await characterModel.find({});

    res.status(200).json(character)
}

export const retrieveById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const character = await characterModel.findById(id);

    res.json(character)
}

export const create = async (req: Request, res: Response) => {
    const { name, alterEgo, role } = req.body;
    const existingCharacter = await characterModel.find({ name });

    if(existingCharacter.length > 0){
        return res.status(400).json({ msg: 'Character already exists' });
      }

    const newCharacter = characterModel.create({ name, alterEgo, role });

    res.json({ msg: 'Character created', newCharacter})
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, alterEgo, role } = req.body;

    const newCharacterData = { name, alterEgo, role}

    const character = await characterModel
        .findByIdAndUpdate(id, newCharacterData);

    res.json(character)
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    const existingCharacter = await characterModel.findById(id);

    if(!existingCharacter){
        return res.status(400).json({ msg: 'Character doesnt exist' });
      }

    const removeCharacter = await characterModel.findByIdAndRemove(id);

    res.json(removeCharacter)
}
