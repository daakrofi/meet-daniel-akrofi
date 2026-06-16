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

const archivedMovies = [
  {
    title: "Superman",
    sourceRank: 1,
    dailyGross: 18858328,
    totalGross: 236233556,
    days: 10,
  },
  {
    title: "Jurassic World: Rebirth",
    sourceRank: 2,
    dailyGross: 7515280,
    totalGross: 276485990,
    days: 19,
  },
  {
    title: "F1: The Movie",
    sourceRank: 3,
    dailyGross: 3145114,
    totalGross: 153904702,
    days: 24,
  },
  {
    title: "Smurfs",
    sourceRank: 4,
    dailyGross: 3121911,
    totalGross: 11075090,
    days: 3,
  },
  {
    title: "I Know What You Did Last Summer",
    sourceRank: 5,
    dailyGross: 3027487,
    totalGross: 12755359,
    days: 3,
  },
  {
    title: "How to Train Your Dragon",
    sourceRank: 6,
    dailyGross: 1620150,
    totalGross: 250784795,
    days: 38,
  },
  {
    title: "Eddington",
    sourceRank: 7,
    dailyGross: 1016826,
    totalGross: 4255607,
    days: 3,
  },
  {
    title: "Elio",
    sourceRank: 8,
    dailyGross: 683063,
    totalGross: 69045557,
    days: 31,
  },
  {
    title: "Lilo & Stitch",
    sourceRank: 9,
    dailyGross: 506413,
    totalGross: 418283149,
    days: 59,
  },
  {
    title: "28 Years Later",
    sourceRank: 10,
    dailyGross: 377178,
    totalGross: 68725097,
    days: 31,
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
const rankMultiplierWeight = document.querySelector("#rank-multiplier-weight");
const rankMultiplierValue = document.querySelector("#rank-multiplier-value");

const currencyFormatter = new Intl.NumberFormat("en-US", {
  compactDisplay: "short",
  maximumFractionDigits: 1,
  notation: "compact",
  style: "currency",
  currency: "USD",
});

function getRankMultiplier(sourceRank, strength) {
  if (!sourceRank || sourceRank < 1 || sourceRank > 10) {
    return 1;
  }

  const originalBonus = (10 - sourceRank) / 9;
  return 1 + originalBonus * strength;
}

function getPerformanceScore(movie, multiplierStrength) {
  const previousGross = movie.totalGross - movie.dailyGross;
  const dailyGrowthRate = previousGross > 0 ? (movie.dailyGross / previousGross) * 100 : 0;
  const basePoints = movie.days <= 1 ? 10 : Math.sqrt(Math.max(0, dailyGrowthRate));
  const rankMultiplier = getRankMultiplier(movie.sourceRank, multiplierStrength);

  return {
    basePoints,
    dailyGrowthRate,
    rankMultiplier,
    score: basePoints * rankMultiplier,
  };
}

function renderLeague() {
  const multiplierStrength = Number(rankMultiplierWeight.value) / 100;
  rankMultiplierValue.textContent = `${rankMultiplierWeight.value}%`;

  const ranked = archivedMovies
    .map((movie) => {
      const performance = getPerformanceScore(movie, multiplierStrength);
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
          <td>#${movie.sourceRank}</td>
          <td>${currencyFormatter.format(movie.dailyGross)}</td>
          <td>${movie.days}</td>
          <td>${movie.rankMultiplier.toFixed(2)}x</td>
          <td>${movie.score.toFixed(2)}</td>
        </tr>
      `
    )
    .join("");
}

rankMultiplierWeight.addEventListener("input", renderLeague);

renderLeague();

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
