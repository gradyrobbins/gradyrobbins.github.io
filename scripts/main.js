console.log("helloworld main.js")

//below functions courtesy of Wes Bos JavaScript30/ch5
const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
    //   console.log('Hello');
      this.classList.toggle('open');
    }

    function toggleActive(e) {
    //   console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    // function switchem() {
        
        //         murph2.style.backgroundImage = "./../photos/Murph2.jpg";
        // };
        // murph2.addEventListener('hover', switchem)
        
        
        
        //below function courtesy of Wes Bos JavaScript30/ch12: Konami Codes
        const pressed = [];
        const secretCode = 'murphy';
        
        window.addEventListener('keyup', (e) => {
            //   console.log(e.key);
            pressed.push(e.key);
            pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
            if (pressed.join('').includes(secretCode)) {
                console.log('DING DING!');
                let murph2 = document.getElementById("Murphy");
                murph2.className += " panelx";
}
// console.log(pressed);
});

//courtesy of "smarter way to learn/ch82:field validation"
// function checkForValue() {
//     if (document.getElementById("lastnamefield").value.length === 0) {
//         alert("please enter your name");
//         return false;
//     }
//     else {
//         console.log("bloop");
//     }
// };
