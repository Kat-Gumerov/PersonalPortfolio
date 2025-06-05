document.getElementById("fetchFact").addEventListener("click", function () {
    const funFacts = [
        "I am a transfer student from Stetson University.",
        "I am a huge thrifter, I love a good deal.",
        "I love being thrown into a challenging environment, it is a chance to grow.",
        "My dream is to travel the world!",
        "My first computer science project took me over 70 hours to finish.",
        "I really enjoy cooking, especially breakfast (best meal of the day).",
        "I love binge watching tv shows to unwind."
    ];

    // Pick a random fact
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("fact").innerText = randomFact;
});
