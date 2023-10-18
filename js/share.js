fetch("../html/share.html")
  .then((response) => response.text())
  .then((data) => {
    const pars = new DOMParser();
    const doc = pars.parseFromString(data, "text/html");
    const head = doc.querySelector(".hd");
    const foot = doc.querySelector(".ft");

    document.querySelector("header").appendChild(head);
    document.querySelector("footer").appendChild(foot);
    eval(doc.querySelector("script").textContent);
  })
  .catch((error) => console.error(error));
