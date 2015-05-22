module.exports = {
    /**
     * Mocha Unit Tests & Blanket Coverage
     */
    blanket_mocha: {
        all: ["test/**/*.html"],
        options: {
            threshold: 90,
            run: false
        }
    }
};