var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aula8'
});



exports.author_detail=function(req,res,next){
    var userId=req.params.id;
    var query='select * from users where id = ?';
    connection.query(query,userId,function(err,result,fields){
        if(err) throw err;
        res.render('person', {title:'Person Detail', person: result[0]});
    });
};