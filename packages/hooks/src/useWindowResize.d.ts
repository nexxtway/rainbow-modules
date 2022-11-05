declare function useWindowResize(
    handler: (this: Window, event: UIEvent) => void,
    isListening?: boolean,
): void;
export default useWindowResize;
