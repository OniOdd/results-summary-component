"use strict";

const summaryList = document.getElementById("summary-list");

const category = "Reaction";
const score = 80;
const icon = "./assets/images/icons-sprite.svg#icon-reaction";

const listItem = createListItem(category.toLowerCase());

summaryList.append(listItem);
setDataAndClasses(category, icon, score);

function createListItem(idValue) {
  const li = document.createElement("li");
  li.classList.add("test-card__summary-list-item", "list-item");
  li.id = idValue;

  const figure = document.createElement("figure");
  figure.classList.add("list-item__figure");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("icon");

  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = "Title";

  const span = document.createElement("span");
  span.classList.add("list-item__score");
  span.textContent = "\u00A0 / 100";

  const strong = document.createElement("strong");
  strong.classList.add("list-item__value");
  strong.textContent = "0";

  li.append(figure, span);
  figure.append(svg, figcaption);
  svg.append(use);
  span.prepend(strong);

  return li;
}

function setDataAndClasses(category, href, score) {
  const id = document.getElementById(category.toLowerCase());
  const useTag = id.querySelector("use");
  const figcaptionTag = id.querySelector("figcaption");
  const strongTag = id.querySelector("strong");

  switch (category.toLowerCase()) {
    case "reaction":
      id.classList.add("list-item--bg-reaction");

      useTag.setAttribute("href", href);

      figcaptionTag.classList.add("list-item__clr-reaction");
      figcaptionTag.textContent = category;

      strongTag.textContent = `${score}`;
      break;
    case "memory":
      id.classList.add("list-item--bg-memory");

      useTag.setAttribute("href", href);

      figcaptionTag.classList.add("list-item__clr-memory");
      figcaptionTag.textContent = category;

      strongTag.textContent = `${score}`;
      break;
    case "verbal":
      id.classList.add("list-item--bg-verbal");

      useTag.setAttribute("href", href);

      figcaptionTag.classList.add("list-item__clr-verbal");
      figcaptionTag.textContent = category;

      strongTag.textContent = `${score}`;
      break;
    case "visual":
      id.classList.add("list-item--bg-visual");

      useTag.setAttribute("href", href);

      figcaptionTag.classList.add("list-item__clr-visual");
      figcaptionTag.textContent = category;

      strongTag.textContent = `${score}`;
  }
}
