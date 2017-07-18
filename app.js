console.log('working');


$(() => {
  console.log('working 2');

  for(let i=0; i <= 5; i++){
    const $div = $('<div/>').addClass('container-top');
    $('#row-top').append($div);
  };


  for(let i=0; i <= 5; i++) {
    const $div2 = $('<div/>').addClass('container-bottom');
    $('#row-bottom').append($div2);
  }











});
