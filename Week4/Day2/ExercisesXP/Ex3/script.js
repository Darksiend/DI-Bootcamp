//Ex3

((job, location, partner, numberChildren) => {
  sentence = `You will be a ${job} in ${location},
   and married to ${partner} with ${numberChildren} kids.`;
  document.getElementById("parent").textContent = sentence;
})("Web Developer", "Tel Aviv", "Rivka", "4");
