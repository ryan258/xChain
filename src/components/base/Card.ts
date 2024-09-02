import { Mana } from '../../core/Mana';
import { GameState } from '../../core/GameState';

abstract class Card {
  protected name: string;
  protected manaCost: Mana;

  constructor(name: string, manaCost: Mana) {
    this.name = name;
    this.manaCost = manaCost;
  }

  abstract play(gameState: GameState): void;

  getName(): string {
    return this.name;
  }

  getManaCost(): Mana {
    return this.manaCost;
  }
}

export default Card;