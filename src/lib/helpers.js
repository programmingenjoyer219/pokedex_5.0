export function pipeline(...fns) {
  return function pipelinedFn(arg) {
    fns.reduce(function invokeFnWithPrevVal(prevVal, fn) {
      return fn(prevVal);
    }, arg);
  };
}
