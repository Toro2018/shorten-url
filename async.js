// element selector
const shortenButton = document.querySelector('#shorten');
const inputField = document.querySelector('#inputField');

const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }

  shortenUrl();
  inputField.value = "";
}

shortenButton.addEventListener('click', displayShortUrl);


const shortenUrl = async () =>{
  const urlToShorten = JSON.stringify({url:inputField.value}); 

  try{
        const response =  await fetch('https://safe-taiga-46064.herokuapp.com/shorten', {
          method: 'POST',
          body: urlToShorten,
          headers: {
            "Content-type": "application/json"    
          }
        });
        if(response){
          const jsonResponse = await response.json();     
          renderResponse(jsonResponse);
        }
      }
      catch(error){
        console.log(error);
      }
    }

const renderResponse = (res) => {
  if(!res.url){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.Try again.</p><p>请检查输入的URL格式</p>";
  } else {  
    responseField.innerHTML = `<p>Your shortened url is: ${res.url}</p><p>您精简后的url为: ${res.url}</p>`;
  }
}
