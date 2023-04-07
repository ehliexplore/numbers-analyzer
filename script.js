let user = document.getElementById('userInput')
let res = document.getElementById('resOutput')
let res2 = document.getElementById('res2')
let numbers = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(user.value) && !inList(user.value, numbers)) {
        numbers.push(Number(user.value))
        let item = document.createElement('option')
        item.text = `Value ${user.value} added`
        res.appendChild(item)
        res2.innerHTML = ''
    } else {
        alert('Invalid number or already in the list.')
    }
    user.value = ''
    user.focus()
}

function finalize() {
    if (numbers.length == 0) {
        alert('Add values before finalize.')
    } else {
        let tot = numbers.length
        let bigger = numbers[0]
        let smaller = numbers[0]
        let sum = 0
        let average = 0
        for (let pos in numbers) {
            sum += numbers[pos]
            if (numbers[pos] > bigger) 
                bigger = numbers[pos] 
            
           if (numbers[pos] < smaller) 
                smaller = numbers[pos]
            
        }
        average = sum / tot
        
        res2.innerHTML = ''
        res2.innerHTML += `<p>We have ${tot} registered numbers<p>`
        res2.innerHTML += `<p>The bigger value is ${bigger}</p>`
        res2.innerHTML += `<p>The smaller value is ${smaller} </p>`
        res2.innerHTML += `<p>The sum of the values is ${sum}</p>`
        res2.innerHTML += `<p>The average of the numbers is ${average}</p>`
        
    }
}