//All users are temporal users without password

/*
User Object:
{
    username: string
    sid: string
    last_update: number -> new Date().getTime()/1000 (seconds)
}
*/

var online_users = []; //My Amazing Database

const maxSecondsWithoutUpdates = 300;

module.exports.newUser = function(username, sid){
    var userExists = false;
    var existingUserIndex;

    this.deleteUser(sid);

    //Look for an user with the same username
    for(var i = 0; i < online_users.length; i++){
        if (online_users[i].username == username){
            userExists = true;
            existingUserIndex = i;
            break;
        }
    }

    if(userExists){
        //Check if deadline has been reached
        if (online_users[existingUserIndex].last_update < (new Date().getTime() / 1000) - maxSecondsWithoutUpdates){
            //Delete existing user
            this.deleteUser(online_users[existingUserIndex].sid);
        }else{
            //Username is in use
            return false;
        }
    }

    //Add new user
    online_users.push({username: username, sid: sid, last_update: (new Date().getTime() / 1000)});
    return true;
}

module.exports.deleteUser = function(sid){
    for(var i = 0; i < online_users.length; i++){
        if(online_users[i].sid == sid){
            online_users.splice(i, 1);
            break;
        }
    }
}

module.exports.newUpdate = function(sid){
    user = online_users.find(u => u.sid == sid);
    if(user){
        user.last_update = (new Date().getTime() / 1000);
    }
}

module.exports.getUsername = function(sid){
    user = online_users.find(u => u.sid == sid);
    if(user){
        return user.username;
    }
}