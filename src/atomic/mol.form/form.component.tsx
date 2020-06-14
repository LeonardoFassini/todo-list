import * as React from 'react';

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = (props) => <form onSubmit={props.onSubmit}>{props.children}</form>;
