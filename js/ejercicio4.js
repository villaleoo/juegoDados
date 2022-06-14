let arrayGenerico= [1,2,3,4,5,6,7,8,9,10]

function reversa (array){
    let arrayInverso= array.reverse()
    arrayInverso.forEach(element => {
        console.log(element);
    });
}
reversa(arrayGenerico)