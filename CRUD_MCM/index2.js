// EVENTS
document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#form')
    const nameInput = document.querySelector('#name')
    const moneyInput = document.querySelector('#money')
    const descriptionInput = document.querySelector('#description')
    const list = document.querySelector('#list')
    const data = []

    form.addEventListener('submit', function(event){
        event.preventDefault()
        const name = nameInput.value.trim()
        const money = moneyInput.value.trim()
        const description = descriptionInput.value.trim()
        if (name !== '') {   
            nameInput.value
            moneyInput.value
            descriptionInput.value
            addProduto(name, money, description)
        }
    })

    // --------------------------------- CREATE ---------------------------------
    function addProduto(name, money, description){
        const produto = {
            id: data.length + 1,
            name,
            money,
            description
        }
        console.log(produto.id)
        data.push(produto)
        readList()
    }

    // --------------------------------- READ ---------------------------------
    function readList(){
        list.innerHTML = ''
        data.forEach((item, i) =>{
            const form = document.createElement('ol')
            const id = document.createElement('span')
            const nameSpan = document.createElement('input')
            const moneySpan = document.createElement('input')
            const descriptionSpan = document.createElement('input')
            const edit = document.createElement('button')
            const delet = document.createElement('button')

            id.innerHTML = item.id
            nameSpan.value = item.name
            moneySpan.value = item.money
            descriptionSpan.value = item.description
            edit.textContent = 'Editar'
            delet.textContent = 'Excluir'

            // --------------------------------- UPDATE ---------------------------------
            edit.addEventListener('click', function(){
                const nameEdit = prompt('Qual o novo nome para o produto?')
                if (nameEdit !== null && nameEdit !== '') {
                    item.name = nameEdit
                    readList()
                }
            })
            edit.addEventListener('click', function(){
                const moneyEdit = prompt('Qual o novo valor para o produto?')
                if (moneyEdit !== null && moneyEdit !== '') {
                    item.money = moneyEdit
                    readList()
                }
            })
            edit.addEventListener('click', function(){
                const descriptionEdit = prompt('Qual a nova descrição do produto?')
                if (descriptionEdit !== null && descriptionEdit !== '') {
                    item.description = descriptionEdit 
                    readList()
                }
            })

            // --------------------------------- DELETE ---------------------------------
            delet.addEventListener('click', function(){
                const confirmed = confirm('Tem certeza que deseja excluir este produto?')
                if (confirmed) {
                    data.splice(i, 1)
                    readList()
                }
            })
            form.append(id)
            form.append(nameSpan)
            form.append(moneySpan)
            form.append(descriptionSpan)
            form.append(edit)
            form.append(delet)
            list.append(form)
        })
    }
})