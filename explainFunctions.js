/*

 true or true = true
 true or false = true
 false or true = true
 false or false = false

 true and true = true
 true and false = false
 false and true = false
 false and false = false
 ||
 &&
 */

/*
    num1, num2
*/



/*
    if(condition){
        if block
    } else {
        else block
    }
*/
/*
num1 > num2 = true
num1 > num2 = true
 */


/*
    num1 > num2;
    num1 > num3;

    num2> num1;
    num2> num3;

    num3>num1;
    num3>num2;

    */

/*
    function functionName(arguments){
        variables;
        statements
        return statement;
    } -> function definition
    functionName() function invoking/calling
    function -> keyword
    functionName -> title/label to refer that function
    arguments -> function takes arguments to process
    parameter -> arguments passed while invoking
* */

function greatestOf3(num1, num2, num3) {
    if (num1 > num2) {
        if ( num1 > num3){
            console.log(num1);
        } else {
            console.log(num3)
        }
    }
    else  if (num2 > num3){
        {
            console.log(num2);

    } else {
        console.log(num3);
    }

    return 1;
} // greatestOf3 is a function does finds gretaest of given 3

greatestOf3(a,b,c);
function greatestOf3(a,b,c) {
    console.log(a);//statement1
    console.log(b);//statement2
    console.log(c);//statement3
    return 12;
//    statement4
//    statement5
//    statement6
}


let x = 10;
let y = 13;
let z = 12345;
greatestOf3(x,y,z);

/*
// let num4 = 40
// let num5 = 40
// let num6 = 40
//
// if (num4 > num5) {
//     if ( num4 > num6){
//         console.log(num4);
//     } else {
//         console.log(num6)
//     }
// }
// else  if (num5 > num6){
//     {
//         console.log(num5);
//     }
// } else {
//     console.log(num6);
// }
//
// let num7 = 40
// let num8 = 40
// let num9 = 40
//
// if (num4 > num5) {
//     if ( num4 > num6){
//         console.log(num4);
//     } else {
//         console.log(num6)
//     }
// }
// else  if (num5 > num6){
//     {
//         console.log(num5);
//     }
// } else {
//     console.log(num6);
// }*/
