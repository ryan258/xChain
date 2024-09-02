abstract class Component {
  protected name: string;
  protected cost: number;

  constructor(name: string, cost: number) {
    this.name = name;
    this.cost = cost;
  }

  abstract execute(): Promise<any>;
}

export default Component;
