const USER = 'user';
const CURRENT = 'current';
let users = loadUser(USER);
let current = loadData(CURRENT);

console.log(users);
function addUser(user) {
    users.push(user);
    saveUser(USER);
}

function saveUser(key) {
    let data = JSON.stringify(users);
    localStorage.setItem(key,data);
}

function loadUser(key) {
    let data = localStorage.getItem(key);
    let dataArr = JSON.parse(data);
    let dataObj = [];
    for (let i = 0; i < dataArr.length; i++) {
        let user = new User(dataArr[i].name,dataArr[i].pass,dataArr[i].role);
        dataObj.push(user);
    }
    return dataObj;
}

function saveData(key,value) {
    localStorage.setItem(key,value);
}
function loadData(key) {
    if(localStorage.hasOwnProperty(key)){
        return localStorage.getItem(key);
    }else {
        return '';
    }

}
