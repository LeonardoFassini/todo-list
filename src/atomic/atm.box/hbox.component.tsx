import styled from 'styled-components';
import { Spacing } from '@atomic/atm.constants';

interface HboxProps {
  fullHeight: boolean;
  hAlign: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  vAlign: 'flex-start' | 'center' | 'flex-end';
}

export const Hbox: any = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  ${(props: HboxProps) => (props.fullHeight ? 'height: 100%;' : null)};
  ${(props: HboxProps) => (props.hAlign ? `justify-content: ${props.hAlign};` : '')}
`;

Hbox.Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: HboxProps) => props.vAlign ?? 'flex-start'};
  align-items: ${(props: HboxProps) => props.hAlign ?? 'stretch'};
`;

Hbox.Separator = styled.div`
  width: ${Spacing.Small};
`;
