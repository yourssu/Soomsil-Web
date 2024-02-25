import { SearchSize } from './SearchBox.type';

export interface IFormInput {
  SearchInputText: string;
}

export interface SearchBoxSvgContainerProps {
  children: React.ReactNode;
}

export interface SearchBoxForeignObjectProps {
  size: SearchSize;
}

export interface SearchBoxDefsProps {
  size: SearchSize;
}
