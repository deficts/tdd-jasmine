describe("We need to get elements by index", () => {
    it("should get the element by index", () => {
        const array = [];
        array.push('element');
        expect(array[0]).toBe('element');
    });

    it("should be undefined if not index", () => {
        const array = [];
        array.push('element');
        expect(array[1]).toBeUndefined();
    });

    it("should be able to get by index after push", () => {
        const array = [];
        array.push('element');
        array.push('other element');
        expect(array[0]).toBe('element');
    });
});