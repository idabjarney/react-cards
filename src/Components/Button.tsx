import React, { MouseEventHandler } from 'react';

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ text, onClick }: Props) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
