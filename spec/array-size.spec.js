describe("We need to get the size of the list", () => {
    it("should be size one after a push", () => {
        const array = [];
        array.push('element');
        expect(array.length).toBe(1);
    });

    it("should be size zero after a pop", () => {
        const array = [];
        array.pop();
        expect(array.length).toBe(0);
    });

    it("should have length", () => {
        const array = [];
        expect(array.length).toBeDefined();
    });
});