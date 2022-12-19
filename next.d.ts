import type { ReactElement, ReactNode } from 'react';
import type {
  NextComponentType,
  NextPageContext,
} from 'next/dist/shared/lib/utils';

declare module 'next' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  export declare type NextPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}
