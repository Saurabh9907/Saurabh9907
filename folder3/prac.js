function rollno(num ,delay, nextroll){
    setTimeout(() => {
        console.log("rollno is ", num);
        if(nextroll) nextroll();
    }, delay); 
}
rollno(12,1000,()=>{
    rollno(13,2000,()=>{
        rollno(14,3000,()=>{
            rollno(15,4000);
        });
    });
});