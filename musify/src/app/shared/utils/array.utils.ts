import { SortOrder } from "src/app/+browse/modules/browse-list/shared/browse-list.model";

export const searchArray: <T extends Record<string, any>>(arr: T[], search: string) => T[] = (arr, search) => {
  const regex = new RegExp(search, 'i');
  return arr.filter((item) => {
    return item.title.match(regex);
  });
};

export const sortArray: <T extends Record<string, any>>(arr: T[], order: SortOrder, key: string) => T[] = (arr, order, key) => {
  if (order === SortOrder.ascending) {
    return arr.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (b[key] < a[key]) {
        return 1;
      }
      return 0;
    })
  } else {
    return arr.sort((a, b) => {
      if (a[key] > b[key]) {
        return -1;
      }
      if (b[key] > a[key]) {
          return 1;
      }
      return 0;
    })
  }
}
