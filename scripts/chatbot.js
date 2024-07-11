document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const languageFlags = document.querySelectorAll('.flag');

    const responsesFr = {
        "réserve": "Vous pouvez faire une réservation ici : <a href='https://reservation.forest-hill.fr/' target='_blank'>Je réserve</a>",
        "espace pro": "Accédez à l'espace pro ici : <a href='http://www.forest-hill.pro/espacepro.html' target='_blank'>Espace pro</a>",
        "séance découverte": "Séance découverte gratuite : <a href='https://www.forest-hill.fr/images/SliderPicture/7/5//images/sliderAll/32fd4495-7e95-4b9b-a8d1-27077f0399aa.jpg' target='_blank'>Séance découverte gratuite</a>",
        "clubs": "Découvrez nos clubs à Paris ici : <a href='https://www.forest-hill.fr/vos-clubs-a-paris' target='_blank'>Clubs</a>",
        "activités": "Voici les activités disponibles : <a href='https://www.forest-hill.fr/activites/cardio' target='_blank'>Cardio</a>, <a href='https://www.forest-hill.fr/activites/renforcement-musculaire' target='_blank'>Renforcement musculaire</a>, <a href='https://www.forest-hill.fr/activites/team-training' target='_blank'>Team Training</a>, <a href='https://www.forest-hill.fr/activites/danse' target='_blank'>Danse</a>, <a href='https://www.forest-hill.fr/activites/sports-de-raquette' target='_blank'>Sports de raquette</a>, <a href='https://www.forest-hill.fr/activites/aquagym' target='_blank'>Aquagym</a>, <a href='https://www.forest-hill.fr/activites/detente-et-bien-etre' target='_blank'>Détente et bien-être</a>, <a href='https://www.forest-hill.fr/activites/boxe-grappling' target='_blank'>Boxe & Grappling</a>",
        "planning": "Voici les plannings des clubs : <a href='https://www.forest-hill.fr/club/forest-hill-aquaboulevard#planning' target='_blank'>Aquaboulevard</a>, <a href='https://www.forest-hill.fr/club/forest-hill-la-defense#planning' target='_blank'>La Défense</a>, <a href='https://www.forest-hill.fr/club/forest-hill-timing-paris-sud#planning' target='_blank'>Paris Sud</a>, <a href='https://www.forest-hill.fr/club/forest-hill-la-marche-marnes-la-coquette#planning' target='_blank'>Marnes la Coquette</a>, <a href='https://www.forest-hill.fr/club/forest-hill-versailles#planning' target='_blank'>Versailles</a>, <a href='https://www.forest-hill.fr/club/meudon-bord-de-seine#planning' target='_blank'>Meudon Bord de Seine</a>",
        "formules": "Découvrez nos formules ici : <a href='https://www.forest-hill.fr/Formules' target='_blank'>Formules</a>",
        "contact": "Contactez-nous ici : <a href='https://www.forest-hill.fr/contact' target='_blank'>Contact</a>",
        "abonne": "Abonnez-vous ici : <a href='https://www.sport-booking.com/1__clubs-forest-hill?groupcode=FORESTHILL' target='_blank'>Je m'abonne</a>",
        "horaires": "Les horaires d'ouverture sont de 6h à 23h en semaine et de 8h à 21h le week-end.",
        "installations": "Nous avons des piscines, des courts de tennis, des salles de musculation, et plus encore !",
        "bonjour": "Hello! comment puis-je vous aider ?"
    };
    
    const responsesEn = {
        "réserve": "You can make a reservation here: <a href='https://reservation.forest-hill.fr/' target='_blank'>Book Now</a>",
        "espace pro": "Access the professional space here: <a href='http://www.forest-hill.pro/espacepro.html' target='_blank'>Professional Space</a>",
        "séance découverte": "Free discovery session: <a href='https://www.forest-hill.fr/images/SliderPicture/7/5//images/sliderAll/32fd4495-7e95-4b9b-a8d1-27077f0399aa.jpg' target='_blank'>Free Discovery Session</a>",
        "clubs": "Discover our clubs in Paris here: <a href='https://www.forest-hill.fr/vos-clubs-a-paris' target='_blank'>Clubs</a>",
        "activités": "Here are the available activities: <a href='https://www.forest-hill.fr/activites/cardio' target='_blank'>Cardio</a>, <a href='https://www.forest-hill.fr/activites/renforcement-musculaire' target='_blank'>Strength Training</a>, <a href='https://www.forest-hill.fr/activites/team-training' target='_blank'>Team Training</a>, <a href='https://www.forest-hill.fr/activites/danse' target='_blank'>Dance</a>, <a href='https://www.forest-hill.fr/activites/sports-de-raquette' target='_blank'>Racket Sports</a>, <a href='https://www.forest-hill.fr/activites/aquagym' target='_blank'>Aquagym</a>, <a href='https://www.forest-hill.fr/activites/detente-et-bien-etre' target='_blank'>Relaxation and Well-being</a>, <a href='https://www.forest-hill.fr/activites/boxe-grappling' target='_blank'>Boxing & Grappling</a>",
        "planning": "Here are the club schedules: <a href='https://www.forest-hill.fr/club/forest-hill-aquaboulevard#planning' target='_blank'>Aquaboulevard</a>, <a href='https://www.forest-hill.fr/club/forest-hill-la-defense#planning' target='_blank'>La Défense</a>, <a href='https://www.forest-hill.fr/club/forest-hill-timing-paris-sud#planning' target='_blank'>Paris Sud</a>, <a href='https://www.forest-hill.fr/club/forest-hill-la-marche-marnes-la-coquette#planning' target='_blank'>Marnes la Coquette</a>, <a href='https://www.forest-hill.fr/club/forest-hill-versailles#planning' target='_blank'>Versailles</a>, <a href='https://www.forest-hill.fr/club/meudon-bord-de-seine#planning' target='_blank'>Meudon Bord de Seine</a>",
        "formules": "Discover our plans here: <a href='https://www.forest-hill.fr/Formules' target='_blank'>Plans</a>",
        "contact": "Contact us here: <a href='https://www.forest-hill.fr/contact' target='_blank'>Contact</a>",
        "abonne": "Subscribe here: <a href='https://www.sport-booking.com/1__clubs-forest-hill?groupcode=FORESTHILL' target='_blank'>Subscribe</a>",
        "horaires": "Opening hours are from 6 AM to 11 PM on weekdays and from 8 AM to 9 PM on weekends.",
        "installations": "We have swimming pools, tennis courts, gyms, and more!",
        "bonjour": "Hello! How can i help you ?"
    };
    
    const keywordsFr = {
        "réserve": ["réserve", "réservation", "réserver", "reserve", "reservation", "reserver"],
        "espace pro": ["espace pro", "professionnel", "pro"],
        "séance découverte": ["séance découverte", "séance", "découverte"],
        "clubs": ["clubs", "club"],
        "activités": ["activités", "activité", "sport", "sports", "l'activité"],
        "planning": ["planning", "horaire", "plannings", "horaires", "l'horaire"],
        "formules": ["formules", "formule", "abonnement", "tarifs", "prix"],
        "contact": ["contact", "contacter", "contactez"],
        "abonne": ["abonne", "abonnement", "abonner", "s'abonner","m'abonner", "m'abonné"],
        "horaires": ["horaires", "heures", "horaire", "ouverture", "fermeture"],
        "installations": ["installations", "équipements", "piscine", "tennis", "salle de musculation"],
        "bonjour": ["bonjour", "bonsoir", "coucou"]
    };
    
    const keywordsEn = {
        "réserve": ["reserve", "reservation", "book", "booking"],
        "espace pro": ["professional space", "professional", "pro"],
        "séance découverte": ["discovery session", "session", "discovery"],
        "clubs": ["clubs", "club"],
        "activités": ["activities", "activity", "sport", "sports"],
        "planning": ["schedule", "hour", "schedules", "hours"],
        "formules": ["plans", "plan", "subscription", "rates", "prices"],
        "contact": ["contact", "contact us", "get in touch"],
        "abonne": ["subscribe", "subscription", "join", "sign up"],
        "horaires": ["hours", "opening hours", "schedule", "open", "close"],
        "installations": ["facilities", "equipment", "pool", "tennis", "gym"],
        "bonjour": ["hi", "hey", "hello", "good evening", "good morning", "good afternoon"]
    };

    let responses = responsesFr;  // Par défaut, utiliser le français
    let keywords = keywordsFr;    // Par défaut, utiliser les mots-clés français

    languageFlags.forEach(flag => {
        flag.addEventListener('click', function() {
            chatBox.innerHTML = "";
            if (this.id === 'en') {
                responses = responsesEn;
                keywords = keywordsEn;
                userInput.placeholder = "Ask your question here...";
            } else {
                responses = responsesFr;
                keywords = keywordsFr;
                userInput.placeholder = "Posez votre question ici...";
            }
            displayMessage(`<div class="content-message">${getGreeting()}</div>`, 'bot');
        });
    });

    function getGreeting() {
        const now = new Date();
        const hour = now.getHours();
        if (responses === responsesEn) {
            if (hour < 12) {
                return "Good morning! How can I assist you today?";
            } else if (hour < 18) {
                return "Good afternoon! How can I assist you today?";
            } else {
                return "Good evening! How can I assist you today?";
            }
        } else {
            if (hour < 12) {
                return "Bonjour ! Comment puis-je vous aider ce matin ?";
            } else if (hour < 18) {
                return "Bon après-midi ! Comment puis-je vous aider ?";
            } else {
                return "Bonsoir ! Comment puis-je vous aider ce soir ?";
            }
        }
    }

    function handleUserInput(userMessage) {
        let response = responses === responsesEn ? "I don't understand your request. Here are some options:<br>" +
            "- Reservation<br>" +
            "- Professional space<br>" +
            "- Discovery session<br>" +
            "- Clubs<br>" +
            "- Activities<br>" +
            "- Schedule<br>" +
            "- Plans<br>" +
            "- Contact<br>" +
            "- Subscribe" : "Je ne comprends pas votre demande. Voici quelques options :<br>" +
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
        return response;
    }

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const userMessage = userInput.value.toLowerCase();
            displayMessage(`<div class="content-message">${userMessage}</div>`, 'user');
            userInput.value = '';

            displayTypingIndicator();

            setTimeout(() => {
                const response = handleUserInput(userMessage);
                removeTypingIndicator();
                displayMessage(`<div class="content-message">${response}</div>`, 'bot');
            }, 2000);  // Simulate typing delay of 2 seconds
        }
    });

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerHTML = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function displayTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'bot');
        typingIndicator.setAttribute('id', 'typing-indicator');
        typingIndicator.innerHTML = '<div class="content-message"><div class="typing"><span></span><span></span><span></span></div></div>';
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            chatBox.removeChild(typingIndicator);
        }
    }

    displayMessage(`<div class="content-message">${getGreeting()}</div>`, 'bot');
});

function toggleChat() {
    let chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
}
