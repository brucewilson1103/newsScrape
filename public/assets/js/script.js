$(document).ready(function() {
  function getNeos() {
    $.ajax({
      method: 'GET',
      url: '/neo'
    }).then(function(dbNeos) {
      dbNeos.forEach(neo => {
        $('<li>')
          .addClass('list-group-item neo')
          .append(neo.title)
          .attr('data-id', neo._id)
          .appendTo($('#neos'));
      });
    });
  }

  $('#neos').on('click', '.neo', function() {

    const neoId = $(this).attr('data-id');
    $('#note-title').val('');
    $('#note-body').val('');
    
    $.ajax({
      url: `/neo/${neoId}`,
      method: 'GET'
    }).then(function(neoData) {
      console.log(neoData);
      $('#submit-note').attr('data-id', neoData._id);
    // .attr("data-note-id", neoData.note._id);
      $('#neo-link')
        .attr('href', neoData.link)
        .text(neoData.title);
      $('#note-body').val(neoData.note.body);
      $('#note-title').val(neoData.note.title);
    });
  });

  $('#submit-note').on('click', function(e) {
    e.preventDefault();

    const neoId = $(this).attr('data-id');
    if (!neoId) {
      return false;
    }

    const noteData = {
      title: $('#note-title')
        .val()
        .trim(),
      body: $('#note-body')
        .val()
        .trim()
    };

    $.ajax({
      url: `/neo/${neoId}`,
      method: 'POST',
      data: noteData
    }).then(function(data) {
      console.log(data);
      $('#note-title').val('');
      $('#note-body').val('');
    });
  });

  getNeos();
});
