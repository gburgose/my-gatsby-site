import { createArticle } from "./config/article";
import { createArticles } from "./config/articles";
import { createCategory } from "./config/category";
import { createCategories } from "./config/categories";

export const createPages = async (params: any) => {
  await createArticle(params);
  await createArticles(params);
  await createCategory(params);
  await createCategories(params);
};