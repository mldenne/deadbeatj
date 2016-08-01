var api_root = 'https://evening-ridge-31962.herokuapp.com'


$(document).ready(function(){

  function displayTitle(tagName){
    if (tagName){
      var context = {
        tagName: ": " + tagName
      }
    }
    else {
      var context = {}
    }
      var html = title_template(context)
      $('#title').html(html)
    }

  function displayData(arr) {
    $('#notes').empty()
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
    displayTitle()
    console.log(data)
  })


  // Handlebars templates
  var source        = $('#note-display').html();
  var template      = Handlebars.compile(source);
  var form_source   = $("#note-form").html();
  var form_template = Handlebars.compile(form_source);
  var note_source   = $("#note-display").html();
  var note_template = Handlebars.compile(note_source);
  var title_source  = $('#page-title').html();
  var title_template = Handlebars.compile(title_source);

  function postNoteForm() {
    $.post({
        url: api_root + "/api/notes",
        data: { title: $('#title-body').val(), body: $('#note-body').val()},
        success: function(data){
                  console.log(data)
                  $('#notes').prepend(note_template(data.note))
                  $('#myModal').modal('hide')
                },
        error: function(data){
                  console.log(data)
                }
    })
  }

  // Event handler
  $(document.body).on('click', '#tag', function(ev){
    ev.preventDefault()
    console.log(ev.target.getAttribute('data-id'))
    $.getJSON(api_root + "/api/notes/tag/" + ev.target.getAttribute('data-id'), function(data){
      $('#notes').html(displayData(data.notes))
      console.log(data)
      console.log(data.tag.name)
      displayTitle(data.tag.name)

      })
    })

  function populateModal(template, context, title) {
    $('#myModal .modal-title').text(title)
    $('#myModal .modal-body').html(template(context || {}))
  }

  function fetchChirps() {
    $.getJSON(api_root + "/api/notes" + {id: id()}).success(function(data){
      console.log(data)
      // if(data.posts.length === 0){
      //     $('#stuff').html("<h1>No chirps yet. Why not post one?</h1>")
      // } else {
      //   $.each(data.posts, function(i, chirp){
      //     $('#stuff').append(chirp_template(chirp))
      //   })
      // }
    })
  }


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
