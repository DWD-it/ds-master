/* ============================================================
   DS Master - Core Application
   Theme, i18n, Routing, Particles, Navigation
   ============================================================ */

// ── Global State ──
const DSMaster = {
  currentLecture: null,
  currentView: 'home', // 'home', 'lecture', 'quiz', 'exam'
  lang: localStorage.getItem('ds-lang') || 'ar',
  theme: localStorage.getItem('ds-theme') || 'dark',
  sidebarOpen: false,
  quizState: null,
};

// ── i18n Labels ──
const UI_TEXT = {
  ar: {
    siteTitle: 'DS Master',
    siteSubtitle: 'جامعة برج العرب التكنولوجيا',
    subjectName: 'هياكل البيانات',
    heroTitle1: 'تعلّم',
    heroTitle2: 'هياكل البيانات',
    heroTitle3: 'بأسلوب تفاعلي مبتكر',
    heroDesc: 'منصة تعليمية شاملة لمادة Data Structures مع شرح مبسط بالعربي والإنجليزي، رسومات تفاعلية، واختبارات ذكية',
    lectures: 'المحاضرات',
    statLectures: 'محاضرة',
    statQuestions: 'سؤال MCQ',
    statVisuals: 'رسم تفاعلي',
    home: 'الرئيسية',
    quizBtn: '🧪 اختبر نفسك',
    examBtn: '📝 اختبار شامل',
    examTitle: 'اختبار شامل على جميع المحاضرات',
    examDesc: '90 سؤال - 10 أسئلة لكل محاضرة',
    nextQ: 'السؤال التالي',
    prevQ: 'السؤال السابق',
    submitQuiz: 'إنهاء الاختبار',
    score: 'النتيجة',
    correct: 'إجابة صحيحة',
    wrong: 'إجابة خاطئة',
    tryAgain: 'حاول مرة أخرى',
    backHome: 'العودة للرئيسية',
    backToLecture: 'العودة للمحاضرة',
    progress: 'التقدم',
    excellent: '🎉 ممتاز! أنت بطل!',
    good: '👏 أحسنت! شغل جميل',
    average: '💪 كويس، بس محتاج تراجع أكتر',
    poor: '📚 محتاج تذاكر أكتر، حاول تاني!',
    questionOf: 'من',
    explanation: '💡 التوضيح:',
    questionsCount: 'سؤال',
    startQuiz: 'ابدأ الاختبار',
    topics: 'المواضيع:',
  },
  en: {
    siteTitle: 'DS Master',
    siteSubtitle: 'Borg El Arab Technology University',
    subjectName: 'Data Structures',
    heroTitle1: 'Learn',
    heroTitle2: 'Data Structures',
    heroTitle3: 'with Interactive Innovation',
    heroDesc: 'A comprehensive learning platform for Data Structures with bilingual explanations, interactive visualizations, and smart quizzes',
    lectures: 'Lectures',
    statLectures: 'Lectures',
    statQuestions: 'MCQ Questions',
    statVisuals: 'Interactive Visuals',
    home: 'Home',
    quizBtn: '🧪 Test Yourself',
    examBtn: '📝 Comprehensive Exam',
    examTitle: 'Comprehensive Exam on All Lectures',
    examDesc: '90 Questions - 10 per Lecture',
    nextQ: 'Next Question',
    prevQ: 'Previous Question',
    submitQuiz: 'Submit Quiz',
    score: 'Score',
    correct: 'Correct',
    wrong: 'Wrong',
    tryAgain: 'Try Again',
    backHome: 'Back to Home',
    backToLecture: 'Back to Lecture',
    progress: 'Progress',
    excellent: '🎉 Excellent! You\'re a champion!',
    good: '👏 Well done! Great work!',
    average: '💪 Good, but need more review',
    poor: '📚 Need more study, try again!',
    questionOf: 'of',
    explanation: '💡 Explanation:',
    questionsCount: 'Questions',
    startQuiz: 'Start Quiz',
    topics: 'Topics:',
  }
};

function t(key) {
  return UI_TEXT[DSMaster.lang]?.[key] || key;
}

// ── Theme System ──
function initTheme() {
  document.documentElement.setAttribute('data-theme', DSMaster.theme);
  updateThemeIcon();
}

function toggleTheme() {
  DSMaster.theme = DSMaster.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', DSMaster.theme);
  localStorage.setItem('ds-theme', DSMaster.theme);
  updateThemeIcon();
  initParticles(); // re-init with new colors
}

function updateThemeIcon() {
  const thumb = document.querySelector('.theme-toggle-thumb');
  if (thumb) {
    thumb.textContent = DSMaster.theme === 'dark' ? '🌙' : '☀️';
  }
}

// ── Language System ──
function initLang() {
  setLanguage(DSMaster.lang);
}

function setLanguage(lang) {
  DSMaster.lang = lang;
  localStorage.setItem('ds-lang', lang);

  if (lang === 'ar') {
    document.body.setAttribute('dir', 'rtl');
    document.documentElement.lang = 'ar';
  } else {
    document.body.setAttribute('dir', 'ltr');
    document.documentElement.lang = 'en';
  }

  // Update active lang button
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render current view
  renderCurrentView();
}

function toggleLang() {
  setLanguage(DSMaster.lang === 'ar' ? 'en' : 'ar');
}

// ── Sidebar ──
function toggleSidebar() {
  DSMaster.sidebarOpen = !DSMaster.sidebarOpen;
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  if (sidebar) sidebar.classList.toggle('open', DSMaster.sidebarOpen);
  if (overlay) overlay.classList.toggle('open', DSMaster.sidebarOpen);
}

function closeSidebar() {
  DSMaster.sidebarOpen = false;
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

// ── Navigation / Routing ──
function navigate(view, param) {
  DSMaster.currentView = view;
  DSMaster.currentLecture = param || null;
  closeSidebar();
  
  // Update URL hash
  if (view === 'home') {
    window.location.hash = '';
  } else if (view === 'lecture') {
    window.location.hash = `lecture-${param}`;
  } else if (view === 'quiz') {
    window.location.hash = `quiz-${param}`;
  } else if (view === 'exam') {
    window.location.hash = 'exam';
  }
  
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashChange() {
  const hash = window.location.hash.slice(1);
  if (!hash) {
    DSMaster.currentView = 'home';
    DSMaster.currentLecture = null;
  } else if (hash.startsWith('lecture-')) {
    DSMaster.currentView = 'lecture';
    DSMaster.currentLecture = parseInt(hash.split('-')[1]);
  } else if (hash.startsWith('quiz-')) {
    DSMaster.currentView = 'quiz';
    DSMaster.currentLecture = parseInt(hash.split('-')[1]);
  } else if (hash === 'exam') {
    DSMaster.currentView = 'exam';
  }
  renderCurrentView();
}

// ── Render Views ──
function renderCurrentView() {
  updateSidebar();
  updateHeader();

  const main = document.getElementById('main-content');
  if (!main) return;

  main.innerHTML = '';

  switch (DSMaster.currentView) {
    case 'home':
      renderHome(main);
      break;
    case 'lecture':
      renderLecture(main, DSMaster.currentLecture);
      break;
    case 'quiz':
      renderQuiz(main, DSMaster.currentLecture);
      break;
    case 'exam':
      renderExam(main);
      break;
  }

  // Render Footer
  main.insertAdjacentHTML('beforeend', `
    <footer class="app-footer">
      <div class="footer-content">
        <p>${DSMaster.lang === 'ar' ? 'تم تصميم وتطوير هذا الموقع بكل ❤️ بواسطة' : 'Designed & Developed with ❤️ by'} <a href="https://abdallahmohamed.vercel.app/" target="_blank" class="developer-name">عبدالله محمد علي حسن</a></p>
        <p class="developer-contact">${DSMaster.lang === 'ar' ? 'للتواصل:' : 'Contact:'} <span dir="ltr">01285512241</span></p>
      </div>
    </footer>
  `);
}

function updateSidebar() {
  // Update active nav item
  document.querySelectorAll('.nav-item').forEach(item => {
    const id = item.dataset.lecture;
    if (id === 'home') {
      item.classList.toggle('active', DSMaster.currentView === 'home');
    } else if (id) {
      const isActive = (DSMaster.currentView === 'lecture' || DSMaster.currentView === 'quiz')
        && DSMaster.currentLecture === parseInt(id);
      item.classList.toggle('active', isActive);
    }
  });

  // Update sidebar text for current language
  const subjectBadge = document.querySelector('.subject-badge-text');
  if (subjectBadge) subjectBadge.textContent = t('subjectName');
  
  const logoTitle = document.querySelector('.logo-title');
  if (logoTitle) logoTitle.textContent = t('siteTitle');
  
  const logoSubtitle = document.querySelector('.logo-subtitle');
  if (logoSubtitle) logoSubtitle.textContent = t('siteSubtitle');

  const navSectionTitle = document.querySelector('.nav-section-title');
  if (navSectionTitle) navSectionTitle.textContent = t('lectures');

  const examBtn = document.querySelector('.exam-btn');
  if (examBtn) {
    examBtn.innerHTML = `<span>📝</span> ${t('examBtn')}`;
  }

  // Update nav item titles for current lang
  if (typeof LECTURES !== 'undefined') {
    document.querySelectorAll('.nav-item[data-lecture]').forEach(item => {
      const id = parseInt(item.dataset.lecture);
      if (id && LECTURES[id]) {
        const textEl = item.querySelector('.nav-item-text');
        if (textEl) textEl.textContent = LECTURES[id].title[DSMaster.lang];
      }
    });
  }
}

function updateHeader() {
  const breadcrumb = document.querySelector('.breadcrumb');
  if (!breadcrumb) return;

  let crumbs = `<span class="breadcrumb-item" onclick="navigate('home')" style="cursor:pointer">${t('home')}</span>`;

  if (DSMaster.currentView === 'lecture' && DSMaster.currentLecture && typeof LECTURES !== 'undefined') {
    const lec = LECTURES[DSMaster.currentLecture];
    if (lec) {
      crumbs += `<span class="breadcrumb-sep">›</span>`;
      crumbs += `<span class="breadcrumb-current">${lec.title[DSMaster.lang]}</span>`;
    }
  } else if (DSMaster.currentView === 'quiz' && DSMaster.currentLecture) {
    crumbs += `<span class="breadcrumb-sep">›</span>`;
    crumbs += `<span class="breadcrumb-current">${t('quizBtn')}</span>`;
  } else if (DSMaster.currentView === 'exam') {
    crumbs += `<span class="breadcrumb-sep">›</span>`;
    crumbs += `<span class="breadcrumb-current">${t('examBtn')}</span>`;
  }

  breadcrumb.innerHTML = crumbs;
}

// ── Home Page ──
function renderHome(container) {
  const lectureIds = typeof LECTURES !== 'undefined' ? Object.keys(LECTURES).map(Number).sort((a,b) => a - b) : [];
  const totalQuestions = typeof QUIZZES !== 'undefined'
    ? Object.values(QUIZZES).reduce((sum, q) => sum + q.length, 0) : 0;

  let html = `
    <div class="content-wrapper">
      <div class="home-hero">
        <div class="home-hero-badge">
          <span>⚡</span>
          <span>${DSMaster.lang === 'ar' ? 'جامعة برج العرب التكنولوجيا - تكنولوجيا المعلومات' : 'Borg El Arab Technology University - IT'}</span>
        </div>
        <h1 class="home-hero-title">
          ${t('heroTitle1')}<br>
          <span class="gradient-text">${t('heroTitle2')}</span><br>
          ${t('heroTitle3')}
        </h1>
        <p class="home-hero-desc">${t('heroDesc')}</p>
        <div class="home-stats">
          <div class="home-stat">
            <div class="home-stat-num">${lectureIds.length}</div>
            <div class="home-stat-label">${t('statLectures')}</div>
          </div>
          <div class="home-stat">
            <div class="home-stat-num">${totalQuestions}+</div>
            <div class="home-stat-label">${t('statQuestions')}</div>
          </div>
          <div class="home-stat">
            <div class="home-stat-num">7</div>
            <div class="home-stat-label">${t('statVisuals')}</div>
          </div>
        </div>
      </div>

      <div class="home-lectures-grid">
  `;

  lectureIds.forEach((id, index) => {
    const lec = LECTURES[id];
    const topics = lec.topics ? lec.topics[DSMaster.lang] : '';
    const quizCount = typeof QUIZZES !== 'undefined' && QUIZZES[id] ? QUIZZES[id].length : 0;
    html += `
      <div class="card card-3d lecture-card" onclick="navigate('lecture', ${id})" style="animation-delay: ${index * 0.08}s; animation: fadeInUp 0.5s ease-out ${index * 0.08}s backwards;">
        <div class="lecture-card-num">${id < 10 ? '0' + id : id}</div>
        <div class="lecture-card-content">
          <div class="lecture-card-title">${lec.title[DSMaster.lang]}</div>
          <div class="lecture-card-desc">${topics}</div>
          <div class="lecture-card-meta">
            <span class="lecture-card-tag">${lec.icon || '📘'} ${DSMaster.lang === 'ar' ? 'الأسبوع' : 'Week'} ${id}</span>
            ${quizCount ? `<span>${quizCount} ${t('questionsCount')}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

// ── Lecture Page ──
function renderLecture(container, lectureId) {
  if (typeof LECTURES === 'undefined' || !LECTURES[lectureId]) {
    container.innerHTML = `<div class="content-wrapper"><p>${DSMaster.lang === 'ar' ? 'المحاضرة غير موجودة' : 'Lecture not found'}</p></div>`;
    return;
  }

  const lec = LECTURES[lectureId];
  const lang = DSMaster.lang;
  
  let html = `
    <div class="content-wrapper">
      <div class="lecture-header">
        <div class="lecture-num-badge">
          <span>${lec.icon || '📘'}</span>
          <span>${lang === 'ar' ? 'المحاضرة' : 'Lecture'} ${lectureId}</span>
        </div>
        <h1 class="lecture-title">${lec.title[lang]}</h1>
        <p class="lecture-subtitle">${lec.subtitle ? lec.subtitle[lang] : ''}</p>
      </div>
  `;

  // Render sections
  if (lec.sections) {
    lec.sections.forEach((section, idx) => {
      html += `<div class="section" style="animation-delay: ${(idx + 1) * 0.1}s">`;
      html += `<h2 class="section-title">
        <span class="section-title-icon">${section.icon || '📌'}</span>
        ${section.title[lang]}
      </h2>`;

      // Content blocks
      if (section.content) {
        html += `<div class="content-block">${section.content[lang]}</div>`;
      }

      // Important tip
      if (section.tip) {
        html += `<div class="tip-box important">
          <span class="tip-box-icon">⚠️</span>
          <div>${section.tip[lang]}</div>
        </div>`;
      }

      // Info tip
      if (section.info) {
        html += `<div class="tip-box info">
          <span class="tip-box-icon">💡</span>
          <div>${section.info[lang]}</div>
        </div>`;
      }

      // Formula
      if (section.formula) {
        html += `<div class="formula-highlight">${section.formula}</div>`;
      }

      // Code block
      if (section.code) {
        html += `
          <div class="code-block">
            <div class="code-header">
              <span class="code-lang-badge">C++</span>
              <span>${section.codeTitle || ''}</span>
            </div>
            <pre class="code-body">${section.code}</pre>
          </div>
        `;
      }

      // Complexity result
      if (section.complexity) {
        html += `<div class="complexity-result">
          <span>⏱️</span>
          <span>${section.complexity}</span>
        </div>`;
      }

      // Diagram / Visualization
      if (section.visualization) {
        html += renderVisualization(section.visualization);
      }

      // Classification tree
      if (section.classificationTree) {
        html += renderClassificationTree(section.classificationTree, lang);
      }

      html += `</div>`; // section end
    });
  }

  // Quiz button
  const hasQuiz = typeof QUIZZES !== 'undefined' && QUIZZES[lectureId] && QUIZZES[lectureId].length > 0;
  if (hasQuiz) {
    html += `
      <div class="text-center mt-8">
        <button class="btn btn-quiz" onclick="navigate('quiz', ${lectureId})">
          ${t('quizBtn')} (${QUIZZES[lectureId].length} ${t('questionsCount')})
        </button>
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;
}

// ── Visualization Renderer ──
function renderVisualization(viz) {
  let html = `<div class="diagram-container">`;
  html += `<div class="diagram-title">${viz.title || ''}</div>`;
  if (viz.desc) html += `<div class="diagram-desc">${viz.desc}</div>`;

  html += `<div class="viz-area" id="viz-${viz.id || Math.random().toString(36).slice(2)}">`;

  switch (viz.type) {
    case 'array':
      html += renderArrayViz(viz.data || [5, 10, 3, 7, 1]);
      break;
    case 'stack':
      html += renderStackViz(viz.data || ['A1', 'A2', 'A3']);
      break;
    case 'queue':
      html += renderQueueViz(viz.data || [5, 10, 3]);
      break;
    case 'linked-list':
      html += renderLinkedListViz(viz.data || [1, 2, 3]);
      break;
    case 'tree':
      html += renderTreeViz(viz.data);
      break;
    case 'classification':
      // handled separately
      break;
    default:
      html += `<p style="color: var(--text-muted)">${viz.type}</p>`;
  }

  html += `</div>`;

  // Interactive controls
  if (viz.interactive) {
    html += `
      <div class="viz-controls">
        <input type="text" id="viz-input-${viz.id}" placeholder="${DSMaster.lang === 'ar' ? 'أدخل قيمة' : 'Enter value'}" />
        <button class="btn btn-primary btn-sm" onclick="${viz.pushFn || ''}">
          ${viz.pushLabel || 'Push'}
        </button>
        <button class="btn btn-secondary btn-sm" onclick="${viz.popFn || ''}">
          ${viz.popLabel || 'Pop'}
        </button>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

function renderArrayViz(data) {
  return `<div class="array-diagram" style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;">${
    data.map((val, i) =>
      `<div class="array-cell"><span>${val}</span><span class="cell-index">[${i}]</span></div>`
    ).join('')
  }</div>`;
}

function renderStackViz(data) {
  return `<div style="position:relative;display:inline-block;">
    <div class="stack-top-indicator">↓ Push / Pop ↑</div>
    <div class="stack-viz">
      ${data.slice().reverse().map(val => `<div class="stack-item">${val}</div>`).join('')}
    </div>
  </div>`;
}

function renderQueueViz(data) {
  return `<div class="queue-viz">
    <span class="queue-label">${DSMaster.lang === 'ar' ? 'إدخال ←' : 'Enqueue →'}</span>
    <div class="queue-items">
      ${data.map(val => `<div class="queue-item">${val}</div>`).join('')}
    </div>
    <span class="queue-label">${DSMaster.lang === 'ar' ? '→ إخراج' : '→ Dequeue'}</span>
  </div>`;
}

function renderLinkedListViz(data) {
  let html = '<div class="ll-viz">';
  data.forEach((val, i) => {
    html += `<div class="ll-node">
      <div class="ll-data">${val}</div>
      <div class="ll-next">${i < data.length - 1 ? 'Next' : ''}</div>
    </div>`;
    if (i < data.length - 1) {
      html += `<div class="ll-arrow">→</div>`;
    }
  });
  html += `<div class="ll-arrow">→</div><div class="ll-null">NULL</div>`;
  html += '</div>';
  return html;
}

function renderTreeViz(data) {
  if (!data) return '<p style="color:var(--text-muted)">Tree visualization</p>';
  let html = '<div class="tree-viz">';
  data.forEach(level => {
    html += '<div class="tree-level">';
    level.forEach(node => {
      html += `<div class="tree-node">${node}</div>`;
    });
    html += '</div>';
  });
  html += '</div>';
  return html;
}

function renderClassificationTree(tree, lang) {
  let html = `<div class="diagram-container"><div class="diagram-title">${tree.title ? tree.title[lang] : ''}</div>`;
  html += `<div class="classification-tree">`;
  html += renderTreeBranch(tree.nodes, lang);
  html += `</div></div>`;
  return html;
}

function renderTreeBranch(nodes, lang) {
  if (!nodes || nodes.length === 0) return '';
  let html = '';
  nodes.forEach(node => {
    html += `<div class="tree-branch-item">
      <span>${node.icon || '📁'}</span>
      <strong>${node.label[lang]}</strong>
      ${node.items ? `: <span class="tree-type">${node.items.join(', ')}</span>` : ''}
    </div>`;
    if (node.children) {
      html += `<div class="tree-branch">${renderTreeBranch(node.children, lang)}</div>`;
    }
  });
  return html;
}

// ── Quiz Engine ──
function renderQuiz(container, lectureId) {
  if (typeof QUIZZES === 'undefined' || !QUIZZES[lectureId]) {
    container.innerHTML = `<div class="content-wrapper"><p>No quiz available</p></div>`;
    return;
  }

  const questions = shuffleArray([...QUIZZES[lectureId]]);
  DSMaster.quizState = {
    questions,
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
    revealed: new Array(questions.length).fill(false),
    lectureId,
    isExam: false,
  };

  renderQuizQuestion(container);
}

function renderExam(container) {
  if (typeof QUIZZES === 'undefined') {
    container.innerHTML = `<div class="content-wrapper"><p>No quiz data</p></div>`;
    return;
  }

  // Collect 10 questions from each lecture, in order
  let examQuestions = [];
  const lectureIds = Object.keys(QUIZZES).map(Number).sort((a,b) => a - b);
  lectureIds.forEach(lid => {
    const qs = shuffleArray([...QUIZZES[lid]]);
    examQuestions = examQuestions.concat(qs.slice(0, 10).map(q => ({ ...q, lectureId: lid })));
  });

  DSMaster.quizState = {
    questions: examQuestions,
    currentIndex: 0,
    answers: new Array(examQuestions.length).fill(null),
    revealed: new Array(examQuestions.length).fill(false),
    lectureId: null,
    isExam: true,
  };

  renderQuizQuestion(container);
}

function renderQuizQuestion(container) {
  const qs = DSMaster.quizState;
  if (!qs) return;

  const q = qs.questions[qs.currentIndex];
  const lang = DSMaster.lang;
  const total = qs.questions.length;
  const current = qs.currentIndex + 1;
  const progress = (current / total) * 100;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  let html = `<div class="content-wrapper quiz-container">
    <div class="quiz-header">
      <h1 class="quiz-title">${qs.isExam ? t('examTitle') : t('quizBtn')}</h1>
      <p class="quiz-info">${qs.isExam ? t('examDesc') : (LECTURES[qs.lectureId] ? LECTURES[qs.lectureId].title[lang] : '')}</p>
    </div>

    <div class="quiz-progress">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width: ${progress}%"></div></div>
      <div class="quiz-progress-text">
        <span>${lang === 'ar' ? `السؤال ${current} ${t('questionOf')} ${total}` : `Question ${current} ${t('questionOf')} ${total}`}</span>
        <span>${Math.round(progress)}%</span>
      </div>
    </div>

    <div class="quiz-question-card">
      <div class="quiz-question-num">
        <span>❓</span>
        <span>${lang === 'ar' ? `سؤال ${current}` : `Question ${current}`}</span>
        ${q.lectureId ? `<span style="margin-${lang==='ar'?'right':'left'}:8px;opacity:0.6">(${lang==='ar'?'محاضرة':'Lec'} ${q.lectureId})</span>` : ''}
      </div>
      <div class="quiz-question-text">${q.question[lang] || q.question['en']}</div>
      <div class="quiz-options">
  `;

  const options = q.options;
  options.forEach((opt, idx) => {
    const selectedClass = qs.answers[qs.currentIndex] === idx ? 'selected' : '';
    let stateClass = '';
    if (qs.revealed[qs.currentIndex]) {
      if (idx === q.correct) stateClass = 'correct';
      else if (qs.answers[qs.currentIndex] === idx) stateClass = 'wrong';
    }

    const optText = typeof opt === 'object' ? (opt[lang] || opt['en']) : opt;

    html += `
      <div class="quiz-option ${selectedClass} ${stateClass}" onclick="selectAnswer(${idx})" ${qs.revealed[qs.currentIndex] ? 'style="pointer-events:none"' : ''}>
        <div class="quiz-option-letter">${letters[idx]}</div>
        <div class="quiz-option-text">${optText}</div>
      </div>
    `;
  });

  html += `</div>`;

  // Show explanation if revealed
  if (qs.revealed[qs.currentIndex] && q.explanation) {
    const expText = typeof q.explanation === 'object' ? (q.explanation[lang] || q.explanation['en']) : q.explanation;
    html += `<div class="quiz-explanation"><strong>${t('explanation')}</strong> ${expText}</div>`;
  }

  html += `</div>`;

  // Navigation
  html += `<div class="quiz-nav">`;
  if (qs.currentIndex > 0) {
    html += `<button class="btn btn-secondary" onclick="prevQuestion()">← ${t('prevQ')}</button>`;
  } else {
    html += `<div></div>`;
  }

  if (qs.currentIndex < total - 1) {
    html += `<button class="btn btn-primary" onclick="nextQuestion()">${t('nextQ')} →</button>`;
  } else {
    html += `<button class="btn btn-quiz" onclick="showResults()">${t('submitQuiz')} ✓</button>`;
  }
  html += `</div>`;

  html += `</div>`;
  container.innerHTML = html;
}

function selectAnswer(idx) {
  const qs = DSMaster.quizState;
  if (!qs || qs.revealed[qs.currentIndex]) return;

  qs.answers[qs.currentIndex] = idx;
  qs.revealed[qs.currentIndex] = true;

  renderQuizQuestion(document.getElementById('main-content'));
}

function nextQuestion() {
  const qs = DSMaster.quizState;
  if (!qs || qs.currentIndex >= qs.questions.length - 1) return;
  qs.currentIndex++;
  renderQuizQuestion(document.getElementById('main-content'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevQuestion() {
  const qs = DSMaster.quizState;
  if (!qs || qs.currentIndex <= 0) return;
  qs.currentIndex--;
  renderQuizQuestion(document.getElementById('main-content'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showResults() {
  const qs = DSMaster.quizState;
  if (!qs) return;

  let correctCount = 0;
  qs.questions.forEach((q, i) => {
    if (qs.answers[i] === q.correct) correctCount++;
  });

  const percentage = Math.round((correctCount / qs.questions.length) * 100);
  const lang = DSMaster.lang;

  let grade, message, gradeClass;
  if (percentage >= 90) {
    grade = 'A+';
    message = t('excellent');
    gradeClass = 'excellent';
  } else if (percentage >= 70) {
    grade = 'B';
    message = t('good');
    gradeClass = 'good';
  } else if (percentage >= 50) {
    grade = 'C';
    message = t('average');
    gradeClass = 'average';
  } else {
    grade = 'F';
    message = t('poor');
    gradeClass = 'poor';
  }

  const container = document.getElementById('main-content');
  let html = `
    <div class="content-wrapper">
      <div class="quiz-results" style="animation: fadeInUp 0.5s ease-out">
        <div class="quiz-score-circle ${gradeClass}">
          <div class="quiz-score-num">${percentage}%</div>
          <div class="quiz-score-label">${grade}</div>
        </div>
        <h2 class="quiz-result-message">${message}</h2>
        <p class="quiz-result-detail">
          ${correctCount} ${t('correct')} / ${qs.questions.length - correctCount} ${t('wrong')}
          ${lang === 'ar' ? `من أصل ${qs.questions.length} سؤال` : `out of ${qs.questions.length} questions`}
        </p>
        <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="${qs.isExam ? "navigate('exam')" : `navigate('quiz', ${qs.lectureId})`}">${t('tryAgain')}</button>
          <button class="btn btn-secondary" onclick="${qs.isExam ? "navigate('home')" : `navigate('lecture', ${qs.lectureId})`}">${qs.isExam ? t('backHome') : t('backToLecture')}</button>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

// ── Utility Functions ──
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Particles Background ──
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const isDark = DSMaster.theme === 'dark';
  const particleColor = isDark ? 'rgba(124, 108, 240, 0.3)' : 'rgba(95, 61, 196, 0.15)';
  const lineColor = isDark ? 'rgba(124, 108, 240, 0.08)' : 'rgba(95, 61, 196, 0.05)';

  const particles = [];
  const count = Math.min(60, Math.floor(window.innerWidth / 25));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
    });
  }

  let animFrame;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.fill();
    });

    // Draw lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animFrame = requestAnimationFrame(animate);
  }

  // Cancel previous animation if re-initialized
  if (window._particleFrame) cancelAnimationFrame(window._particleFrame);
  window._particleFrame = animFrame;
  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ── Build Sidebar Nav Items ──
function buildSidebarNav() {
  const navContainer = document.getElementById('sidebar-nav');
  if (!navContainer || typeof LECTURES === 'undefined') return;

  let html = `
    <div class="nav-item active" data-lecture="home" onclick="navigate('home')">
      <div class="nav-item-icon">🏠</div>
      <div class="nav-item-text">${t('home')}</div>
    </div>
  `;

  const lectureIds = Object.keys(LECTURES).map(Number).sort((a,b) => a - b);
  lectureIds.forEach(id => {
    const lec = LECTURES[id];
    html += `
      <div class="nav-item" data-lecture="${id}" onclick="navigate('lecture', ${id})">
        <div class="nav-item-icon">${lec.icon || '📘'}</div>
        <div class="nav-item-text">${lec.title[DSMaster.lang]}</div>
        <div class="nav-item-badge">${id < 10 ? '0' + id : id}</div>
      </div>
    `;
  });

  navContainer.innerHTML = html;
}

// ── Initialize App ──
function initApp() {
  initTheme();
  initLang();
  buildSidebarNav();
  handleHashChange();
  initParticles();

  // Hash change listener
  window.addEventListener('hashchange', handleHashChange);
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
