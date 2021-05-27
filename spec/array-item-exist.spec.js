describe("We need to be able to check if an item exists", () => {
    it("should return true if object exist", () => {
        const array = [];
        array.push('element');
        expect(array.includes('element')).toBeTrue();
    });

    it("should return false if object does not exist", () => {
        const array = [];
        array.push('element');
        expect(array.includes('not element')).toBeFalse();
    });

    it("should be false if element is replaced ", () => {
        const array = [];
        array.push('element');
        expect(array.includes('element')).toBeTrue();
        array[0] = 'other element';
        expect(array.includes('element')).toBeFalse();
    });
});