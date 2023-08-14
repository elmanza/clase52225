

class User {
    dashboardUno(req, res, next){
        res.render('dashboardUno', {});
    }

    dashboardDos(req, res, next){
        res.render('dashboardDos', {});
    }
}

module.exports = new User();