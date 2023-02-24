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