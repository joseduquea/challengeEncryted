        let textarea  = document.querySelector("textarea")
        textarea.focus();

        // cambio de las vocales al texto encriptado 
        function encriptar(text) {
            text = text.replace(/a/g, "ai");
            text = text.replace(/e/g, "enter");
            text = text.replace(/i/g, "iems");
            text = text.replace(/o/g, "ober");
            text = text.replace(/u/g, "ufat");
            return text;
        }

        // cambio del texto encriptado a las vocales
        function desencriptar(text) {
            text = text.replace(/ai/g, "a");
            text = text.replace(/enter/g, "e");
            text = text.replace(/imes/g, "i");
            text = text.replace(/ober/g, "o");
            text = text.replace(/ufat/g, "u");
            return text;
        } 

        //el resultado del texto encriptado lo almacena en 'result' 
        function encriptarText() {
            let text = document.getElementById("text").value;
            let textoEncriptado = encriptar(text);
            document.getElementById("result").innerHTML = textoEncriptado;            
        } 

        //el resultado del texto desencriptado lo almacena en 'result' 
        function desencriptarText() {
            let text = document.getElementById("text").value;
            let textoDesencriptado = desencriptar(text);
            document.getElementById("result").innerHTML = textoDesencriptado;            
        }
        //esta funcion 'copy' me copia el texto del id: result
        function copyText() {
            let text = document.getElementById("result").innerText;
            navigator.clipboard.writeText(text)
              .then(() => {
                console.log('Texto copiado al portapapeles');
              })
              .catch((error) => {
                console.error('Error al copiar el texto: ', error);
              });
          }
          
        // funcion para limpiar el campo de texto y el texto del result 
        function clearText() {
            document.getElementById("text").value = "";
            document.getElementById("result").innerHTML = "";
            return;
        }
