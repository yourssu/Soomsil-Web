import { Container } from './Spacing.style';
export interface SpacingProps {
  size: string;
}
export const Spacing = ({ size }: SpacingProps) => {
  return <Container size={size} />;
};
