import './reset.css'
import './style.scss'

const openTooltipButton = document.querySelector('#open-tooltip')
const tooltipComponent = document.querySelector('#tooltip')

let isOpen = false
tooltipComponent?.setAttribute('data-open', isOpen.toString())
openTooltipButton?.setAttribute('data-open', isOpen.toString())

tooltipComponent?.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
})

openTooltipButton?.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    if (!isOpen) {
        openTooltip()
        document.body.addEventListener('click', closeTooltip)
    } else {
        closeTooltip()
    }
})

function openTooltip() {
    tooltipComponent?.setAttribute('data-open', 'true')
    openTooltipButton?.setAttribute('data-open', 'true')
    isOpen = true
}

function closeTooltip() {
    tooltipComponent?.setAttribute('data-open', 'false')
    openTooltipButton?.setAttribute('data-open', 'false')
    isOpen = false
}
