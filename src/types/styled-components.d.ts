import 'styled-components';
import { YDSTheme } from '@yourssu/design-system-react';

declare module 'styled-components' {
  export interface DefaultTheme extends YDSTheme {}
}
