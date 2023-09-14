const mongoose = require("mongoose");
const Filter = require("bad-words");

const productSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "please enter a product name"],
        trim: true,
        maxlength: [100, "product name can’t exceed 100 characters"],
        validate: {
            validator: (val) => {
                return !(new Filter().isProfane(val))
            },
            messages: 'can’t use profane words'
        }
    },
    description: {
        type: "string",
        required: [true, "please enter a product description"],
        validate: {
            validator:
                (val) => {
                    return !(new Filter().isProfane(val));
                },
            message: "can’t use profane words"
        }
    },
    price: {
        type: Number,
        required: [true, "please enter a product price"],
        maxlength: [5, "product  price can’t exceed 5 characters"],
    },
    rating: {
        type: Number,
        default: 0
    },
    category: {
        type: "string",
        required: [true, "please enter your selected category "],

    },
    seller: {
        type: 'string',
        required: [true, 'please enter  product seller'],
    },
    stock: {
        type: Number,
        default: 0,

    },
    numOfReviews: {
        type: Number,
        default: 0
    },

    reviews: [{
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
        ,
        rating: {
            type: Number,
            required: true,
            default: 0
        }
        ,
        comment: {
            type: String,
            required: true,
            validate: {
                validator: (val) => {
                    return !(new Filter().isProfane(val))
                },
                message: 'can’t use profane words'
            },

        }
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    images: {
        type: [{
            public_id: {
                type: String,

            },
            url: {
                type: String,
            }
        }],
        default: [{
            public_id: 0,
            url: 'https://media.istockphoto.com/id/1253169835/photo/abstract-geometric-shape-cylinder-and-torus-design-for-cosmetic-or-product-display-podium-3d.jpg?s=2048x2048&w=is&k=20&c=YsgoVKlqVWlUgIez4L8EW95SEX6w-8va9BIwJUg0eCM='
        }]

    }

},
    {
        timestamps: true
    }
)


module.exports = mongoose.model("Product", productSchema);
