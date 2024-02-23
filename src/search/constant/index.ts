import { SearchSize } from '../types/SearchBox.type';

export const SEARCH_BOX_WIDTH: Record<SearchSize, string> = {
  large: '800',
  small: '669',
};

export const SEARCH_BOX_VIEW_BOX: Record<SearchSize, string> = {
  large: '0 0 800 60',
  small: '0 0 669 60',
};

export const SEARCH_BOX_PATH: Record<string, Record<SearchSize, string>> = {
  d: {
    large:
      'M1.5 18.7449C1.5 8.94465 9.44465 1 19.2449 1H769.5C785.516 1 798.5 13.9837 798.5 30C798.5 46.0163 785.516 59 769.5 59H2.09636C1.76701 59 1.5 58.733 1.5 58.4036V18.7449Z',
    small:
      'M1 15.695C1 7.57918 7.57918 1 15.695 1H639C655.016 1 668 13.9837 668 30C668 46.0163 655.016 59 639 59H1.33667C1.15073 59 1 58.8493 1 58.6633V15.695Z',
  },
  stroke: {
    large: 'url(#paint0_radial_748_4753)',
    small: 'url(#paint0_radial_1093_21396)',
  },
};

export const SEARCH_BOX_RADIAL_GRADIENT: Record<string, Record<SearchSize, string>> = {
  id: {
    large: 'paint0_radial_748_4753',
    small: 'paint0_radial_1093_21396',
  },
  gradientTransform: {
    large: 'translate(378.598 30) rotate(-180) scale(378.098 168.318)',
    small: 'translate(316.58 30) rotate(-180) scale(316.58 168.318)',
  },
};
