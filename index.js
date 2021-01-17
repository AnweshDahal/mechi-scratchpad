document.addEventListener('DOMContentLoaded', (e)=>{
  actionPerformed();
}); 

function actionPerformed(){
  document.querySelector('#clearBTN').addEventListener('click', (e)=>{
    e.preventDefault();
    clear();
  });

  document.querySelector('#language').addEventListener('change', (e) =>{
    e.preventDefault();
    let lang = document.querySelector('#language').value;
    changeLanguage(lang);
  });

  document.querySelector('#closeBTN').addEventListener('click', (e) => {
    e.preventDefault();
    closePopup();
  });

  document.querySelector('#themeSwitch').addEventListener('change', (e) => {
    e.preventDefault();
    toggleTheme();
  });

  document.querySelector('#fontRange').addEventListener('change', (e) => {
    e.preventDefault();
    changeFontSize();
  });
}

function changeFontSize(){
  let size = document.querySelector('#fontRange').value;
  document.querySelector('#mainText').style.fontSize = size;
}

function toggleTheme(){
  document.querySelector("#mainText").classList.toggle("dark-mode");
}

function closePopup(){
  let popup = document.querySelector('#popup');
  popup.parentElement.removeChild(popup);
}

function changeLanguage(lang) {
  console.log(lang);
  if (lang === 'en'){
    changeTALanguage('english', 'Write Something');
  } else if (lang === 'dv'){
    changeTALanguage('devnagari', 'केहि लेख्नुहोस/ कुछ लिखो');
  } else if (lang === 'ab'){
    changeTALanguage('arabic', 'أكتب شيئا')
  } else if (lang === 'jp'){
    changeTALanguage('japanese', '何かを書く');
  } else if (lang === 'kr'){
    changeTALanguage('korean', '뭔가 쓰기');
  } else if (lang === 'bg'){
    changeTALanguage('bengali', 'কিছু লিখুন');
  } else if (lang === 'hb'){
    changeTALanguage('hebrew', 'לכתוב משהו');
  } else if (lang === 'tm'){
    changeTALanguage('tamil', 'ஏதாவது எழுத');
  }
}

function changeTALanguage(language, placeholder){
  console.log(document.querySelector('#mainText').classList.contains('dark-mode'));
  if(document.querySelector('#mainText').classList.contains('dark-mode')){
    document.querySelector('#mainText').className = `${language} dark-mode`;
  } else {
    document.querySelector('#mainText').className = language;
  }
  document.querySelector('#mainText').placeholder = placeholder;
}

function clear(){
  document.querySelector("#mainText").value = "";
}