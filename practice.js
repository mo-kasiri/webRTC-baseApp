
const getTodos = async (callback) =>{
    const request = new XMLHttpRequest();

    await request.addEventListener('readystatechange', ()=> {
        const data = JSON.parse(request.responseText);
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 404){
            callback("404-The url does not exist!!", undefined);
        }
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, data);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

console.log(1)
getTodos((err, data)=> {
    console.log('callback fired');
    console.log(err, data);
}).then(()=>{
    console.log(3)
}).then(()=>{
    console.log(4)
});

console.log(2)
