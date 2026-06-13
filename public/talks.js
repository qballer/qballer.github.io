// Click-to-play facade for the Talks page. Served from our origin so it
// satisfies the strict CSP (script-src 'self'). Without JS the thumbnail
// stays a normal link out to YouTube.
document.querySelectorAll('a.thumb[data-yt]').forEach(function (el) {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    var id = el.getAttribute('data-yt');
    var iframe = document.createElement('iframe');
    iframe.src =
      'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
    iframe.title = 'YouTube video player';
    iframe.loading = 'lazy';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.className = 'yt-frame';
    el.replaceWith(iframe);
  });
});
