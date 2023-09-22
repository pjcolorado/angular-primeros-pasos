import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';


@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    }
  ];

  addCharacter(newItem: Character): void {

    const newCharacter: Character = { id: uuid(), ...newItem };
    this.characters.push(newCharacter);

  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter( element => element.id !== id);
  }

}
