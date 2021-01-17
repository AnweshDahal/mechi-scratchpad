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
}

function closePopup(){
  let popup = document.querySelector('#popup');
  popup.parentElement.removeChild(popup);
}

function changeLanguage(lang) {
  if (lang === 'en'){
    document.querySelector('#mainText').className = "english";
    document.querySelector('#mainText').placeholder = "Write Something";
  } else if (lang === 'dv'){
    document.querySelector('#mainText').className = "devnagari";
    document.querySelector('#mainText').placeholder = "केहि लेख्नुहोस/ कुछ लिखो";
  } else if (lang === 'ab'){
    document.querySelector('#mainText').className = "arabic";
    document.querySelector('#mainText').placeholder = "أكتب شيئا";
  } else if (lang === 'jp'){
    document.querySelector('#mainText').className = "japanese";
    document.querySelector('#mainText').placeholder = "何かを書く";
  } else if (lang === 'kr'){
    document.querySelector('#mainText').className = "korean";
    document.querySelector('#mainText').placeholder = "뭔가 쓰기";
  } else if (lang === 'bg'){
    document.querySelector('#mainText').className = "bengali";
    document.querySelector('#mainText').placeholder = "কিছু লিখুন";
  } else if (lang === 'hb'){
    document.querySelector('#mainText').className = "hebrew";
    document.querySelector('#mainText').placeholder = "לכתוב משהו";
  } else if (lang === 'tm'){
    document.querySelector('#mainText').className = "tamil";
    document.querySelector('#mainText').placeholder = "ஏதாவது எழுத";
  }
}

function clear(){
  document.querySelector("#mainText").value = "";
}