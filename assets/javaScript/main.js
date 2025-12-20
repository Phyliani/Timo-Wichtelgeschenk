// DOM-Elemente abrufen
const passwordInput = document.getElementById('passwordInput');
const revealButton = document.getElementById('revealButton');
const messageBox = document.getElementById('messageBox');
const tippButton = document.getElementById('tippButton');
const tippDiv = document.getElementById('tipp');
const tipp = document.createElement('p');
tipp.textContent = "(Beginnt mit 'S', endet mit 'K'. Tipp: Es ist ein sehr humorvolles, kleines Geschenk.)";
tipp.classList.add('text-sm', 'italic', 'text-gray-400');


// Das korrekte Passwort (nur Großbuchstaben)
const CORRECT_PASSWORD = "SCHROTTWICHTELGESCHENK";



/**
* Zeigt eine Meldung in der MessageBox an
* @param {string} message - Der anzuzeigende Text
* @param {boolean} isSuccess - true für Erfolg (grün), false für Fehler (rot/gelb)
*/
function showMessage(message, isSuccess) {
    messageBox.classList.remove('hidden', 'bg-red-900/50', 'bg-green-900/50', 'text-red-300', 'text-green-300');

    if (isSuccess) {
        messageBox.classList.add('bg-green-900/50', 'text-green-300');
    } else {
        messageBox.classList.add('bg-red-900/50', 'text-red-300');
    }

    messageBox.innerHTML = message;
}

/**
* Behandelt den Klick auf den Button
*/
revealButton.addEventListener('click', () => {
const userInput = passwordInput.value.trim().toUpperCase();

passwordInput.remove();
revealButton.remove();

if (userInput === CORRECT_PASSWORD) {
    showMessage(`
        <h3 class="text-2xl font-bold mb-2">ERFOLG! Der Pfad ist vollendet!</h3>
        <p class="text-lg">Herzlichen Glückwunsch, Timo!</p>
        <p class="mt-4">Dein Preis, das ultimative Schrott-Wichtelgeschenk, erwartet dich nun endlich</p>
        <p class="mt-2 text-xl glow-text">DEIN GESCHENK IST: Ein Gitarrenkurs von Prof. Sonja Prunnbauer!!</p>
        <p class="mt-4 italic">Viel Spaß damit! Und hoffentlich beherrschst du die nötige Technik! 🖖</p>
        `, true);
        revealButton.disabled = true;
        passwordInput.disabled = true;
    } else {
        showMessage(`
            <h3 class="text-xl font-bold">FALSCHES PASSWORT</h3>
            <p>Das Wort ist nicht korrekt. Überprüfe die Anzahl der Buchstaben und deine Notizen. Dein Weg war fast vollendet!</p>
        `, false);
        passwordInput.focus();
    }
});

tippButton.addEventListener('click', () => {

    tippButton.remove();
    tippDiv.appendChild(tipp);
    
});

// Event-Listener für Enter-Taste im Eingabefeld
passwordInput.addEventListener('keypress', (e) => {
if (e.key === 'Enter') {
    revealButton.click();
}
});