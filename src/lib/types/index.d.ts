export interface Level2Category {
  name: string;
  href: string;
}

declare module '*.svg?url' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
