//your code here!

function eiei() {
    const task = document.querySelector('#compute-result')
    const num = document.createElement('p')
    const number = document.getElementById("input-number").value
    console.log(number)
    num.innerHTML = 620610774 + parseInt(number)
    task.append(num)
}

function tabletable() {
    const task = document.querySelector('#created')
    const create = document.createElement('p')
    create.innerHTML = 'Created by Kitiyaporn Takham 620610774'
    task.append(create)

    const table = document.querySelector('#table')
    const in_row = document.getElementById('input-row').value
    const in_col = document.getElementById('input-col').value

    let count = 1;
    for (let i = 0; i < in_row; i++) {
        const row = document.createElement('tr')
       
        for (let j = 0; j < in_col; j++) {
            const col = document.createElement('td')

            if ((i + j) % 2 !== 1) {
                col.innerHTML = '*'
            }
            if((i + j) % 2 !== 0) {
                col.innerHTML = count
            }
            count++
            row.append(col)
        }
        table.append(row)
    }
    
}