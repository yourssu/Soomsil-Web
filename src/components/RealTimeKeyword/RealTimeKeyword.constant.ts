import { RealTimeKeywordStyleProps } from '@/components/RealTimeKeyword/RealTimeKeyword.style.ts';

export type VariantType = 'home' | 'search';

export const variantStyles: { [key in VariantType]: RealTimeKeywordStyleProps } = {
  home: {
    $containerPadding: '1rem',
    $containerWidth: '32.5rem',
    $containerHeight: 'auto',
    $titleContainerPadding: '0.3125rem 0.5rem',
    $titleContainerMarginBottom: '0.5rem',
    $updateDateTypo: 'caption2',
    $columnCount: 2,
    $keywordWidth: '7.375rem',
    $imageWidth: '10.3125rem',
    $imageHeight: '6.875rem',
    $imageTop: '-1.125rem',
    $imageRight: '0.9375rem',
  },
  search: {
    $containerPadding: '1.25rem',
    $containerWidth: '25rem',
    $containerHeight: '38.7rem',
    $titleContainerPadding: '0.5rem',
    $titleContainerMarginBottom: '0.75rem',
    $updateDateTypo: 'body3',
    $columnCount: 1,
    $keywordWidth: 'auto',
    $imageWidth: '12.6875rem',
    $imageHeight: '8.5rem',
    $imageTop: '-3.125rem',
    $imageRight: '0',
  },
};
