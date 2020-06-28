const {createContainer, asValue, asClass, asFunction} = require("awilix");

//Config
const config = require("../config");
const app = require(".");

//Services
const {HomeService, IdeaService, UserService, CommentService} = require("../services");

//Controllers
const {HomeController, UserController, IdeaController, CommentController} = require("../controllers");

//Routes
const {HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes} = require("../routes/index.routes");
const Routes = require("../routes");

//Models
const { User, Comment, Idea } = require("../models");

//Repositories
const { UserRepository, CommentRepository, IdeaRepository } = require("../repositories");

const container = createContainer();

container.register({
    //Configuración principal de la app.
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton()
}).register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton()
});

module.exports = container;