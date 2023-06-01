import { categoriesTypes } from "../types"

 const {SELECT_CATEGORY} = categoriesTypes
export const selectedCategory = (id) =>({
    type: SELECT_CATEGORY, categoryId: id
})