$('button').click(function (e) { 
    const me = Math.floor(Math.random()*6)+1;
    const computer = Math.floor(Math.random()*6)+1;
    


    if(me===1){
        $('.img1').attr('src', 'images/dice1.png');
    }
    if(me===2){
        $('.img1').attr('src', 'images/dice2.png');
    }
    if(me===3){
        $('.img1').attr('src', 'images/dice3.png');
    }
    if(me===4){
        $('.img1').attr('src', 'images/dice4.png');
    }
    if(me===5){
        $('.img1').attr('src', 'images/dice5.png');
    }
    if(me===6){
        $('.img1').attr('src', 'images/dice6.png');
    }
    // computer
    if(computer===1){
        $('.img2').attr('src', 'images/dice1.png');
    }
    if(computer===2){
        $('.img2').attr('src', 'images/dice2.png');
    }
    if(computer===3){
        $('.img2').attr('src', 'images/dice3.png');
    }
    if(computer===4){
        $('.img2').attr('src', 'images/dice4.png');
    }
    if(computer===5){
        $('.img2').attr('src', 'images/dice5.png');
    }
    if(computer===6){
        $('.img2').attr('src', 'images/dice6.png');
    }

    if(me<computer){
        $('h1').text('Computer Win !');
    }else if(me>computer) {
        $('h1').text('! You Win');
    }else{
        $('h1').text('! Draw !');
    }

});