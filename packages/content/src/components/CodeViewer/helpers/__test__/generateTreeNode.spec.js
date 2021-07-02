import generateTreeNode from '../generateTreeNode';

describe('generateTreeNode', () => {
    it('should return the tree node for a folder', () => {
        const data = {
            type: 'folder',
            fileName: 'folder',
            path: '',
        };
        const result = generateTreeNode(data);
        expect(result).toEqual({
            label: 'folder',
            path: '/folder',
            icon: expect.anything(),
            isLoading: false,
            isExpanded: false,
            children: [],
        });
    });

    it('should return the tree node for a file', () => {
        const data = {
            type: 'file',
            fileName: 'index.js',
            path: '/test',
        };
        const result = generateTreeNode(data);
        expect(result).toEqual({
            label: 'index.js',
            path: '/test/index.js',
            icon: expect.anything(),
        });
    });

    it('should include extra attributes in the node', () => {
        const data = {
            type: 'file',
            fileName: 'index.js',
            path: '/test',
            testExtra: true,
        };
        const result = generateTreeNode(data);
        expect(result).toEqual({
            label: 'index.js',
            path: '/test/index.js',
            icon: expect.anything(),
            testExtra: true,
        });
    });
});
