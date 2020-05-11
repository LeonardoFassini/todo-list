import * as React from 'react';
import { LabelStyled } from './label.style';

interface LabelProps {
  for: string;
  label: string;
}

export const Label: React.FC<LabelProps> = (props) => <LabelStyled htmlFor={props.for}>{props.label}</LabelStyled>;
