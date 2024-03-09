const Product = require('../model.product')

// return list of products
module.exports.getAllProducts =async(req,res)=>{
    try {
        const products = await Product.find({}, '_id name quantity');
        res.status(200).send({products});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error:"Error in fetching list of products"});
    }
    
}
// add products
module.exports.addProduct= async(req,res)=>{
    try {   
        var product = await Product.create(req.body);
        data = {product:{
            name:product.name,
            quantity:product.quantity
        }}
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error:"Product already exist"});
    }
}
// return updated product
module.exports.updateQtyProduct= async(req,res)=>{
    try {
               const number = parseInt(req.query.number);
               const product = await Product.findById(req.params.id,'_id name quantity');
               if (!product) {
                   return res.status(404).json({ error: 'Product not found' });
               } 
               // Update the quantity of the product
               product.quantity += number;
               await product.save();
               res.status(200).json({product,message:"updated successfully"});
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
// delete product
module.exports.deleteProduct= async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(product=== null){
            return res.status(401).send({message:"product does not exist"});
        }
        res.status(200).json({message:"product deleted"});
    } catch (error) {
        console.log(error);
        res.status(400).json({ error:"error in product deletion"});
    }
}
