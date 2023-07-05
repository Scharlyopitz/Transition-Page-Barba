const wipe = document.querySelector(".wipe-transition");

const texteTransition = document.querySelector(".transition-text");

const TLAnim = new TimelineMax();

function delay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,

    transitions: [
        {
            async leave() {
                const done = this.async();

                TLAnim.to(wipe, {
                    right: "0%",
                    ease: "power2.out",
                    duration: 0.5,
                });

                await delay(1000);
                done();
            },

            enter() {
                TLAnim.to(wipe, {
                    right: "100%",
                    ease: "power2.in",
                    duration: 0.5,
                }).set(wipe, { right: "-100%" });
            },
        },
    ],
});

// transition texte

const liens = document.querySelectorAll("nav a");

liens.forEach((lien) => {
    lien.addEventListener("click", () => {
        liens.forEach((element) => {
            element.classList.remove("clicked");
        });

        if (lien.innerText === "Page 1") {
            texteTransition.innerHTML = "PAGE 1";
        } else if (lien.innerText === "Page 2") {
            texteTransition.innerHTML = "PAGE 2";
        } else {
            texteTransition.innerHTML = "HOME";
        }

        moovingTextStyle();
        basicTextStyle();
        lien.classList.add("clicked");
    });
});

function moovingTextStyle() {
    setTimeout(() => {
        texteTransition.style.opacity = "0";
        texteTransition.style.transform = "translate(-50%,-50%)";
    }, 1000);
}

function basicTextStyle() {
    texteTransition.style.transform = "";
    texteTransition.style.opacity = "1";
}
