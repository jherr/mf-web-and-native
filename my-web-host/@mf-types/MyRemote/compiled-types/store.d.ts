export type Store = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};
export declare const store: import("zustand").StoreApi<Store>;
declare const _default: () => Store;
export default _default;
