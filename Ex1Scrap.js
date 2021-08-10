let dog_sentence = "Hello, my name is Snoopy, and I sleep on top of my house"
let dog_names = ["Max", "Spot", "Buddy", "Lassie", "Charlie", "Snoopy", "Rocky", "Scooby", "Pluto"]

function current_name(){
    for (let i =0; i < {dog_sentence}.length; i++){
        if (i == "Snoopy"){
            return "Match"
        }else{
            return "No Match"
        }
    }
}
current_name()
console.log(dog_sentence)
