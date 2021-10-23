declare function useConnectModal(
    modalId: string,
    defaultProps?: Record<string, unknown>,
): {
    isOpen: boolean;
    title?: string;
    [key: string]: unknown;
};

export default useConnectModal;
