describe("We need to add Items", () => {
    it("should be able to add new element and return new length", () => {
        const array = [];
        expect(array.push('element')).toBe(1);
    });

    it("should be able to add multiple elements and return new length", () => {
        const array = [];
        expect(array.push('element', 'other element', 'another one')).toBe(3);
    });

    it("should be able to add at head ", () => {
        const array = ['other element', 'another one'];
        array.unshift('element')
        expect(array[0]).toBe('element');
    });
});