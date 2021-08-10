// //==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"*/

dog_sentence = "Hello, my name is Snoopy, and I sleep on top of my house"
dog_names = ["Max", "Spot", "Buddy", "Lassie", "Charlie", "Snoopy", "Rocky", "Scooby", "Pluto"]

//function findWords(){
    //Your code goes here

//Call method here with parameters

let current_name = dog_sentence.map(
    (dog_sentence) =>{
        if (dog_sentence.includes ('Snoopy')){
            return "Matched dog_name"
        }else{
            return "No Matches"
        }
    }
)
console.log(current_names)

let current_name = dog_names.map(
    (dog_name) =>{
        if (dog_name.includes ('Snoopy')){
            return "Matched dog_name"
        }else{
            return "No Matches"
        }
    }
)
console.log(current_names)
//########## EXERCISE NO. 2 #####################
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

