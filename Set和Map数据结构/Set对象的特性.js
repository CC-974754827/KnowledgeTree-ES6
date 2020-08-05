var mySet = new Set();

// 值的唯一性
mySet.add(1);  // Set(1) {1}
mySet.add(2);  // Set(2) {1, 2}
mySet.add(2);  // Set(2) {1, 2}

// 类型的多样性
mySet.add('str');  // Set(3) {1, 2, "str"}

// 引用类型数据之间不恒等，即使值相同， Set 也能存储
mySet.add({a: 1, b: 2});  // Set(4) {1, 2, "str", {…}}
mySet.add({a: 1, b: 2});  // Set(5) {1, 2, "str", {…}, {…}}

// 存储特殊值
mySet.add(+0);  // Set(6) {1, 2, "str", {…}, {…}, 0}
mySet.add(-0);  // Set(6) {1, 2, "str", {…}, {…}, 0}

mySet.add(undefined);  // Set(7) {1, 2, "str", {…}, {…}, 0, undefined}
mySet.add(undefined);  // Set(7) {1, 2, "str", {…}, {…}, 0, undefined}

mySet.add(NaN);  // Set(8) {1, 2, "str", {…}, {…}, 0, undefined, NaN}
mySet.add(NaN);  // Set(8) {1, 2, "str", {…}, {…}, 0, undefined, NaN}