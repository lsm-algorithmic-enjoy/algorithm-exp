function solution(id_pw, db) {
    
    if(db.every((item) => item[0] !== id_pw[0])){
        return 'fail';
}
    const filter_idpw = db.filter((item) => item[0] === id_pw[0]);
    
    console.log(filter_idpw)
    
    if(filter_idpw[0][1] !== id_pw[1]){
        return 'wrong pw';
    }
    
    return 'login';
}