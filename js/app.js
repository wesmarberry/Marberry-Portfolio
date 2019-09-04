console.log("js hooked up");
 // scroll
 $(document).ready(function(){
    $( "a.nav-link" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).position().top -55}, 500);
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

// slide in function for timeline

$('.left-timeline').on('mouseenter', (e) => {
  console.log('entered timeline');
  console.log('.left-element' + e.currentTarget.id);
  const target = '.left-element' + e.currentTarget.id
  $(target).animate({
    'left': '20px'}, 500, 'linear'
  )
  $('.circle' + e.currentTarget.id).css('background-color', '#ABDFF1')


})

$('.left-timeline').on('mouseleave', (e) => {
  console.log('entered timeline');
  console.log('.left-element' + e.currentTarget.id);
  const target = '.left-element' + e.currentTarget.id
  
  $('.circle' + e.currentTarget.id).css('background-color', '#0C4A60')


})



$('.right-timeline').on('mouseenter', (e) => {
  console.log('entered timeline');
  console.log(e.currentTarget.id);
  $('.right-element' + e.currentTarget.id).animate({
    'right': '20px'}, 500, 'linear'
  )
  $('.circle' + e.currentTarget.id).css('background-color', '#ABDFF1')
})

$('.right-timeline').on('mouseleave', (e) => {
  console.log('entered timeline');
  console.log('.left-element' + e.currentTarget.id);
  const target = '.left-element' + e.currentTarget.id
  
  $('.circle' + e.currentTarget.id).css('background-color', '#0C4A60')
})


$('.timeline').on('mouseleave', () => {
  console.log('left timeline');
  $('.right-element1').animate({
    'right': '-380px'}, 200, 'linear'
  )
  $('.right-element2').animate({
    'right': '-380px'}, 200, 'linear'
  )
  $('.left-elementone').animate({
    'left': '-380px'}, 200, 'linear'
  )
  $('.left-elementtwo').animate({
    'left': '-380px'}, 200, 'linear'
  )
})







