// document.getElementById('firstButton').addEventListener('click', function() {
//     const phoneNumberInput = document.getElementById('phoneNumber');
//     const phoneNumber = phoneNumberInput.value;

//     const secondButton = document.getElementById('secondButton');
//     const firstButton = document.getElementById('firstButton');
//     let timer = 20;

//     firstButton.disabled = true;
//     firstButton.innerHTML = `<i class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;SHARE WITH 5 FRIENDS`;

//     const countdown = setInterval(function() {
//         timer--;
//         if (timer === 0) {
//             clearInterval(countdown);
//             firstButton.innerHTML = `<i class="fa-brands fa-whatsapp"></i>&nbsp;SHARE WITH 5 FRIENDS`;
//             firstButton.disabled = false;
//             secondButton.disabled = false;
//         }
//     }, 1000);

//     // WhatsApp share URL with specific message and image
//     const message = "नमस्ते! Jio आपके लिए खास ऑफर लाया है! अब पाएं 1 महीने का मुफ्त 4G/5G रिचार्ज। जल्दी करें, ये सीमित समय के लिए है। अभी एक्टिवेट करें और इस शानदार ऑफर का लाभ उठाएं! #JioFreeRecharge #StayConnected";
//     const imageURL = window.location.origin + "/jio.png"; // Adjust if image is hosted elsewhere

//     const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}&media=${encodeURIComponent(imageURL)}`;
//     setTimeout(function() {
//         window.open(whatsappURL, '_blank');
//     }, 2000); // Adjust delay as needed
// });

// function openRedirect() {
//     const redirect = `redirect.html`
//     window.location.href = redirect;
// }

// function openGroup() {
//     const groupURL = 'https://wa.openinapp.co/twkqv';
//     window.location.href = groupURL;
// }

// // JavaScript if needed for further interactivity
// document.querySelector('.join-button').addEventListener('click', function() {
//     alert('Thank you for joining! More offers coming your way.');
// });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('firstButton').addEventListener('click', function() {
        const secondButton = document.getElementById('secondButton');
        const firstButton = document.getElementById('firstButton');
        let timer = 20;

        firstButton.disabled = true;
        firstButton.innerHTML = `<i class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;SHARE WITH 5 FRIENDS`;

        const countdown = setInterval(function() {
            timer--;
            if (timer === 0) {
                clearInterval(countdown);
                firstButton.innerHTML = `<i class="fa-brands fa-whatsapp"></i>&nbsp;SHARE WITH 5 FRIENDS`;
                firstButton.disabled = false;
                secondButton.disabled = false;
            }
        }, 1000);

        const message = "Jawaab do aur jeeto iPhone 15 pro! Link par click karke abhi participate karein! https://iphonequiz.netlify.app/";
        const imageURL = window.location.origin + "/iphone.png";

        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}&media=${encodeURIComponent(imageURL)}`;
        setTimeout(function() {
            window.open(whatsappURL, '_blank');
        }, 2000);
    });
});

function openRedirect() {
    const redirect = `redirect.html`
    window.location.href = redirect;
}

function openGroup() {
        const groupURL = 'https://wa.openinapp.co/k5whc';
        window.location.href = groupURL;
    }

document.querySelector('.join-button').addEventListener('click', function() {
    alert('Thank you for joining! More offers coming your way.');
});