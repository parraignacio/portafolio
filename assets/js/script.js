
$(document).ready(function() {
  $('#nav-link__contacto').click(function() {
    $('#icontact').toggle();
  });

  $('#nav-link__reserva').click(function() {
    $('#ireserve').toggle();
  });
});
  
  
  

function enviarConsulta() {
  const nombre = $("#nombre").val();
  const correo = $("#correo").val();
  const motivo = $("#motivo").val();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  Toast.fire({
    icon: 'success',
    title: `Gracias ${nombre}, hemos recibido su ${motivo} y enviaremos una pronta respuesta al correo ${correo}.`
  });
}

$("icontact__container__form button").submit(function(e) {
  e.preventDefault();
  enviarReserva();
});


function enviarReserva() {
  const nombre = $("#nombre").val();
  const correo = $("#correo").val();
  const fecha = $("#fecha").val();
  const hora = $("#hora").val();
  const asistentes = $("#asistentes").val();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  Toast.fire({
    icon: 'success',
    title: `Gracias ${nombre}, hemos recibido su solicitud de reserva con ${asistentes} asistentes, para el ${fecha} a las ${hora}. La confirmación será enviada al correo ${correo}.\n\¡Gracias por preferirnos!`
  });
}

$("#ireserve__container__form button").submit(function(e) {
  e.preventDefault();
  enviarReserva();
});



$(document).ready(function() {

  $('.card').click(function() {
    var title = $(this).find('.card-title').text()
    var description = $(this).find('.card-text').text();
    var image = $(this).find('img')[0];
    var imageWidth = parseFloat(window.getComputedStyle(image).getPropertyValue('width'));
    var imageHeight = parseFloat(window.getComputedStyle(image).getPropertyValue('height'));
    var imageSrc = $(this).find('img').attr('src');

    $('#product-image').attr('src', imageSrc);
    $('#product-image').css('width', imageWidth * 1.5 + 'px');
    $('#product-image').css('height', imageHeight * 1.5 + 'px');
    $('#product-title').text(title);
    $('#product-description').text(description);

    $('#myModal').show();
  });

  $('#myModal .btn-close, #myModal .btn-secondary').click(function() {
    $('#myModal').hide();
  });
});

$(document).ready(function() {
  $('a[href="#myModal2"]').on('click', function() {
    $('#myModal2').modal('show');
  });
}); 