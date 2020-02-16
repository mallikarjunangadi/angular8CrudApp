let express = require("express");
let productModel = require("./../models/product").productModel;
let productRoutes = express.Router();

productRoutes.route("/list").get((req, res) => {
    console.log("inside get list");

    productModel.find((err, docs) => {
        console.log("inside get list err ", err);
        if (err) {
            res.status(400).json({ message: "Unable to get Products" });
        } else if (docs && docs.length) {
            res.status(200).json(docs);
        } else {
            res.status(200).json([]);
        }
    })
})

productRoutes.route("/:id").get((req, res) => {

    let id = req.params.id;
    console.log("inside get list by id ", id);

    productModel.findById(id, (err, docs) => {
        console.log("inside get list err ", err);
        if (err) {
            res.status(400).json({ message: "Unable to get Products" });
        } else if (docs) {
            res.status(200).json(docs);
        } else {
            res.status(200).json({});
        }
    })
})

productRoutes.route("/:id").delete((req, res) => {

    let id = req.params.id;
    console.log("inside delete by id ", id);

    productModel.remove({_id: id}, (err, docs) => {
        console.log("inside get list err ", err);
        if (err) {
            res.status(400).json({ message: "Unable to delete Product" });
        } else {
            res.status(200).json(docs);
        }
    })
})

productRoutes.route("/edit/:id").put((req, res) => {

    let id = req.params.id;
    let body = req.body;
    console.log("inside update by id ", id, body);

    productModel.findOneAndUpdate({ _id: id }, body, (err, docs) => {
        console.log("inside get list err ", err);
        if (err) {
            res.status(400).json({ message: "Unable to get Products" });
        } else if (docs) {
            res.status(200).json(docs);
        } else {
            res.status(200).json({});
        }
    })
})

productRoutes.route("/add").post((req, res) => {
    let bodyData = req.body;

    console.log("body data ", bodyData);
    let productData = new productModel(bodyData);

    productData.save((err, doc) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(doc);
        }
    })
})

module.exports = {
    productRoutes: productRoutes
}

