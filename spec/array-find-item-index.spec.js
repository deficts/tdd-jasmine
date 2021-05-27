describe("We need to search the index of an object", () => {
    it("should return index if element exist", () => {
        const array = [];
        array.push('element');
        const index = array.indexOf('element');
        expect(index).toBe(0);
    });

    it("should return -1 if element does not exist", () => {
        const array = [];
        const index = array.indexOf('element');
        expect(index).toBe(-1);
    });

    it("should return first index if element exist multiple times", () => {
        const array = [];
        array.push('element', 'element');
        const index = array.indexOf('element');
        expect(index).toBe(0);
    });

});