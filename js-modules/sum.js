export const sum = function (numbers) {
    let sum = 0; 

    numbers.forEach(element => {
        sum += element; 
    });

    return sum; 
}
