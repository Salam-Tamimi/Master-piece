// getting all attributes
const shareBox = document.querySelector(".share__box"),
  socialLink = document.querySelectorAll(".social__link"),
  shareField = document.querySelector(".field__wrp"),
  copyBtn = document.querySelector("#copyBtn");
var shareFieldInput = document.querySelector("#inputField");

for (let i = 0; i < socialLink.length; i++) {
  socialLink[i].addEventListener("click", () => {
    for (let j = 0; j < socialLink.length; j++) {
      if (socialLink[j].classList.contains("active")) {
        socialLink[j].classList.remove("active");
      }
    }

    var socialLinkValue = socialLink[i].dataset.link; //getting social link value from data-link attribute
    shareFieldInput.setAttribute("value", socialLinkValue); //setting social link value from data-link attribute to input field value
    socialLink[i].classList.add("active");
    shareField.classList.add("active");
    for (let k = 0; k < socialLink.length; k++) {
      if (document.execCommand("copy")) {
        //if selected value is copied
        copyBtn.onclick = () => {
          shareFieldInput.select(); //select input value
          document.execCommand("copy");
          shareField.classList.add("active");
          copyBtn.innerText = "Copied";
          var curInputVal = shareFieldInput.value;
          setTimeout(() => {
            shareField.classList.remove("active");
            copyBtn.innerText = "Copy";
            shareFieldInput.setAttribute("value", "example.com/share-link");
            socialLink[i].classList.remove("active");
            window.getSelection().removeAllRanges();
          }, 3000); //after 3 seconds remove active class and change button text
        };
      }
    }
  });
}
