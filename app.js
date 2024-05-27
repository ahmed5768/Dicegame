function random(){
    var img1 = document.getElementById("img-1")
    var ran = Math.floor(Math.random()*6) 
    var final =  ran+1
    console.log(final);
    switch(final){
        case 1:
            img1.src = "./src/images/dice-1.png"
            break
            
        case 2:
            img1.src = "./src/images/dice-2.png"
            break
        
        case 3:
            img1.src = "./src/images/dice-3.webp"
            break
            
        case 4:
            img1.src = "./src/images/dice-4.webp"
            break
            
        case 5:
            img1.src = "./src/images/dice-5.webp"
            break
            
        case 6:
            img1.src = "./src/images/dice-6.webp"
            break    
     }        
}
