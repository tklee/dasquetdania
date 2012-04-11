exports.namearray = new Array();

exports.namearray[0] = 'user1';
exports.namearray[1] = 'user2';
exports.namearray[2] = 'user3';
exports.namearray[3] = 'user4'; 

var found = false;

exports.fooname = 'billycat';

exports.getCustom = function(name) {
  for (index=0; index < 4; index++) {
  //for (index=0; index < exports.namearray; index++) {
    //console.log(index);
    //console.log(name);
    //console.log(exports.name

    if (name == exports.namearray[index]) {
      found = true;
      return exports.namearray[index]

    }

  }
  if (found = false) {
    return 'usernotfound';

  }
  //return exports.namearray[0];
}
