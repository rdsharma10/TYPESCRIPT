// Helper Functions
function isPalindrome(s: string): boolean {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

function fibonacci(n: number): number[] {
    const sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

// LeetCode Easy Problems Solutions
// Example: Two Sum
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Example: Reverse a String
function reverseString(s: string[]): void {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

// Example: Valid Parentheses
function isValidParentheses(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = { ')': '(', '}': '{', ']': '[' };
    for (const char of s) {
        if (!map[char]) {
            stack.push(char);
        } else if (stack.pop() !== map[char]) {
            return false;
        }
    }
    return stack.length === 0;
}

// Example: Merge Two Sorted Arrays
function mergeSortedArrays(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}

// Add More Functions Below

// Example: Climbing Stairs
function climbStairs(n: number): number {
    if (n <= 2) return n;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// Example: Max Subarray
function maxSubArray(nums: number[]): number {
    let maxSum = nums[0], currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

// Add more LeetCode problem solutions as needed...
// Helper Functions

// 1. Check if a string is a palindrome
function isPalindrome(s: string): boolean {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

// 2. Generate Fibonacci sequence
function fibonacci(n: number): number[] {
    const sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

// LeetCode Easy Problems

// 3. Two Sum
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// 4. Reverse a String
function reverseString(s: string[]): void {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

// 5. Valid Parentheses
function isValidParentheses(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = { ')': '(', '}': '{', ']': '[' };
    for (const char of s) {
        if (!map[char]) {
            stack.push(char);
        } else if (stack.pop() !== map[char]) {
            return false;
        }
    }
    return stack.length === 0;
}

// 6. Merge Two Sorted Arrays
function mergeSortedArrays(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}

// Additional LeetCode Easy Problems

// 7. Climbing Stairs
function climbStairs(n: number): number {
    if (n <= 2) return n;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// 8. Maximum Subarray
function maxSubArray(nums: number[]): number {
    let maxSum = nums[0], currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

// 9. Find Single Number
function singleNumber(nums: number[]): number {
    return nums.reduce((acc, num) => acc ^ num, 0);
}

// 10. Plus One
function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

// 11. Intersection of Two Arrays
function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const result: number[] = [];
    for (const num of nums2) {
        if (map.get(num)) {
            result.push(num);
            map.set(num, map.get(num)! - 1);
        }
    }
    return result;
}

// 12. Best Time to Buy and Sell Stock
function maxProfit(prices: number[]): number {
    let minPrice = Infinity, maxProfit = 0;
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

// 13. FizzBuzz
function fizzBuzz(n: number): string[] {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i.toString());
    }
    return result;
}

// 14. Move Zeros
function moveZeroes(nums: number[]): void {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            index++;
        }
    }
}

// 15. Count Primes
function countPrimes(n: number): number {
    if (n <= 2) return 0;
    const primes = new Array(n).fill(true);
    primes[0] = primes[1] = false;
    for (let i = 2; i * i < n; i++) {
        if (primes[i]) {
            for (let j = i * i; j < n; j += i) {
                primes[j] = false;
            }
        }
    }
    return primes.filter(Boolean).length;
}
