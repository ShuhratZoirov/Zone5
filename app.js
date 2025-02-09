const chatbotResponses = {
        "salom": "Salom! Qanday yordam bera olaman?",
        "qanday gaps": "Hammasi yaxshi! Sizda-chi?",
        "isming nima": "Mening ismim Zone AI",
        "rahmat": "Arzimaydi! 😊",
        "seni kim yaratgan": "Meni Shuhrat Zoirov yaratgan"
};

function getChatbotResponse(userInput) {
    userInput = userInput.toLowerCase();
    return chatbotResponses[userInput] || "Kechirasiz, bu savolga javob topilmadi.";
}

const chatInput = document.getElementById("chat-input");
const chatButton = document.getElementById("chat-button");
const chatOutput = document.getElementById("chat-output");

chatButton.addEventListener("click", () => {
    const userText = chatInput.value.trim();
    if (userText) {
        const botResponse = getChatbotResponse(userText);
        chatOutput.innerHTML += `<p style='color: white;'><strong>Bot:</strong> ${botResponse}</p>`;
        chatInput.value = "";
    }
});