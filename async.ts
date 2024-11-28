const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Example usage
fetchData("https://api.example.com/data").then((data) => console.log(data));


const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // [1, 2, 3, 4, 5]

function sum(...nums: number[]): number {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


const greetUser = (name: string = "Guest"): string => `Welcome, ${name}!`;
console.log(greetUser()); // Welcome, Guest!
console.log(greetUser("Alice")); // Welcome, Alice!


export const add = (a: number, b: number): number => a + b;
export const multiply = (a: number, b: number): number => a * b;
