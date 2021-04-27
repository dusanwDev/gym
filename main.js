window.addEventListener("load", () => {
  fixedNav();
  whyUsAnimation();
  toTopBtnAppear();
  removeLoader();
});
let removeLoader = () => {
  document.querySelector(".loading-screen").classList.add("preloader-finished");
  document.querySelector(".line").classList.add("activated-line");
  document
    .querySelector(".header-content-h1-first")
    .classList.add("activated-line");
  document
    .querySelector(".header-content-h1-second")
    .classList.add("activated-line");
  document.querySelector(".workout-programs").classList.add("activated-line");
  document.querySelector(".join-us-btn").classList.add("activated-line");
};
let toTopBtnAppear = () => {
  let why_us = document.querySelector(".video-section");
  let to_top = document.querySelector(".to_top");
  const to_top_btn = {
    rootMargin: "-200px 0px 0px 0px",
  };
  let top_btn_observer = new IntersectionObserver(
    (entries, top_btn_observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          to_top.style.opacity = "1";
        } else {
          to_top.style.opacity = "0";
        }
      });
    },
    to_top_btn
  );
  top_btn_observer.observe(why_us);
};
let whyUsAnimation = () => {
  let cards = document.querySelectorAll(".card");
  let why_us = document.querySelector(".why-us");
  if (window.innerWidth > 800) {
    const why_us_options = {
      threshold: 0.6,
    };

    let why_ys_observer = new IntersectionObserver(
      (entries, why_ys_observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card) => {
              card.style.transform = "translateY(0px)";
              card.style.opacity = "1";

              // card.classList.add("active-card");
            });
          }
        });
      },
      why_us_options
    );
    why_ys_observer.observe(why_us);
  } else {
    cards.forEach((card) => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";
    });
  }
};
function fixedNav() {
  let video_section = document.querySelector(".video-section");
  const options = { rootMargin: "-100px 0px 0px 0px" };

  let observer = new IntersectionObserver((entries, observer) => {
    let header = document.querySelector(".main-header");

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    });
  }, options);
  observer.observe(video_section);
  const opacity_options = {
    threshold: 1,
  };
}

document.querySelector(".hamburger").addEventListener("click", () => {
  let links_container = document.querySelector(".links-container");
  let links_container_ul = document
    .querySelector(".links-ul")
    .getBoundingClientRect().height;
  let links_container_height = document
    .querySelector(".links-container")
    .getBoundingClientRect().height;
  if (links_container_height === 0) {
    links_container.style.height = `${links_container_ul + 10}px`;
  } else {
    links_container.style.height = 0;
  }
});

document.querySelectorAll(".scroll").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let header = document.querySelector(".main-header");
    let headerHeight = header.getBoundingClientRect().height;
    let isFIxed = header.classList.contains("fixed");
    let id = e.currentTarget.getAttribute("href").slice(1);
    let element = document.getElementById(id);
    let container = document.querySelector(".links-container");
        let position = element.offsetTop - headerHeight;

    let containerHeight = document
      .querySelector(".links-container")
      .getBoundingClientRect().height;
    if (!isFIxed) {
      position = position - headerHeight;
    }
    if (headerHeight > 75) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    container.style.height = 0;
  });
});

document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let price =
      e.currentTarget.previousElementSibling.previousElementSibling.textContent;
    let type =
      e.currentTarget.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent;

    let cart_menu = document.querySelector(".cart-menu");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    cart_menu.appendChild(table);

    tbody.classList.add(".tbody");
    let tr = document.createElement("tr");
    let tdone = document.createElement("td");
    let tdtwo = document.createElement("td");
    tdone.textContent = type;
    tdtwo.textContent = price;
    tbody.appendChild(tr);
    tr.appendChild(tdone);
    tr.appendChild(tdtwo);
  });
});

document.querySelector(".cart-menu").addEventListener("click", (e) => {
  if (e.target.classList.contains("exit")) {
    let aside = document.querySelector(".cart-menu");
    let asideWidth = aside.getBoundingClientRect().width;
    if (asideWidth > 0) {
      aside.style.width = "0";
    }
  }
});

document.querySelector(".cart-btn").addEventListener("click", () => {
  let aside = document.querySelector(".cart-menu");
  let asideWidth = aside.getBoundingClientRect().width;
  if (asideWidth === 0) {
    aside.style.width = "332px";
  }
  if (window.innerWidth < 465) {
    aside.style.width = "100%";
  }
});

function numbersAnimation() {
  let elements = document.querySelectorAll(".stats-number");
  let speed = 200;
  elements.forEach((element) => {
    let updateCount = () => {
      let target = +element.getAttribute("data-goal");
      let count = +element.textContent;
      let inc = +target / speed;
      if (count < target) {
        element.textContent = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        element.textContent = target;
      }
    };
    updateCount();
  });
}
function NumbersAnimation() {
  let stats = document.querySelector(".stats");
  const optionsAnimation = {
    threshold: 1,
  };
  let observerAnimaiton = new IntersectionObserver(
    (entries, observerAnimaiton) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
        } else {
          numbersAnimation();
        }
      });
    },
    optionsAnimation
  );
  observerAnimaiton.observe(stats);
}
NumbersAnimation();

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    smaller_screen_display();
  } else {
    biiger_screen_display();
  }
});
let biiger_screen_display = () => {
  let trainers_card = document.querySelectorAll(".trainers-card");
  trainers_card.forEach((card) => {
    card.classList.remove("prev");
    card.classList.remove("active");
    card.classList.remove("next");
  });

  trainers_card[0].classList.add("prev");
  trainers_card[1].classList.add("active");
  trainers_card[2].classList.add("next");
};
let smaller_screen_display = () => {
  let trainers_card = document.querySelectorAll(".trainers-card");
  trainers_card.forEach((card) => {
    card.classList.remove("prev");
    card.classList.remove("active");
    card.classList.remove("next");
  });
  trainers_card[0].classList.add("active");
};
if (window.innerWidth > 768) {
  biiger_screen_display();
} else {
  smaller_screen_display();
}
let right_btn = () => {
  let trainers_card = document.querySelectorAll(".trainers-card");
  let prev = document.querySelector(".prev");
  let active = document.querySelector(".active");
  let next = document.querySelector(".next");
  if (window.innerWidth > 768) {
    if (
      prev.nextElementSibling &&
      !prev.nextElementSibling.classList.contains("prev") &&
      active.nextElementSibling &&
      !active.nextElementSibling.classList.contains("active") &&
      next.nextElementSibling &&
      !next.nextElementSibling.classList.contains("next")
    ) {
      prev.nextElementSibling.classList.add("prev");
      active.nextElementSibling.classList.add("active");
      next.nextElementSibling.classList.add("next");
      prev.classList.remove("prev");
      active.classList.remove("active");
      next.classList.remove("next");
    } else {
      trainers_card[0].classList.add("prev");
      trainers_card[1].classList.add("active");
      trainers_card[2].classList.add("next");
      trainers_card[3].classList.remove("prev");
      trainers_card[4].classList.remove("active");
      trainers_card[5].classList.remove("next");
    }
  } else {
    if (
      active.nextElementSibling &&
      !active.nextElementSibling.classList.contains("active")
    ) {
      active.nextElementSibling.classList.add("active");
      active.classList.remove("active");
    } else {
      trainers_card[trainers_card.length - 1].classList.remove("active");
      trainers_card[0].classList.add("active");
    }
  }
};
let left_btn = () => {
  let prev = document.querySelector(".prev");
  let active = document.querySelector(".active");
  let next = document.querySelector(".next");
  let trainers_card = document.querySelectorAll(".trainers-card");

  if (window.innerWidth > 768) {
    if (
      prev.previousElementSibling &&
      !prev.previousElementSibling.classList.contains("prev") &&
      active.previousElementSibling &&
      !active.previousElementSibling.classList.contains("active") &&
      next.previousElementSibling &&
      !next.previousElementSibling.classList.contains("next")
    ) {
      next.previousElementSibling.classList.add("next");
      active.previousElementSibling.classList.add("active");
      prev.previousElementSibling.classList.add("prev");
      prev.classList.remove("prev");
      next.classList.remove("next");
      active.classList.remove("active");
    } else {
      trainers_card[0].classList.remove("prev");
      trainers_card[1].classList.remove("active");
      trainers_card[2].classList.remove("next");

      trainers_card[3].classList.add("prev");
      trainers_card[4].classList.add("active");
      trainers_card[5].classList.add("next");
    }
  } else {
    trainers_card.forEach((card) => {
      card.classList.remove("prev");
      card.classList.remove("active");
      card.classList.remove("next");
    });
    //For smaller screen
    if (
      active.previousElementSibling &&
      !active.previousElementSibling.classList.contains("active")
    ) {
      active.previousElementSibling.classList.add("active");
      active.classList.remove("active");
    } else {
      trainers_card[trainers_card.length - 1].classList.add("active");
    }
  }
};

let checkEmail = (value, button_type) => {
  let myregex = new RegExp(
    /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  );
  if (button_type.value === "send-btn-plan") {
    if (myregex.test(value)) {
      document.querySelector(`.${button_type}`).textContent = "EMAIL SENT";
      document.querySelector(`.${button_type}`).style.backgroundColor = "green";
      setTimeout(() => {
        document.querySelector(`.${button_type}`).textContent = "SEND";
        document.querySelector(`.${button_type}`).style.backgroundColor =
          "black";
      }, 1200);
    } else {
      document.querySelector(`.${button_type}`).textContent = "WRONG EMAIL";
      document.querySelector(`.${button_type}`).style.backgroundColor = "red";
      setTimeout(() => {
        document.querySelector(`.${button_type}`).textContent = "SEND";
        document.querySelector(`.${button_type}`).style.backgroundColor =
          "black";
      }, 1200);
    }
  }
  //FOR SUBMIT BTN
  else {
    if (myregex.test(value)) {
      document.querySelector(`.${button_type}`).textContent = "EMAIL SENT";
      document.querySelector(`.${button_type}`).style.backgroundColor = "green";
      setInterval(() => {
        document.querySelector(`.${button_type}`).textContent = "SUBMIT";
        document.querySelector(`.${button_type}`).style.backgroundColor =
          "white";
      }, 1200);
    } else {
      document.querySelector(`.${button_type}`).textContent = "WRONG EMAIL";
      document.querySelector(`.${button_type}`).style.backgroundColor = "red";
      setInterval(() => {
        document.querySelector(`.${button_type}`).textContent = "SUBMIT";
        document.querySelector(`.${button_type}`).style.backgroundColor =
          "white";
      }, 1200);
    }
  }
};

document.querySelector(".btn-left").addEventListener("click", left_btn);
document.querySelector(".btn-right").addEventListener("click", right_btn);

document.querySelector(".send-btn-plan").addEventListener("click", (e) => {
  let value = document.querySelector(".email-input-plan").value;
  checkEmail(value, e.target.classList);
});
document.querySelector(".submit-btn").addEventListener("click", (e) => {
  e.preventDefault();
  let value = document.querySelector(".email-input-form").value;
  checkEmail(value, e.target.classList);
});
