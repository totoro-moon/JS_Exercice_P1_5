function displayResult(){
var FirstNumber = document.getElementById('number1');
var SecondNumber = document.getElementById('number2');
var result = FirstNumber * SecondNumber

    if((FirstNumber) && (SecondNumber)){
        alert(result);
}
    else{
        alerte('veuillez taper un nombre');
    }  
}
//La fonction parseInt() analyse une chaîne de caractère fournie en argument 
//et renvoie un entier exprimé dans une base donnée.
//donc suprime les chiffre après la virgule
//a fonction parseFloat() permet de transformer une chaîne de caractères 
//en un nombre flottant après avoir analysée celle-ci (parsing).



