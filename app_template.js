//your code here!
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#button-compute').click = function () {
        const num = document.createElement('p')
        const number = document.querySelector("#input-number").value
       
        console.log(number)
        num.innerHTML = '620610774' + number
        num.append()

    }
    
},false)