function changeBackground() {
    
    wrapper.classList.toggle("black");
}
const wrapper =  document.querySelector('[data-wrapper]')
const changeBackgroundButton = document.querySelector('[data-check]');
const formElem = document.forms.form;
changeBackgroundButton.addEventListener( "click" , changeBackground);

formElem.onsubmit = async (e) => {
    e.preventDefault();
    console.log(formElem);

    let response = await fetch('https://api.github.com', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
  };