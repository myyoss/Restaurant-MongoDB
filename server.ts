import express from "express";
import mongoose from 'mongoose';
require('dotenv').config() //===> insert high as possible, before routs
const app = express();
const port = process.env.PORT || 3123;

app.use(express.static("public"));
app.use(express.json());

const uri:any = process.env.MONGODB_URI;
mongoose.connect(uri);

const ProductSchema = new mongoose.Schema({
  category: String,
  name: String,
  price: String,
  img: String
}) 

const Product = mongoose.model('product', ProductSchema); 



app.post("/add-product", async (req, res) => {
  try {
    let {category, name, price, img } = req.body;
    if (category && name && price && img) {
      const newProduct = new Product({category, name, price, img })
      const result = await newProduct.save()

      res.send({ result });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});


app.get('/get-all-products', async (req, res) => {
  const products = await Product.find({})
  res.send(products);
});

app.get('/get-product-by-israeli', async (req, res) => {
  const products = await Product.find({ category: 'Israeli' })
  res.send(products);
});

app.get('/get-product-by-american', async (req, res) => {
  const products = await Product.find({ category: 'American' })
  res.send(products);
});

app.get('/get-product-by-italian', async (req, res) => {
  const products = await Product.find({ category: 'Italian' })
  res.send(products);
});

app.get('/get-product-by-japanese', async (req, res) => {
  const products = await Product.find({ category: 'Japanese' })
  res.send(products);
});

app.get('/get-product-by-drinks', async (req, res) => {
  const products = await Product.find({ category: 'Drinks' })
  res.send(products);
});

app.patch('/update-product-price', async (req, res) => {
  const { productId, price } = req.body;
  const products = await Product.updateOne({ _id: productId }, { price: price })
  res.send(products);
})

app.patch('/update-product-name', async (req, res) => {
  const { productId, name } = req.body;
  const products = await Product.updateOne({ _id: productId }, { name: name })
  res.send(products);
})

app.delete('/delete-product', async (req, res) => {
  const {productId} = req.body;

  const products = await Product.deleteOne({ _id: productId });
  res.send(products)
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
