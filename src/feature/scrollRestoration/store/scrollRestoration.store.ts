import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// interface ScrollRestorationModel {
//     [key: string]: number;
// }

// interface ScrollRestorationStoreModel {
//     scrollRestoration: PersonalizationType;
//     updatePersonalization: (key: string, valueKey: string, value: ScrollRestorationModel) => void;
// }

// const scrollRestorationStore = create<ScrollRestorationModel>()(
//     persist(
//         (set, get) => ({
//             scrollRestoration: {
//                 scrollY: 0,
//             },
//             updateScrollRestoration: (
//                 key: string,
//                 valueKey: string,
//                 value: PersonalizationType,
//             ) => {
//                 //                 const currentPersonalization = get().personalization;
//                 //                 const updatedPersonalization = merge({}, currentPersonalization, {
//                 //                     [key]: {
//                 //                         [valueKey]: value,
//                 //                     },
//                 //                 });
//                 //                 set(() => ({
//                 //                     personalization: updatedPersonalization,
//                 //                 }));
//             },
//         }),
//         {
//             name: 'scrollRestorationStore',
//         },
//     ),
//     //         (set, get) => ({
//     //             personalization: {
//     //                 test: {
//     //                     aside: {
//     //                         width: '10%',
//     //                     },
//     //                 },
//     //             },
//     //             updatePersonalization: (key: string, valueKey: string, value: PersonalizationType) => {
//     //                 const currentPersonalization = get().personalization;

//     //                 const updatedPersonalization = merge({}, currentPersonalization, {
//     //                     [key]: {
//     //                         [valueKey]: value,
//     //                     },
//     //                 });

//     //                 set(() => ({
//     //                     personalization: updatedPersonalization,
//     //                 }));
//     //             },
//     //         }),
//     //         {
//     //             name: 'personalizationStore',
//     //         },
// );

// type State = {
//     [key: string]: number;
// };

// type Action = {
//     updateScroll: (value: State) => void;
// };

// const personalizationStore = create<State & Action>(set => ({
//     updateScroll: value =>
//         set(state => ({
//             ...state,
//             ...value,
//         })),
// }));

// interface ScrollRestorationModel {
//     [key: string]: number;
// }

// interface ScrollRestorationStoreModel {
//     scroll: ScrollRestorationModel | null;
//     setScroll: (user: ScrollRestorationModel | null) => void;
// }
// const useScrollRestorationStore = create<ScrollRestorationStoreModel>(set => ({
//     scroll: null,
//     setScroll: (value: ScrollRestorationModel | null) => {
//         console.log(value);
//         // set(value);
//     },
// }));

interface ScrollRestorationModel {
    [key: string]: number;
}

interface ScrollRestorationStoreModel {
    scrolls: ScrollRestorationModel | null;
    updateScroll: (key: string, value: number) => void;
}

const useScrollRestorationStore = create<ScrollRestorationStoreModel>()(
    persist(
        set => ({
            scrolls: null,
            updateScroll: (key: string, value: number) => {
                set(state => ({
                    scrolls: {
                        ...state.scrolls,
                        [key]: value,
                    },
                }));
            },
        }),
        {
            name: 'scroll-restoration-store',
        },
    ),
);

export { useScrollRestorationStore };
