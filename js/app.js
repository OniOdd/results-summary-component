"use strict";

useData();

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

      countUpTo(score, strongTag);
      break;
    case "memory":
      id.classList.add("list-item--bg-memory");

      useTag.setAttribute("href", href);

      figcaptionTag.classList.add("list-item__clr-memory");
      figcaptionTag.textContent = category;

      countUpTo(score, strongTag);
      break;
    case "verbal":
      id.classList.add("list-item--bg-verbal");

      useTag.setAttribute("href", href);

      figcaptionTag.classList.add("list-item__clr-verbal");
      figcaptionTag.textContent = category;

      countUpTo(score, strongTag);
      break;
    case "visual":
      id.classList.add("list-item--bg-visual");

      useTag.setAttribute("href", href);

      figcaptionTag.classList.add("list-item__clr-visual");
      figcaptionTag.textContent = category;

      countUpTo(score, strongTag);
  }
}

async function getData() {
  try {
    const response = await fetch("../data/data.json");

    if (!response.ok) {
      alert(`Network response was not ok! (${response.statusText})`);
      throw new Error(`Network response was not ok! (${response.statusText})`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

async function useData() {
  const data = await getData();

  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const category = data[i].category;
      const href = data[i].icon;
      const score = data[i].score;

      insertToPage(createListItem(category.toLowerCase()));
      setDataAndClasses(category, href, score);
    }

    setScoreResult(data);
  }
}

function insertToPage(fn) {
  const summaryList = document.getElementById("summary-list");
  summaryList.append(fn);
}

function countUpTo(score, element) {
  let currentValue = 0;
  const delay = 10;

  const interval = setInterval(() => {
    if (currentValue < score) {
      currentValue++;
      element.textContent = currentValue;
    } else {
      clearInterval(interval);
    }
  }, delay);
}

function setScoreResult(data) {
  const scoreBlock = document.getElementById("score-result");
  let scoreSum = 0;
  let average;

  data.forEach((item) => (scoreSum += item.score));
  average = Math.round(scoreSum / data.length);

  countUpTo(average, scoreBlock);
}
