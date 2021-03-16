module.exports = {

    generarFecha: function(){

        let date = new Date().toISOString().split('T')[0];
          
        return(date.toString());
    }

}