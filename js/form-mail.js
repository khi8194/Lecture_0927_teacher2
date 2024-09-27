emailjs.init({
	publicKey: "23g8RepczesqKPoIX"
});

//form선택자 변수 등록
const form = document.querySelector("#contact-form");
const user_name = form.querySelector("[name=user_name]");
const user_email = form.querySelector("[name=user_email]");
const message = form.querySelector("textarea");

form.addEventListener("submit", event => {
	event.preventDefault();
	//sendForm(serviceID,  templateID, formEl)
	emailjs.sendForm("service_iqrwpls", "template_nm3g0ec", form).then(
		() => {
			user_name.value = "";
			user_email.value = "";
			message.value = "";
			alert("문의 내용이 성공적으로 전달되었습니다.");
		},
		error => {
			alert("문의내용 전송에 실패했습니다.");
		}
	);
});
