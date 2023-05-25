function triangle(number){
    if(number<=0){
        console.error('not valid');
    }
    for( let i=0;i<=number;i++){
        let char=''
        for(let j=1;j<=i;j++){
            char+='#'
        }
        console.log(char);
    }
}
triangle(3);