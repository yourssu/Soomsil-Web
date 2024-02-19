import { searchSize } from './SearchBox.type';

export interface SearchBoxSvgContainerProps {
  children: React.ReactNode;
}

export interface SearchBoxForeignObjectProps {
  size: searchSize;
  searchInputText: string;
  setSearchInputText: React.Dispatch<React.SetStateAction<string>>;
  handleChangeSearchInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchBoxDefsProps {
  size: searchSize;
}
