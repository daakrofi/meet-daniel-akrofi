const personas = {
  analyst: {
    lede:
      "Data science PhD researcher turning online behavior, text, and market signals into evidence people can act on.",
    focus: "Behavioral data to decision logic",
  },
  ml: {
    lede:
      "Applied ML/NLP builder focused on text pipelines, embeddings, sentiment, classification, and interpretable output.",
    focus: "Text signals to reusable models",
  },
  strategy: {
    lede:
      "Commercial strategist with research depth, translating data and mixed-method evidence into stakeholder decisions.",
    focus: "Research insight to business action",
  },
};

const timeline = {
  phd: {
    kicker: "Warwick Business School",
    title: "Speculative expectations in online product communities",
    body:
      "Builds release-relative data workflows connecting online discourse, search behavior, participation dynamics, sentiment, and market outcomes.",
  },
  ra: {
    kicker: "Information Systems Management and Analytics Group",
    title: "AI adoption and digital platform research",
    body:
      "Monitored emerging AI developments, synthesized academic and practitioner evidence, and produced research-backed decks and briefings.",
  },
  lead: {
    kicker: "Adams 360 Marketing Agency",
    title: "Strategy, research, and creative leadership",
    body:
      "Led strategy and creative teams across international brands, turning consumer research into launch plans, campaigns, and client decisions.",
  },
  planner: {
    kicker: "Adams 360 Marketing Agency",
    title: "Market and customer insight into growth",
    body:
      "Designed communication strategies and digital plans that grew two FMCG brand fanbases by more than 20,000 and impressions by more than 500%.",
  },
};

const skillCopy = {
  Python:
    "Used Python to scrape and clean movie/community data, engineer features, score rankings, and structure reproducible notebooks.",
  SQL:
    "Used SQL-style analysis patterns to join sources, aggregate weekly signals, and shape analysis-ready tables for modeling.",
  NLP:
    "Applied NLP to online product-community text through preprocessing, sentiment analysis, theme extraction, and speculation-cue classification.",
  "scikit-learn":
    "Used scikit-learn workflows for baseline models, validation, cross-validation, and interpretable evaluation in analytical projects.",
  Pandas:
    "Used pandas to merge scraped datasets, handle launch dates, clean missing values, and build Movie League scoring features.",
  "Web scraping":
    "Designed scraping workflows for public movie signals and online-community data used in ranking and launch-discourse analysis.",
  GitHub:
    "Used GitHub to package portfolio work as readable repositories with notebooks, scripts, data notes, and project narratives.",
  R:
    "Used R/RStudio for academic statistical analysis, exploratory modeling, and thesis/research workflows at Warwick.",
};

const leagueMovies = [
  {
    title: "Superman",
    audience: 88,
    reviews: 82,
    dailyGross: [18.9, 15.4, 12.8, 10.6, 8.9, 7.2, 6.1, 5.0, 4.2, 3.6],
  },
  {
    title: "Jurassic World: Rebirth",
    audience: 78,
    reviews: 66,
    dailyGross: [7.5, 8.2, 9.1, 8.4, 7.8, 6.5, 5.7, 5.1, 4.6, 4.0],
  },
  {
    title: "F1: The Movie",
    audience: 90,
    reviews: 84,
    dailyGross: [3.1, 3.9, 4.6, 5.4, 6.2, 6.8, 5.9, 5.1, 4.5, 3.7],
  },
  {
    title: "Smurfs",
    audience: 72,
    reviews: 58,
    dailyGross: [3.1, 5.9, 6.6, 5.2, 4.4, 3.7, 3.2, 2.8, 2.3, 1.9],
  },
  {
    title: "I Know What You Did Last Summer",
    audience: 65,
    reviews: 62,
    dailyGross: [3.0, 4.8, 4.1, 3.6, 3.1, 2.6, 2.1, 1.9, 1.6, 1.3],
  },
  {
    title: "How to Train Your Dragon",
    audience: 91,
    reviews: 74,
    dailyGross: [1.6, 2.0, 2.5, 3.0, 3.8, 4.3, 4.8, 4.0, 3.5, 3.0],
  },
  {
    title: "Eddington",
    audience: 76,
    reviews: 88,
    dailyGross: [1.0, 2.2, 2.9, 3.4, 3.1, 2.8, 2.4, 2.2, 2.0, 1.8],
  },
  {
    title: "Elio",
    audience: 83,
    reviews: 79,
    dailyGross: [0.7, 1.0, 1.5, 2.0, 2.6, 3.1, 3.8, 4.6, 4.2, 3.7],
  },
  {
    title: "Lilo & Stitch",
    audience: 89,
    reviews: 73,
    dailyGross: [0.5, 0.8, 1.2, 1.8, 2.1, 2.7, 3.4, 3.9, 4.5, 5.0],
  },
  {
    title: "28 Years Later",
    audience: 70,
    reviews: 89,
    dailyGross: [0.4, 0.9, 1.4, 2.4, 3.2, 3.9, 4.5, 4.1, 3.6, 3.1],
  },
];

const personaButtons = document.querySelectorAll(".persona-button");
const heroVisual = document.querySelector(".hero-visual");
const personaFigures = document.querySelectorAll(".persona-figure");
const personaLede = document.querySelector("#persona-lede");
const personaReadout = document.querySelector("#persona-readout strong");

personaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const persona = personas[button.dataset.persona];
    personaButtons.forEach((item) => item.classList.remove("active"));
    personaFigures.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("active");
    heroVisual.dataset.active = button.dataset.persona;
    document.querySelector(`[data-persona-figure="${button.dataset.persona}"]`)?.classList.add("is-active");
    personaLede.textContent = persona.lede;
    personaReadout.textContent = persona.focus;
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

const timelineButtons = document.querySelectorAll(".timeline-item");
const timelineDetail = document.querySelector("#timeline-detail");

timelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const node = timeline[button.dataset.node];
    timelineButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    timelineDetail.innerHTML = `
      <p class="project-kicker">${node.kicker}</p>
      <h3>${node.title}</h3>
      <p>${node.body}</p>
    `;
  });
});

const skillButtons = document.querySelectorAll(".stack-cloud button");
const skillReadout = document.querySelector("#skill-readout");

skillButtons.forEach((button) => {
  button.addEventListener("click", () => {
    skillButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    skillReadout.textContent = skillCopy[button.dataset.skill];
  });
});

const leagueBody = document.querySelector("#league-body");
const leagueDay = document.querySelector("#league-day");
const leagueProgressFill = document.querySelector("#league-progress-fill");

const currencyFormatter = new Intl.NumberFormat("en-US", {
  compactDisplay: "short",
  maximumFractionDigits: 1,
  notation: "compact",
  style: "currency",
  currency: "USD",
});

let activeLeagueDay = 0;

function clampScore(value) {
  return Math.max(0, Math.min(100, value));
}

function getLeagueScore(movie, dayIndex, maxDailyGross) {
  const dailyGross = movie.dailyGross[dayIndex];
  const previousGross = movie.dailyGross[Math.max(0, dayIndex - 1)];
  const grossStrength = maxDailyGross > 0 ? (dailyGross / maxDailyGross) * 100 : 0;
  const momentum = dayIndex === 0 ? 0 : ((dailyGross - previousGross) / previousGross) * 100;
  const momentumStrength = clampScore(50 + momentum);
  const score = grossStrength * 0.45 + momentumStrength * 0.3 + movie.audience * 0.15 + movie.reviews * 0.1;

  return {
    dailyGross,
    momentum,
    score,
  };
}

function renderLeague() {
  const maxDailyGross = Math.max(...leagueMovies.map((movie) => movie.dailyGross[activeLeagueDay]));
  leagueDay.textContent = String(activeLeagueDay + 1).padStart(2, "0");
  leagueProgressFill.style.width = `${((activeLeagueDay + 1) / 10) * 100}%`;

  const ranked = leagueMovies
    .map((movie) => {
      const performance = getLeagueScore(movie, activeLeagueDay, maxDailyGross);
      return {
        ...movie,
        ...performance,
      };
    })
    .sort((a, b) => b.score - a.score);

  leagueBody.innerHTML = ranked
    .map(
      (movie, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${movie.title}</td>
          <td>${currencyFormatter.format(movie.dailyGross * 1000000)}</td>
          <td>${movie.momentum >= 0 ? "+" : ""}${movie.momentum.toFixed(1)}%</td>
          <td>${movie.audience}</td>
          <td>${movie.reviews}</td>
          <td>${movie.score.toFixed(2)}</td>
        </tr>
      `
    )
    .join("");
}

renderLeague();

setInterval(() => {
  activeLeagueDay = (activeLeagueDay + 1) % 10;
  renderLeague();
}, 1000);

const revealTargets = document.querySelectorAll(".section, .signal-band, .contact-section");

revealTargets.forEach((target) => target.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealTargets.forEach((target) => observer.observe(target));
