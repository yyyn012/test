const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator() {
  const fieldValue = document.querySelector("#field_value");
  let timeValue = document.querySelector("#time_value");
  let timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector(".field_result");
  const timeResult = document.querySelector(".time_result");

  if (fieldValue.value == "") {
    alert("입력되지 않았습니다.");
    fieldValue.focus();
    return false;
  } else if (timeValue.value == "") {
    alert("입력되지 않았습니다.");
    timeValue.focus();
    return false;
  } else if (timeValue_int > 24) {
    alert("잘못된 값입니다. 24 이하의 값을 입력해 주세요.");
    return false;
  }

  result.style.display = "none";
  loading.style.display = "flex";
  // 위 if문을 모두 통과했다면 true를 보여줘야 한다. 하지만 그 전에 위 코드를 이용해 loading화면을 보여준다.

  setTimeout(function () {
    loading.style.display = "none";
    result.style.display = "flex";
    // 로딩 화면이 display none처리 되고 result화면이 display flex되어 보여진다.
    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt(10000 / timeValue_int, 10);
  }, 1800);
  //  parseInt로 인해 소수점 뒷자리는 빼고 timeValue_int를 10000으로 나눈 값이 10진수로 (1.8초 뒤에) 표현됨.
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
// modal창의 닫기 버튼이 아니라 바깥 부분을 눌러도 창이 꺼지도록 하는 코드이다. event.target이 modal(window를 뜻함)과 같을 때 closeModal()이 수행되도록 한다.

function copyUrl() {
  let url = window.location.href;
  // window.location.href를 값으로 받아서 카피할 것이다.
  let tmp = document.createElement("input");
  // tmp라는 변수의 값을 가상의 element로 하나 만들고

  document.body.appendChild(tmp);
  // 만든 가상의 element를 body에 추가하여
  tmp.value = url;
  tmp.select();
  document.execCommand("copy");
  // 그것을 선택해 복사하게 한다.
  document.body.removeChild(tmp);
  // 복사까지 끝나면 가상의 element는 삭제된다.

  alert("URL이 복사되었습니다.");
}

shareButton.addEventListener("click", copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);
