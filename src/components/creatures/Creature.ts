// File: /src/components/creatures/Creature.ts
import { Component } from '../base/Component';

export class Creature extends Component {
  constructor(name: string, public power: number, public toughness: number) {
    super(name);
  }

  execute(): void {
    // TODO: Implement creature-specific logic
  }
}