import { FaIcons } from '@app/components/icons/fa-icons';
import * as React from 'react';

import { CheckboxContainerStyled } from './checkbox.style';

interface CheckboxProps {
  checked: boolean;
  onClick?: (checked: boolean) => void;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const handleCheckboxClick = () => {
    props.onClick(!props.checked);
  };

  return (
    <CheckboxContainerStyled onClick={handleCheckboxClick}>
      {props.checked ? (
        <FaIcons.CheckboxChecked data-test='checkboxChecked' />
      ) : (
        <FaIcons.Checkbox data-test='checkboxUnchecked' />
      )}
    </CheckboxContainerStyled>
  );
};
