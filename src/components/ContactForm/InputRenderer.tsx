import React from 'react';
import { InputProps } from '@/types';

export interface InputRendererProps {
  Component: React.ElementType;
  InputProps: InputProps;
}
const InputRenderer: React.FC<InputRendererProps> = ({
  Component,
  InputProps,
}) => {
  const Props = {
    ...InputProps,
    className: `${InputProps.className} w-full bg-transparent border-b border-b-gray-300 py-2 px-1  text-gray-800 placeholder:text-sm placeholder:font-normal placeholder:text-gray-800 focus:outline-none focus:border-b-gray-800 `,
    placeholder: InputProps.placeholder ?? `Type here`,
    type: InputProps.type ?? `text`,
    name: InputProps.name ?? `name`,
    defaultValue: InputProps.value ?? null,
  };
  return <Component {...Props} />;
};

export default InputRenderer;
