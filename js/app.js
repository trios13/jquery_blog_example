//$('#flashMessage').hide();
//$('#flashMessage').slideDown(1000);
//$('#flashMessage').delay(3000);
//$('#flashMessage').slideUp();

//$('#flashMessage').hide().slideDown().delay(3000).slideUp();

//$('#flashMessage')
//  .hide()
//  .slideDown()
//  .delay(3000)
//  .slideUp();
//
//const title = "My First Blog Post" ;
//const content = "This is my <strong>first</strong> post!";
//
//$('#blogTitlePreview').text(title);
//$('#blogContentPreview').html(content)

$('#previewButton').click(function() {
  const title = $('#blogTitleInput').val();
  console.log(title);
});

$('#flashMessage').hide();
$('#previewButton').click(function() {
  const title = $('#blogTitleInput').val();
  const content =   $('#blogContentInput').val();
  $('#blogTitlePreview').text(title);              $('#blogContentPreview').html(content);
  $('#flashMessage')
  .slideDown()
  .delay(3000)
  .slideUp();
});




