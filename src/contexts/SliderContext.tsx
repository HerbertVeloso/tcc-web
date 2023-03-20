import { createContext, MutableRefObject } from 'react';

export interface SliderContextData {
  elementRef: MutableRefObject<HTMLDivElement | null>,
}

export const SliderContext = createContext({} as SliderContextData);
