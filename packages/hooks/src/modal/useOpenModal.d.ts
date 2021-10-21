declare function useOpenModal(
    modalId: string,
): [(props?: Record<string, unknown>) => void, () => void];

export default useOpenModal;
