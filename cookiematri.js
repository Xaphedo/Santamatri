// Initialize the data layer for Google Tag Manager (this should mandatorily be done before the Cookie Solution is loaded)
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
// Default consent mode is "denied" for both ads and analytics
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
    });

// Load the correct global site tag environment
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-N3VX8TEX37', {'anonymize_ip': true});
// Default consent mode is "denied" for both ads and analytics - repeated again to make sure
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
    });

//Add onlick property to the cookie consent banner buttons
/*window.onload = function(){ 
	var rejectelement = document.getElementById('cookiematri-reject');
	rejectelement.addEventListener("click", function() {
     var bannerselect = document.getElementById('cookiematri-cs-banner'); bannerselect.classList.add('cookiebanner-hide');
     gtag('consent', 'update', { 'ad_storage': 'denied', 'analytics_storage': 'denied' });
	});
	var acceptelement = document.getElementById('cookiematri-accept');
	acceptelement.addEventListener("click", function() {
     var bannerselect = document.getElementById('cookiematri-cs-banner'); bannerselect.classList.add('cookiebanner-hide');
     gtag('consent', 'update', { 'analytics_storage': 'granted' });
	});
};*/

//Add onlick property to all cookie preferences links in the footer
/*window.onload = function(){ 
	var prefelements = document.getElementsByClassName('cookie-preferences-click');
  	for (var i = 0 ; i < prefelements.length; i++){
  	prefelements[i].addEventListener("click", function() {
        var bannerselect = document.getElementById('cookiematri-cs-banner'); bannerselect.classList.toggle('cookiebanner-hide');
	});}
};
*/
