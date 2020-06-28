const {createContainer, asValue, asClass, asFunction} = require("awilix");

//Config
const config = require("../config");
const app = require(".");

//Services
const {HomeService} = require("../services");

//Controllers
const {HomeController} = require("../controllers");

//Routes
const {HomeRoutes} = require("../routes/index.routes");
const Routes = require("../routes");

const container = createContainer();

container.register({
    //Configuración principal de la app.
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
});

module.exports = container;