function loadPage(ev){
    handleGetAllProducts(ev)
}

async function handleAdd(ev) {
    ev.preventDefault();
    let { category, name, price, img } = ev.target.elements;
    category = category.value
    name = name.value;
    price = price.value;
    img = img.value;

    const { data } = await axios.post('/add-product', { category, name, price, img })
    console.log(data)
    this.handleGetAllProducts()
}


async function handleGetAllProducts(ev) {
    await axios.get('/get-all-products').then(({ data }) => {
        console.log(data)
        const root = document.querySelector('#root');
        renderAll(root, data);
    })
}

async function handleGetProductByNameIsraeli(ev) {
    await axios.get('/get-product-by-israeli').then(({ data }) => {
        console.log(data)
        const root = document.querySelector('#root');
        renderAll(root, data);
    })
}

async function handleGetProductByNameAmerican(ev) {
    await axios.get('/get-product-by-american').then(({ data }) => {
        console.log(data)
        const root = document.querySelector('#root');
        renderAll(root, data);
    })
}

async function handleGetProductByNameItalian(ev) {
    await axios.get('/get-product-by-italian').then(({ data }) => {
        console.log(data)
        const root = document.querySelector('#root');
        renderAll(root, data);
    })
}

async function handleGetProductByNameJapanese(ev) {
    await axios.get('/get-product-by-japanese').then(({ data }) => {
        console.log(data)
        const root = document.querySelector('#root');
        renderAll(root, data);
    })
}

async function handleGetProductByNameDrinks(ev) {
    await axios.get('/get-product-by-drinks').then(({ data }) => {
        console.log(data)
        const root = document.querySelector('#root');
        renderAll(root, data);
    })
}
async function handleUpdatePrice(ev, productId) {
    console.log(ev, productId)
    const price = ev.target.value;
    const { data } = await axios.patch('/update-product-price', { productId, price })
    loadPage(ev)

}

async function handleUpdateName(ev, productId) {
    console.log(ev, productId)
    const name = ev.target.value;
    const { data } = await axios.patch('/update-product-name', { productId, name })
    loadPage(ev)

}

async function handleDelete(productId) {
    const { data } = await axios.delete('/delete-product', {data:{productId}})
    this.handleGetAllProducts()
}


function renderAll(root, data) {
    
    let html = '';
    data.forEach(product => {
        html += `<div class="product">
        <div class="productName"><span style="color: #000;"></span>${product.name}</div>
        <div class="productprice"><span style="color: #000;"></span>${product.price}&#8362;
        </div>
        <div><img src="${product.img}" alt=""></div>
        <div><input type="text" placeholder="name" value="${product.name}" onblur="handleUpdateName(event, '${product._id}')"/></div>
        <div><input type="text" placeholder="price" value="${product.price}" onblur="handleUpdatePrice(event, '${product._id}')"/></div>
        
        <div><button onclick="handleDelete('${product._id}')">DELETE</button></div>
        </div>
        `
    });
    
    root.innerHTML = html;
}
