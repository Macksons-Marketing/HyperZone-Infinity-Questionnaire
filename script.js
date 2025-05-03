//popup function
function closeForm() {
    $('.form-popup-bg').removeClass('is-visible');
  }
  
  $(document).ready(function($) {
    
    /* Contact Form Interactions */
    $('#btnOpenForm').on('click', function(event) {
      event.preventDefault();
  
      $('.form-popup-bg').addClass('is-visible');
    });
    
      //close popup when clicking x or off popup
    $('.form-popup-bg').on('click', function(event) {
      if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    });
    
    
    
    });
  

function replaceVeiw() {

    let question1 = document.getElementById('question1').value;
    let question2 = document.getElementById('question2').value;
    let question3 = document.getElementById('question3').value;
    let question4 = document.getElementById('question4').value;
    let question5 = document.getElementById('question5').value;

    let answers = '1.'+ question1.toString() +' ' + '2.'+ question2.toString() + ' ' + '3.' + question3.toString() + ' ' + '4.' + question4.toString() + ' ' + '5.' + question5.toString(); 
    
    document.getElementById("answers").innerHTML = `<input type="hidden" name="phone" value="27655114487"> <textarea name='text'>${answers}</textarea>`;
  }
