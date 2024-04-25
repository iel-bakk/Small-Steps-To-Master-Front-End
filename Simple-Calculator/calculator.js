const main = document.createElement("main")

// creating the three sections of the calculator, check the readMe file to understand

const firstSection = document.createElement("div")
const secondSection = document.createElement("div")
const thirdSection = document.createElement("div")

// create first section elements
const firstSectionInput = document.createElement("input")
const firstSectionDelete = document.createElement("button")
    firstSectionDelete.textContent = "DEL"

    // add elements to the first section .
        firstSection.appendChild(firstSectionInput)
        firstSection.appendChild(firstSectionDelete)

// create second section elements

    // first Sub Section
    const firstSubSection = document.createElement("section")
        for (let i = 0; i < 10; i++) {
            const button = document.createElement("button")
            button.textContent = i
            // add the event listener to change the calculation formula
            firstSubSection.appendChild(button)
        }

    // Second Sub Section
    const secondSubSection = document.createElement("section")

    const plusButton = document.createElement("button")
        plusButton.textContent = "+"
    const minusButton = document.createElement("button")
        minusButton.textContent = "-"

    secondSubSection.appendChild(plusButton)
    secondSubSection.appendChild(minusButton)

// add elements to the second section
secondSection.appendChild(firstSubSection)
secondSection.appendChild(secondSubSection)

// create third section elements

    const equalButton = document.createElement("button")
        equalButton.textContent = "="
    const ClearButton = document.createElement("button")
        ClearButton.textContent = "CLEAR"

// add elements to the third section
thirdSection.appendChild(ClearButton)
thirdSection.appendChild(equalButton)

// add sections to the main element
main.appendChild(firstSection)
main.appendChild(secondSection)
main.appendChild(thirdSection)

// add the main to the body of our document
document.body.appendChild(main)
