module.exports = {
    RandomInt: function (lo, hi) {
        let r = Math.abs(Random() % (hi - lo + 1)) + lo;
        return r;
    },
    RandomFloat: function (lo, hi) {
        let rand_limit=32767;
        let r = Random() & (rand_limit);
        r /= rand_limit + 1;
        r = (hi - lo) * r + lo;
        return Math.abs(r);
    },
    Random: function () {
        let random_next = 1;
        random_next = random_next * 1103515245 + 12345;
        random_next = random_next >>> 0;
        let result1 = (random_next / 65536) % 32768;
        let result = parseInt(result1);
        return result
    }
};