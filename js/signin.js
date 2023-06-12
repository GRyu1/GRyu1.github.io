const JoinSubmitBtn = document.querySelector("#joinSubmit")
const username = document.querySelector("#username")
const password1 = document.querySelector('#password1')
const password2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const memberDb = JSON.parse(localStorage.getItem('memberDb')) || [];
const AdminPage = document.querySelector(".adminPageHref")
let IsLogin = false;
let LoginedID = null;


var regIdPw = /^[a-zA-Z0-9]{4,12}$/;
var regName = /^[가-힣a-zA-Z]{2,15}$/;
var regMail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;


window.onload = () => {    
    loginChecker()
    if(IsLogin){
    loginBtn.innerText = `Hello ${LoginedID}`
    if(LoginedID === "admin"){
        AdminPage.style.display="inline-block"
    }else{
        AdminPage.style.display="none"
    }
    } else{
        loginBtn.innerText = `Login`
    }
};

const loginChecker = () =>{
    if(sessionStorage.getItem('login') != null){
        IsLogin = true
        LoginedID = sessionStorage.getItem('login')
    }
}

const handleJoinSubmitBtnClicked = () => {
    console.log(username.value)
    console.log(password1)
    console.log(password2)
    console.log(email)
    if(username.value == ""){
        alert("아이디를 입력하세요.")
        username.focus();
        return false;
    }
    
    else if(!regIdPw.test(username.value)){
        alert("4~12자 영문 대소문자, 숫자만 입력하세요.")
        username.focus();
        return false;
    }

    
    if(password1.value == ""){
        alert("비밀번호를 입력하세요.")
        password1.focus();
        return false;
    }
    
    else if(!regIdPw.test(password1.value)){
        alert("비밀번호는 4~12자 영문 대소문자, 숫자만 입력하세요.")
        password1.focus();
        return false;
    }
    
    else if(password1.value == username.value){
        alert("아이디와 동일한 비밀번호를 사용할 수 없습니다.")
        password1.focus();
        return false;
    }


    if(password1.value !== password2.value){
        alert("비밀번호와 동일하지 않습니다.")
        password1.focus();
        return false;
    }

    if(email.value.length == 0){
        alert("메일주소를 입력하세요.")
        email.focus();
        return false;
    }

    else if(!regMail.test(email.value)){
        alert("잘못된 이메일 형식입니다.")
        email.focus();
        return false;
    }

    Join()
}
class Member{
    constructor (username, password1, email ,createdAt = Date.now()) {
        this.username = username;
        this.password1 = password1;
        this.email = email;
        this.createdAt = createdAt;
    }
    toString () {
        return `Member(username = ${this.guestName}, password1 = ${this.content}, email = ${this.email}, createdAt = ${this.createdAt})`;
      }
}
const Join = () => {
    const newMember = new Member(username.value , password1.value , email.value)
    
    memberDb.push(newMember);
    const jsonStr = JSON.stringify(memberDb);
    localStorage.setItem("memberDb", jsonStr);
    alert('회원가입 완료')
    window.location.href = './index.html';
}

JoinSubmitBtn.addEventListener("click", handleJoinSubmitBtnClicked)