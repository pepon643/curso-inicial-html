//const promediop = 120000 ;
//const pelosperdidos = prompt ("ingreso los pelos los pelos que pierde por dia", '');
//const tiempopp = promediop/pelosperdidos ;
//if (pelosperdidos<= 0) {
//   document.writeln ('usted ya se a quedado pelado o no se esta quedando pelado');}
//else {document.writeln ('se quedara pelado en' + tiempopp + 'dias');}
//const distancia = prompt("Ingrese la distancia en metros que desea viajar.", '');





//if (distancia > 0 && distancia < 1000) 
//  document.writeln('Le recomendamos ir a pie');
//} else if (distancia >= 1000 && distancia < 10000) {
//  document.writeln('Le recomendamos ir en bicicleta');
//} else if (distancia >= 10000 && distancia < 30000) {
//  document.writeln('Le recomendamos ir en colectivo');
//} else if (distancia >= 30000 && distancia < 100000) {
//  document.writeln('Le recomendamos ir en auto');
//} else {
//  document.writeln('Le recomendamos ir en avión');
//}
//const n1 = parseInt(prompt('Ingrese el primer número:', ''));
//const n2 = parseInt(prompt('Ingrese el segundo número:', ''));
//const n3 = parseInt(prompt('Ingrese el tercer número:', ''));
//
//if (n1 > n2 && n1 > n3) {
//  document.writeln('El número más alto es el número 1');
//} else if (n2 > n3) {
//  document.writeln('El número más alto es el número 2');
//} else {
//  document.writeln('El número más alto es el número 3');
//}
//function todosLosParrafos() {
//    const allParafos = document.getElementsByTagName("p");
//
//    const num = allParafos.length;
//
//    alert(`Hay ${num}  elementos <p> en este documento`);
 //       
//}


//function caja1ParaElems() {
//    var caja1 = document.getElementById("caja1")
//    var caja1parraf = caja1.getElementsByTagName("p");
//
//    var num = caja1parraf.length;
//
//    alert(`Hay ${num}  elementos <p> en caja1`);
//}


//function caja2ParaElems() {
//    var caja2 = document.getElementById("caja2")
//    var caja2parraf = caja2.getElementsByTagName("p");
//
//    var num = caja2parraf.length;
//
//    alert(`Hay ${num} elementos <p> en caja2`);
//}
/*const items = document.getElementsByClassName('item');
    		function cambiarVisibilidad(numItem) {
    			const item = items[numItem];
    			if (item.style.visibility == '') {
    				item.style.visibility = 'hidden';
    			} else {
    				item.style.visibility = '';
    			}
    		}

    		function cambiarDisplay(numItem) {
    			const item = items[numItem];
    			if (item.style.display == '') {
    				item.style.display = 'none';
    			} else {
    				item.style.display = '';
    			}
const boton = document.getElementById('boton');
        boton.addEventListener('click' , function(e) {
            alert(e.currentTarget.innerText);
        });

const link = document.getElementById('link');
        link.addEventListener('click', function(e) {
            // evitar que el link funcione
            e.preventDefault();
            alert('Quisiste ir a: ' + e.currentTarget.href);

   const formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if(e.currentTarget.nombre.value == '') {
                alert('El campo nombre es requerido');
                return;
            }

            if (e.currentTarget.mensaje.value == '') {
                alert('El campo mensaje es requerido');
                return;
            }

            alert(`Gracias ${e.currentTarget.nombre.value} por enviarnos ${e.currentTarget.mensaje.value} `);
         
*/

// Get the dark mode button by its class name
// document.getElementsByClassName returns an HTMLCollection (like an array),
// so we access the first element [0]
// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // --- Dark Mode Functionality ---

    // Get the dark mode button by its class name
    const modoobscuroButton = document.getElementsByClassName('modooscuro')[0]; // Use the correct class name 'modooscuro'

    // Get the body element of the document
    const bodyElement = document.body;

    // Check for a saved theme preference in localStorage when the page loads
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        // If the saved theme is dark, apply the dark mode class immediately
        if (bodyElement) {
            bodyElement.classList.add('dark-mode');
        }
        // Also set the button's 'activo' class if the button exists
         if (modoobscuroButton) {
             modoobscuroButton.classList.add('activo');
             // Update button text if needed (optional)
             // modoobscuroButton.value = 'modo claro';
         }
    }

    // Add a click event listener to the dark mode button
    if (modoobscuroButton && bodyElement) { // Check if both elements were found
        modoobscuroButton.addEventListener('click', function() {
            // Toggle the 'dark-mode' class on the body element.
            // This class is used by the CSS to apply dark mode styles.
            bodyElement.classList.toggle('dark-mode');

            // Toggle the 'activo' class on the button itself
            // This is useful if you want to style the button differently
            // based on whether dark mode is currently active.
            modoobscuroButton.classList.toggle('activo');

             // Optional: Update button text based on the current mode
             // if (bodyElement.classList.contains('dark-mode')) {
             //     modoobscuroButton.value = 'modo claro';
             // } else {
             //     modoobscuroButton.value = 'modo obscuro';
             // }


            // Save the user's theme preference in localStorage
            if (bodyElement.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    } else {
        // Log an error if the dark mode button or body element was not found
        console.error("Dark mode button (.modooscuro) or body element not found! Dark mode cannot be initialized.");
    }


    // --- Character Count Functionality ---

    // Get the textarea element and the div for output by their IDs
    const textarea = document.getElementById('mensaje');
    const outputDiv = document.getElementById('output');

    // Check if both elements exist before adding the event listener
    if (textarea && outputDiv) {
        // Add an event listener for the 'input' event on the textarea
        textarea.addEventListener('input', function(event) {
            // Get the current text from the textarea
            const currentText = event.target.value;

            // Calculate the character count
            const characterCount = currentText.length;

            // Update the text content of the output div
            outputDiv.textContent = 'simbolos usados: ' + characterCount;
        });

        // Also update the character count once when the page loads,
        // in case there's initial text in the textarea
        const initialCount = textarea.value.length;
        outputDiv.textContent = 'simbolos usados: ' + initialCount;

    } else {
         // Log an error if the textarea or output div was not found
        console.error("Textarea (#mensaje) or output div (#output) for character count not found!");
    }

});
const estimatedTotalHair = 100000; // Example: A typical human head has ~100,000 hairs

// Get references to the elements
const hairLossInput = document.getElementById('user-ppdia'); // Input for hair lost per day
const timelossing = document.getElementById ('user-time-losing')
const calculateBaldnessButton = document.getElementById('calculate-baldness'); // The calculation button
const baldnessResultDiv = document.getElementById('resultado'); // The result display area

// Add event listener to the calculate button
if (hairLossInput && calculateBaldnessButton && baldnessResultDiv) { // Check if all elements were found
    calculateBaldnessButton.addEventListener('click', function() {
        // Get the value from the input field (hair lost per day)
        const hairLostPerDayInput = hairLossInput.value;

        // Convert the input value to a floating-point number
        const hairLostPerDay = parseFloat(hairLostPerDayInput);
        const timelossingInput = timelossing.value;
        const timelossingvalue = parseFloat(timelossingInput)
        // Check if the input is a valid number, positive, and not zero
        if (isNaN(hairLostPerDay) || hairLostPerDay <= 0) {
            baldnessResultDiv.textContent = 'Error: Ingrese un número válido y mayor a cero.';
            baldnessResultDiv.style.color = 'red'; // Indicate error
            return; // Stop the function
        } else {
            // Perform the division: Estimated Total Hairs / Hairs Lost Per Day
            const hairleft = (estimatedTotalHair -(hairLostPerDay*timelossingvalue))
            const daysToBaldness = (hairleft/hairLostPerDay)

            // Display the result
            // Round the result to the nearest whole number of days
            baldnessResultDiv.textContent = `${daysToBaldness.toFixed(0)} días`; // Display as rounded number of days
            // Or: baldnessResultDiv.textContent = daysToBaldness.toFixed(2) + ' días'; // Display with 2 decimal places
            baldnessResultDiv.style.color = '#d32f2f'; // Reset to result color (or a dark mode equivalent)
        }
    });
} else {
     console.error("Hair loss calculator elements not found! (user-ppdia, calculate-baldness, or resultado)");
}
