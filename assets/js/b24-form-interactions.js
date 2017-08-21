'use strict';
var onFormLoadInteractions = {
  onLoadUnloadChange: function() {
    var formElement = document.getElementById("form_bit24");
    var bdy = document.body;
    window.scrollTo(0,0);
    if(formElement.style.display === "none"){
      // Open the form, disable main body scroll
      bdy.style.overflow = "hidden";
      formElement.style.display = "block"
    }else{
      // Close form, re-enable main body scroll
      formElement.style.display = "none";
      bdy.style.overflow = "scroll";
    }
    var b24Iframe = document.getElementById('bx_form_iframe_8');
    b24Iframe.scrolling = 'yes';
    b24Iframe.style.height = '400vh'
    // console.log(b24Iframe);
  }
};
$( document ).ready(function() {
  if(location.hash === "#daftar"){
    onFormLoadInteractions.onLoadUnloadChange()
  }
});
