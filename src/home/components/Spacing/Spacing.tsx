import { StyledContainer } from './Spacing.style';
export interface SpacingProps {
  size: string;
}
export const Spacing = ({ size }: SpacingProps) => {
  return <StyledContainer size={size} />;
};
