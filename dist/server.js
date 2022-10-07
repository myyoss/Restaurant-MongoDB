"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config(); //===> insert high as possible, before routs
const app = express_1.default();
const port = process.env.PORT || 3123;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const uri = process.env.MONGODB_URI;
mongoose_1.default.connect(uri);
const ProductSchema = new mongoose_1.default.Schema({
    category: String,
    name: String,
    price: String,
    img: String
});
const Product = mongoose_1.default.model('product', ProductSchema);
app.post("/add-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { category, name, price, img } = req.body;
        if (category && name && price && img) {
            const newProduct = new Product({ category, name, price, img });
            const result = yield newProduct.save();
            res.send({ result });
        }
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.get('/get-all-products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product.find({});
    res.send(products);
}));
app.get('/get-product-by-israeli', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product.find({ category: 'Israeli' });
    res.send(products);
}));
app.get('/get-product-by-american', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product.find({ category: 'American' });
    res.send(products);
}));
app.get('/get-product-by-italian', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product.find({ category: 'Italian' });
    res.send(products);
}));
app.get('/get-product-by-japanese', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product.find({ category: 'Japanese' });
    res.send(products);
}));
app.get('/get-product-by-drinks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product.find({ category: 'Drinks' });
    res.send(products);
}));
app.patch('/update-product-price', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, price } = req.body;
    const products = yield Product.updateOne({ _id: productId }, { price: price });
    res.send(products);
}));
app.patch('/update-product-name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, name } = req.body;
    const products = yield Product.updateOne({ _id: productId }, { name: name });
    res.send(products);
}));
app.delete('/delete-product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    const products = yield Product.deleteOne({ _id: productId });
    res.send(products);
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
