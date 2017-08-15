function main()
{
  $('.products').hide();
  $('.products').fadeIn(1000);
  $('.skillset').hide();
  $('.btn').on('click',function()
  {
    // $(this).next().toggle();
    $(this).next().slideToggle(400);
     $(this).toggleClass('active');
  });
}
$(document).ready(main);