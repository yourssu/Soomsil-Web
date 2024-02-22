import { UseFormSetValue } from 'react-hook-form';

import { IFormInput } from '../components/SearchBar/SearchBox';

import { SearchSize } from './SearchBox.type';

export interface SearchBoxSvgContainerProps {
  children: React.ReactNode;
}

export interface SearchBoxForeignObjectProps {
  size: SearchSize;
  setSearchInputText: UseFormSetValue<IFormInput>;
}

export interface SearchBoxDefsProps {
  size: SearchSize;
}
