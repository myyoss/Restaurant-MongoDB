var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadPage(ev) {
    handleGetAllProducts(ev);
}
function handleAdd(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        ev.preventDefault();
        let { category, name, price, img } = ev.target.elements;
        category = category.value;
        name = name.value;
        price = price.value;
        img = img.value;
        const { data } = yield axios.post('/add-product', { category, name, price, img });
        console.log(data);
        this.handleGetAllProducts();
    });
}
function handleGetAllProducts(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios.get('/get-all-products').then(({ data }) => {
            console.log(data);
            const root = document.querySelector('#root');
            renderAll(root, data);
        });
    });
}
function handleGetProductByNameIsraeli(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios.get('/get-product-by-israeli').then(({ data }) => {
            console.log(data);
            const root = document.querySelector('#root');
            renderAll(root, data);
        });
    });
}
function handleGetProductByNameAmerican(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios.get('/get-product-by-american').then(({ data }) => {
            console.log(data);
            const root = document.querySelector('#root');
            renderAll(root, data);
        });
    });
}
function handleGetProductByNameItalian(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios.get('/get-product-by-italian').then(({ data }) => {
            console.log(data);
            const root = document.querySelector('#root');
            renderAll(root, data);
        });
    });
}
function handleGetProductByNameJapanese(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios.get('/get-product-by-japanese').then(({ data }) => {
            console.log(data);
            const root = document.querySelector('#root');
            renderAll(root, data);
        });
    });
}
function handleGetProductByNameDrinks(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios.get('/get-product-by-drinks').then(({ data }) => {
            console.log(data);
            const root = document.querySelector('#root');
            renderAll(root, data);
        });
    });
}
function handleUpdatePrice(ev, productId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(ev, productId);
        const price = ev.target.value;
        const { data } = yield axios.patch('/update-product-price', { productId, price });
        loadPage(ev);
    });
}
function handleUpdateName(ev, productId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(ev, productId);
        const name = ev.target.value;
        const { data } = yield axios.patch('/update-product-name', { productId, name });
        loadPage(ev);
    });
}
function handleDelete(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield axios.delete('/delete-product', { data: { productId } });
        this.handleGetAllProducts();
    });
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
        `;
    });
    root.innerHTML = html;
}
//# sourceMappingURL=index.js.map