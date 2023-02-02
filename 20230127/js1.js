id = prompt("아이디를 입력해주세요.");
if(id == 'jbedu'){
    alert("아이디가 일치 합니다.");
    password = prompt("비밀번호를 입력해주세요.");
    if(password == "jbedu1234"){
        alert("인증완료");
    } else {
        alert("인증실패");
    }
} else{
    alert("아이디가 일치하지 않습니다.")
}
