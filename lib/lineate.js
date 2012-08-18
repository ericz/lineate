
function lineate(){
  var args = Array.prototype.slice.call(arguments);
  for(var i = 0, ii = args.length; i < ii; i++) {
    if(args[i].constructor == Array || args[i].constructor == Object) {
      print('root', args[i]);
    } else {
      console.log(JSON.stringify(args[i]));
    }
    console.log('');
  }
}

function print(path, obj) {
  var keys = Object.keys(obj);
  for(var i = 0, ii = keys.length; i < ii; i++) {
    var item = obj[keys[i]];
    
    var next;
    if(obj.constructor == Array) {
      next = path + '[' + keys[i] + ']';
    } else {
      next = path + '.' + keys[i];
    }

    if(item && item.constructor == Array) {
      console.log(next, '= []');
      print(next, item);
    } else if(item && item.constructor == Object) {
      console.log(next, '= {}');
      print(next, item);
    } else { 
      console.log(next, '=', JSON.stringify(item));
    }
  }
}

module.exports = lineate;

