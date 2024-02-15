import { HTMLAttributes, memo } from 'react';

import { StyledSpacing } from './Spacing.style';

interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  direction: 'horizontal' | 'vertical';
  size: number;
}

const Spacing = memo(function Spacing({ direction = 'vertical', size, ...props }: SpacingProps) {
  return <StyledSpacing $direction={direction} $size={size} {...props}></StyledSpacing>;
});

export default Spacing;
