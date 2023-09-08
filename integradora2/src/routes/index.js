const authApi = require('../components/auth');
const userApi = require('../components/user');
const roleApi = require('../components/roles');
const countryApi = require('../components/country');
const careInstructionApi = require('../components/careInstruction');
const categoryApi = require('../components/category');
const colorsApi = require('../components/colors');
const productApi = require('../components/product');
const productTypeApi = require('../components/productType');
const deliveryOptionsApi = require('../components/deliveryOptions');
const cartApi = require('../components/cart');
const wishlistApi = require('../components/wishlist');
const statusApi = require('../components/status');
const seedersApi = require('../components/seeders');
const invoiceApi = require('../components/invoice');
const invoiceTypeApi = require('../components/invoiceType');
const paymentsApi = require('../components/payments');
const paymentMethodsApi = require('../components/paymentMethods');
const paymentStatusApi = require('../components/paymentStatus');
const genderApi = require('../components/gender');
const outfitApi = require('../components/outfits');
const tagsApi = require('../components/tags');
const userccApi = require('../components/user_cc');

module.exports = app => {
    authApi(app);
    userApi(app);
    roleApi(app);
    countryApi(app);
    careInstructionApi(app);
    categoryApi(app);
    colorsApi(app);
    productApi(app);
    productTypeApi(app);
    cartApi(app);
    wishlistApi(app);
    statusApi(app);
    seedersApi(app);
    deliveryOptionsApi(app);
    invoiceApi(app);
    invoiceTypeApi(app);
    paymentsApi(app);
    paymentMethodsApi(app);
    paymentStatusApi(app);
    genderApi(app);
    outfitApi(app);
    tagsApi(app);
    userccApi(app);
    app.get("/", (req,res,next)=>{
        console.log(req.socketIO)
        res.send("Todo ok!");
    });
    app.all("*", (req,res,next)=>{
        res.send("Este request no existe!");
    });
}