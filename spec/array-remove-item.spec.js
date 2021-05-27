describe("We need to remove an item by index", () => {
    it("should be able to remove item by index", () => {
        const array = [];
        array.push('element');
        array.splice(0,1);
        expect(array.includes('element')).toBeFalse();
    });

    it("should do nothing if index is out of bounds", () => {
        const array = [];
        array.push('element', 'other element');
        expect(array.splice(2,1).length).toBe(0);
    });

    it("should decrease the length after removal", () => {
        const array = [];
        array.push('element', 'other element');
        array.splice(0,1);
        expect(array.length).toBe(1);
    });
});