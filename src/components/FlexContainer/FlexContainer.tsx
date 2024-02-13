import { StyledFlexContainer, StyledFlexGrowItem } from './FlexContainer.style';

export const FlexContainer = ({ children }: { children: React.ReactNode }) => {
  return <StyledFlexContainer>{children}</StyledFlexContainer>;
};

export const FlexGrowItem = ({
  children,
  proportion = 1,
}: {
  children: React.ReactNode;
  proportion?: number;
}) => {
  return <StyledFlexGrowItem $proportion={proportion}>{children}</StyledFlexGrowItem>;
};
