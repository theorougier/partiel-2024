# Chatbot Forest Hill

Bienvenue sur la documentation du Chatbot Forest Hill. Ce guide vous aidera à intégrer le chatbot sur votre site web en utilisant les fichiers `chatbot.js` et `chatbot.css`.

## Installation

Pour intégrer le Chatbot Forest Hill, vous devez inclure les fichiers JavaScript et CSS dans votre projet. Assurez-vous que les chemins des fichiers sont corrects dans votre structure de projet.

### Fichiers nécessaires

- `chatbot.js` : Le script JavaScript qui gère la logique du chatbot.
- `chatbot.css` : Le fichier de style pour le design du chatbot.

### HTML

Ajoutez le code HTML suivant à l'endroit où vous souhaitez afficher le chatbot sur votre page :

```html
<button class="chat-button" onclick="toggleChat()">Chat</button>

<div class="chat-container" id="chat-container">
    <div class="chat-header">
        <span>Chatbot Forest Hill</span>
        <div class="language-select">
            <img src="assets/images/france-flag-round-shape-free-png.webp" id="fr" class="flag" alt="Français">
            <img src="assets/images/flag-united-kingdom_1f1ec-1f1e7.png" id="en" class="flag" alt="English">
        </div>
    </div>
    <div class="chat-box" id="chat-box"></div>
    <input type="text" id="user-input" class="user-input" placeholder="Posez votre question ici...">
</div>
