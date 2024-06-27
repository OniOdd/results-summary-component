"use strict";

const summaryList = document.getElementById("summary-list");

summaryList.append(createListItem("reaction"));

function createListItem(idValue) {
  const li = document.createElement("li");
  li.classList.add("test-card__summary-list-item", "list-item");
  li.id = idValue;

  const figure = document.createElement("figure");
  figure.classList.add("list-item__figure");

  const svg = document.createElement("svg");
  svg.classList.add("icon");

  const use = document.createElement("use");

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
