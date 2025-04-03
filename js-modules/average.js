export const average = function (numbers) {
    let counter = 0, sum = 0; 
    numbers.forEach(element => {
        counter++; 
        sum += element; 
    });

    return sum / counter; 
}