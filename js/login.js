const submitBtn = document.querySelector('#loginSubmit')
const username =  document.querySelector('#username')
const password1 =  document.querySelector('#password1')
const memberDb = JSON.parse(localStorage.getItem('memberDb')) || [];
const AdminPage = document.querySelector(".adminPageHref")
let IsLogin = false;
let LoginedID = null;


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

const handleOnClicked = () => {
    console.log(username.value)
    console.log(password1.value)

    for(const member of memberDb){
        if(member.username===username.value && member.password1 === member.password1){
            sessionStorage.setItem('login',member.username)
            alert(`${member.username}님 환영합니다.`)
            if( member.username==="admin"){
                const adminPage = confirm("관리자 페이지로 이동하시겠습니까?")
                if(adminPage){
                    window.location.href = './admin.html'
                    return
                }
            }
            window.location.href = './index.html';
            return
        }
    }
    alert(`로그인 실패, 아이디와 비밀번호를 확인해 주세요.`)
}

submitBtn.addEventListener('click', handleOnClicked)