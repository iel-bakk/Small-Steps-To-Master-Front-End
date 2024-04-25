const main = document.createElement("main")

// creating the three sections of the calculator, check the readMe file to understand

const firstSection = document.createElement("div")
    firstSection.className = "firstSection"
const secondSection = document.createElement("div")
    secondSection.className = "secondSection"
const thirdSection = document.createElement("div")
    thirdSection.className = "thirdSection"

// create first section elements
const firstSectionInput = document.createElement("input")
    firstSectionInput.placeholder = "ONLY USE ONE OP !"
const firstSectionDelete = document.createElement("button")
    firstSectionDelete.textContent = "DEL"
    firstSectionDelete.addEventListener("click", ()=> {
        const tmp = firstSectionInput.value.split('')
        tmp.pop()
        firstSectionInput.value = tmp.join('')
    })

    // add elements to the first section .
        firstSection.appendChild(firstSectionInput)
        firstSection.appendChild(firstSectionDelete)

// create second section elements

    // first Sub Section
    const firstSubSection = document.createElement("section")
    firstSubSection.className = "numbers"
        for (let i = 0; i < 10; i++) {
            const button = document.createElement("button")
            button.textContent = i
            // add the event listener to change the calculation formula
            button.addEventListener("click", (e)=> {
                firstSectionInput.value += e.target.textContent;
                console.log("clicked on a number : ", e.target.textContent)
                console.log("input text content is ", firstSectionInput.textContent)
            })
            firstSubSection.appendChild(button)
        }

    // Second Sub Section
    const secondSubSection = document.createElement("section")
        secondSubSection.className = "signs"
    const plusButton = document.createElement("button")
        plusButton.textContent = "+"
        plusButton.addEventListener("click", ()=> {
            firstSectionInput.value += " + "
        })
    const minusButton = document.createElement("button")
        minusButton.textContent = "-"
        minusButton.addEventListener("click", ()=> {
            firstSectionInput.value += " - "
        })

    secondSubSection.appendChild(plusButton)
    secondSubSection.appendChild(minusButton)

// add elements to the second section
secondSection.appendChild(firstSubSection)
secondSection.appendChild(secondSubSection)

// create third section elements

    const equalButton = document.createElement("button")
        equalButton.textContent = "="
        equalButton.addEventListener("click", ()=> {
            const inputNumbers = firstSectionInput.value.split(" ")
            if (inputNumbers.length === 3) {
                switch (inputNumbers[1]) {
                    case "+" :
                        firstSectionInput.value = parseInt(inputNumbers[0]) + parseInt(inputNumbers[2]);
                        break ;
                    case "-" :
                        firstSectionInput.value = parseInt(inputNumbers[0]) - parseInt(inputNumbers[2]);
                        break ;
                    default :
                        firstSectionInput.value = ""
                    }
                }
            else {
                firstSectionInput.value = ""
            }
        })
    const ClearButton = document.createElement("button")
        ClearButton.textContent = "CLEAR"
        ClearButton.addEventListener("click", ()=> {
            firstSectionInput.value = ""
        })

// add elements to the third section
thirdSection.appendChild(ClearButton)
thirdSection.appendChild(equalButton)

// add sections to the main element
main.appendChild(firstSection)
main.appendChild(secondSection)
main.appendChild(thirdSection)

// add the main to the body of our document
document.body.appendChild(main)
