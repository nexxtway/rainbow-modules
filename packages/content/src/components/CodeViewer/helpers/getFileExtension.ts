const getFileExtension = (fileName: string): string => {
    const parts = fileName.split('.').filter((part) => !!part);
    return parts.length > 1 ? parts[parts.length - 1] : 'unknown';
};

export default getFileExtension;
