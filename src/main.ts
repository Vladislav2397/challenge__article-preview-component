import './reset.css'
import './style.scss'

const openTooltipButton = document.querySelector('#open-tooltip')
const tooltipComponent = document.querySelector('#tooltip')

let isOpen = false
tooltipComponent?.setAttribute('data-open', isOpen.toString())
openTooltipButton?.setAttribute('data-open', isOpen.toString())

openTooltipButton?.addEventListener('click', () => {
    if (!isOpen) {
        tooltipComponent?.setAttribute('data-open', 'true')
        openTooltipButton?.setAttribute('data-open', 'true')
        isOpen = true
    } else {
        tooltipComponent?.setAttribute('data-open', 'false')
        openTooltipButton?.setAttribute('data-open', 'false')
        isOpen = false
    }
})
