// Tracking for Tuts+ GitHub demo account
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-11792865-44']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Outbound Link Tracking with Google Analytics
// Wallace Sidhrée - http://dreamyguy.com/
// Requires jQuery 1.7 or higher (use .live if using a lower version)
$(function() {
    $("a").on('click',function(e){
        var url = $(this).attr("href");
        if (e.currentTarget.host != window.location.host) {
            _gat._getTrackerByName()._trackEvent("Outbound Links", e.currentTarget.host.replace(':80',''), url, 0);
            if (e.metaKey || e.ctrlKey || this.target == "_blank" || e.which == 2) {
                var newtab = true;
            }
            if (!newtab) {
                e.preventDefault();
                setTimeout('document.location = "' + url + '"', 100);
            }
        }
    });
});