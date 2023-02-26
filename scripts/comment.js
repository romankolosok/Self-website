function likeIncrement(element) {
    elementParent = element.parentNode
    parentsElementParent = elementParent.parentNode
    oppositeValue = -1 * Number(element.getAttribute('value'))
    ownCounter = elementParent.querySelector('.counter')
    oppositeCounter = parentsElementParent.querySelector(`label:has([value='${oppositeValue}']) .counter`)
    btn = parentsElementParent.querySelector(`[value='${oppositeValue}']`)
    if(btn.active){
        btn.active = false
        counterValue = oppositeCounter.textContent
        oppositeCounter.textContent = +counterValue - 1
    }
    if(!element.active) {
        element.active = true
        counterValue = ownCounter.textContent
        ownCounter.textContent = Number(counterValue) + 1
    }
}

function stretch (commentElement) {
    commentElement.style.height = ""
    commentElement.style.height = Math.min(commentElement.scrollHeight, 200) + "px"
}

function formSubmissionHandler(element){
    formElement = element.parentNode.parentNode
    nameElement = formElement.querySelector('input[placeholder*="name"]')
    emailElement = formElement.querySelector('input[placeholder*="email"]')
    commentElement = formElement.querySelector('textarea')

    if(!!commentElement.value && !!emailElement.value && /\w{2,}\@\w{2,}\.\w{2,15}/.test(emailElement.value) && !!nameElement.value){
        response = `What do you think you're doing? This website is not a place for harassing people. You, ${nameElement.value} are not allowed to put your mean comments here. You better think before writing this next time:`
        popup = document.getElementById('popup')
        popup.querySelector('p').textContent = response
        popup.querySelector('blockquote').textContent = commentElement.value
        popup.style.display = "flex"
    }

}

function hidePopup(){
    document.getElementById('popup').style.display = 'none'
    document.querySelector('form').reset()
}
