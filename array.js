// Create a 4x4 array with example values
const originalArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Function to flatten the array in a spiral pattern
function flattenSpiral(arr) {
  const flattened = [];
  const numRows = arr.length;
  const numCols = arr[0].length;
  let top = 0,
    bottom = numRows - 1,
    left = 0,
    right = numCols - 1;

  while (top <= bottom && left <= right) {
    // Move from left to right along the top row
    for (let i = left; i <= right; i++) {
      flattened.push(arr[top][i]);
    }
    top++;

    // Move from top to bottom along the rightmost column
    for (let i = top; i <= bottom; i++) {
      flattened.push(arr[i][right]);
    }
    right--;

    // Move from right to left along the bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        flattened.push(arr[bottom][i]);
      }
      bottom--;
    }

    // Move from bottom to top along the leftmost column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        flattened.push(arr[i][left]);
      }
      left++;
    }
  }

  return flattened;
}

// Flatten the original array in a spiral pattern
const flattenedSpiralArray = flattenSpiral(originalArray);

// Reverse the flattened array to start from the center
const reversedFlattenedArray = flattenedSpiralArray.reverse();

// Display the reversed flattened spiral array
console.log("Flattened Spiral Array (Starting from Center):");
console.log(reversedFlattenedArray.join(", "));
