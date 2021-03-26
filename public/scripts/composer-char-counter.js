$(document).ready(function() {
  
  $("textarea").on('input', wordCount);
});

const wordCount = function() {

  let remainingLettersObj = $(this).siblings().find("output");
  let wordsInTextBox = $(this).val().length;
  remainingLettersObj.val(140 - wordsInTextBox);

  if (remainingLettersObj.val() < 0) {
    remainingLettersObj.addClass('negative');
  }

  if (remainingLettersObj.val() >= 0) {
    remainingLettersObj.removeClass('negative');
  }
};