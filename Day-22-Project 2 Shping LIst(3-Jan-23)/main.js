
const subEle = document.querySelector('.price-num-submiter')
const proPrice = document.querySelector('.pro-price')
const proName = document.querySelector('.pro-name')
const proList = document.querySelector('.product-list')



function reciveInputs(){
    const inPrize = proPrice.value
    const inName = proName.value

    return{ inPrize, inName }
}

function alerts(name, price){
    let isValid = true

    // Emty alert
    if(name === "" || price === ""){
        isValid = false
        alert('Please Fill up the input Field')
    }

    // not number alert
    if(Number(price) !== Number(price)){
        isValid = false
        alert('Please Give a acurate number in prouduct price field')
    }

    return isValid
}



let allProduct = [

]

function addProductName(name, price){
    const product = {
        id: allProduct.length + 1,
        proName: name,
        proPrice: price,
    }

    allProduct.push(product)

    return product
}

function showProducttoUI(productInfo){
    const {id, proName, proPrice} = productInfo

    const element = `<li data-productId="${id}">
                        <div class="product-info">
                            <strong>${proName}</strong> -
                            <span>${proPrice} T.K</span>
                        </div>
                        <div class="action-btn">
                            <i class="fa-solid fa-pencil"></i>
                            <i class="fa-solid fa-trash-can delet-li"></i>
                        </div>
                    </li>`

        proList.insertAdjacentHTML('afterbegin', element)

}


function subRecive(evt){
    // stop the page loading
    evt.preventDefault()

    // recive inputs
    const { inPrize, inName } = reciveInputs()
    
    // Allert recive
    const isValid = alerts(inName, inPrize)
    
    proPrice.value = ""
    proName.value = ""
    
    if(!isValid) return
    

    
    const product = addProductName(inName, inPrize)

    showProducttoUI(product)

    
}

function getProductId(evt){
    const lielm = evt.target.parentElement.parentElement
    const id = lielm.getAttribute('data-productId')
    return id 
}

function removeitem(id){
    allProduct = allProduct.filter(product => product.id !== id)
}

function removeidformUI(id){
    document.querySelector(`[data-productId="${id}"]`).remove()
}
                              
function handleManipulatepro(evt){
    if(evt.target.classList.contains('delet-li')){
       const id = Number(getProductId(evt))

       removeitem(id)

       removeidformUI(id)
    }
}

proList.addEventListener('click', handleManipulatepro)

subEle.addEventListener('click', subRecive)








