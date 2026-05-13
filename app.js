/* ═══════════════════════════════════════════════
   ARAB FOOTBALL LIBRARY — app.js
═══════════════════════════════════════════════ */

const D  = AFL_DATA;
const DM = DOMESTIC;
const fl = t => (D.flags && D.flags[t]) || '🏳️';

// ── STATE ──────────────────────────────────────
let S = {
  page: 'home',
  edition: null,
  round: 0,
  compFrom: 'national',
  countryId: null,
};

// ── INIT ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderDomestic();
  renderArabCupGrid();
  renderHistory();
  renderRecords();
  window.addEventListener('scroll', () => {
    document.getElementById('hdr').style.background =
      window.scrollY > 60 ? 'rgba(4,12,6,.98)' : 'rgba(4,12,6,.95)';
  });
});

// ── PAGE ROUTING ───────────────────────────────
function goHome() {
  hideAll();
  document.getElementById('hero-section').style.display = '';
  document.getElementById('pg-home').classList.add('on');
  setNav(null);
  S.page = 'home';
}

function goPage(id) {
  hideAll();
  document.getElementById(`pg-${id}`)?.classList.add('on');
  setNav(id);
  S.page = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideAll() {
  document.getElementById('hero-section').style.display = 'none';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
}

function setNav(id) {
  document.querySelectorAll('.hn').forEach(n => n.classList.remove('on'));
  if (id) document.getElementById(`nav-${id}`)?.classList.add('on');
}

// ── COMPETITION ROUTING ────────────────────────
function openComp(id) {
  S.compFrom = S.page;
  if (id === 'arab-cup') {
    goPage('arab-cup');
    return;
  }
  // WIP competitions
  const labels = {
    'arab-nations':    { title:'كأس الأمم العربية — UAFA', sub:'2002 — 2012 · 3 نسخ', stats:[{n:'3',l:'نسخ'},{n:'12',l:'منتخباً'},{n:'2002',l:'أول نسخة'}] },
    'afcon':           { title:'AFCON — المنتخبات العربية', sub:'من 1957 إلى اليوم', stats:[{n:'8',l:'منتخب عربي'},{n:'7',l:'ألقاب مصر'},{n:'2',l:'ألقاب الجزائر'}] },
    'afc-cup':         { title:'كأس آسيا — المنتخبات العربية', sub:'من 1956 إلى اليوم', stats:[{n:'12',l:'منتخب عربي'},{n:'3',l:'ألقاب السعودية'},{n:'1',l:'لقب العراق'}] },
    'world-cup':       { title:'كأس العالم — المنتخبات العربية', sub:'من مصر 1934 إلى قطر 2022', stats:[{n:'26',l:'مشاركة عربية'},{n:'4',l:'نصف نهائي المغرب 2022'},{n:'1934',l:'أول مشاركة عربية'}] },
    'arab-club-champs':{ title:'كأس العرب للأندية البطلة', sub:'1981 — 1998 · 14 نسخة', stats:[{n:'14',l:'نسخة'},{n:'4',l:'ألقاب الزمالك'},{n:'3',l:'ألقاب الرجاء'}] },
    'arab-cup-winners':{ title:'كأس العرب لأبطال الكؤوس', sub:'1999 — 2002 · 4 نسخ', stats:[{n:'4',l:'نسخ'},{n:'1999',l:'أول نسخة'}] },
    'uafa-champions':  { title:'البطولة العربية للأندية — UAFA', sub:'2003 — الآن', stats:[{n:'2003',l:'التأسيس'},{n:'نشط',l:'الحالة'}] },
    'arab-super-club': { title:'السوبر العربي للأندية', sub:'بطولة السوبر القارية', stats:[] },
  };
  const info = labels[id] || { title: id, sub: '', stats: [] };
  document.getElementById('comp-detail-block').innerHTML = `
    <div class="comp-hero">
      <div class="comph-title">${info.title}</div>
      <div class="comph-sub">${info.sub}</div>
      <div class="comph-stats">
        ${info.stats.map(s => `<div class="chs"><span class="chs-n">${s.n}</span><span class="chs-l">${s.l}</span></div>`).join('')}
      </div>
    </div>
    <div class="wip-box">
      <strong>قيد الإعداد</strong>
      هذا القسم يُبنى حالياً. سيحتوي على جميع النسخ والمباريات والأهداف والإحصاءات التاريخية.<br>
      <span style="font-size:12px;color:var(--t3);margin-top:.5rem;display:block">البيانات تُجمع وتُوثّق من RSSSF وسجلات الاتحادات الرسمية.</span>
    </div>`;
  goPage('comp');
}

function handleCompBack() {
  goPage(S.compFrom || 'national');
}

// ── ARAB CUP EDITIONS GRID ─────────────────────
function renderArabCupGrid() {
  const el = document.getElementById('arab-cup-editions-grid');
  if (!el || !D.editions) return;
  el.innerHTML = D.editions.map(e => `
    <div class="ed-card" onclick="openEdition('${e.id}')">
      <div class="ec-year">${e.year}</div>
      <div class="ec-host">${fl(e.host)} ${e.host} · ${e.city}</div>
      <div class="ec-champ">
        <div><div class="ec-cl">🏆 البطل</div><div class="ec-cn">${fl(e.champion)} ${e.champion}</div></div>
      </div>
      <div class="ec-tags">
        <span class="ec-tag">${e.teams} منتخب</span>
        ${e.matches ? `<span class="ec-tag">${e.matches} مباراة</span>` : ''}
        ${e.goals   ? `<span class="ec-tag">${e.goals} هدف</span>` : ''}
        <span class="ec-tag">${e.format}</span>
      </div>
    </div>`).join('');
}

// ── EDITION DETAIL ─────────────────────────────
function openEdition(id) {
  const e = D.editions.find(x => x.id === id);
  if (!e) return;
  S.edition = e;
  S.round = 0;

  document.getElementById('edition-hero-block').innerHTML = `
    <div class="comp-hero" style="margin-bottom:1.25rem">
      <div class="comph-title">🏆 كأس العرب ${e.year} — ${e.host}</div>
      <div class="comph-sub">${e.dates} · ${e.city}</div>
      <div class="comph-stats">
        <div class="chs"><span class="chs-n">${e.teams}</span><span class="chs-l">منتخب</span></div>
        ${e.matches ? `<div class="chs"><span class="chs-n">${e.matches}</span><span class="chs-l">مباراة</span></div>` : ''}
        ${e.goals   ? `<div class="chs"><span class="chs-n">${e.goals}</span><span class="chs-l">هدف</span></div>` : ''}
        <div class="chs"><span class="chs-n">${fl(e.champion)} ${e.champion}</span><span class="chs-l">البطل</span></div>
        <div class="chs"><span class="chs-n">${fl(e.runner)} ${e.runner}</span><span class="chs-l">الوصيف</span></div>
      </div>
      ${e.note ? `<div class="note-box" style="margin-top:.85rem"><strong>ملاحظة:</strong> ${e.note}</div>` : ''}
    </div>`;

  const sidebar = document.getElementById('ed-sidebar');
  sidebar.innerHTML = `
    <div class="es-lbl">الأدوار</div>
    ${e.rounds.map((r, i) => `
      <div class="es-item ${i===0?'on':''}" id="esi-${i}" onclick="switchRound(${i})">
      <span>${r.label}</span>
<span class="es-cnt">${(r.matches || []).length}</span>
      </div>`).join('')}
    ${e.standings && e.standings.length ? `
      <div class="es-lbl" style="margin-top:.5rem">الجداول</div>
      <div class="es-item" id="esi-standings" onclick="switchRound('standings')">
        <span>جداول المجموعات</span>
      </div>` : ''}`;

  renderRound(0);
  goPage('edition');
}

function switchRound(i) {
  document.querySelectorAll('.es-item').forEach(el => el.classList.remove('on'));
  document.getElementById(`esi-${i}`)?.classList.add('on');
  S.round = i;
  renderRound(i);
}

function renderRound(i) {
  const e = S.edition;
  if (i === 'standings') { renderStandings(); return; }
  const r = e.rounds[i];
   if (!r) {
  document.getElementById('ed-main').innerHTML =
    '<div class="wip-box">No round data found.</div>';
  return;
}
  document.getElementById('ed-main').innerHTML = `
    <div class="sec-hd"><h3>${r.label}</h3><div class="sec-hd-line"></div></div>
    <div class="m-list">
${(r.matches || []).map((m, mi) => `
<div class="mc ${m.isFinal?'final':''}" onclick="openMatch(${i},${mi})">
          <div class="mh"><div class="m-team">${m.h} ${fl(m.h)}</div><div class="m-date">${m.date||''}</div></div>
          <div class="msb"><span class="msc">${m.s}</span><span class="mslbl">${m.isFinal?'🏆':'نتيجة'}</span></div>
          <div class="ma"><div class="m-team">${fl(m.a)} ${m.a}</div><div class="m-date">${m.venue||''}</div></div>
        </div>`).join('')}
    </div>`;
}

function renderStandings() {
  const e = S.edition;
  let h = '';
  e.standings.forEach(g => {
    h += `<div class="grp-lbl">${g.label}</div>
      <table class="stbl"><thead><tr>
        <th>المنتخب</th><th>ل</th><th>ف</th><th>ت</th><th>خ</th><th>له</th><th>عليه</th><th>ف.أ</th><th class="pts">ن</th>
      </tr></thead><tbody>`;
    g.rows.forEach((r, i) => {
      const gd = r.gf - r.ga, pts = r.w*3 + r.d;
      h += `<tr class="${r.q?'q':''}">
        <td>${i+1}. ${fl(r.t)} ${r.t}</td>
        <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td>
        <td>${r.gf}</td><td>${r.ga}</td>
        <td>${gd>0?'+'+gd:gd}</td><td class="pts">${pts}</td>
      </tr>`;
    });
    h += '</tbody></table>';
  });
  h += '<p style="font-size:11px;color:var(--t4);margin-top:.4rem">الحد الأخضر = تأهّل لدور الإقصاء</p>';
  document.getElementById('ed-main').innerHTML = h;
}

// ── MATCH DETAIL ───────────────────────────────
function openMatch(ri, mi) {
  const e = S.edition;
  const r = e.rounds[ri];
const m = (r.matches || [])[mi];
if (!m) return;
   document.getElementById('match-detail-block').innerHTML = `
    <div class="match-hero">
      <div class="mh-grid">
        <div class="mht"><span class="mhflag">${fl(m.h)}</span><div class="mhname">${m.h}</div></div>
        <div class="mhsb"><span class="mhscore">${m.s}</span><div class="mhround">${r.label}</div></div>
        <div class="mht"><span class="mhflag">${fl(m.a)}</span><div class="mhname">${m.a}</div></div>
      </div>
      <div class="mhmeta">
        <div><div class="mhmi-l">التاريخ</div><div class="mhmi-v">${m.date||'—'}</div></div>
        <div><div class="mhmi-l">البطولة</div><div class="mhmi-v">كأس العرب ${e.year}</div></div>
        <div><div class="mhmi-l">المكان</div><div class="mhmi-v">${e.city}، ${e.host}</div></div>
        ${m.att ? `<div><div class="mhmi-l">الحضور</div><div class="mhmi-v">${m.att}</div></div>` : ''}
      </div>
    </div>
    <div class="det-grid">
      <div class="det-card">
        <h4>الأهداف</h4>
Array.isArray(m.goals) && m.goals.length
? m.goals.map(g=>`<div class="g-row"><span class="g-ico">⚽</span><span>${g}</span></div>`).join('')
          : '<span style="color:var(--t4);font-size:13px">مباراة بلا أهداف</span>'}
      </div>
      <div class="det-card">
        <h4>ملاحظات</h4>
        <p style="font-size:13px;color:var(--t2);line-height:1.65">${m.note||'—'}</p>
      </div>
    </div>`;
  document.getElementById('match-back').onclick = () => goPage('edition');
  goPage('match');
}

// ── DOMESTIC ───────────────────────────────────
function renderDomestic() {
  const el = document.getElementById('domestic-content');
  if (!el) return;

  // Group by confederation
  const afc = DM.countries.filter(c => c.conf === 'AFC');
  const caf = DM.countries.filter(c => c.conf === 'CAF');

  let h = `
    <div class="pg-title">الدوريات والكؤوس المحلية</div>
    <div class="pg-sub">24 دولة عضو في جامعة الدول العربية · اختر دولة لاستعراض بطولاتها</div>
    <div class="sec-hd"><h3>دول الاتحاد الآسيوي — AFC</h3><div class="sec-hd-line"></div></div>
    <div class="country-grid">${afc.map(countryCard).join('')}</div>
    <div class="sec-hd"><h3>دول الاتحاد الأفريقي — CAF</h3><div class="sec-hd-line"></div></div>
    <div class="country-grid">${caf.map(countryCard).join('')}</div>`;
  el.innerHTML = h;
}

function countryCard(c) {
  const total = c.comps.length;
  return `
    <div class="cc" onclick="openCountry('${c.id}')">
      <div class="cc-flag">${c.flag}</div>
      <div>
        <div class="cc-name">${c.nameAr}</div>
        <div class="cc-sub">${c.nameEn} · ${total} بطولة</div>
      </div>
      <div class="cc-arr">←</div>
    </div>`;
}

function openCountry(id) {
  const c = DM.countries.find(x => x.id === id);
  if (!c) return;
  S.countryId = id;

  const typeIcon = { league:'⚽', cup:'🏆', super:'⭐' };
  const typeLabel = { league:'الدوري', cup:'الكأس', super:'السوبر' };

  document.getElementById('country-detail-block').innerHTML = `
    <div class="ch">
      <div class="ch-top">
        <div class="ch-flag">${c.flag}</div>
        <div>
          <div class="ch-title">${c.nameAr}</div>
          <div class="ch-sub">${c.nameEn} · ${c.conf} · تأسس ${c.founded}</div>
        </div>
      </div>
      <div class="ch-comps">
        ${c.comps.map(comp => `
          <div class="chc" onclick="openDomesticComp('${comp.id}','${c.id}')">
            <div>
              <div class="chc-name">${typeIcon[comp.type]||'⚽'} ${comp.name}</div>
              <div class="chc-info">
                منذ ${comp.since}
                ${comp.current_champion ? ` · البطل الحالي: ${comp.current_champion}` : ''}
                ${comp.note ? ` · ${comp.note}` : ''}
              </div>
            </div>
            <div class="chc-badge">${typeLabel[comp.type]||''} ←</div>
          </div>`).join('')}
      </div>
    </div>`;
  goPage('country');
}

function openDomesticComp(compId, countryId) {
  const c = DM.countries.find(x => x.id === countryId);
  const comp = c?.comps.find(x => x.id === compId);
  if (!comp) return;

  S.compFrom = 'country';
  document.getElementById('comp-detail-block').innerHTML = `
    <div class="comp-hero">
      <div class="comph-title">${c.flag} ${comp.name}</div>
      <div class="comph-sub">${c.nameAr} · منذ ${comp.since}</div>
      <div class="comph-stats">
        <div class="chs"><span class="chs-n">${comp.since}</span><span class="chs-l">سنة التأسيس</span></div>
        ${comp.current_champion ? `<div class="chs"><span class="chs-n">${comp.current_champion}</span><span class="chs-l">البطل الحالي</span></div>` : ''}
        <div class="chs"><span class="chs-n">${new Date().getFullYear() - comp.since}+</span><span class="chs-l">موسم</span></div>
      </div>
      ${comp.note ? `<div class="note-box" style="margin-top:.85rem"><strong>ملاحظة:</strong> ${comp.note}</div>` : ''}
    </div>
    <div class="wip-box">
      <strong>قيد الإعداد</strong>
      سيحتوي هذا القسم على جميع مواسم البطولة، النتائج، الأبطال التاريخيين، وهداف كل موسم.<br>
      <span style="font-size:12px;color:var(--t3);margin-top:.5rem;display:block">البيانات تُجمع وتُوثّق من سجلات الاتحاد المحلي وأرشيف RSSSF.</span>
    </div>`;

  document.getElementById('comp-back').onclick = () => openCountry(countryId);
  goPage('comp');
}

// ── HISTORY ────────────────────────────────────
const HISTORY_DATA = [
  {y:1963,host:'🇱🇧 لبنان',champ:'🇹🇳 تونس',runner:'🇸🇾 سوريا',third:'🇱🇧 لبنان',teams:5,matches:10,goals:36},
  {y:1964,host:'🇰🇼 الكويت',champ:'🇮🇶 العراق',runner:'🇱🇾 ليبيا',third:'🇰🇼 الكويت',teams:5,matches:10,goals:28},
  {y:1966,host:'🇮🇶 العراق',champ:'🇮🇶 العراق',runner:'🇸🇾 سوريا',third:'🇱🇾 ليبيا',teams:8,matches:15,goals:null},
  {y:1985,host:'🇸🇦 السعودية',champ:'🇮🇶 العراق',runner:'🇧🇭 البحرين',third:'🇸🇦 السعودية',teams:6,matches:9,goals:null},
  {y:1988,host:'🇯🇴 الأردن',champ:'🇮🇶 العراق',runner:'🇸🇾 سوريا',third:'🇪🇬 مصر',teams:10,matches:21,goals:null},
  {y:1992,host:'🇸🇾 سوريا',champ:'🇪🇬 مصر (أولمبي)',runner:'🇸🇦 السعودية',third:'🇰🇼 الكويت',teams:6,matches:9,goals:null},
  {y:1998,host:'🇶🇦 قطر',champ:'🇸🇦 السعودية',runner:'🇶🇦 قطر',third:'🇰🇼 الكويت',teams:12,matches:17,goals:null},
  {y:2002,host:'🇰🇼 الكويت',champ:'🇸🇦 السعودية',runner:'🇧🇭 البحرين',third:'🇯🇴 الأردن',teams:10,matches:21,goals:null},
  {y:2009,host:'—',champ:null,runner:null,third:null,teams:0,matches:0,goals:0,cancelled:true},
  {y:2012,host:'🇸🇦 السعودية',champ:'🇲🇦 المغرب',runner:'🇱🇾 ليبيا',third:'🇮🇶 العراق',teams:11,matches:13,goals:null},
  {y:2021,host:'🇶🇦 قطر',champ:'🇩🇿 الجزائر',runner:'🇹🇳 تونس',third:'🇶🇦 قطر',teams:16,matches:32,goals:83},
];

function renderHistory() {
  const tbl = document.getElementById('history-tbl');
  if (!tbl) return;
  tbl.innerHTML = `
    <thead><tr>
      <th>السنة</th><th>المضيف</th><th>🥇 البطل</th>
      <th>🥈 الوصيف</th><th>🥉 الثالث</th>
      <th>الفرق</th><th>المباريات</th><th>الأهداف</th>
    </tr></thead>
    <tbody>${HISTORY_DATA.map(h=>`
      <tr>
        <td><span class="yr" onclick="jumpYear(${h.y})">${h.y}</span></td>
        <td>${h.host}</td>
        <td class="${h.cancelled?'tbd':'champ'}">${h.cancelled?'ألغيت':h.champ}</td>
        <td>${h.runner||'—'}</td>
        <td>${h.third||'—'}</td>
        <td>${h.teams||'—'}</td>
        <td>${h.matches||'—'}</td>
        <td>${h.goals||'—'}</td>
      </tr>`).join('')}
    </tbody>`;
}

function jumpYear(y) {
  const e = D.editions?.find(x => x.year === y);
  if (e) openEdition(e.id);
}

// ── RECORDS ────────────────────────────────────
function renderRecords() {
  const el = document.getElementById('records-block');
  if (!el) return;
  el.innerHTML = `
    <div class="rec-card">
      <h4>الأكثر تتويجاً</h4>
      <div class="rec-row"><span class="rec-ico">🥇</span><span>العراق — 4 ألقاب (1964، 1966، 1985، 1988)</span></div>
      <div class="rec-row"><span class="rec-ico">🥈</span><span>السعودية — لقبان (1998، 2002)</span></div>
      <div class="rec-row"><span class="rec-ico">🥈</span><span>المغرب — لقبان (2012)</span></div>
      <div class="rec-row"><span class="rec-ico">🏆</span><span>تونس ومصر والجزائر — لقب واحد لكل</span></div>
    </div>
    <div class="rec-card">
      <h4>أرقام المباريات</h4>
      <div class="rec-row"><span class="rec-ico">⚽</span><span>أكبر فوز: ليبيا 21–0 عُمان (1966)</span></div>
      <div class="rec-row"><span class="rec-ico">👥</span><span>أكبر حضور: 63,439 (قطر–الإمارات 2021)</span></div>
      <div class="rec-row"><span class="rec-ico">🎯</span><span>أكثر أهداف في نسخة: 83 هدف (2021)</span></div>
      <div class="rec-row"><span class="rec-ico">🏟️</span><span>أكبر حضور في نهائي: 55,000 (2021)</span></div>
    </div>
    <div class="rec-card">
      <h4>أرقام المنتخبات</h4>
      <div class="rec-row"><span class="rec-ico">🇯🇴</span><span>الأردن — أكثر مشاركة: 10 مرات</span></div>
      <div class="rec-row"><span class="rec-ico">🇸🇾</span><span>سوريا — 3 نهائيات بلا لقب</span></div>
      <div class="rec-row"><span class="rec-ico">🇮🇶</span><span>العراق — دافع عن لقبه 3 مرات متتالية</span></div>
      <div class="rec-row"><span class="rec-ico">🇩🇿</span><span>الجزائر — انتظر 58 عاماً من 1963 للقب 2021</span></div>
    </div>
    <div class="rec-card">
      <h4>الاستضافة</h4>
      <div class="rec-row"><span class="rec-ico">🇶🇦</span><span>قطر — 3 استضافات (1998، 2021، 2025)</span></div>
      <div class="rec-row"><span class="rec-ico">🇸🇦</span><span>السعودية — استضافتان (1985، 2012)</span></div>
      <div class="rec-row"><span class="rec-ico">🇰🇼</span><span>الكويت — استضافتان (1964، 2002)</span></div>
      <div class="rec-row"><span class="rec-ico">📅</span><span>أطول توقف: 19 عاماً بين 1966 و1985</span></div>
    </div>
    <div class="rec-card">
      <h4>أبرز اللاعبين</h4>
      <div class="rec-row"><span class="rec-ico">👟</span><span>سيف الدين الجزيري — هداف 2021 (4 أهداف)</span></div>
      <div class="rec-row"><span class="rec-ico">🌟</span><span>ياسين براهيمي — كرة ذهبية 2021</span></div>
      <div class="rec-row"><span class="rec-ico">⚡</span><span>أحمد راضي — أبرز لاعب 1985 و1988</span></div>
      <div class="rec-row"><span class="rec-ico">🧤</span><span>رايس مبولحي — قفاز ذهبي 2021</span></div>
    </div>
    <div class="rec-card">
      <h4>حقائق</h4>
      <div class="rec-row"><span class="rec-ico">💡</span><span>نسخة 2009 ألغيت قبل إقامتها</span></div>
      <div class="rec-row"><span class="rec-ico">🏅</span><span>نسخة 1992 أُقيمت كجزء من الألعاب العربية</span></div>
      <div class="rec-row"><span class="rec-ico">🌍</span><span>أول نسخة تحت إشراف FIFA كانت 2021</span></div>
      <div class="rec-row"><span class="rec-ico">🇲🇦</span><span>المغرب أول بطل من شمال أفريقيا (2012)</span></div>
    </div>`;
}
