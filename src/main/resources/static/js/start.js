$(function() { //�X�N���[�����~ 
  scrollpos = $(window).scrollTop();//���ݕ\���ʒu�擾 
  $('body').addClass('scroll-fixed').css({'top': -scrollpos});
  setTimeout(function(){ 
    $('.start').fadeOut(600);
    setTimeout(function(){ 
      $('.start').addClass('srtclass_none');
      $('body').removeClass('scroll-fixed').css({'top': 0});
      window.scrollTo( 0, scrollpos ) ;
    },400);
  },1600);
  //2.5�b��Ƀ��S�܂ߐ^�����w�i���t�F�[�h�A�E�g 
});