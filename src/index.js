module.exports =
  function check(str, bracketsConfig) {
    const stack = [];
    const brackets = bracketsConfig;
    const openers = [];
    const closers = [];

    for (let i = 0; i < brackets.length; i++) {
      openers.push(brackets[i][0]);
      closers.push(brackets[i][1]);

    }

    for (let i = 0; i < str.length; i++) {
      if (closers.includes(str[i]) && stack.length !== 0) {
        const pair = openers[closers.indexOf(str[i])];
        if (stack[stack.length - 1] === pair || stack[stack.length - 1] === str[i]) {
          stack.pop();
        } else if (str[i] !== pair) {
          return false;
        } else {
          stack.push(str[i]);
        }
      } else {
        stack.push(str[i]);
      }
    }
    return stack.length === 0;
  }


















  // for (const e of arr) {
  //   if (e === stack[0]) {
  //                         console.log('str 9 ' + stack);
  //     stack.shift()
  //                         console.log('str 11 ' + stack);
  //   } else if (conf[e]) {
  //                         console.log('str 13 ' + conf[e]);
  //     stack.unshift(conf[e])
  //                         console.log('str 15 ' + stack);
  //   }
  //   else  {
  //     return false;
  //   }
  // }