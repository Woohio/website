export class Project {
  id!: string;
  postedOn!: number;
  postedTime!: string;

  title!: string;
  coverImage!: string;
  description!: string;
  category!: Category;
}
export class Category {
  id!: string;
  postedOn!: number;
  postedTime!: string;

  title!: string;
  description!: string;
}
