export interface Category {
  id: number;
  categoryName: string;
  categoryDescription: string;
  parentCategory: Category;
}
