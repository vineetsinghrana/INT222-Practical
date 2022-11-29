var os = require("os");
console.log("Architecture : " + os.arch()); //Architecture : x64
console.log("Hostname : " + os.hostname()); //Hostname : Vineet--Rana
console.log("Platform : " + os.platform()); //Platform : win32
console.log("UserInfo : " + os.userInfo()); //UserInfo : [object Object]

obj = os.userInfo();
console.log("Username : " + obj.username);
console.log("User Group : " + obj.gid);
console.log("User Shell : " + obj.shell);
