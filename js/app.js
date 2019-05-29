console.log("js hooked up");
 // scroll
 $(document).ready(function(){
    $( "a.nav-link" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).position().top }, 500);
    });
});

const beginningPhotoPath = 'images/Photos/'
const endPhotoPath = '.png'
const faded = 'faded'





$('.project').on('mouseenter', (e) => {
	console.log(e);
	console.log('mouse entered');
	$('#' + e.currentTarget.id).attr('src', beginningPhotoPath + e.currentTarget.id + endPhotoPath)
})

$('.project').on('mouseleave', (e) => {
	console.log('mouse entered');
	$('#' + e.currentTarget.id).attr('src', beginningPhotoPath + faded + e.currentTarget.id + endPhotoPath)
})



$('.click-description div').hide()
$('.description-clickable2').hide()

$('.click-description').on('click', (e) => {
	console.log(e.currentTarget.id);

	$('#' + e.currentTarget.id + ' .description-clickable1').toggle("slow", () => {
  	$('#' + e.currentTarget.id + ' .description-clickable1').text('Show Description')


  })
	// $('#' + e.currentTarget.id + ' .description-clickable2').toggle("slow", () => {
 //  	$('#' + e.currentTarget.id + ' .description-clickable2').show()


 //  })
  $('#' + e.currentTarget.id + ' div').toggle("slow", () => {
  	$('click-description div').show()


  })
});



