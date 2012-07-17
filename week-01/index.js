"use strict";

// Based heavily on http://igoro.com/archive/gallery-of-processor-cache-effects/, but IN JAVASCRIPT!

// NB: "normal" numbers in JavaScript are 64-bit floats.

function makeArray(length) {
    var array = new Array(length);

    for (var i = 0; i < length; ++i) {
        array[i] = 1;
    }

    return array;
}

function makeInt32Array(length) {
    var arrayBuffer = new ArrayBuffer(length * 4); // 4 = number of bytes in an int32
    var view = new Int32Array(arrayBuffer);

    for (var i = 0; i < length; ++i) {
        view[i] = 1;
    }

    return view;
}

// This generically controls how big things are/how many steps we do. Node starts out-of-memorying and/or getting
// really slow around 16 * 1024 * 1024 (on my machine). Bigger will probably be more accurate and resilient to
// caches, but if you're impatient, keep it lower. A good medium is 4 * 1024 * 1024 (on desktops).
var SIZE = 1024 * 1024;

suite("Access every k-th entry [arrays]", function () {
    var stepValues = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

    var arrays = stepValues.map(function () { return makeArray(SIZE); });

    stepValues.forEach(function (stepValue, i) {
        bench("k = " + stepValue, function () {
            var array = arrays[i];
            for (var j = 0; j < array.length; j += stepValue) {
                array[j] *= 3;
            }
        });
    });
});

suite("Access every k-th entry [ArrayBuffers]", function () {
    var stepValues = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

    var views = stepValues.map(function () { return makeInt32Array(SIZE); });

    stepValues.forEach(function (stepValue, i) {
        bench("k = " + stepValue, function () {
            var view = views[i];
            for (var j = 0; j < view.length; j += stepValue) {
                view[j] *= 3;
            }
        });
    });
});

suite("Find the cache line size [arrays]", function () {
    var arraySizes = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2 * 1024, 4 * 1024, 8 * 1024, 16 * 1024]; // in KiB

    var arrays = arraySizes.map(function (size) { return makeArray(size * 1024); });

    arraySizes.forEach(function (size, i) {
        bench("size = " + size, function () {
            var array = arrays[i];
            for (var j = 0; j < SIZE; ++j) {
                ++array[(j * 16) % array.length];
            }
        });
    });
});

suite("Find the cache line size [ArrayBuffers]", function () {
    var arraySizes = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2 * 1024, 4 * 1024, 8 * 1024, 16 * 1024]; // in KiB

    var views = arraySizes.map(function (size) { return makeInt32Array(size * 1024); });

    arraySizes.forEach(function (size, i) {
        bench("size = " + size, function () {
            var view = views[i];
            for (var j = 0; j < SIZE; ++j) {
                ++view[(j * 16) % view.length];
            }
        });
    });
});

suite("Demonstrate instruction-level parallelism [arrays]", function () {
    bench("Modifying the same array element", function () {
        var array = makeArray(2);

        for (var i = 0; i < SIZE; ++i) {
            ++array[0];
            ++array[0];
        }
    });

    bench("Modifying two different array elements", function () {
        var array = makeArray(2);

        for (var i = 0; i < SIZE; ++i) {
            ++array[0];
            ++array[1];
        }
    });
});

suite("Demonstrate instruction-level parallelism [ArrayBuffers]", function () {
    bench("Modifying the same array element", function () {
        var view = makeInt32Array(2);

        for (var i = 0; i < SIZE; ++i) {
            ++view[0];
            ++view[0];
        }
    });

    bench("Modifying two different array elements", function () {
        var view = makeInt32Array(2);

        for (var i = 0; i < SIZE; ++i) {
            ++view[0];
            ++view[1];
        }
    });
});
