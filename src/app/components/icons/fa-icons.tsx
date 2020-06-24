import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Colors } from '@atomic/atm.constants';

export const FaIcons = {
  Checkbox: (props: Partial<FontAwesomeIconProps>) => (
    <FontAwesomeIcon {...props} color={Colors.Primary} icon={faSquare} />
  ),
  CheckboxChecked: (props: Partial<FontAwesomeIconProps>) => (
    <FontAwesomeIcon {...props} color={Colors.Primary} icon={faCheckSquare} />
  ),
};
