$(() => {
  // console.log('working 2');

// Turn switching function

  let playerAlternate = true;

  $('.mancala').html(0);


  ////making the divs


  for(let i=1; i <= 6; i++){
    const $div = $('<div/>').addClass('container-top');
    $($div).attr('id', 'top' + [i]);
    $($div).html(4);
    $('#row-top').append($div);
  };


  for(let i=1; i <= 6; i++) {
    const $div2 = $('<div/>').addClass('container-bottom');
    $($div2).attr('id', 'bottom' + [i]);
    $($div2).html(4);
    $('#row-bottom').append($div2);
  }

//On click function

  $('.container-top').on('click', (e) => {
    if(playerAlternate === false){
      const target = $(e.currentTarget);
      const number = parseInt($(e.currentTarget).text());
      console.log(typeof number);
      moveStonesTop(number, target);
      changePlayer();
    }else {
      alert('It is not your turn');
    }

  })

  // on click function

  $('.container-bottom').on ('click', (e) => {
    if(playerAlternate === true){
      const target = $(e.currentTarget);
      const number = parseInt($(e.currentTarget).text());
      console.log(typeof number);
      moveStonesBot(number, target);
      changePlayer();
    }else {
      alert('It is not your turn');
    }

  })

  // Turn changing function

  const changePlayer = () => {
    if(playerAlternate === true){
      $('#player').text("Player Two's Turn");
      playerAlternate = false;
    }else {
      $('#player').text("Player One's Turn");
      playerAlternate = true
    }

  }

//bottom change stones

  const moveStonesBot = (number, target) => {
    target.html(0);
    const id = $(target).attr('id');
    console.log(id);
    if(id === "bottom1"){
      for(let i=0; i < number; i++){




        let oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala2').text());
        $('#mancala2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }




      }

      // ========== button 2 iteration;


    }else if(id === 'bottom2'){
      for(let i=0; i < number; i++){




        let oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala2').text());
        $('#mancala2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }




      }
    }else if(id === 'bottom3'){
      for(let i=0; i < number; i++){



        let oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala2').text());
        $('#mancala2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }




      }
    }else if(id === 'bottom4'){
      for(let i=0; i < number; i++){

        // oldNum = parseInt($('#bottom1').text());
        // $('#bottom1').text(oldNum + 1);
        //
        // i++;
        // if(i === number){
        //   return i;
        // }


        // let oldNum = parseInt($('#bottom2').text());
        // $('#bottom2').text(oldNum + 1);
        //
        // i++;
        // if(i === number){
        //   return i;
        // }


        // let oldNum = parseInt($('#bottom3').text());
        // $('#bottom3').text(oldNum + 1);
        //
        // i++;
        // if(i === number){
        //   return i;
        // }
        //
        // oldNum = parseInt($('#bottom4').text());
        // $('#bottom4').text(oldNum + 1);
        //
        // i++;
        // if(i === number){
        //   return i;
        // }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala2').text());
        $('#mancala2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);




      }
    }else if(id === 'bottom5'){
      for(let i=0; i < number; i++){



        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala2').text());
        $('#mancala2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }




      }
    }else if(id === 'bottom6'){
      for(let i=0; i < number; i++){

        oldNum = parseInt($('#mancala2').text());
        $('#mancala2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }




      }
    }

  }

  const moveStonesTop = (number, target) => {
    target.html(0);
    const id = $(target).attr('id');
    if(id === 'top6'){
      for(let i=0; i < number; i++){


        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala1').text());
        $('#mancala1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

      }

//======================================================

    }else if(id === 'top5'){
      for(let i=0; i < number; i++){




        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala1').text());
        $('#mancala1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



//====================================================
//====================================================
      }
    }else if(id === 'top4'){
      for(let i=0; i < number; i++){






        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala1').text());
        $('#mancala1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



//====================================================

      }
    }else if(id === 'top3'){
      for(let i=0; i < number; i++){







        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala1').text());
        $('#mancala1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



//====================================================
// =======
      }
    }else if(id === 'top2'){
      for(let i=0; i < number; i++){









        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#mancala1').text());
        $('#mancala1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



//====================================================

      }
    }else if(id === 'top1'){
      for(let i=0; i < number; i++){






        oldNum = parseInt($('#mancala1').text());
        $('#mancala1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }




        oldNum = parseInt($('#bottom1').text());
        $('#bottom1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom2').text());
        $('#bottom2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }


        oldNum = parseInt($('#bottom3').text());
        $('#bottom3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom4').text());
        $('#bottom4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom5').text());
        $('#bottom5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#bottom6').text());
        $('#bottom6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



        oldNum = parseInt($('#top6').text());
        $('#top6').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top5').text());
        $('#top5').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top4').text());
        $('#top4').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top3').text());
        $('#top3').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top2').text());
        $('#top2').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }

        oldNum = parseInt($('#top1').text());
        $('#top1').text(oldNum + 1);

        i++;
        if(i === number){
          return i;
        }



//====================================================

      }
    }


  }





  // const game = (target) => {
  //   const $value = $(target)
  // }






















});
