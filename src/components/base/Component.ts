// File: /src/components/base/Component.ts
export abstract class Component {
  constructor(public name: string) {}

  abstract execute(): void;
}