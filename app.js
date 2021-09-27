// const db = {}

// const addToDb = item => {
//     const db = getItem()
//     if(item in db){
//         db[item] = db[item] + 1
//     }
//     else{

//         db[item] = 1
//     }
//     addLocalStorage(db)
// }
// const deleteFormDb = item => {
//     const db = getItem()
//     delete db[item]
// }

// const addLocalStorage = db =>{
//     const dbJSON = JSON.stringify(db)
//     localStorage.setItem('Shopping cart', dbJSON)
// }
// const getItem = () =>{

//     return db;
// }





const addToDb = item =>{
    let db = getNewItem()
    if(item in db){
        db[item] = db[item] + 1
    }
   else{
    db[item] = 1

   }
//    add to call localStorage 
   addLocalStorage(db)  
//    add to call localStorage 
}

// delete from db  
const deleteFromDb = item =>{
    const db = getNewItem()
    delete db[item]
    addLocalStorage(db)
}
// delete from db  
// add call localStorage 
const addLocalStorage = db =>{
  let dbJSON = JSON.stringify(db) 
  localStorage.setItem('shopping-cart', dbJSON)
}
// add call localStorage 
const getNewItem = () =>{
    let saveDb = localStorage.getItem('shopping-cart')
    saveDb = JSON.parse(saveDb)
    return saveDb;
}
