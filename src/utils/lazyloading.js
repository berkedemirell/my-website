// const sections = document.querySelectorAll(".invisible")
// console.log(sections);
//   const revealSection = (entries, observer) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return ;
//     entry.target.classList.remove("invisible");
//     observer.unobserve(entry.target)
//   }

//   const sectionObserver = new IntersectionObserver(revealSection, {
//     root: null,
//     threshold: [0,1],
//   });
//   sections.forEach(function (section) {
//     sectionObserver.observe(section);
//     section.classList.add("invisible");
//   });