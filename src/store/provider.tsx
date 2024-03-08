'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './index';

interface ProviderProps {
    children: ReactNode;
  }

  
export function Providers({ children } : ProviderProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}