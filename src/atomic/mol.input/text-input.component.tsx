import * as React from 'react';
import { TextInputStyled } from '@atomic/mol.input/text-input.style';
import { Label } from '@atomic/mol.input/label.component';

interface TextInputProps {
  onChange: (value: any) => void;
  type: 'number' | 'password' | 'tel' | 'checkbox' | 'radio' | 'text';
  onFocus?: () => void;
  onBlur?: () => void;
  value: any;
  id: string;
  label: string;
  dataTest?: string;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const [focused, setFocused] = React.useState(false);

  const onFocus = () => {
    props.onFocus?.();
    setFocused(true);
  };

  const onBlur = () => {
    props.onBlur?.();
    setFocused(false);
  };

  const handleValueChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onChange(event.currentTarget.value);
  };

  return (
    <>
      <Label for={props.id} label={props.label} />
      <TextInputStyled
        data-test={props.dataTest}
        id={props.id}
        onChange={handleValueChange}
        type={props.type}
        value={props.value}
        focused={focused}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </>
  );
};
