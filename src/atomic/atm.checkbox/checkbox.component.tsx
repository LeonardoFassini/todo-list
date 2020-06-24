import { FaIcons } from '@app/components/icons/fa-icons';
import * as React from 'react';

import { CheckboxContainerStyled } from './checkbox.style';

interface CheckboxProps {
  checked: boolean;
  onClick: (checked: boolean) => void;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const handleCheckboxClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.type === 'click') {
      props.onClick(!props.checked);
    }
  };

  return (
    <CheckboxContainerStyled onClick={handleCheckboxClick}>
      {props.checked ? <FaIcons.CheckboxChecked /> : <FaIcons.Checkbox />}
    </CheckboxContainerStyled>
  );
};
