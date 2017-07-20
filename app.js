$(() => {
  console.log('working 2');

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
      const number = $(e.currentTarget).text();
      console.log(number);
      changePlayer();
    }else {
      alert('It is not your turn');
    }

  })

  // on click function

  $('.container-bottom').on ('click', (e) => {
    if(playerAlternate === true){
      console.log(e.currentTarget);
      const number = $(e.currentTarget).text();
      console.log(number);
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

  // const game = (target) => {
  //   const $value = $(target)
  // }






















});
