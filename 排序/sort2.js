/**
 * @description 冒泡排序
 * 循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。

这样一次循环之后最后一个数就是本数组最大的数。

下一次循环继续上面的操作，不循环已经排序好的数。

优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环。

#
时间复杂度：O(n2)

空间复杂度:O(1)
 */

const bubbleSort = (arr) => {
  for (let j = 0; j < arr.length; j++) {
    let complete = true;
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        complete = false;
      }
    }
    // 没有冒泡结束循环
    if (complete) {
      break;
    }
  }
  return arr;
};

var arr1 = [
  3, 44, 38, 5, 47, 15, 36, 26, 27, -1, -3, -3, -44, 48, 2, 46, 4, 19, 50, 48,
];
console.time("冒泡排序耗时");
console.log("bubbleSort :", bubbleSort(arr1));
console.timeEnd("冒泡排序耗时");

/// 冒泡排序改进版
const bubbleSort2 = (arr) => {
  var i = arr.length - 1;
  while (i > 0) {
    var pos = 0;
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j;
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    i = pos;
  }
  return arr;
};

console.time("改进冒泡排序耗时");
console.log("bubbleSort2 :", bubbleSort2(arr1));
console.timeEnd("改进冒泡排序耗时");

/// 冒泡排序改进第二版

const bubbleSort3 = (arr) => {
    let low = 0;
    let high = arr.length - 1;
    while(low < high) {
        for (let i =0; i < high; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
        --high;
        for (let j = high; j > low;j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
        ++low;
    }
    return arr;
}

console.time("改进冒泡排序耗时3");
console.log("bubbleSort3 :", bubbleSort3(arr1));
console.timeEnd("改进冒泡排序耗时3");

/**
 * =====================分隔=====================
 */

/**
 * @description 插入排序
 * 
 * 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。

插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。
时间复杂度：O(n2)

空间复杂度:O(1)
 *
 */

// function insertSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let target = i;
//     for (let j = i - 1; j >= 0; j--) {
//       if (array[target] < array[j]) {
//         [array[target], array[j]] = [array[j], array[target]];
//         target = j;
//       } else {
//         break;
//       }
//     }
//   }
//   return array;
// }
// console.time("插入排序耗时");
// console.log("insertSort :", bubbleSort(arr1));
// console.timeEnd("插入排序耗时");

/**
 * =====================分隔=====================
 */

/**
 * @description 选择排序
 *每次循环选取一个最小的数字放到前面的有序序列中。
 *时间复杂度：O(n2)

空间复杂度:O(1)
 */

// const selectionSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }
//     [array[minIndex], array[i]] = [array[i], array[minIndex]];
//   }
//   return array;
// };

// console.time("选择排序耗时");
// console.log("selectionSort :", selectionSort(arr1));
// console.timeEnd("选择排序耗时");
