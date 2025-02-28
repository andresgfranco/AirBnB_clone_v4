$(document).ready(() => {
  let filterAmenities = {};
  $('div .amenities h4').css('width', '100%');
  $('div .amenities h4').css('height', '100%');
  $('div .amenities h4').css('white-space', 'nowrap');
  $('div .amenities h4').css('overflow', 'hidden');
  $('div .amenities h4').css('text-overflow', 'ellipsis');

  $('.amenities .popover input').click(function () {
    const amenityName = $(this).attr('data-name');
    const amenityId = $(this).attr('data-id');

    if ($(this).is(':checked')) {
      filterAmenities[amenityId] = amenityName;
    } else {
      delete filterAmenities[amenityId];
    }
    $('div .amenities h4').text(Object.values(filterAmenities).join(', '));
  });

  $.get('http://localhost:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
      $('.available').css('background-color', '#ff545f');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (response) {
      for (const place of response) {
        const article = ['<article>',
          '<div class="title_box">',
          `<h2>${place.name}</h2>`,
          `<div class="price_by_night">$${place.price_by_night}</div>`,
          '</div>',
          '<div class="information">',
          `<div class="max_guest">${place.max_guest} Guest(s)</div>`,
          `<div class="number_rooms">${place.number_rooms} Bedroom(s)</div>`,
          `<div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>`,
          '</div>',
          '<div class="description">',
          `${place.description}`,
          '</div>',
          '</article>'];
        $('SECTION.places').append(article.join(''));
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
});