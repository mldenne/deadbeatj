var api_root = 'https://evening-ridge-31962.herokuapp.com'


$(document).ready(function(){

  function displayData(arr) {
      $.each(arr, function(i, note){
        var context = {
          title: note.title,
          body: note.body,
          tag: note.tags
        };
        var html = template(context)
        $('#notes').prepend(html)
    })
  }

  $.getJSON(api_root + "/api/notes", function(data){
    displayData(data.notes)
    console.log(data)
  })

  // Event handler
  $(document.body).on('click', '#tag', function(ev){
    ev.preventDefault()
    console.log(ev.target.getAttribute('data-id'))
    $.getJSON(api_root + "/api/notes/tag/" + ev.target.getAttribute('data-id'), function(data){
      $('#notes').replaceWith(displayData(data.notes))
        // displayData(data.notes)
        console.log(data)
      })
    })

  // Handlebars templates
  var source        = $('#note-display').html();
  var template      = Handlebars.compile(source);
  var form_source   = $("#note-form").html();
  var form_template = Handlebars.compile(form_source);
  var note_source   = $("#note-display").html();
  var note_template = Handlebars.compile(note_source);

  // function fetchNotes() {
  //     $.getJSON(api_root + "/api/notes", function(data){
  //       console.log(data)
  //       if(data.length === 0){
  //           $('#notes').html("<h1>No chirps yet. Why not post one?</h1>")
  //       } else {
  //         $.each(data, function(i, note){
  //           $('#notes').append(note_template(note))
  //         })
  //       }
  //     })
  //   }

  function postNoteForm() {
    $.post({
        url: api_root + "/api/notes",
        data: { body: $('#note-body').val()},
        success: function(data){
                  console.log(data)
                  $('#notes').prepend(html)
                  $('#myModal').modal('hide')
                },
        error: function(data){
                  console.log(data)
                }
    })
  }

  function populateModal(template, context, title) {
    $('#myModal .modal-title').text(title)
    $('#myModal .modal-body').html(template(context || {}))
  }

  displayData()

  // Event Handlers
  $('#new-note').on('click', function(ev){
    populateModal(form_template)
    $('#myModal').modal('show')
  })

  $(document.body).on('submit', '#note-form', function(ev){
    ev.preventDefault()
    postNoteForm()
  })

})
