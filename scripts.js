// --- DATA: CURATED CLASH ROYALE DECKS ---
// This array contains the data for the decks displayed on the page.
const topDecks = [
    { name: "Classic Log Bait", averageElixir: 2.9, cards: [ { name: "Knight", icon: "knight" }, { name: "Goblin Barrel", icon: "goblin-barrel" }, { name: "Princess", icon: "princess" }, { name: "The Log", icon: "the-log" }, { name: "Goblin Gang", icon: "goblin-gang" }, { name: "Ice Spirit", icon: "ice-spirit" }, { name: "Inferno Tower", icon: "inferno-tower" }, { name: "Rocket", icon: "rocket" } ] },
    { name: "Hog 2.6 Cycle", averageElixir: 2.6, cards: [ { name: "Hog Rider", icon: "hog-rider" }, { name: "Musketeer", icon: "musketeer" }, { name: "Skeletons", icon: "skeletons" }, { name: "Ice Spirit", icon: "ice-spirit" }, { name: "The Log", icon: "the-log" }, { name: "Cannon", icon: "cannon" }, { name: "Fireball", icon: "fireball" }, { name: "Ice Golem", icon: "ice-golem" } ] },
    { name: "LavaLoon", averageElixir: 4.1, cards: [ { name: "Lava Hound", icon: "lava-hound" }, { name: "Balloon", icon: "balloon" }, { name: "Mega Minion", icon: "mega-minion" }, { name: "Tombstone", icon: "tombstone" }, { name: "Guards", icon: "guards" }, { name: "Fireball", icon: "fireball" }, { name: "Zap", icon: "zap" }, { name: "Valkyrie", icon: "valkyrie" } ] },
    { name: "Splashyard", averageElixir: 3.6, cards: [ { name: "Graveyard", icon: "graveyard" }, { name: "Baby Dragon", icon: "baby-dragon" }, { name: "Ice Wizard", icon: "ice-wizard" }, { name: "Tornado", icon: "tornado" }, { name: "Knight", icon: "knight" }, { name: "Poison", icon: "poison" }, { name: "The Log", icon: "the-log" }, { name: "Bomb Tower", icon: "bomb-tower" } ] },
    { name: "P.E.K.K.A. Bridge Spam", averageElixir: 3.9, cards: [ { name: "P.E.K.K.A.", icon: "pekka" }, { name: "Battle Ram", icon: "battle-ram" }, { name: "Bandit", icon: "bandit" }, { name: "Royal Ghost", icon: "royal-ghost" }, { name: "Magic Archer", icon: "magic-archer" }, { name: "Zap", icon: "zap" }, { name: "Poison", icon: "poison" }, { name: "Electro Wizard", icon: "electro-wizard" } ] },
    { name: "Golem Beatdown", averageElixir: 4.3, cards: [ { name: "Golem", icon: "golem" }, { name: "Night Witch", icon: "night-witch" }, { name: "Lumberjack", icon: "lumberjack" }, { name: "Baby Dragon", icon: "baby-dragon" }, { name: "Mega Minion", icon: "mega-minion" }, { name: "Tornado", icon: "tornado" }, { name: "Lightning", icon: "lightning" }, { name: "Elixir Collector", icon: "elixir-collector" } ] }
];

// --- SCRIPT TO RENDER DECKS ---

// Wait for the HTML content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const decksContainer = document.getElementById('decks-container');

    // Function to generate the HTML for a single deck card
    function createDeckHTML(deck) {
        // Generate the HTML for each of the 8 cards in a deck
        const cardsHTML = deck.cards.map(card => `
            <div class="w-1/4 p-1">
                <img src="https://cdn.royaleapi.com/static/img/cards-150/${card.icon}.png" 
                     alt="${card.name}" 
                     class="w-full rounded-md shadow-sm"
                     onerror="this.onerror=null;this.src='https://placehold.co/150x180/e0e0e0/ffffff?text=${card.name.replace(/\s/g, '+')}';"
                     title="${card.name}">
            </div>
        `).join('');

        // Return the complete HTML for the deck card
        return `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
                <div class="p-5">
                    <h4 class="text-lg font-bold text-gray-900">${deck.name}</h4>
                    <div class="flex items-center mt-1 mb-4">
                        <img src="https://cdn.royaleapi.com/static/img/ui/elixir.png" alt="Elixir" class="w-5 h-5 mr-1">
                        <p class="text-md font-semibold text-purple-600">${deck.averageElixir} Average Elixir</p>
                    </div>
                    <div class="flex flex-wrap -m-1">
                        ${cardsHTML}
                    </div>
                </div>
            </div>
        `;
    }

    // Function to render all decks into the container
    function renderDecks() {
        if (decksContainer) {
            decksContainer.innerHTML = topDecks.map(createDeckHTML).join('');
        }
    }

    // Initial render of the decks
    renderDecks();
});
