export interface Song {
  id: number;
  title: string;
  author: Author;
  views: number;
  icon: string;
}

export interface Author {
  name: string;
  lastName: string;
}