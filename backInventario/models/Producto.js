const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    nombre: {
      type:String,
      required: true      
    },
    costo: {
      type: Number,
      required: true
    },
    iva: {
      type:Number
    },
    precio: {
      type: Number
    }
  },
  {
    timestamps: true,
    versionKey: false
  }

)
module.exports = model("Product", productSchema);