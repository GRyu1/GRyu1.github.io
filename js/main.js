const hello = document.getElementById("hello")
const leftBtn = document.querySelector("#leftbtn")
const rightBtn = document.querySelector("#rightbtn")
const member = document.querySelector(".joinIndex")
const loginBtn = document.querySelector(".login")
const AdminPage = document.querySelector(".adminPageHref")
let IsLogin = false;
let LoginedID = null;


const genreTitle = [
    "Hip-Hop","Breaking", "Popping", "Locking" , "Wacking" , "Crumping" , "House"
]
const genre = [
    "이른바 순수무용로부터 유래하지 않은 대중문화 기반의 춤을 일컫는 용어. 어원은 이러한 춤이 전문적인 댄스 스튜디오가 아닌, 길거리와 클럽 등에서 형성되었다는 점으로부터 비롯된 것으로 보인다. 또한 이들은 공통적으로 즉흥적인 요소를 매우 중시한다는 공통점을 지닌다.",
    "'Break-Boy'의 줄임말이며, 여기서 'Break'는 1970년대 당시 흑인들이 사용하던 속어로 '흥분하다', '끝내준다', '소란을 일으키다'라는 의미라고 밝혔다. 이를 하는 남자를 B-boy, 여자를 B-girl 이라고 한다.",
    "근육에 Hitting 을 주어 음악을 표현하는 춤, 1975년 미국 캘리포니아주 프레즈노 출신의 댄서들이 몸 각 부위 근육에 빠르게 힘을 주었다가 이완시키는 팝(Pop) 기술을 토대로 이루어지기 때문에 이러한 이름이 붙었다.",
    "마치 자물쇠가 잠기듯(Lock) 몸이 툭하고 멈추었던 것이 주변 사람들에게 큰 호응을 이끌어낸 사건에서 유래한 춤, Locking은 쾌활하고 유쾌한 스타일로, 빠른 움직임과 갑작스러운 정지, 강조된 동작을 특징으로 한다.",
    "게이 커뮤니티와 클럽 문화에서 발전하였으며, 주로 디스코 클럽에서 춤을 즐기던 댄서들 사이에서 인기를 얻었습니다. 디스코 음악과 함께 춤추며 활발하게 발전했습니다.",
    "흑인들의 노예시절, 그 들의 분노를 직접적으로 표현하지 못하고 춤으로 형상화 하게 되다가 이를 기원으로 발전했다. 고강도로 에너지를 발산하는 강력하고 극적인 움직임을 특징으로 한다.",
    "House는 주로 미국 시카고의 클럽 Warehouse에서 탄생하였습니다. 클럽 Warehouse는 디스코 음악과 흑인과 라틴계 미국인 문화를 기반으로 한 클럽으로, 이후 House라는 용어는 이 클럽의 이름에서 따왔습니다.",
]
const genreYoutubes = [
    "https://www.youtube.com/embed/9EQdNhwOAfA?start=18",
    "https://www.youtube.com/embed/e-PG3KVmen4?start=16",
    "https://www.youtube.com/embed/5pka1i9c_0Y?start=548",
    "https://www.youtube.com/embed/vT_LuAqDw0A?start=30",
    "https://www.youtube.com/embed/jxb8eCLSNxQ?start=245",
    "https://www.youtube.com/embed/8OAMc2V4STg?start=15",
    "https://www.youtube.com/embed/xR91Hxp2p1k?start=95"
]


AdminPage.style.display="none"

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

const handleClick = (e) => {
    e.target.style.opacity = "0";
    document.querySelector("#bono").classList.add("bono")
};

let index=0;
const handleLeftbtn = () => {
    index--
    if (index == -1) index =6
    const gtitle = document.querySelector("#genreTitle")
    const gContent = document.querySelector("#genreContent")
    const youtubeSrc = document.getElementById("youtube")

    youtubeSrc.src = genreYoutubes[index]
    gtitle.innerText = genreTitle[index]
    gContent.innerText = genre[index]
}
const handleRightBtn = () =>{
    index++
    if (index == 7) index =0
    const gTitle = document.querySelector("#genreTitle")
    const gContent = document.querySelector("#genreContent")
    const youtubeSrc = document.getElementById("youtube")

    youtubeSrc.src = genreYoutubes[index]
    gTitle.innerText = genreTitle[index]
    gContent.innerText = genre[index]
}


const handleMember = () =>{
   if(IsLogin){
    LogOut()
   }else{
    window.location.href="./loginFrom.html"
   }
}

const LogOut = () => {
    sessionStorage.removeItem('login')
    IsLogin = false
    window.location.reload()
}

const handleHover = () => {
    if(IsLogin){
        loginBtn.innerText = "클릭하여 로그아웃";
    }
}

const handleHoverEnd = () => {
    if(IsLogin){
        loginBtn.innerText =`Hello ${sessionStorage.getItem("login")}`
    }
}





hello.addEventListener("click", handleClick)
leftBtn.addEventListener("click", handleLeftbtn)
rightBtn.addEventListener("click", handleRightBtn)

loginBtn.addEventListener("mouseover", handleHover)
loginBtn.addEventListener("mouseout", handleHoverEnd)
loginBtn.addEventListener("click", handleMember)
