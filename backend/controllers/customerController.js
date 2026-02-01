const Customer = require("../models/customer");

exports.createCustomer = async(req,res)=>{
 const customer = await Customer.create({...req.body,createdBy:req.user.id});
 res.json(customer);
};

exports.getCustomers = async(req,res)=>{
 const customers = await Customer.find({createdBy:req.user.id});
 res.json(customers);
};

exports.updateCustomer = async(req,res)=>{
 await Customer.findByIdAndUpdate(req.params.id,req.body);
 res.json("Updated");
};

exports.deleteCustomer = async(req,res)=>{
 await Customer.findByIdAndDelete(req.params.id);
 res.json("Deleted");
};
