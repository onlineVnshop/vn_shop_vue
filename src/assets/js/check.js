export function check(string, value){
    var reg;
    switch(string){
    case 'username':
    reg =/[\w_]{3,20}/;
    if(reg.test(value)){
        return true;
    }else{
        return false;
    }
    break;
    case 'password':
    reg  =/[\w!@#$%^&*()_+-=;':",\.?/\\]{6,20}/;
    if(reg.test(value)){
        return true;
    }else{
        return false;
    }
    break;
    case 'rePassword':
    if(rePassword.val() === password.val()){
        return true;
    }else{
        return false;
    }
    break;
    case 'mobile':
    reg = /1[3578][\d]{9}/;
    if(reg.test(value)){
        return true;
    }else{
        return false;
    }
    break;
}
}
