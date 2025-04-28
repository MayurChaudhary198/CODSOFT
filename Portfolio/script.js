
const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector("nav")

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active")
})


document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove("active")
  }
})

// Project Filtering
const filterBtns = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    filterBtns.forEach((btn) => btn.classList.remove("active"))

 
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")


    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})


const scrollBtn = document.createElement("div")
scrollBtn.classList.add("scroll-top")
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
document.body.appendChild(scrollBtn)


window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add("show")
  } else {
    scrollBtn.classList.remove("show")
  }
})


scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})


const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Form submission
const contactForm = document.querySelector(".contact-form form")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()


    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value


    console.log("Form submitted:", { name, email, subject, message })


    alert("Thank you for your message! I will get back to you soon.")


    contactForm.reset()
  })
}


const style = document.createElement("style")
style.textContent = `
    .scroll-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(108, 92, 231, 0.4);
    }
    
    .scroll-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top:hover {
        background-color: #5649c0;
        transform: translateY(-3px);
    }
`
document.head.appendChild(style)

