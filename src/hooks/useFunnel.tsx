import { useState, Children, ReactElement } from 'react';

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

  const Funnel = ({ children }: FunnelProps<StepType>) => {
    const targetStep = Children.toArray(children).find((child) => {
      const stepChild = child as StepElementType<StepType>;
      return stepChild.props.name === currentStep;
    }) as StepElementType<StepType> | undefined;

    return targetStep;
  };

  return [Object.assign(Funnel, { Step }), setCurrentStep] as const;
};
