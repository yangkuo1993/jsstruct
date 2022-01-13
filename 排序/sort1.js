/**
 * 归并排序、快速排序、希尔排序、堆排序
 * 时间复杂度（O(nlogn)）
 */

/**
 * @description 归并排序
 * @description 排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了
 * 归并排序采用的是分治思想。
 */

const mergeSort = (arr) => {
  const length = arr.length;
  if (length < 2) {
    return arr;
  }
  const middle = length >> 1,
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

// const arr = [3, -1, 38, 5, 47, 15, 36, -36, 36, 2, 46, -38, 19, 50, 48];
// console.time('归并排序耗时');
// console.log('arr :', mergeSort(arr));
// console.timeEnd('归并排序耗时');

/**
 * =====================分隔=====================
 */

/**
 * @description 快速排序
 * 先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。
 * 左右分别用一个空数组去存储比较后的数据。
 * 最后递归执行上述操作，直到数组长度 <= 1;
 * 特点：快速，常用。
    缺点：需要另外声明两个数组，浪费了内存空间资源。
    时间复杂度：平均O(nlogn)，最坏O(n2)，实际上大多数情况下小于O(nlogn)

空间复杂度:O(logn)（递归调用消耗）
 */

// const quickSort = (arr) => {
//   const length = arr.length;
//   if (length <= 1) {
//     return arr;
//   }
//   const midIndex = length >> 1;

//   const valArr = arr.splice(midIndex, 1);
//   const midIndexVal = valArr[0];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < midIndexVal) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(midIndexVal, quickSort(right));
// };

// const arr = [3, -1, 38, 5, 47, 15, 36, -36, 36, 2, 46, -38, 19, 50, 48];
// console.time("快排序耗时");
// console.log("quickSort :", quickSort(arr));
// console.timeEnd("快排序耗时");

/**
 * 上面方案，空间复杂度过高，占用两个变量存储
 */

// 方法二
// const quickSort = (arr, _left, _right) => {
//     let left = _left;
//     let right = _right;
//     let temp = 0;
//     if (left <= right) {
//         temp = arr[left];
//         while(left != right) {
//             while(right > left && arr[right] >= temp) {
//                 console.log(`开始转换right-> left:   ${arr}，left值：${left}   right值：${right}`)
//                 right--;
//                 arr[left] = arr[right];
//                 console.log(`结束转换right-> left:   ${arr}，left值：${left}   right值：${right}`)
//             }
//             console.log(`中间位置right-> left:   ${arr}，left值：${left}   right值：${right}`);
//             while(left < right && arr[left] <= temp) {
//                 console.log(`开始转换left-> right:   ${arr}，left值：${left}   right值：${right}`)
//                 left++;
//                 arr[right] = arr[left];
//                 console.log(`结束转换left-> right:   ${arr}，left值：${left}   right值：${right}`)
//             }
//             console.log(`末尾left-> right:   ${arr}，left值：${left}   right值：${right}`);
//         }
//         arr[right] = temp;
//         quickSort(arr,_left,left-1);  //对基准元素左边的元素进行递归排序
//         quickSort(arr, right+1,_right);  //对基准元素右边的进行递归排序
//     }
//     return arr;
// }

// const arr = [3, -1, 38, 5, 47, 15, 36, -36, 36, 2, 46, -38, 19, 50, 48];
// console.time("快排序耗时");
// console.log("quickSort :", quickSort(arr, 0, arr.length - 1));
// console.timeEnd("快排序耗时");

const quickSort = (arr, _low, _high) => {
  /// 复制基准值 arr[0]
  let low = _low;
  let high = _high;
  if (low < high) {
    let temp = arr[low];
    while (low !== high) {
      while(low < high && arr[high] >= temp) {
        high--;
      }
      arr[low] = arr[high];
      while(low < high && arr[low] <= temp) {
          low++;
      }
      arr[high] = arr[low];
    }

    /// low = high  既是temp的正确位置
    arr[low] = temp;
    /// 分别查找两侧
    quickSort(arr, _low, low - 1);
    quickSort(arr, high + 1, _high);
  }
  return arr;
};
const arr = [4,8,1,7,3,2,5,6];
console.time("快排序耗时");
console.log("quickSort :", quickSort(arr, 0, arr.length - 1));
console.timeEnd("快排序耗时");

/**
 * =====================分隔=====================
 */

/**
 * @description 希尔排序
 *
 */
