const products = [
    {
        name: "blueDress",
        price: 110,
        category: "dresses",
        rating: 1,
        quantity: 1,
        description:
            "New look A green cotton summer cutoff sleeve dress for work,parties,everthing!",
        images: [{
            public_id: "blueDress_ftrurj",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/blueDress_ftrurj.webp",
        },
        {
            public_id: "pinkDress_onftp4",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259663/products/pinkDress_onftp4.webp",
        }

        ],
        stock: 14,
    },
    {
        name: "pinkDress",
        price: 150,
        category: "dresses",
        rating: 2,
        accessory: null,
        quantity: 1,
        description:
            "Greate pink cotton summer cutoff sleeve dress for work,parties,everthing!",
        images: {
            public_id: "pinkDress_onftp4",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259663/products/pinkDress_onftp4.webp",
        },
        stock: 30,
    },
    {
        name: "greenDress",
        price: 200,
        category: "dresses",
        rating: 3,
        quantity: 1,
        description:
            "Cool green cotton summer cutoff sleeve dress for work,parties,everthing!",
        images: [{
            public_id: "greenDress_ybvpz4",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259662/products/greenDress_ybvpz4.webp",
        }],
        stock: 50,
    },
    {
        name: "greenPants",
        price: 40,
        category: "pants",
        rating: 5,
        quantity: 1,
        description: "A high quality green casual women pant ",
        images: [{
            public_id: "greenPant_iig4me",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259662/products/greenPant_iig4me.webp",
        }],
        stock: 40,
    },
    {
        name: "blackPants",
        price: 60,
        category: "pants",
        rating: 3.5,

        accessory: null,
        quantity: 1,
        description: "A high quality black casual women pant ",
        images: [{
            public_id: "blackPant_jagedx",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/blackPant_jagedx.webp",
        }],
        stock: 45,
    },
    {
        name: "brownPants",
        price: 50,
        category: "pants",
        rating: 4,
        quantity: 1,
        description: "A high quality brown  casual women pant ",
        images: [{
            public_id: "brownPant_iuz2r0",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownPant_iuz2r0.webp",
        }],
        stock: 50,
    },
    {
        name: "whiteShirt",
        price: 60,
        category: "shirts",
        rating: 2,
        quantity: 1,
        description: "A high quality white jeans long sleeve casual women shirt ",
        images: [{
            public_id: "whiteShirt_onxfjq",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259664/products/whiteShirt_onxfjq.webp",
        }],
        stock: 50,
    },
    {
        name: "blackShirt",
        price: 70,
        category: "shirts",
        rating: 2.5,
        quantity: 1,
        description: "A high quality  black jeans long sleeve casual women shirt ",
        images: [{
            public_id: "blackShirt_yewlbz",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/blackShirt_yewlbz.webp",
        }],
        stock: 40,
    },
    {
        name: "brownShirt",
        price: 80,
        category: "shirts",
        rating: 4,
        quantity: 1,
        description: "A high quality  brown jeans long sleeve casual women shirt ",
        images: [{
            public_id: "brownShirt_do0rfv",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownShirt_do0rfv.webp",
        }],
        stock: 60,
    },
    // // {

    // //     name: "blackWatch",
    // //     price: 60,
    // //     category: null,
    // //     rating: 1,
    // //     image: productsImages.blackwatch,
    // //     accessory: "watches",
    // //     quantity: 1,
    // //     description: "A high quality black watch ",
    // //     image: {
    // //         public_id: "brownShirt_do0rfv",
    // //         url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownShirt_do0rfv.webp",
    // //     },
    // //     stock: 10,
    // // },
    // // {

    // //     name: "greenwatch",
    // //     price: 80,
    // //     category: null,
    // //     rating: 4,
    // //     image: productsImages.greenWatch,
    // //     accessory: "watches",
    // //     quantity: 3,
    // //     description: "A high quality green  watch ",
    // // },
    // // {

    // //     name: "goldWatch",
    // //     price: 80,
    // //     category: null,
    // //     rating: 4.5,
    // //     image: productsImages.goldWatch,
    // //     accessory: "watches",
    // //     quantity: 1,
    // //     description: "A high quality gold watch ",
    // // },
    // // {

    // //     name: "goldBarcelet",
    // //     price: 70,
    // //     category: null,
    // //     rating: 4,
    // //     image: productsImages.goldBarcelete,
    // //     accessory: "barcelets",
    // //     quantity: 1,
    // //     description: "A high quality gold barcelet ",
    // // },
    // // {

    // //     name: "silverBarcelet",
    // //     price: 80,
    // //     category: null,
    // //     rating: 4,
    // //     image: productsImages.silverBarcelet,
    // //     accessory: "barcelets",
    // //     quantity: 1,
    // //     description: "A high quality sliver barcelet ",
    // // },
    // // {
    // //     name: "diamondNecklace",
    // //     price: 200,
    // //     category: null,
    // //     rating: 3.5,
    // //     image: productsImages.dimondNecklace,
    // //     accessory: "necklaces",
    // //     quantity: 1,
    // //     description: "A high quality dimond necklace ",
    // // },
    // // {

    // //     name: "goldNecklace",
    // //     price: 150,
    // //     category: null,
    // //     rating: 4,
    // //     image: productsImages.goldNecklace,
    // //     accessory: "necklaces",
    // //     quantity: 1,
    // //     description: "A high quality dimond necklace ",
    // // },
    // // {

    // //     name: "whiteBarcelet",
    // //     price: 100,
    // //     category: null,
    // //     rating: 3.5,
    // //     image: productsImages.whiteBarcelet,
    // //     accessory: "barcelets",
    // //     quantity: 1,
    // //     description: "A high quality white barcelet ",
    // // },
    // // {

    // //     name: "silverNecklace",
    // //     price: 120,
    // //     category: null,
    // //     rating: 3,
    // //     image: productsImages.silverNecklace,
    // //     accessory: "necklaces",
    // //     quantity: 1,
    // //     description: "A high quality silver necklace ",
    // // },
    // // {

    // //     name: "goldRing",
    // //     price: 250,
    // //     category: null,
    // //     rating: 4,
    // //     image: productsImages.goldRing,
    // //     accessory: "rings",
    // //     quantity: 1,
    // //     description: "A high quality gold ring ",
    // // },
    // // {

    // //     name: "silverRing",
    // //     price: 100,
    // //     category: null,
    // //     rating: 4.5,
    // //     image: productsImages.silverRing,
    // //     accessory: "rings",
    // //     quantity: 1,
    // //     description: "A high quality silver ring ",
    // // },
    // // {
    // //     name: "blackHat",
    // //     price: 80,
    // //     category: null,
    // //     rating: 4.5,
    // //     image: productsImages.blackHat,
    // //     accessory: "hats",
    // //     quantity: 1,
    // //     description: "A high quality black hat ",
    // // },
    // // {

    // //     name: "GCUIHat",
    // //     price: 200,
    // //     category: null,
    // //     rating: 5,
    // //     image: productsImages.GCUIHat,
    // //     accessory: "hats",
    // //     quantity: 1,
    // //     description: "A high quality GCUI hat ",
    // // },
    {
        name: "BrownHat",
        price: 60,
        category: "hats",
        rating: 2.5,
        quantity: 1,
        description: "A high quality brown hat ",
        images: [{
            public_id: "brownHat_ccztz0",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownHat_ccztz0.webp",
        }],
        stock: 15,
    },
    // // {
    // //     name: "blackBelt",
    // //     price: 10,
    // //     category: null,
    // //     rating: 1.5,
    // //     image: productsImages.blackBelt,
    // //     accessory: "belts",
    // //     quantity: 1,
    // //     description: "A high quality black belt ",
    // // },
    // // {
    // //     name: "greenBelt",
    // //     price: 15,
    // //     category: null,
    // //     rating: 4.5,
    // //     image: productsImages.greenBelt,
    // //     accessory: "belts",
    // //     quantity: 1,
    // //     description: "A high quality brown hat ",
    // // },
    {
        name: "brownBelt",
        price: 20,
        rating: 3.5,
        category: "belts",
        quantity: 1,
        description: "A high quality brown belt ",
        images: [{
            public_id: "brownBelt_p1b27j",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownBelt_p1b27j.webp",
        }],
        stock: 10,
    },
    {
        name: "brownBelt",
        price: 20,
        category: null,
        rating: 3.5,
        accessory: "belts",
        quantity: 1,
        description: "A high quality brown belt ",
        images: [{
            public_id: "brownBelt_p1b27j",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownBelt_p1b27j.webp",
        }],
        stock: 10,
    },
    {
        name: "brownBelt",
        price: 20,
        category: null,
        rating: 3.5,
        accessory: "belts",
        quantity: 1,
        description: "A high quality brown belt ",
        images: [{
            public_id: "brownBelt_p1b27j",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownBelt_p1b27j.webp",
        }],
        stock: 10,
    },
    {
        name: "brownBelt",
        price: 20,
        category: null,
        rating: 3.5,
        accessory: "belts",
        quantity: 1,
        description: "A high quality brown belt ",
        images: [{
            public_id: "brownBelt_p1b27j",
            url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownBelt_p1b27j.webp",
        }],
        stock: 10,
    },
    // {
    //     name: "brownBelt",
    //     price: 20,
    //     category: null,
    //     rating: 3.5,
    //     accessory: "belts",
    //     quantity: 1,
    //     description: "A high quality brown belt ",
    //     image: {
    //         public_id: "brownBelt_p1b27j",
    //         url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownBelt_p1b27j.webp",
    //     },
    //     stock: 10,
    // },
    // {
    //     name: " diamondRing",
    //     price: 200,
    //     category: null,
    //     rating: 3.5,
    //     image: productsImages.dimondRing,
    //     accessory: "rings",
    //     quantity: 1,
    //     description: "A high quality dimond ring ",
    // },
    // {

    //     name: "whiteBag",
    //     price: 25,
    //     category: null,
    //     rating: 3.5,
    //     image: productsImages.whiteBag,
    //     accessory: "bags",
    //     quantity: 1,
    //     description: "A high quality white bag  ",
    // },
    // {
    //     name: "roseBag",
    //     price: 30,
    //     category: null,
    //     rating: 1,
    //     image: productsImages.roseBag,
    //     accessory: "bags",
    //     quantity: 1,
    //     description: "A high quality rose bag  ",
    // },
    // {

    //     name: "redBag",
    //     price: 35,
    //     category: null,
    //     rating: 2,
    //     image: productsImages.redBag,
    //     accessory: "bags",
    //     quantity: 1,
    //     description: "A high quality red bag ",
    // },
    // {

    //     name: "yellowBag",
    //     price: 45,
    //     category: null,
    //     rating: 2.5,
    //     image: productsImages.yellowBag,
    //     accessory: "bags",
    //     quantity: 1,
    //     description: "A high quality yellow bag ",
    // },
    // {

    //     name: "yellowHat",
    //     price: 45,
    //     category: null,
    //     rating: 4,
    //     image: productsImages.yellowHat,
    //     accessory: "hats",
    //     quantity: 1,
    //     description: "A high quality yellow hat ",
    // },
    // {

    //     name: "whiteNecklace",
    //     price: 150,
    //     category: null,
    //     rating: 4,
    //     image: productsImages.whiteNecklace,
    //     accessory: "necklaces",
    //     quantity: 1,
    //     description: "A high quality white necklace  ",
    // },
    // {
    //     name: "greenRing",
    //     price: 80,
    //     category: null,
    //     rating: 3,
    //     image: productsImages.greenRing,
    //     accessory: "rings",
    // },
    // {

    //     name: "roseWatch",
    //     price: 70,
    //     category: null,
    //     rating: 2.5,
    //     image: productsImages.roseWatch,
    //     accessory: "watches",
    //     quantity: 1,
    //     description: "A high quality rose watch",
    // },
    // {
    //     name: "brownSkirt",
    //     price: 170,
    //     category: "skirts",
    //     rating: 3.5,
    //     quantity: 1,
    //     description: "A high quality brown skirt ",
    //     image: {
    //         public_id: "brownSkirt_otwxww",
    //         url: "https://res.cloudinary.com/dlet9uuef/image/upload/v1692259665/products/brownSkirt_otwxww.webp",
    //     },
    //     stock: 20,
    // },
    // {

    //     name: "whiteSkirt",
    //     price: 190,
    //     category: "skirts",
    //     rating: 3.5,
    //     image: productsImages.whiteSkirt,
    //     accessory: null,
    //     quantity: 1,
    //     description: "A high quality white skirt ",
    // },
    // {
    //     name: "whiteSkirt",
    //     price: 190,
    //     category: "skirts",
    //     rating: 3.5,
    //     image: productsImages.orangeSkirt,
    //     accessory: null,
    //     quantity: 1,
    //     description: "A high quality orange skirt ",
    // },
    // {

    //     name: "blueSkirt",
    //     price: 130,
    //     category: "skirts",
    //     rating: 3,
    //     image: productsImages.blueSkirt,
    //     accessory: null,
    //     quantity: 1,
    //     description: "A high quality blue skirt ",
    // },
    // {

    //     name: "leatherBlackShirt",
    //     price: 300,
    //     category: "shirts",
    //     rating: 1.5,
    //     image: productsImages.leatherShirt,
    //     accessory: null,
    //     description: "A Nice cutoff sleeve black women leather shirt  ",
    //     quantity: 1,
    // },
    // {

    //     name: "grayPants",
    //     price: 80,
    //     category: "pants",
    //     rating: 4.5,
    //     image: productsImages.grayPants,
    //     accessory: null,
    //     description: "A high quality gray  casual women pant ",
    //     quantity: 1,
    // },
    // {

    //     name: "whiteDress",
    //     price: 60,
    //     category: "dresses",
    //     rating: 4.5,
    //     image: productsImages.whiteDress,
    //     accessory: null,
    //     description:
    //         "New look A pratical white cotton summer cutoff sleeve dress for work, parties, everthing!",
    //     quantity: 1,
    // },
];
module.exports = products;
