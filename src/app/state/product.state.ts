
export enum ProductActionsTypes {
  GET_ALL_PRODUCTS="[Product]  Get all products",
  GET_SELECTED_PRODUCTS="[Product]  Get Selected products",
  GET_AVAILABLE_PRODUCTS="[Product]  Get Available products",
  SEARCH_PRODUCTS="[Product] Search products",
  NEW_PRODUCTS="[Product]  New products",
  EDIT_PRODUCTS="[Product] Edit products",
  DELETE_PRODUCTS="[Product]  Delete products",
  SELECTE_PRODUCTS="[Product]  Select products"

}

export interface ActionEvent {
  type:ProductActionsTypes,
  payload?:any
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}
export interface AppDataState<T> {
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
