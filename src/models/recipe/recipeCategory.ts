export default class RecipeCategory {
  private _id: number;
  private _name: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  public get Id(): number {
    return this._id;
  }

  public get Name(): string {
    return this._name;
  }
}
