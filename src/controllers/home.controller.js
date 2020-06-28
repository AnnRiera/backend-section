let _homeservice = null;

class HomeController {
    constructor({ HomeService }){
        _homeservice = HomeService; //Sin el this es tipo privado.
    }

    index(req, res){
        return res.send(_homeservice.index());
    }
}

module.exports = HomeController;