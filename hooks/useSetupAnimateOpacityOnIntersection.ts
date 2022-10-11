import { useEffect } from "react"

export const useSetupAnimateOpacityOnIntersection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('apoi-show')
        } else {
          entry.target.classList.remove('apoi-show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.apoi-hidden')
    hiddenElements.forEach((element) => observer.observe(element))
  }, [])
}