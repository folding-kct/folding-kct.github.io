var message_ui;
var message_ui_negative;
document.addEventListener("DOMContentLoaded", function(){
message_ui = document.getElementsByClassName("success")[0]
message_ui_negative = document.getElementsByClassName("form-wrapper")[0]
})
function passkey_put() {
    const user = document.getElementById("passkey_name").value
    const email = document.getElementById("passkey_email").value
    const data = { user, email };
    const url = `https://cors-anywhere.herokuapp.com/https://api.foldingathome.org/passkey?user=${data.user}&email=${data.email}`
    const options = {
        method: "PUT",
        redirect: "follow",
    }
    fetch(url, options).then(res => {
        message_ui_negative.style = "display:none;";
        message_ui.style = "display:block;";
        console.log(res.status);
    }).catch(err => {
        console.log(err)
    })
}	
