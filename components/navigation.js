export function navigateTo(section){

  const element = document.getElementById(section)

  if(!element) return

  element.scrollIntoView({
    behavior:"smooth"
  })

}