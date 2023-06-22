
// const btn = document.getElementById('button');

// const urlRegex = /https:\/\/www\.linkedin\.com*\/in\/[a-z]+[$&+,:;=?@#|'<>.^*()%!-][a-z]+[$&+,:;=?@#|'<>.^*()%!-].+/;

// function checkUrlValidity() {
//   const url = document.getElementById('url').value;
//   if (urlRegex.test(url)) {
//     alert(`${url} is a valid URL.`);
//   } else {
//     alert(`${url} is not a valid URL.`);
//   }
// }

// btn.addEventListener("click", checkUrlValidity)


const btn = document.getElementById('button');

const urlRegex =/^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;;

function chkValidity() {
    const url = document.getElementById('url').value;
    if (urlRegex.test(url)) {
        alert(`${url} is a valid URL.`);
    } else {
        alert(`${url} is not a valid URL.`);
    }
}

btn.addEventListener("click", chkValidity)