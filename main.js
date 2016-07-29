var api_root = 'https://evening-ridge-31962.herokuapp.com'


$(document).ready(function(){
  var source   = $('#note-display').html();
  var template = Handlebars.compile(source);

  function displayData(arr) {
      $.each(arr, function(i, note){
        var context = {
          title: note.title,
          body: note.body,
          tag: note.tags
        };
        var html = template(context)
        $('#notes').append(html)
    })
  }

  $.getJSON(api_root + "/api/notes", function(data){
    displayData(data.notes)
    console.log(data)
  })



  $(document.body).on('click', '#tag', function(ev){
    ev.preventDefault()
    console.log(ev.target.getAttribute('data-id'))
    $.getJSON(api_root + "/api/notes/tag/" + ev.target.getAttribute('data-id'), function(data){
      console.log("hi")
      displayData(data.notes) //how do I clear out this element & shove the new data in...
      console.log(data)
    })
  })



})

// $(document).ready(function(){

  // Handlebars template
  // var form_source   = $("#post_form").html();
  // var form_template = Handlebars.compile(form_source);
  // var chirp_source = $("#chirp-display").html();
  // var chirp_template = Handlebars.compile(chirp_source);

  // save data to sessionStorage (use the formula)
  // var api_token(){
  //   sessionStorage.getItem('api_token')
  // }

  // function fetchNotes() {
  //   $.getJSON(api_root + "/api/notes").success(function(data){
  //     console.log(data)
  //     if(data.length === 0){
  //       $('#notes').html("<h1>Would you like to add a note?</h1>")
  //     } else {
  //       $.each(data, function(i, note){
  //         $('#notes').append(note.body)
  //       })
  //     }
  //   })
  // }

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

  // function populateModal(template, context, title){
  //   $('#myModal .modal-title').text(title || "Our title")
  //   $('#myModal .modal-body').html(template(context || {}))
  // }

  // fetchChirps()

  // Event handlers
  // $('#new-post').on('click', function(ev){
  //   populateModal(form_template)
  //   $('#myModal').modal('show')
  // })
