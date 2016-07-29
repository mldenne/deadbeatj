
$(document).ready(function(){

  // Handlebars template
  // var form_source   = $("#post_form").html();
  // var form_template = Handlebars.compile(form_source);
  // var chirp_source = $("#chirp-display").html();
  // var chirp_template = Handlebars.compile(chirp_source);

  //Config vars
  var api_root = 'https://evening-ridge-31962.herokuapp.com'

  // save data to sessionStorage (use the formula)
  // var api_token(){
  //   sessionStorage.getItem('api_token')
  // }

  function fetchChirps() {
    $.getJSON(api_root + "/api/notes").success(function(data){
      console.log(data)
      if(data.length === 0){
        $('#notes').html("<h1>Would you like to add a note?</h1>")
      } else {
        $.each(data, function(i, note){
          $('#notes').append(note.body)
        })
      }
    })
  }

  // function postChirpForm({
  //   $.post({
  //     url: api_root + "posts",
  //     data: {auth_token: auth_token, body: $('#chirp-body').val()}
  //     success: function(data){
  //       console.log(data)
  //       $('#stuff').prepend(chirp_templat(data))
  //       $('#myModal').modal('hide')
  //     },
  //     error: function(data){
  //       console.log(data)
  //     }
  //   })
  // }

  function populateModal(template, context, title){
    $('#myModal .modal-title').text(title || "Our title")
    $('#myModal .modal-body').html(template(context || {}))
  }

  fetchChirps()

  // Event handlers
  $('#new-post').on('click', function(ev){
    populateModal(form_template)
    $('#myModal').modal('show')
  })

  $(document.body).on('submit', '#chirp-form', function(ev){
    ev.preventDefault()
    postChirpform()
  })
})
