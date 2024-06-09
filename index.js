let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let entry

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    entry = count + " - "
    saveEl.textContent += entry
    count = 0
    countEl.textContent = 0
}

