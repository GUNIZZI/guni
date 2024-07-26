// // LazyLoad.tsx
// import React, { lazy, Suspense, ComponentType } from 'react';

import { ComponentType, lazy, Suspense } from 'react';

import { ReactJSXElement } from 'node_modules/@emotion/react/types/jsx-namespace';

// type LazyComponentType = { [key: string]: ComponentType<unknown> };

// export const LazyLoad = <K extends string>(
//     importFunc: () => Promise<LazyComponentType>,
//     componentName: K,
//     displayName: string,
// ): React.ComponentProps<LazyComponentType[K]> => {
//     const LazyComponent = lazy(async () => {
//         const module = await importFunc();
//         return { default: module[componentName] };
//     });

//     const LazyLoadComponent: React.FC<React.ComponentProps<LazyComponentType[K]>> = props => (
//         <Suspense fallback={<div>Loading...</div>}>
//             <LazyComponent {...props} />
//         </Suspense>
//     );

//     LazyLoadComponent.displayName = displayName;
//     return LazyLoadComponent;
// };

interface OwnProps {
    importFunction: Promise<{ [key: string]: ComponentType<unknown> }>;
    componentName: string;
}

const LazyLoad = ({ importFunction, componentName }: OwnProps) => {
    const LazyComponent = lazy(() =>
        importFunction.then(module => {
            const Component = module[componentName as keyof typeof module];
            return { default: Component };
        }),
    );

    return (
        <Suspense fallback={<div>Loding</div>}>
            <LazyComponent />
        </Suspense>
    );
};

export { LazyLoad };
