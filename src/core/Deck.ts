import Component from '../components/base/Component';

class Deck {
  private components: Component[];

  constructor() {
    this.components = [];
  }

  addComponent(component: Component): void {
    // TODO: Implement add logic
  }

  removeComponent(component: Component): void {
    // TODO: Implement remove logic
  }

  getComponents(): Component[] {
    return this.components;
  }
}

export default Deck;
