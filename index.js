const QRCode = require('qrcode');

//Let’s create the data that we want to hide in a QR code:
let data = {
    name : 'Employee name',
    age: 27,
    department : 'Engineering',
    id : 'e1'

}

//Converting into String data
let StringData = JSON.stringify(data);
QRCode.toString(StringData,{type:'terminal'}, function(err,QRcode){
    if(err) return console.log('Error occured')
    console.log(QRcode)
})

QRCode.toDataURL(StringData, function(err,code){
    if(err) return console.log('Error occured');
    console.log(code);
    
})

