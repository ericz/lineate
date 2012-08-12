
function lineate(){
  var args = Array.prototype.slice.call(arguments);
  for(var i = 0, ii = args.length; i < ii; i++) {
    if(args[i].constructor == Array || args[i].constructor == Object) {
      print('', args[i]);
    } else {
      console.log(args[i]);
    }
    console.log('');
  }
}

function print(path, obj) {
  var keys = Object.keys(obj);
  for(var i = 0, ii = keys.length; i < ii; i++) {
    var next = path + '.' + keys[i];
    var item = obj[keys[i]];
    if(item.constructor == Array || item.constructor == Object) {
      print(next, item);
    } else { 
      console.log(next, '=', item);
    }
  }
}

module.exports = lineate;
