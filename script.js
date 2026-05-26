const quizData = [
  {
    question: "Filsafat manusia dalam PDF mempelajari manusia sebagai...",
    options: ["man as man", "mesin biologis saja", "data statistik", "makhluk ekonomi saja"],
    answer: 0,
    explain: "PDF memakai istilah man as man atau homo qua homo, yaitu manusia sebagai manusia."
  },
  {
    question: "Metode utama antropologi filsafat adalah...",
    options: ["refleksi atau spekulasi", "survei pasar", "eksperimen laboratorium saja", "hafalan tanggal"],
    answer: 0,
    explain: "Antropologi filsafat mempelajari manusia dengan metode refleksi atau spekulasi."
  },
  {
    question: "Man is the measure of all things dikaitkan dengan...",
    options: ["Protagoras", "Penfield", "Malebranche", "Durkheim"],
    answer: 0,
    explain: "Moto itu berasal dari Protagoras."
  },
  {
    question: "Know thyself atau Gnoti seauton dikaitkan dengan...",
    options: ["Orakel Delphi", "Darwin", "Carrel", "Diderot"],
    answer: 0,
    explain: "Orakel Delphi menekankan pengenalan diri."
  },
  {
    question: "Corak masa modern dalam PDF adalah...",
    options: ["antroposentris", "teosentris", "kosmosentris", "mitosentris"],
    answer: 0,
    explain: "Masa modern bercorak antroposentris dan dipengaruhi perkembangan ilmu-ilmu."
  },
  {
    question: "Tiga tingkat kehidupan dalam PDF adalah...",
    options: ["vegetatif, sensitif, rasional", "kimia, fisika, sosial", "mitos, religi, seni", "deduksi, induksi, abduksi"],
    answer: 0,
    explain: "PDF membagi kehidupan menjadi vita vegetativa, vita sensitiva, dan vita rationalis."
  },
  {
    question: "Mekanisme atau materialisme memandang kehidupan sebagai...",
    options: ["proses mekanistik materi", "daya hidup khusus dari Tuhan saja", "bahasa simbolik", "intervensi langsung mind"],
    answer: 0,
    explain: "Mekanisme memandang organisme seperti jam yang sangat rumit."
  },
  {
    question: "Vitalisme menekankan adanya...",
    options: ["elan vital", "bahasa proposisional", "puzzle box", "pineal gland"],
    answer: 0,
    explain: "Vitalisme menegaskan kehidupan dimungkinkan oleh daya kehidupan atau elan vital."
  },
  {
    question: "Deduksi adalah penalaran yang...",
    options: ["kesimpulannya dijamin jika premis benar", "selalu memakai data acak", "hanya mengekspresikan emosi", "menolak hukum logika"],
    answer: 0,
    explain: "Dalam deduksi, kebenaran konklusi dijamin oleh kebenaran premis-premis."
  },
  {
    question: "Abduksi sering melibatkan...",
    options: ["lompatan imajinasi untuk menemukan penjelasan", "penolakan semua data", "hanya reaksi biologis", "penghapusan simbol"],
    answer: 0,
    explain: "PDF menekankan abduksi bisa mengandung hal baru dan lompatan imajinasi."
  },
  {
    question: "Religious animal dalam PDF berakar pada konsep...",
    options: ["physis dan telos", "trial and error", "harmoni purba", "bahasa emosional"],
    answer: 0,
    explain: "Religious animal dikaitkan dengan physis dan telos, sehingga agama berakar dalam kodrat manusia."
  },
  {
    question: "Durkheim membagi religi primitif menjadi...",
    options: ["animisme, naturisme, totemisme", "deduksi, induksi, abduksi", "ontologi, logika, etika", "materialisme, idealisme, epifenomenalisme"],
    answer: 0,
    explain: "Dalam The Elementary Forms of Religious Life, Durkheim menyebut animisme, naturisme, dan totemisme."
  },
  {
    question: "Tokoh symbolizing animal adalah...",
    options: ["Ernst Cassirer", "Alexis Carrel", "Hippolyte Taine", "Pico della Mirandola"],
    answer: 0,
    explain: "Cassirer mendefinisikan manusia sebagai symbol-making animal atau symbolizing animal."
  },
  {
    question: "Menurut Uexkull, manusia berbeda dari hewan karena memiliki...",
    options: ["sistem simbolis", "hanya sistem efektor", "hanya sistem akseptor", "tidak punya lingkaran fungsional"],
    answer: 0,
    explain: "Manusia memiliki tambahan sistem simbolis di atas sistem akseptor dan efektor."
  },
  {
    question: "Bahasa proposisional memiliki...",
    options: ["struktur sintaksis dan logis", "hanya curahan afeksi", "hanya gerak wajah", "tanpa makna"],
    answer: 0,
    explain: "Bahasa proposisional berbeda dari bahasa emosional karena memiliki struktur sintaksis dan logis."
  },
  {
    question: "Menurut Driyarkara, tubuh adalah...",
    options: ["cara AKU menampakkan diri ke dunia", "keseluruhan diri manusia", "ilusi tanpa nilai", "sekadar mesin tanpa roh"],
    answer: 0,
    explain: "Driyarkara menegaskan tubuh adalah unsur diri dan cara AKU menampakkan diri ke dunia."
  },
  {
    question: "Mediate animation menyatakan bahwa jiwa...",
    options: ["muncul setelah materi tubuh cukup matang", "muncul sejak pembuahan langsung", "berasal dari totem", "hanya aktivitas otak"],
    answer: 0,
    explain: "Mediate animation menyatakan jiwa muncul beberapa waktu kemudian ketika materi tubuh sudah matang."
  },
  {
    question: "Mind-Body Problem membahas...",
    options: ["interaksi jiwa immaterial dan tubuh material", "asal-usul rambu lalu lintas", "sejarah matematika saja", "tiga bentuk religi primitif"],
    answer: 0,
    explain: "MBP bertanya bagaimana jiwa yang immaterial dapat berhubungan dengan tubuh material."
  },
  {
    question: "Okkasionalisme dikaitkan dengan...",
    options: ["Malebranche", "Leibniz", "Spinoza", "Kohler"],
    answer: 0,
    explain: "Okkasionalisme menyatakan Tuhan memediasi interaksi jiwa dan tubuh, dan dikaitkan dengan Malebranche."
  },
  {
    question: "Penfield menyimpulkan bahwa mind...",
    options: ["mengawasi, mengatur, dan memberi makna", "hanya asap dari otak", "tidak berhubungan dengan kesadaran", "sama dengan rambu lalu lintas"],
    answer: 0,
    explain: "Dari eksperimen operasi otak, Penfield menyimpulkan mind bukan sekadar mekanisme saraf."
  }
];

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const readingProgress = document.getElementById("readingProgress");
const backToTop = document.getElementById("backToTop");
const siteSearch = document.getElementById("siteSearch");
const clearSearch = document.getElementById("clearSearch");
const searchStatus = document.getElementById("searchStatus");
const showSummaryHero = document.getElementById("showSummaryHero");
const startQuizHero = document.getElementById("startQuizHero");
const startQuiz = document.getElementById("startQuiz");
const submitQuiz = document.getElementById("submitQuiz");
const resetQuiz = document.getElementById("resetQuiz");
const quizContainer = document.getElementById("quizContainer");
const quizResult = document.getElementById("quizResult");

function setTheme(theme) {
  body.dataset.theme = theme;
  localStorage.setItem("fm-theme", theme);
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = isDark ? "Mode Terang" : "Mode Gelap";
}

function initTheme() {
  const savedTheme = localStorage.getItem("fm-theme");
  if (savedTheme) {
    setTheme(savedTheme);
    return;
  }
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

function setAccordion(trigger, expanded) {
  const panel = document.getElementById(trigger.getAttribute("aria-controls"));
  const icon = trigger.querySelector(".toggle-icon");
  trigger.setAttribute("aria-expanded", String(expanded));
  if (panel) {
    panel.hidden = !expanded;
  }
  if (icon) {
    icon.textContent = expanded ? "-" : "+";
  }
}

function initAccordions() {
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      setAccordion(trigger, !expanded);
    });
  });
}

function updateReadingProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
  readingProgress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  backToTop.classList.toggle("is-visible", window.scrollY > 520);
}

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function searchableItems() {
  return Array.from(document.querySelectorAll(".searchable"));
}

function openAccordionElement(element) {
  const trigger = element.querySelector(":scope > .accordion-trigger");
  if (trigger) {
    setAccordion(trigger, true);
  }
}

function resetSearchView() {
  searchableItems().forEach((item) => item.classList.remove("is-hidden"));
  searchStatus.textContent = "Siap mencari seluruh materi.";
}

function runSearch() {
  const term = normalizeText(siteSearch.value.trim());
  if (!term) {
    resetSearchView();
    return;
  }

  let matches = 0;
  searchableItems().forEach((item) => {
    const haystack = normalizeText(`${item.textContent} ${item.dataset.keywords || ""}`);
    const match = haystack.includes(term);
    item.classList.toggle("is-hidden", !match);
    if (match) {
      matches += 1;
      openAccordionElement(item);
    }
  });

  searchStatus.textContent = matches > 0
    ? `${matches} bagian cocok dengan "${siteSearch.value.trim()}".`
    : `Tidak ada hasil untuk "${siteSearch.value.trim()}".`;
}

function scrollToSummary() {
  const summary = document.getElementById("ringkasan");
  summary.scrollIntoView({ behavior: "smooth", block: "start" });
  const grid = summary.querySelector(".summary-grid");
  if (grid) {
    grid.classList.remove("highlight-section");
    window.setTimeout(() => grid.classList.add("highlight-section"), 40);
  }
}

function renderQuiz() {
  quizContainer.innerHTML = quizData.map((item, index) => {
    const options = item.options.map((option, optionIndex) => `
      <label>
        <input type="radio" name="question-${index}" value="${optionIndex}">
        <span>${option}</span>
      </label>
    `).join("");

    return `
      <article class="quiz-question" id="quiz-question-${index}">
        <h3>${index + 1}. ${item.question}</h3>
        <div class="option-list">${options}</div>
        <div class="feedback" hidden></div>
      </article>
    `;
  }).join("");
}

function startQuizFlow() {
  renderQuiz();
  quizResult.textContent = "";
  startQuiz.hidden = true;
  submitQuiz.hidden = false;
  resetQuiz.hidden = false;
  document.getElementById("kuis").scrollIntoView({ behavior: "smooth", block: "start" });
}

function submitQuizFlow() {
  let score = 0;

  quizData.forEach((item, index) => {
    const questionEl = document.getElementById(`quiz-question-${index}`);
    const selected = questionEl.querySelector(`input[name="question-${index}"]:checked`);
    const feedback = questionEl.querySelector(".feedback");
    const selectedValue = selected ? Number(selected.value) : null;
    const correct = selectedValue === item.answer;

    if (correct) {
      score += 1;
    }

    questionEl.classList.toggle("correct", correct);
    questionEl.classList.toggle("incorrect", !correct);
    feedback.hidden = false;
    feedback.textContent = correct
      ? `Benar. ${item.explain}`
      : `Belum tepat. Jawaban benar: ${item.options[item.answer]}. ${item.explain}`;
  });

  quizResult.textContent = `Skor kamu: ${score} dari ${quizData.length}.`;
  submitQuiz.hidden = true;
}

function resetQuizFlow() {
  quizContainer.innerHTML = "";
  quizResult.textContent = "";
  startQuiz.hidden = false;
  submitQuiz.hidden = true;
  resetQuiz.hidden = true;
}

function initNav() {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initEvents() {
  themeToggle.addEventListener("click", () => {
    setTheme(body.dataset.theme === "dark" ? "light" : "dark");
  });
  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  siteSearch.addEventListener("input", runSearch);
  clearSearch.addEventListener("click", () => {
    siteSearch.value = "";
    resetSearchView();
    siteSearch.focus();
  });
  showSummaryHero.addEventListener("click", scrollToSummary);
  startQuizHero.addEventListener("click", startQuizFlow);
  startQuiz.addEventListener("click", startQuizFlow);
  submitQuiz.addEventListener("click", submitQuizFlow);
  resetQuiz.addEventListener("click", resetQuizFlow);
}

initTheme();
initNav();
initAccordions();
initEvents();
updateReadingProgress();
