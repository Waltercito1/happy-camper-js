let $cell = $('.card');

document.querySelector("#tab-1 > div.card__inner.\\[.js-expander.\\] > span > button")

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {
  
  let $thisCell = $(this).closest('.card');

  let tabId = $thisCell[0].id
  let $sortButton = $(`#${tabId} .sortingBttn`)
  
  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');

    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    $sortButton.removeClass('hide')

    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }
    
  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $sortButton.addClass('hide')
    
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  let $thisCell = $(this).closest('.card');

  let tabId = $thisCell[0].id
  let $sortButton = $(`#${tabId} .sortingBttn`)

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

  $sortButton.addClass('hide')
});