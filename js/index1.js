var flky = new Flickity( '.gallery', {
  accessibility: true,
  autoPlay: 3000,
  cellAlign: 'center',
  cellSelector: undefined,
  contain: false,
  draggable: true,
  freeScroll: false,
  friction: 0.2,
  initialIndex: 0,
  percentPosition: true,
  prevNextButtons: true,
  pageDots: true,
  resize: true,
  rightToLeft: false,
  setGallerySize: true,
  watchCSS: false,
  wrapAround: true
});

$(document).ready(function() {
  var loadButton = document.getElementById('load-more')
  var feed = new Instafeed({
    after: function() {
      // disable button if no more results to load
      if (!this.hasNext()) {
        loadButton.setAttribute('disabled', 'disabled');
      }
    },
    get: 'user',
    userId: 189106638,
    limit: 8,
    sortBy: 'most-recent',
    accessToken: '189106638.467ede5.7a4ef30cf75d4975a765115d6e8e07e1',
    resolution: 'standard_resolution',
    template: '<div class="col-sm-6 col-md-4 col-lg-3"><a href="{{link}}" class="thumbnail" target="_blank"><div class="caption"><h3 class="caption__likes">&hearts; {{likes}}</h3></div><img src="{{image}}" class="img-responsive"></a></div>'
  });

  loadButton.addEventListener('click', function() {
    feed.next();
  });

  feed.run();
});