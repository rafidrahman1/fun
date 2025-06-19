// গ্লোবাল ভ্যারিয়েবল
let currentDialogueIndex = 0;
let dialogueTimeout;
let protestShoutInterval = null;

// কনসিস্টেন্ট এনিমেশন টাইমিং
const ANIMATION_TIMING = {
    SPEECH_DURATION: 4000,
    DIALOGUE_INTERVAL: 3000,
    CHARACTER_HIGHLIGHT: 500,
    GROUP_PROTEST_PHASES: 3000,
    PROTEST_TOTAL_DURATION: 16000
};

// সব স্পিচ বাবল হাইড
function hideAllSpeechBubbles() {
    document.querySelectorAll('.speech-bubble').forEach(bubble => {
        bubble.classList.remove('show');
    });
}

// ক্যারেক্টার এক্সপ্রেশন চেঞ্জ
function setCharacterExpression(characterId, isAngry) {
    const face = document.getElementById(`${characterId}-face`);
    if (isAngry) {
        face.classList.add('angry-face');
    } else {
        face.classList.remove('angry-face');
    }
}

// স্পিচ বাবল শো
function showSpeech(characterId, text) {
    hideAllSpeechBubbles();
    
    // Remove speaking class from all characters
    document.querySelectorAll('.character').forEach(char => {
        char.classList.remove('speaking');
    });
    
    // Add speaking class to current character
    const character = document.querySelector(`.${characterId}`);
    character.classList.add('speaking');
    
    const bubble = document.getElementById(`speech-${characterId}`);
    bubble.textContent = text;
    bubble.classList.add('show');
    
    // Remove speaking class after animation
    setTimeout(() => {
        character.classList.remove('speaking');
    }, ANIMATION_TIMING.CHARACTER_HIGHLIGHT);
    
    setTimeout(() => {
        bubble.classList.remove('show');
    }, ANIMATION_TIMING.SPEECH_DURATION);
}

// ফুল সিন প্লে
function playFullScene() {
    resetScene();
    currentDialogueIndex = 0;
    document.getElementById('sceneIndicator').textContent = 'কথোপকথন চলছে...';
    playNextDialogue();
}

// নেক্সট ডায়ালগ প্লে
function playNextDialogue() {
    if (dialogueTimeout) {
        clearTimeout(dialogueTimeout);
    }

    if (currentDialogueIndex >= dialogueSequence.length) {
        startGroupProtest();
        return;
    }
    
    const dialogue = dialogueSequence[currentDialogueIndex];
    const characterName = dialogue.character;
    const textToShow = allDialogues[characterName][dialogue.dialogueIndex];
    
    setCharacterExpression(characterName, dialogue.angry || false);
    showSpeech(characterName, textToShow);
    
    currentDialogueIndex++;
    dialogueTimeout = setTimeout(playNextDialogue, ANIMATION_TIMING.DIALOGUE_INTERVAL);
}

function setProtestState(speakingIds = []) {
    // Remove protesting/angry from all
    document.querySelectorAll('.character').forEach(char => {
        char.classList.remove('protesting');
        const charId = char.classList[1];
        setCharacterExpression(charId, false);
    });
    // Add protesting/angry only to those speaking
    speakingIds.forEach(charId => {
        const char = document.querySelector(`.${charId}`);
        if (char) {
            char.classList.add('protesting');
            setCharacterExpression(charId, true);
        }
    });
}

function animateProtestChaos() {
    const ids = ['jesan','sakib','rafid','tanvir','imran','nahiyan','mohona'];
    ids.forEach((id, i) => {
        // Animate phone flying (only once)
        const phone = document.getElementById('phone-' + id);
        if (phone) {
            // Random direction for each phone
            const angle = Math.random() * 2 * Math.PI;
            const dist = 220 + Math.random() * 80;
            const x = Math.round(Math.cos(angle) * dist);
            const y = Math.round(Math.sin(angle) * dist - 100);
            phone.style.setProperty('--fly-x', x + 'px');
            phone.style.setProperty('--fly-y', y + 'px');
            phone.classList.add('flying-phone');
        }
        // Animate desk flipping and flying away from person
        const desk = document.getElementById('desk-' + id);
        if (desk) {
            // Top row: fly left/right, bottom row: fly up
            let flyX = 0, flyY = 0;
            if (['jesan','sakib','rafid','tanvir'].includes(id)) {
                if (id === 'jesan') { flyX = -300; }
                else if (id === 'sakib') { flyX = -150; }
                else if (id === 'rafid') { flyX = 150; }
                else if (id === 'tanvir') { flyX = 300; }
            } else {
                flyY = -250;
            }
            desk.style.setProperty('--desk-fly-x', flyX + 'px');
            desk.style.setProperty('--desk-fly-y', flyY + 'px');
            desk.classList.add('flipped-desk');
        }
        // Animate trash scatter from the person's position
        const trash = document.getElementById('trash-' + id);
        const char = document.querySelector('.' + id);
        if (trash && char) {
            // Get character's position relative to office-scene
            const office = document.querySelector('.office-scene');
            const charRect = char.getBoundingClientRect();
            const officeRect = office.getBoundingClientRect();
            const startX = charRect.left + charRect.width/2 - officeRect.left;
            const startY = charRect.top + charRect.height/2 - officeRect.top;
            trash.style.left = startX + 'px';
            trash.style.top = startY + 'px';
            // Random scatter direction
            const tx = Math.round((Math.random() - 0.5) * 500);
            const ty = Math.round(100 + Math.random() * 200);
            const rot = Math.round((Math.random() - 0.5) * 360);
            trash.style.setProperty('--trash-x', tx + 'px');
            trash.style.setProperty('--trash-y', ty + 'px');
            trash.style.setProperty('--trash-rot', rot + 'deg');
            trash.classList.add('trash-scatter');
        }
    });
}

function getProtestLines(characterId) {
    // Use last 5 lines as protest lines
    const arr = allDialogues[characterId];
    return arr.slice(-5);
}

function startProtestShouting() {
    const ids = ['jesan','sakib','rafid','tanvir','imran','nahiyan','mohona'];
    protestShoutInterval = setInterval(() => {
        ids.forEach(id => {
            const protestLines = getProtestLines(id);
            const line = protestLines[Math.floor(Math.random() * protestLines.length)];
            setCharacterExpression(id, true);
            showSpeech(id, line);
        });
    }, 1500);
}

function stopProtestShouting() {
    if (protestShoutInterval) {
        clearInterval(protestShoutInterval);
        protestShoutInterval = null;
    }
    // Hide all speech bubbles and reset faces
    hideAllSpeechBubbles();
    const ids = ['jesan','sakib','rafid','tanvir','imran','nahiyan','mohona'];
    ids.forEach(id => setCharacterExpression(id, false));
}

// গ্রুপ প্রোটেস্ট
function startGroupProtest() {
    if (dialogueTimeout) {
        clearTimeout(dialogueTimeout);
    }
    hideAllSpeechBubbles();

    document.getElementById('sceneIndicator').textContent = 'সমবেত আন্দোলন';
    
    // প্লাকার্ড শো
    document.getElementById('placard1').classList.add('show');
    document.getElementById('placard2').classList.add('show');
    
    // গ্রুপ চ্যান্ট শো
    const groupChant = document.getElementById('groupChant');
    groupChant.classList.add('show');
    
    // Protest chaos: phones fly, desks flip, trash scatters (one time)
    animateProtestChaos();

    // Start protest shouting
    startProtestShouting();

    // সাউন্ড প্লে
    document.getElementById('chantSound').play();
    setTimeout(() => {
        document.getElementById('protestSound').play();
    }, 2000);
    
    // প্রোটেস্ট শেষ
    setTimeout(() => {
        setProtestState([]);
        groupChant.classList.remove('show');
        document.getElementById('placard1').classList.remove('show');
        document.getElementById('placard2').classList.remove('show');
        hideAllSpeechBubbles();
        document.getElementById('sceneIndicator').textContent = 'দৃশ্য ১';
        // Reset protest chaos
        const ids = ['jesan','sakib','rafid','tanvir','imran','nahiyan','mohona'];
        ids.forEach(id => {
            const phone = document.getElementById('phone-' + id);
            if (phone) phone.classList.remove('flying-phone');
            const desk = document.getElementById('desk-' + id);
            if (desk) desk.classList.remove('flipped-desk');
            const trash = document.getElementById('trash-' + id);
            if (trash) trash.classList.remove('trash-scatter');
        });
        stopProtestShouting();
    }, ANIMATION_TIMING.PROTEST_TOTAL_DURATION);
}

// র‍্যান্ডম ডায়ালগ প্লে
function playRandomDialogues() {
    resetScene();
    document.getElementById('sceneIndicator').textContent = 'র‍্যান্ডম কথোপকথন';
    
    const characters = ['jesan', 'sakib', 'rafid', 'tanvir', 'imran', 'nahiyan', 'mohona'];
    let dialogueCount = 0;
    const maxDialogues = 8;
    
    function playRandomDialogue() {
        if (dialogueCount >= maxDialogues) {
            resetScene();
            return;
        }
        
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        const characterDialogues = allDialogues[randomCharacter];
        const randomDialogueIndex = Math.floor(Math.random() * characterDialogues.length);
        const isAngry = Math.random() > 0.5;
        
        setCharacterExpression(randomCharacter, isAngry);
        showSpeech(randomCharacter, characterDialogues[randomDialogueIndex]);
        
        dialogueCount++;
        
        // কনসিস্টেন্ট র‍্যান্ডম ইন্টারভাল
        const randomInterval = ANIMATION_TIMING.DIALOGUE_INTERVAL + Math.random() * 2000;
        setTimeout(playRandomDialogue, randomInterval);
    }
    
    playRandomDialogue();
}

// রিসেট সিন
function resetScene() {
    if (dialogueTimeout) {
        clearTimeout(dialogueTimeout);
    }

    currentDialogueIndex = 0;
    document.getElementById('sceneIndicator').textContent = 'দৃশ্য ১';
    
    // সব স্পিচ বাবল হাইড
    hideAllSpeechBubbles();
    
    // সব ক্যারেক্টার থেকে প্রোটেস্টিং ক্লাস রিমুভ
    document.querySelectorAll('.character').forEach(char => {
        char.classList.remove('protesting');
        char.classList.remove('speaking');
        const charId = char.classList[1];
        setCharacterExpression(charId, false);
    });
    
    // গ্রুপ চ্যান্ট ও প্লাকার্ড হাইড
    document.getElementById('groupChant').classList.remove('show');
    document.getElementById('placard1').classList.remove('show');
    document.getElementById('placard2').classList.remove('show');
    
    // সাউন্ড স্টপ
    document.getElementById('protestSound').pause();
    document.getElementById('protestSound').currentTime = 0;
    document.getElementById('chantSound').pause();
    document.getElementById('chantSound').currentTime = 0;
}

// অটো স্টার্ট ডেমো
function initDemo() {
    setTimeout(() => {
        playFullScene();
    }, 2000);
}

// ইভেন্ট লিসেনার
document.addEventListener('DOMContentLoaded', function() {
    initDemo();
}); 