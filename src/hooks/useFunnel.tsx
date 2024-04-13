import { useState, Children, ReactElement, ReactNode } from 'react';

interface StepProps<StepType> {
  name: StepType;
  children: React.ReactNode;
}

type StepElementType<StepType> = ReactElement<StepProps<StepType>>;

interface FunnelProps<StepType> {
  children: StepElementType<StepType>[] | StepElementType<StepType>;
}

export const useFunnel = <StepType extends string>(initialStep: StepType) => {
  const [currentStep, setCurrentStep] = useState<StepType>(initialStep);

  const Step = (props: StepProps<StepType>) => {
    return <>{props.children}</>;
  };

  const isFunnelStep = (child: ReactNode): child is StepElementType<StepType> => {
    return (child as StepElementType<StepType>).props.name !== undefined;
  };

  const Funnel = ({ children }: FunnelProps<StepType>) => {
    const targetStep = Children.toArray(children).find((child) => {
      if (!isFunnelStep(child)) return false;
      return child.props.name === currentStep;
    }) as StepElementType<StepType> | undefined;

    return targetStep;
  };

  return [Object.assign(Funnel, { Step }), setCurrentStep] as const;
};
