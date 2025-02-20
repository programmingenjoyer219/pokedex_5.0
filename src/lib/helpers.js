export function pipeline(...fns) {
    return function pipelinedFn(arg) {
        fns.reduce(function invokeFnWithPrevVal(prevVal, fn) {
            return fn(prevVal);
        }, arg);
    };
}

export function debounce(delay) {
    var timeoutId = null;
    return function takeFn(fn) {
        return function takeArgs(...args) {
            if (timeoutId != null) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(fn, delay, ...args);
        };
    };
}
