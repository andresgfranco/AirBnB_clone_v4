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
});
