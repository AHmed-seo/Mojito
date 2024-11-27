// nameInput
// urlInput

var bookMarkNameInput = document.getElementById('nameInput');
var siteUrlNameInput = document.getElementById('urlInput');
var bookMarkWrapper = document.getElementById('bookmarkContainer')
var nameRegex = /^\w{3,}(\s+\w+)*$/
var urlRegex =/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
var nameAlert = document.getElementById('nameAlert')
var urlAlert = document.getElementById('urlAlert')
var inputs =[];
inputs=JSON.parse(localStorage.getItem('inputs')) || []
displayData()


function addBookMark(){
    var bookMark = {
        siteName:bookMarkNameInput.value,
        url:siteUrlNameInput.value,
    }
    inputs.push(bookMark)
    displayData()
    localStorage.setItem('inputs',JSON.stringify(inputs))
}

function displayData(){
    cartoona = ""
    for(var i = 0 ; i< inputs.length ; i++ ){
        cartoona+=`
         <tr>
            <td>${i+1}</td>
            <td>${inputs[i].siteName}</td>
            <td><button class="btn btn-warning"><a href="${inputs[i].url}">Visit</a></button></td>
            <td><button class="btn btn-danger" onclick="deleteBookmark(${i})">Delete</button></td>
        </tr>
           `
    }
    bookMarkWrapper.innerHTML=cartoona

}

function deleteBookmark(index){
    inputs.splice(index,1)
    displayData()
    localStorage.setItem('inputs',JSON.stringify(inputs))
}


function validateName(nameValue){
    if(nameRegex.test(nameValue) == true){
        nameAlert.classList.add('d-none')
        bookMarkNameInput.classList.replace('is-invalid', 'is-valid')

        
    }else{
        nameAlert.classList.remove('d-none')
        bookMarkNameInput.classList.add('is-invalid')

    }
}


function validateUrl(urlValue){
    if(urlRegex.test(urlValue) == true){
    urlAlert.classList.add('d-none')
    siteUrlNameInput.classList.replace('is-invalid', 'is-valid')


    }else{
        urlAlert.classList.remove('d-none')
        siteUrlNameInput.classList.add('is-invalid')


    }  
}