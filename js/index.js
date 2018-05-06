var myapp = {};

myapp.color = 'green';
myapp.paint = function(node) {
    node.style.color = this.color;
};

var findNodes = function(callback) {

    var i = 10000, 
        nodes = [],
        found;
    
    while(i) {
        i -= 1;


        
    }


    if( typeof callback === 'function') {
        callback(found);
    }
}