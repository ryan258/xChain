abstract class AIModel {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract generateResponse(prompt: string): Promise<string>;
}

export default AIModel;
