


//########## EXERCISE NO. 2 #####################//
// *Write a function that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */
// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    //code goes here
    for (let i =0; i < Given_arr.length; i++){
        if (i % 2 == 0){
            Given_arr.splice(i,1, 'even index')
        }
    }
}
replaceEvens()
console.log(Given_arr)


