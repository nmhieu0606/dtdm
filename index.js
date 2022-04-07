var app=require('express')();
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var uri='mongodb+srv://admin:admin@trangtin.gsbgr.mongodb.net/trangtin'
mongoose.connect(uri,{
  keepAlive:true,
  keepAliveInitialDelay:300000,

}).catch(err=>console.log(err));

app.set('views','./views');
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
  res.render('index',{title:'Trang chủ'});
});

app.listen(30000,()=>{
  console.log('sever is running');
});