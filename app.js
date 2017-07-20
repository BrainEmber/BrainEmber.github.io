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
      console.log(e.currentTarget);
      const number = parseInt($(e.currentTarget).text());
      console.log(number);
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
      }
    }

  }

  // const game = (target) => {
  //   const $value = $(target)
  // }






















});
