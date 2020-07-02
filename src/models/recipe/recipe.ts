import RecipeCategory from "./recipeCategory";

class Recipe {
  private _id: number;
  private _name: string;
  private _description: string;
  private _publishDate: Date;
  private _userId: number;
  private _category: RecipeCategory;

  constructor(
    id: number,
    name: string,
    description: string,
    publishDate: Date,
    userId: number,
    category: RecipeCategory
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._publishDate = publishDate;
    this._userId = userId;
    this._category = category;
  }

  public get Id(): number {
    return this._id;
  }

  public get Name(): string {
    return this._name;
  }

  public get Description(): string {
    return this._description;
  }

  public get PublishDate(): Date {
    return this._publishDate;
  }

  public get UserId(): number {
    return this._userId;
  }

  public get Category(): RecipeCategory {
    return this._category;
  }
}
