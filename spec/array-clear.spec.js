describe("We need to clear the list", () => {
    it("should be able to clear an array", () => {
        const array = [];
        array.push('element');
        expect(array.length = 0).toBeDefined();
    });

    it("should have size 0 after clear", () => {
        const array = [];
        array.push('element');
        array.length = 0
        expect(array.length).toBe(0);
    });

    it("should be able to be refilled after clear", () => {
        const array = [];
        array.push('element');
        array.length = 0
        array.push('another one')
        expect(array.length).toBe(1);
    });
});