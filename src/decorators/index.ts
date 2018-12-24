// descriptor对象原来的值如下
//   interface descriptor{
//     value?: string|object,
//     enumerable: boolean,
//     configurable: boolean,
//     writable: boolean
//   };

export function log(target, name, descriptor) {
    var oldValue = descriptor.value;
  
    descriptor.value = function() {
      console.log(`Calling ${name} with`, arguments);
      return oldValue.apply(this, arguments);
    };
    return descriptor;
  }


export default {
    log
}