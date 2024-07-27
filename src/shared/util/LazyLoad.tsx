// import { ComponentType, lazy, Suspense } from 'react';

// interface OwnProps<T = unknown> {
//     importFunction: () => Promise<{ [key: string]: ComponentType<T> }>;
//     componentName: string;
// }

// const delay = (ms: number) =>
//     new Promise<void>(resolve => {
//         setTimeout(resolve, ms);
//     });

// const LazyLoad = ({ importFunction, componentName }: OwnProps) => {
//     const LazyComponent = lazy(() =>
//         importFunction()
//             .then(module => delay(2000).then(() => module))
//             .then(module => {
//                 const Component = module[componentName as keyof typeof module];
//                 return { default: Component };
//             }),
//     );

//     return (
//         <Suspense fallback={<div>Loding</div>}>
//             <LazyComponent />
//         </Suspense>
//     );
// };

// export { LazyLoad };

import { ComponentType, lazy, Suspense, useState, useEffect } from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface OwnProps<T = unknown> {
    importFunction: () => Promise<{ [key: string]: ComponentType<T> }>;
    componentName: string;
}

const delay = (ms: number) =>
    new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });

const LazyLoad = ({ importFunction, componentName }: OwnProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const LazyComponent = lazy(() =>
        importFunction()
            .then(module => delay(2000).then(() => module))
            .then(module => {
                const Component = module[componentName];
                if (!Component) {
                    throw new Error(`Component ${componentName} not found in the module`);
                }
                return { default: Component };
            }),
    );

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <TransitionGroup>
            <CSSTransition in={isLoaded} timeout={600} classNames="fade" unmountOnExit>
                <Suspense fallback={<div className="loading-fallback">Loading</div>}>
                    <LazyComponent />
                </Suspense>
            </CSSTransition>
        </TransitionGroup>
    );
};

export { LazyLoad };
