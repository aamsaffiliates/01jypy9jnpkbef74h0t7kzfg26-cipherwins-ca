// CipherWins Casino JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // FAQ Toggle Functionality
  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })

      // Toggle current item
      item.classList.toggle("active")
    })
  })

  // Parallax Effect on Scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".parallax")

    parallaxElements.forEach((element) => {
      const speed = 0.5
      element.style.transform = `translateY(${scrolled * speed}px)`
    })
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".step-card, .game-card, .stat-card, .support-card, .promo-card")
  animateElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(element)
  })

  // Mobile menu toggle (if needed)
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  }

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })

  // Floating elements random positioning
  const floatingElements = document.querySelectorAll(".floating-emoji")
  floatingElements.forEach((element) => {
    const randomX = Math.random() * 100
    const randomDelay = Math.random() * 10
    element.style.left = randomX + "%"
    element.style.animationDelay = "-" + randomDelay + "s"
  })

  // Add click effects to buttons
  const buttons = document.querySelectorAll(".cta-button")
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Add hover sound effects (optional - can be enabled if audio files are available)
  const hoverElements = document.querySelectorAll(".game-card, .cta-button")
  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      // Add subtle hover effect
      this.style.filter = "brightness(1.1)"
    })

    element.addEventListener("mouseleave", function () {
      this.style.filter = "brightness(1)"
    })
  })

  // Countdown timer for special offers (if needed)
  function startCountdown() {
    const countdownElements = document.querySelectorAll(".countdown")
    countdownElements.forEach((element) => {
      const endTime = new Date().getTime() + 24 * 60 * 60 * 1000 // 24 hours from now

      const timer = setInterval(() => {
        const now = new Date().getTime()
        const distance = endTime - now

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        element.innerHTML = `${hours}h ${minutes}m ${seconds}s`

        if (distance < 0) {
          clearInterval(timer)
          element.innerHTML = "EXPIRED"
        }
      }, 1000)
    })
  }

  // Initialize countdown if elements exist
  if (document.querySelector(".countdown")) {
    startCountdown()
  }

  // Add CSS for ripple effect
  const style = document.createElement("style")
  style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .loaded {
            animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `
  document.head.appendChild(style)
})

// Additional utility functions
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
  const scrollButton = document.querySelector(".scroll-to-top")
  if (scrollButton) {
    if (window.pageYOffset > 300) {
      scrollButton.style.display = "block"
    } else {
      scrollButton.style.display = "none"
    }
  }
})

// Register button functionality
function redirectToRegister() {
  window.location.href = "/register"
}

// Console welcome message
console.log(`
🎰 Welcome to CipherWins Casino! 🎰
🚀 Claim your 150% bonus up to C$10,000 + 200 Free Spins
⚡ Licensed & Secure Gaming Experience
🎮 Join thousands of Canadian players!
`)
