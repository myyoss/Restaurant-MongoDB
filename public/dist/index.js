var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function loadPage(ev) {
    handleGetAllProducts(ev);
}
function handleAdd(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, category, name, price, img, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, category = _a.category, name = _a.name, price = _a.price, img = _a.img;
                    category = category.value;
                    name = name.value;
                    price = price.value;
                    img = img.value;
                    return [4 /*yield*/, axios.post('/add-product', { category: category, name: name, price: price, img: img })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    this.handleGetAllProducts();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetAllProducts(ev) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-all-products').then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                        var root = document.querySelector('#root');
                        renderAll(root, data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetProductByNameIsraeli(ev) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-product-by-israeli').then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                        var root = document.querySelector('#root');
                        renderAll(root, data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetProductByNameAmerican(ev) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-product-by-american').then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                        var root = document.querySelector('#root');
                        renderAll(root, data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetProductByNameItalian(ev) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-product-by-italian').then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                        var root = document.querySelector('#root');
                        renderAll(root, data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetProductByNameJapanese(ev) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-product-by-japanese').then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                        var root = document.querySelector('#root');
                        renderAll(root, data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetProductByNameDrinks(ev) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-product-by-drinks').then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                        var root = document.querySelector('#root');
                        renderAll(root, data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpdatePrice(ev, productId) {
    return __awaiter(this, void 0, void 0, function () {
        var price, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(ev, productId);
                    price = ev.target.value;
                    return [4 /*yield*/, axios.patch('/update-product-price', { productId: productId, price: price })];
                case 1:
                    data = (_a.sent()).data;
                    loadPage(ev);
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpdateName(ev, productId) {
    return __awaiter(this, void 0, void 0, function () {
        var name, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(ev, productId);
                    name = ev.target.value;
                    return [4 /*yield*/, axios.patch('/update-product-name', { productId: productId, name: name })];
                case 1:
                    data = (_a.sent()).data;
                    loadPage(ev);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDelete(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios["delete"]('/delete-product', { data: { productId: productId } })];
                case 1:
                    data = (_a.sent()).data;
                    this.handleGetAllProducts();
                    return [2 /*return*/];
            }
        });
    });
}
function renderAll(root, data) {
    var html = '';
    data.forEach(function (product) {
        html += "<div class=\"product\">\n        <div class=\"productName\"><span style=\"color: #000;\"></span>" + product.name + "</div>\n        <div class=\"productprice\"><span style=\"color: #000;\"></span>" + product.price + "&#8362;\n        </div>\n        <div><img src=\"" + product.img + "\" alt=\"\"></div>\n        <div><input type=\"text\" placeholder=\"name\" value=\"" + product.name + "\" onblur=\"handleUpdateName(event, '" + product._id + "')\"/></div>\n        <div><input type=\"text\" placeholder=\"price\" value=\"" + product.price + "\" onblur=\"handleUpdatePrice(event, '" + product._id + "')\"/></div>\n        \n        <div><button onclick=\"handleDelete('" + product._id + "')\">DELETE</button></div>\n        </div>\n        ";
    });
    root.innerHTML = html;
}
