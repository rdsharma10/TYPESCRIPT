function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Example usage
const logMessage = debounce((message: string) => console.log(message), 300);
logMessage("Hello"); // Executes after 300ms if no further calls are made
