$(document).ready( () => {
  let filterAmenities = {};
    $('div .amenities h4').css('width', '100%');
    $('div .amenities h4').css('height', '100%');
    $('div .amenities h4').css('white-space', 'nowrap');
    $('div .amenities h4').css('overflow', 'hidden');
    $('div .amenities h4').css('text-overflow', 'ellipsis');

  $('.amenities .popover input').click(function() {
    const amenityName = $(this).attr('data-name');
    const amenityId = $(this).attr('data-id');
    
    if ($(this).is(':checked')) {
      filterAmenities[amenityId] = amenityName;
    } else {
      delete filterAmenities[amenityId];
      }
    $('div .amenities h4').text(Object.values(filterAmenities).join(', '));
  });

  $.get('http://localhost:5001/api/v1/status/', function(data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
      $('.available').css('background-color', '#ff545f');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});