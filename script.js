
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzgJ-XoibIUgRC5RXmsicDUwZAxQ7qspCNvpwjFDrAQ8VQC89YVG5YU9vxrHIpvxQqseQ/exec'
    const form = document.forms['google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank You ! You're registered in explore vidhya....We will contact you soon. Have a nice day ^_^"))
        .catch(error => console.error('Error!', error.message))
    })

    function clearFormData (){

    }
