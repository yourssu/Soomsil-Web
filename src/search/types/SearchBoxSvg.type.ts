import { UseFormSetValue } from 'react-hook-form';

import { IFormInput } from '../components/SearchBar/SearchBox';

import { searchSize } from './SearchBox.type';

export interface SearchBoxSvgContainerProps {
  children: React.ReactNode;
}

export interface SearchBoxForeignObjectProps {
  size: searchSize;
  setSearchInputText: UseFormSetValue<IFormInput>;
}

export interface SearchBoxDefsProps {
  size: searchSize;
}
