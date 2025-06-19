// ডায়ালগ ডেটা - ইম্প্রুভড ভার্সন
const allDialogues = {
    jesan: [
        'স্যার, আর কতদিন বেতন পাবো না? আমরা কি মেশিন?',
        'এভাবে চলতে পারে না! আমার বাসা ভাড়া বাকি পড়ে গেছে।',
        'প্রতিবার শুধু আশ্বাস, এবার আর না!',
        'বেতন ছাড়া কাজ করবো না, স্যার!',
        'সাকিব, তুইও বল, আর কত সহ্য করবি?',
        // Protest lines
        'বেতন দাও! বেতন দাও!',
        'আমরা বেতন ছাড়া ফিরব না!',
        'এবার চূড়ান্ত সিদ্ধান্ত!',
        'আমাদের অধিকার চাই!',
        'বেতন না পেলে অফিসে আসবো না!'
    ],
    sakib: [
        'জেসান ভাই ঠিক বলছে, আর পারছি না!',
        'ডিজিটাল মার্কেটিং তো করতেই পারি, কিন্তু পকেট খালি!',
        'স্যার, এত দেরি কেন? ক্লায়েন্ট তো পেমেন্ট দেয়!',
        'বেতন ছাড়া কিভাবে চলবো?',
        'এবার সবাই একসাথে বলি!',
        // Protest lines
        'বেতন চাই! বেতন চাই!',
        'এভাবে আর চলবে না!',
        'আমাদের ন্যায্য পাওনা চাই!',
        'বেতন না পেলে কাজ বন্ধ!',
        'স্যার, এবার আর ছাড়বো না!'
    ],
    rafid: [
        'ভাই, একটু ধৈর্য ধরো, স্যার নিশ্চয়ই ব্যবস্থা করবেন।',
        'এভাবে উত্তেজিত হলে তো সমস্যা বাড়বে!',
        'আমি কথা বলবো স্যারের সাথে, সবাই শান্ত হও।',
        'আচ্ছা, দেখি আমি কি করতে পারি...',
        '...তবে সত্যি কথা বলতে, আমিও বিরক্ত!',
        // Protest lines
        'আমরা একসাথে, আমাদের দাবি একটাই!',
        'বেতন ছাড়া কাজ নয়!',
        'এবার সবাই একসাথে বলি!',
        'আমাদের অধিকার চাই!',
        'বেতন না পেলে আমরাও আন্দোলনে!'
    ],
    imran: [
        'হুম... আজকে কি দুপুরে বিরিয়ানি?',
        'ওহ, সবাই চিৎকার করছে...',
        'স্যার, চা খেতে যাবো?',
        'বেতন দেরি মানে Netflix দেরি...',
        'আমি আছি, কিন্তু চুপচাপ।',
        // Protest lines
        'বেতন চাই...',
        'আমাদের কথা শুনুন!',
        'বেতন ছাড়া কাজ নয়!',
        'আমরা সবাই একসাথে!',
        'স্যার, এবার কিছু করুন!'
    ],
    mohona: [
        'আজও ক্যান্টিনে খাবার ঠান্ডা!',
        'বিরিয়ানি তো দূরের কথা, ডালও নেই!',
        'বেতন দেরি, খাবার খারাপ, আর কত?',
        'স্যার, ফ্রিজটা ঠিক করুন অন্তত!',
        'এভাবে চলতে পারে না!',
        // Protest lines
        'বেতন চাই! খাবার চাই!',
        'আমাদের অধিকার চাই!',
        'বেতন ছাড়া কাজ নয়!',
        'খাবার ভালো চাই!',
        'বেতন না পেলে অফিসে আসবো না!'
    ],
    tanvir: [
        'স্যার, আপনি অনেক ভালো!',
        'আমি তো ঠিক আছি, স্যার চাইলে সব ঠিক হবে!',
        'স্যার, আপনার জন্যই তো এতদূর এসেছি!',
        'স্যার, আমি আপনার পাশে আছি!',
        'স্যার, সবাইকে বুঝিয়ে দিন!',
        // Protest lines
        'স্যার, দয়া করে বেতন দিন!',
        'আমরা সবাই আপনার ওপর ভরসা করি!',
        'বেতন হলে সবাই খুশি!',
        'স্যার, এবার কিছু করুন!',
        'বেতন না পেলে সবাই কষ্টে!'
    ],
    nahiyan: [
        'তোমরা জানো কালকে নতুন সিরিজ রিলিজ হয়েছে?',
        'আচ্ছা, কেউ Money Heist দেখেছো?',
        'বেতন নিয়ে পরে কথা হবে, আগে সিরিজটা শেষ করি!',
        'স্যার, আপনি Breaking Bad দেখেছেন?',
        'আচ্ছা, Game of Thrones নিয়ে কথা বলবো?',
        // Protest lines
        'বেতন চাই! কিন্তু সিরিজও চাই!',
        'আমাদের অধিকার চাই!',
        'বেতন ছাড়া কাজ নয়!',
        'স্যার, Netflix সাবস্ক্রিপশন শেষ!',
        'বেতন না পেলে সিরিজ দেখা বন্ধ!'
    ]
};

// ডায়ালগ সিকোয়েন্স - লজিক্যাল স্টোরি ফ্লো
const dialogueSequence = [
    // প্রথম দফা - সমস্যা বর্ণনা
    { character: 'jesan', dialogueIndex: 0, angry: true },
    { character: 'sakib', dialogueIndex: 0, angry: true },
    { character: 'rafid', dialogueIndex: 0 },
    { character: 'imran', dialogueIndex: 0 },
    { character: 'mohona', dialogueIndex: 0 },
    { character: 'nahiyan', dialogueIndex: 0 },

    // দ্বিতীয় দফা - আরও সমস্যা
    { character: 'jesan', dialogueIndex: 1, angry: true },
    { character: 'sakib', dialogueIndex: 1, angry: true },
    { character: 'rafid', dialogueIndex: 1 },
    { character: 'imran', dialogueIndex: 1 },
    { character: 'mohona', dialogueIndex: 1 },
    { character: 'nahiyan', dialogueIndex: 1 },

    // তৃতীয় দফা - সমাধানের প্রস্তাব
    { character: 'jesan', dialogueIndex: 2, angry: true },
    { character: 'sakib', dialogueIndex: 2, angry: true },
    { character: 'rafid', dialogueIndex: 2 },
    { character: 'imran', dialogueIndex: 2 },
    { character: 'mohona', dialogueIndex: 2 },
    { character: 'nahiyan', dialogueIndex: 2 },

    // চতুর্থ দফা - চূড়ান্ত দাবি
    { character: 'jesan', dialogueIndex: 3, angry: true },
    { character: 'sakib', dialogueIndex: 3, angry: true },
    { character: 'rafid', dialogueIndex: 3 },
    { character: 'imran', dialogueIndex: 3 },
    { character: 'mohona', dialogueIndex: 3 },
    { character: 'nahiyan', dialogueIndex: 3 },

    // পঞ্চম দফা - সবাই একসাথে
    { character: 'jesan', dialogueIndex: 4, angry: true },
    { character: 'sakib', dialogueIndex: 4, angry: true },
    { character: 'rafid', dialogueIndex: 4 },
    { character: 'imran', dialogueIndex: 4 },
    { character: 'mohona', dialogueIndex: 4 },
    { character: 'nahiyan', dialogueIndex: 4 }
];

// ডায়ালগ ফাংশন
function getRandomDialogue(characterId) {
    const dialogues = allDialogues[characterId];
    const randomIndex = Math.floor(Math.random() * dialogues.length);
    return dialogues[randomIndex];
}

function getDialogueByIndex(characterId, index) {
    return allDialogues[characterId][index];
}

function getAllDialogues() {
    return allDialogues;
}

function getDialogueSequence() {
    return dialogueSequence;
} 