export function max(numbers) {
    let i = 0; 
    let max = numbers[i]; 

    numbers.forEach(element => {
        if (element > max) {
            max = element; 
        } 
    });

    return max; 
}