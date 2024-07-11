
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');

    const responses = {
        "réserve": "Vous pouvez faire une réservation ici : <a href='https://reservation.forest-hill.fr/' target='_blank'>Je réserve</a>",
        "espace pro": "Accédez à l'espace pro ici : <a href='http://www.forest-hill.pro/espacepro.html' target='_blank'>Espace pro</a>",
        "séance découverte": "Séance découverte gratuite : <a href='https://www.forest-hill.fr/images/SliderPicture/7/5//images/sliderAll/32fd4495-7e95-4b9b-a8d1-27077f0399aa.jpg' target='_blank'>Séance découverte gratuite</a>",
        "clubs": "Découvrez nos clubs à Paris ici : <a href='https://www.forest-hill.fr/vos-clubs-a-paris' target='_blank'>Clubs</a>",
        "activités": "Voici les activités disponibles : <a href='https://www.forest-hill.fr/activites/cardio' target='_blank'>Cardio</a>, <a href='https://www.forest-hill.fr/activites/renforcement-musculaire' target='_blank'>Renforcement musculaire</a>, <a href='https://www.forest-hill.fr/activites/team-training' target='_blank'>Team Training</a>, <a href='https://www.forest-hill.fr/activites/danse' target='_blank'>Danse</a>, <a href='https://www.forest-hill.fr/activites/sports-de-raquette' target='_blank'>Sports de raquette</a>, <a href='https://www.forest-hill.fr/activites/aquagym' target='_blank'>Aquagym</a>, <a href='https://www.forest-hill.fr/activites/detente-et-bien-etre' target='_blank'>Détente et bien-être</a>, <a href='https://www.forest-hill.fr/activites/boxe-grappling' target='_blank'>Boxe & Grappling</a>",
        "planning": "Voici les plannings des clubs : <a href='https://www.forest-hill.fr/club/forest-hill-aquaboulevard#planning' target='_blank'>Aquaboulevard</a>, <a href='https://www.forest-hill.fr/club/forest-hill-la-defense#planning' target='_blank'>La Défense</a>, <a href='https://www.forest-hill.fr/club/forest-hill-timing-paris-sud#planning' target='_blank'>Paris Sud</a>, <a href='https://www.forest-hill.fr/club/forest-hill-la-marche-marnes-la-coquette#planning' target='_blank'>Marnes la Coquette</a>, <a href='https://www.forest-hill.fr/club/forest-hill-versailles#planning' target='_blank'>Versailles</a>, <a href='https://www.forest-hill.fr/club/meudon-bord-de-seine#planning' target='_blank'>Meudon Bord de Seine</a>",
        "formules": "Découvrez nos formules ici : <a href='https://www.forest-hill.fr/Formules' target='_blank'>Formules</a>",
        "contact": "Contactez-nous ici : <a href='https://www.forest-hill.fr/contact' target='_blank'>Contact</a>",
        "abonne": "Abonnez-vous ici : <a href='https://www.sport-booking.com/1__clubs-forest-hill?groupcode=FORESTHILL' target='_blank'>Je m'abonne</a>",
    };

    const keywords = {
        "réserve": ["réserve", "réservation", "réserver", "reserve", "reservation", "reserver"],
        "espace pro": ["espace pro", "professionnel", "pro"],
        "séance découverte": ["séance découverte", "séance", "découverte"],
        "clubs": ["clubs", "club"],
        "activités": ["activités", "activité", "sport", "sports", "l'activité"],
        "planning": ["planning", "horaire", "plannings", "horaires", "l'horaire"],
        "formules": ["formules", "formule", "abonnement", "tarifs", "prix"],
        "contact": ["contact", "contacter", "contactez"],
        "abonne": ["abonne", "abonnement", "abonner", "s'abonner","m'abonner", "m'abonné"]
    };

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const userMessage = userInput.value.toLowerCase();
            displayMessage(`<div class="content-message">${userMessage}</div>`, 'user');
            userInput.value = '';

            let response = "Je ne comprends pas votre demande. Voici quelques options :<br>" +
                "- Réservation<br>" +
                "- Espace pro<br>" +
                "- Séance découverte<br>" +
                "- Clubs<br>" +
                "- Activités<br>" +
                "- Planning<br>" +
                "- Formules<br>" +
                "- Contact<br>" +
                "- Abonnement";

            for (const key in keywords) {
                if (keywords[key].some(keyword => userMessage.includes(keyword))) {
                    response = responses[key];
                    break;
                }
            }
            displayMessage(`<div class="content-message">${response}</div>`, 'bot');
        }
    });

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerHTML = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    displayMessage(`<div class="content-message">Bonjour ! Comment puis-je vous aider aujourd'hui ?</div>`, 'bot');
})

function toggleChat() {
    let chatContainer = document.getElementById('chat-container');

    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
}