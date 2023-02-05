const memoize = (fn) => {
  let cache = {}
  return (...args) => {
      let cacheKey = args.map(n => n.toString() + '+').join('')
      if (cacheKey in cache) {
          return cache[cacheKey]
      } else {
          let result = args.reduce((acc, curr) => fn(acc, curr), 0);
          cache[cacheKey] = result;
          return result;
      }
  }
}

const add = (a, b) => a + b

const memoizeAdd = memoize(add)
console.log(memoizeAdd(10, 20, 30, 40)); //returns 100
console.log(memoizeAdd(1, 2, 3, 4)); //returns 10
console.log(memoizeAdd(5, 10)); //returns 15
console.log(memoizeAdd(5, 10,15,12,23,34,56,78,89,90,23,45,89)); //returns 15