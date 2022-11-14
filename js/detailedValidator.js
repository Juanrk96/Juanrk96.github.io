$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        NombreUsusario : {
          required: true,
          minlength: 3
        },
        IngresoApellido: {
          required: true,
          minlength: 3
        },
        IngresoCorreo: {
            required: true,
            email: true,
            minlength: 3
          },
        Edad: {
          required: true,
          number: true,          
          min: 15
        },
        Telefono: {
          required: true,
          number: true,
          minlength: 8,
          maxlength: 11
        },
        NickName: {
          required: true,
          minlength: 3
        },
        Contrasena: {
          required: true,
          minlength: 3
        },
        checks: {
            required: true
        }        
      },
        messages: {
            NombreUsusario: {
                required: "&nbsp;Ingrese nombre(s)",
                minlength: "&nbsp;Ingrese un minimo de 3 caracteres"
            },
            IngresoApellido: {
                required: "&nbsp;Ingrese apellido(s)",
                minlength: "&nbsp;Ingrese un minimo de 3 caracteres"
            },
            IngresoCorreo: {
                required: "&nbsp; Ingrese Correo Electronico",
                email: "&nbsp; Formato invalido"
            },
            Edad: {
                required: "&nbsp; Ingrese edad",
                min:"&nbsp; Edad debe ser mayor a 15 años"
            },
            Telefono: {
                required: "&nbsp; Ingrese Telefono",
                minlength: "&nbsp; Ingrese de 8 a 11 caracteres",
                maxlength: "&nbsp; Ingrese de 8 a 11 caracteres",
                number:"&nbsp; Solo se admiten numeros"
            },
            NickName: {
                required: "&nbsp; Ingrese Nombre de Usuario",
                minlength: "&nbsp;Ingrese un minimo de 3 caracteres"
            },
            Contrasena: {
                required: "&nbsp; Ingrese Contraseña",
                minlength: "&nbsp;Ingrese un minimo de 3 caracteres"
            },
            checks: {
                required: "&nbsp; Seleccione una opcion minimo"
            }
        }
    });
    $(".cancel").click(function() {
      $("label.error").hide();
      $(".error").removeClass("error");
    });
  });

