export type NewsDto = {
  activeTag?: string;
  creationDate: string;
  id: number;
  imageData?: string;
  tags?: string[];
  text: string;
  title: string;
};

export type NewsListRequestParams = object;
