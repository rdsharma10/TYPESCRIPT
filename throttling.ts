function throttle<T extends (...args: any[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Example usage
const logMessageThrottle = throttle((message: string) => console.log(message), 500);
logMessageThrottle("Hello"); // Executes immediately
logMessageThrottle("World"); // Ignored if within 500ms
