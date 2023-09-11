const flashcardsNetworking = [

    {
        question: "1. Vysvětlete rozdíl mezi sítí s přepojováním okruhů a sítí s přepojováním paketů,\nnakreslete obrázky.",
        
        answer: "Síť s přepojováním okruhů\n- vyhradí se vždy jeden kanál pro dvojci účastníků\n\nSíť s přepojováním paketů\n- přenáší se jen jedním kanálem takzvané pakety které se pak přidělí příjemci"
        },
        {
        question: "2. Jaký je rozdíl mezi analogovou a digitální sítí?",
        
        answer: "Analogová síť\n- Dnes je již téměr nepoužívá. Docházelo ke zkreslení a útlumu signálu.\n- spojitý signál\n\nDigitální síť\n- nespojitý signál\n- logické nuly a jedničky"  
        },
        {
        question: "3. Síť klient-server a peer-to-peer. Vysvětlete rozdíl, případně nakreslete obrázek.",
        
        answer: "Klient-server\n- klienti spolu komunikují přes server\n\nP2P\n- klienti spolu komunikují přimo mezi sebou"
        },
        {
        question: "4. Sběrnicová topologie sítě, nakreslit obrázek, její výhody a nevýhody.\n- jedna sběrnice na kterou jsou napojeny počítače",
        
        answer: "výhody: - snadná realizace a snadné rozšíření\n- nevyžaduje tolik kabeláže\n- vhodná pro malé nebo dočasné sítě, které nevyžadují velké rychlosti přenosu\n\nNevýhody: - omezená délka kabelu a také počet stanic\n- nesnadné ostraňování závad\n- pokud nastane nějaký problém s kabelem celá síť přestane fungovat\n- výkon rapidně klesá při větším počtu stanic nebo při velkém provozu"
        }

]

let currentCardIndex = 0;

function displayFlashcard(index) {
    const questionContainer = document.getElementById("question");
    const answerContainer = document.getElementById("answer");

    if (index >= 0 && index < flashcardsNetworking.length) {
        questionContainer.textContent = flashcardsNetworking[index].question;
        answerContainer.textContent = '';
    } else {
        questionContainer.textContent = "Dobrá práce! Ale stejně si to radši projeď ještě jednou.";
        answerContainer.textContent = '';
    }
}

const showAnswerButton = document.getElementById("showAnswer");
showAnswerButton.addEventListener("click", () => {
    const answerContainer = document.getElementById("answer");
    answerContainer.textContent = flashcardsNetworking[currentCardIndex].answer;

    answerContainer.style.opacity = 1;

    const answerHeight = answerContainer.scrollHeight + 'px';

    answerContainer.style.maxHeight = answerHeight;

    answerContainer.textContent = answerContent;
});



const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayFlashcard(currentCardIndex);
    }
});

nextButton.addEventListener("click", () => {
    if (currentCardIndex < flashcardsNetworking.length - 1) {
        currentCardIndex++;
        displayFlashcard(currentCardIndex);
    }
});

displayFlashcard(currentCardIndex);