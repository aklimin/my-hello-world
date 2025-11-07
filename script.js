function changeGreeting() {
    const greetings = [
        "Hello, World!",
        "Hola, Mundo!",
        "Bonjour, Monde!",
        "Hallo, Welt!",
        "Ciao, Mondo!"
    ];
    
    const greetingElement = document.getElementById('greeting');
    const currentGreeting = greetingElement.textContent;
    const currentIndex = greetings.indexOf(currentGreeting);
    const nextIndex = (currentIndex + 1) % greetings.length;
    
    greetingElement.textContent = greetings[nextIndex];
}
