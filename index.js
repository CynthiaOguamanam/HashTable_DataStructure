console.log('Welcome to HashTable')
//define the size
function HashTable(size) {
    this.bucket = Array(size);
    this.bucketLength = this.bucket.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
}

//Hashing process
//.prototype creates a duplicate of a function   eg: 'hashing'
HashTable.prototype.hashing = function(key){
    //at start
    let position = null;

    for(i=0; i<key.length; i++){
        position += key.charCodeAt(i)
    }
   let output = position % this.bucketLength

   return output
}
//push or insert the key and value into the array
HashTable.prototype.insert = function(key, value){
    //extanciating from the hashing function using the key word new
    let index = new this.hashing(key)
    //create a function to check if the value/data exist if not push the data into that bucket; else
    if(!this.bucket[index]){
       return (this.bucket[index] = new HashNode(key, value));
    } else{
        let currentIndex = this.bucket[index]

        //lopp through  to find when there's no next  i.e node is pointing to null to avoid overide
        while(currentIndex.next){
            currentIndex = currentIndex.next
        }

        currentIndex.next = new HashNode(key, value)
    }

}

const newHashTable = new HashTable(30)
console.log(newHashTable.hashing('Peter'))
console.log(newHashTable.insert('Farad', "08123456789"))



//charCodeAt
// let a = 'P';
// console.log(a.charCodeAt())