//array of words using const object
const arrayOfWords = [
    {Word: 'Ephemeral',
    Type : 'adjective',
    Meaning: 'Lasting for a very short time'
    },
    {Word: 'Scintilla',
    Type : 'noun',
    Meaning: 'Tiny trace of a specified quality or feeling'
    },
    {Word: 'Inure',
    Type : 'verb',
    Meaning: 'Growing accustomed to something unpleasant'
    },
    {Word: 'Effervescent',
    Type : 'adjective',
    Meaning: 'Vivacious and enthusiastic'
    },
    {Word: 'Deride',
    Type : 'verb',
    Meaning: 'To ridicule'
    },
    {Word: 'Invective',
    Type : 'noun',
    Meaning: 'Abusive or insulting language or expression'
    },
    {Word: 'Mawkish',
    Type : 'adjective',
    Meaning: 'Exaggeratedly or childishly emotional'
    },
    {Word: 'Titivate',
    Type : 'verb',
    Meaning: 'To make more attractive'
    },
    {Word: 'Rancid',
    Type : 'adjective',
    Meaning: 'Having a foul smell or taste'
    },
    {Word: 'Facsimilie',
    Type : 'noun',
    Meaning: 'An exact copy, usually of printed material'
    },
    {Word: 'Conciliate',
    Type : 'verb',
    Meaning: 'To make more friendly or less angry'
    },
    {Word: 'Nebulous',
    Type : 'adjective',
    Meaning: 'Indistinct or vague'
    },
    {Word: 'Brackish',
    Type : 'adjective',
    Meaning: 'Somewhat salty (describing bodies of water)'
    },
    {Word: 'Crepuscular',
    Type : 'adjective',
    Meaning: 'Relating to, or resembling twilight'
    },
    {Word: 'Dilatory',
    Type : 'adjective',
    Meaning: 'Tending to cause delay'
    },

];

function generateWord(){
    const random = Number.parseInt(Math.random()*arrayOfWords.length + 1); //gives objects in the array an ID type number
    document.querySelector('#wordOutput').textContent = `${arrayOfWords[random].Word}`;
    document.querySelector('#typeOutput').textContent = `${arrayOfWords[random].Type}`;
    document.querySelector('#meaningOutput').textContent = `${arrayOfWords[random].Meaning}`;
}