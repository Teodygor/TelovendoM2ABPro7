let html = document.getElementById('formulario').innerHTML;
        
            function validar() {
            let nom = document.getElementById('Nombre');
            let cor = document.getElementById('Correo');
            let tel = document.getElementById('Teléfono');
            let dsc = document.getElementById('Descripción');

            if (nom.value =='') {
                alert ('El Campo de Nombre esta vacio!.');
            }
            if (cor.value =='') {
                alert ('El Campo de Correo esta vacio!.');  
            }
            if (tel.value =='') {
                alert ('El Campo de Teléfono esta vacio!.');   
            }
            if (dsc.value =='') {
                alert('El Campo de Descripción esta vacio!.'); 
            } 
         }

         let btn = document.getElementById('btnEnviar');