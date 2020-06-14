import styled from 'styled-components';
import { Spacing } from '@atomic/atm.constants';

interface HboxProps {
  fullHeight: boolean;
  hAlign: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  vAlign: 'flex-start' | 'center' | 'flex-end';
  noGrow: boolean;
}

export const Hbox: any = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  ${(props: HboxProps) => (props.hAlign ? `justify-content: ${props.hAlign};` : '')}
`;

Hbox.Item = styled.div<HboxProps>`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => (props.noGrow ? 0 : 1)};
  justify-content: ${(props) => props.vAlign ?? 'flex-start'};
  align-items: ${(props) => props.hAlign ?? 'stretch'};
`;

Hbox.Separator = styled.div`
  width: ${Spacing.Small};
`;
