function getroll(num,delay){
    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Rollno. is", num);
            resolve("Successfully Done");
        }, delay);
    });
}
getroll(1,1000).then(()=>{
    getroll(2,2000).then(()=>{
        getroll(3,3000);
    });
});