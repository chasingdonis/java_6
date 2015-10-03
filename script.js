var i = 0;

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;

var oldest = speechesArray[0].year;
var newest = speechesArray[0].year;

while(i < speechesArray.length){
console.log("This speech is written by " + speechesArray[i].author);
i++;
}

for (i=0; i < speechesArray.length; i++){
if(speechesArray[i].year < oldest){
console.log('This is the oldest speech on the page.'); }
};

for (i=0; i < speechesArray.length; i++){
if(speechesArray[i].year > newest){
console.log('This is the most recent speech on the page.'); }
};

document.getElementById('BtnDonate').addEventListener('click', function(){
var favor = window.prompt("Who is your favorite author? Please enter Churchill, Ghandi, or Demosthenes");

for (i=0; i < speechesArray.length; i++){
if (favor === speechesArray[i].author) {
console.log(speechesArray[i].author + ' was ' + speechesArray[i].authorAge + ' during this speech.');
}
}
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[0].year < oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[0].year > newest){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[1].year < oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[1].year > newest){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[2].year < oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[2].year > newest){
    console.log('This is the most recent speech on the page.');
  }
});
