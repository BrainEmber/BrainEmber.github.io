$(() => {
  console.log('working 2');

  let playerAlternate = true;

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

  const changePlayer = () => {
    if(playerAlternate === true){
      $('#player').text("Player Two's Turn");
      playerAlternate = false;
    }else {
      $('#player').text("Player One's Turn");
      playerAlternate = true
    }

  }



















});
