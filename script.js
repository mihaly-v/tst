// 1. 全復元マスターデータベース
const jobMaster = [
    { id: "ナイト", jp: "ナイト", en: "PALADIN", code: "PLD" }, { id: "戦士", jp: "戦士", en: "WARRIOR", code: "WAR" },
    { id: "暗黒騎士", jp: "暗黒騎士", en: "DARK KNIGHT", code: "DRK" }, { id: "ガンブレイカー", jp: "ガンブレイカー", en: "GUNBREAKER", code: "GNB" },
    { id: "白魔道士", jp: "白魔道士", en: "WHITE MAGE", code: "WHM" }, { id: "学者", jp: "学者", en: "SCHOLAR", code: "SCH" },
    { id: "占星術師", jp: "占星術師", en: "ASTROLOGIAN", code: "AST" }, { id: "賢者", jp: "賢者", en: "SAGE", code: "SGE" },
    { id: "モンク", jp: "モンク", en: "MONK", code: "MNK" }, { id: "竜騎士", jp: "竜騎士", en: "DRAGOON", code: "DRG" },
    { id: "忍者", jp: "忍者", en: "NINJA", code: "NIN" }, { id: "侍", jp: "侍", en: "SAMURAI", code: "SAM" },
    { id: "リーパー", jp: "リーパー", en: "REAPER", code: "RPR" }, { id: "ヴァイパー", jp: "ヴァイパー", en: "VIPER", code: "VPR" },
    { id: "吟遊詩人", jp: "吟遊詩人", en: "BARD", code: "BRD" }, { id: "機工士", jp: "機工士", en: "MACHINIST", code: "MCH" },
    { id: "踊り子", jp: "踊り子", en: "DANCER", code: "DNC" }, { id: "黒魔道士", jp: "黒魔道士", en: "BLACK MAGE", code: "BLM" },
    { id: "召喚士", jp: "召喚士", en: "SUMMONER", code: "SMN" }, { id: "赤魔道士", jp: "赤魔道士", en: "RED MAGE", code: "RDM" },
    { id: "ピクトマンサー", jp: "ピクトマンサー", en: "PICTOMANCER", code: "PCT" }
];

const styleMaster = [
    { id: "ストーリー", jp: "ストーリー", en: "STORY" }, { id: "雑談/RP", jp: "雑談/RP", en: "CHAT/RP" },
    { id: "ミラプリ", jp: "ミラプリ", en: "GLAMOUR" }, { id: "ハウジング", jp: "ハウジング", en: "HOUSING" },
    { id: "SS撮影", jp: "SS撮影", en: "SCREENSHOT" }, { id: "PvP", jp: "PvP", en: "PVP" },
    { id: "ギャザクラ", jp: "ギャザクラ", en: "CRAFT/GATHER" }, { id: "レイド戦闘", jp: "レイド戦闘", en: "RAID/BATTLE" }
];

const raceMaster = [
    { id: "Hyur", jp: "ヒューラン", en: "Hyur" }, { id: "Elezen", jp: "エレゼン", en: "Elezen" },
    { id: "Lalafell", jp: "ララフェル", en: "Lalafell" }, { id: "Miqo'te", jp: "ミコッテ", en: "Miqo'te" },
    { id: "Roegadyn", jp: "ルガディン", en: "Roegadyn" }, { id: "Au Ra", jp: "アウラ", en: "Au Ra" },
    { id: "Hrothgar", jp: "ロスガル", en: "Hrothgar" }, { id: "Viera", jp: "ヴィエラ", en: "Viera" }
];

const progressMaster = [
    { val: 0, jp: "新生エオルゼア", en: "A REALM REBORN (2.X)" }, { val: 1, jp: "蒼天のイシュガルド", en: "HEAVENSWARD (3.X)" },
    { val: 2, jp: "紅蓮のリベレーター", en: "STORMBLOOD (4.X)" }, { val: 3, jp: "漆黒のヴィランズ", en: "SHADOWBRINGERS (5.X)" },
    { val: 4, jp: "暁月のフィナーレ", en: "ENDWALKER (6.X)" }, { val: 5, jp: "黄金のレガシー", en: "DAWNTRAIL (7.X)" }
];

const neonPalettes = [
    { label: "CYAN_PUNK", c1: "#00ffcc", c2: "#ff0055" }, { label: "SOL_NINE",  c1: "#ff00a0", c2: "#00f0ff" },
    { label: "TOKYO_V",  c1: "#9900ff", c2: "#00ff66" }, { label: "MATRIX_G", c1: "#33ff33", c2: "#ff9900" },
    { label: "BLADE_R",  c1: "#ff3366", c2: "#ffff00" }, { label: "DEEP_NET", c1: "#0077ff", c2: "#ff00aa" },
    { label: "ACID_SUN", c1: "#ffcc00", c2: "#ff0055" }, { label: "SHADOW_B", c1: "#e0e0f0", c2: "#555577" }
];

const worldData = {
    Secret: ["Secret"], 
    Elemental: ["Secret", "Aegis", "Atomos", "Carbuncle", "Garuda", "Gungnir", "Kujata", "Tonberry", "Typhon"],
    Gaia: ["Secret", "Alexander", "Bahamut", "Durandal", "Fenrir", "Ifrit", "Ridill", "Tiamat", "Ultima"],
    Mana: ["Secret", "Anima", "Chocobo", "Hades", "Ixion", "Mandragora", "Masamune", "Pandaemonium", "Titan"],
    Meteor: ["Secret", "Belias", "Mandragora", "Ramuh", "Shinryu", "Unicorn", "Valefor", "Yojimbo", "Zeromus"]
};

let currentLang = "JP"; 
const uiLexicon = {
    JP: {
        lblCharName: "名前 (キャラクター名)", lblXID: "X (Twitter) @ユーザーID ※右下と裏面にQRコード配置",
        lblAffiliation: "所属サーバー (DC / WORLD)", lblMainJob: "メインジョブ", lblOrientation: "▼ カード形態",
        optHoriz: "横型カード", optVert: "縦型カード", lblBgImage: "背景画像アップロード",
        lblInst: "★プレビュー画像の上をドラッグで移動、ホイール回転で拡大縮小できます（枠より小さくなりません）",
        lblBundleTitle: "⚙️ CARD DESIGN SYSTEM (デザイン設定)", lblPattern: "▼ レイアウトパターン",
        lblColors: "▼ テーマカラー設定", lblCol1: "主灯色:", lblCol2: "警告色:", lblFont: "▼ テキストフォントシステム (名前・コメント)",
        lblBackText: "▼ 裏面ベース文字色", lblPlaystyle: "プレイスタイル (複数選択可)",
        lblFavRace: "好みの種族 (複数選択可)", lblProgress: "メインストーリー進行度 (最高到達点)", lblComment: "裏面通信コメント"
    },
    EN: {
        lblCharName: "SUBJECT NAME", lblXID: "X (Twitter) @USER_ID ※Auto QR Placement",
        lblAffiliation: "SECTOR AFFILIATION (DC / WORLD)", lblMainJob: "PRIMARY OPERATIONAL JOB", lblOrientation: "▼ CARD STRUCTURE MODE",
        optHoriz: "HORIZONTAL COMPACT", optVert: "VERTICAL SLIM", lblBgImage: "BACKGROUND DIGITAL IMAGE",
        lblInst: "★Drag preview to pan. Scroll to zoom. (Auto-constrained to prevent transparent margins)",
        lblBundleTitle: "⚙️ CARD DESIGN SYSTEM (DESIGN OPTIONS)", lblPattern: "▼ LAYOUT PATTERN",
        lblColors: "▼ INTERFACE COLORS", lblCol1: "MAIN:", lblCol2: "ALERT:", lblFont: "▼ TYPOGRAPHY SYSTEM",
        lblBackText: "▼ BACKSIDE BASE TEXT COLOR", lblPlaystyle: "CURRENT PLAY STYLE (Multi)",
        lblFavRace: "FAVORITE CITIZEN RACES (Multi)", lblProgress: "MAX MSQ PROGRESSION PHASE", lblComment: "REAR ENCRYPTED COMMENT"
    }
};

const dcSelect = document.getElementById('dcSelect'); const worldSelect = document.getElementById('worldSelect');
const mainJobSelect = document.getElementById('mainJob'); const canvas = document.getElementById('cardCanvas');
const ctx = canvas.getContext('2d'); const resultImage = document.getElementById('resultImage');
const canvasBack = document.getElementById('cardCanvasBack'); const ctxBack = canvasBack.getContext('2d');
const resultImageBack = document.getElementById('resultImageBack');
const themeColorPicker = document.getElementById('themeColorPicker'); const themeColorPicker2 = document.getElementById('themeColorPicker2'); 
const textFontFamily = document.getElementById('textFontFamily'); const backCommentInput = document.getElementById('backComment');
const xTwitterIDInput = document.getElementById('xTwitterID'); const hiddenQrContainer = document.getElementById('hiddenQrContainer');

const generatedID = `NC-ID-${Math.floor(100000 + Math.random() * 900000)}-SYS`;

let loadedImage = null; let imgX = 0; let imgY = 0; let imgScale = 1.0;
let isDragging = false; let startX = 0; let startY = 0; let cachedQrSourceCanvas = null;

function initPaletteUI() {
    const container = document.getElementById('paletteContainer'); container.innerHTML = "";
    neonPalettes.forEach(p => {
        const btn = document.createElement('button'); btn.type = "button"; btn.className = "palette-btn"; btn.title = p.label;
        const preview = document.createElement('div'); preview.className = "palette-preview";
        const c1 = document.createElement('div'); c1.className = "palette-color"; c1.style.backgroundColor = p.c1;
        const c2 = document.createElement('div'); c2.className = "palette-color"; c2.style.backgroundColor = p.c2;
        preview.appendChild(c1); preview.appendChild(c2);
        const label = document.createElement('span'); label.className = "palette-label"; label.textContent = p.label;
        btn.appendChild(preview); btn.appendChild(label);
        btn.addEventListener('click', () => { themeColorPicker.value = p.c1; themeColorPicker2.value = p.c2; updateCard(); });
        container.appendChild(btn);
    });
}

function constructFormOptions() {
    const savedJob = mainJobSelect.value; mainJobSelect.innerHTML = "";
    jobMaster.forEach(j => {
        const o = document.createElement("option"); o.value = j.id; o.textContent = (currentLang === "JP") ? `${j.jp} (${j.code})` : `${j.en} (${j.code})`; if (j.id === savedJob) o.selected = true; mainJobSelect.appendChild(o);
    });
    if(!mainJobSelect.value && jobMaster.length > 0) mainJobSelect.value = "侍";

    const checkedStyles = Array.from(document.querySelectorAll('input[name="style"]:checked')).map(el => el.value);
    const playstyleGrid = document.getElementById("playstyleGrid"); playstyleGrid.innerHTML = "";
    styleMaster.forEach(s => {
        const lbl = document.createElement("label"); lbl.className = "checkbox-label"; const chk = document.createElement("input"); chk.type = "checkbox"; chk.name = "style"; chk.value = qSafe(s.id);
        if (checkedStyles.includes(s.id) || (checkedStyles.length === 0 && ["ストーリー","雑談/RP","SS撮影"].includes(s.id))) chk.checked = true;
        lbl.appendChild(chk); lbl.appendChild(document.createTextNode((currentLang === "JP") ? s.jp : s.en)); playstyleGrid.appendChild(lbl);
    });

    const checkedRaces = Array.from(document.querySelectorAll('input[name="race"]:checked')).map(el => el.value);
    const raceGrid = document.getElementById("raceGrid"); raceGrid.innerHTML = "";
    raceMaster.forEach(r => {
        const lbl = document.createElement("label"); lbl.className = "checkbox-label"; const chk = document.createElement("input"); chk.type = "checkbox"; chk.name = "race"; chk.value = qSafe(r.id);
        if (checkedRaces.includes(r.id) || (checkedRaces.length === 0 && ["Lalafell","Au Ra"].includes(r.id))) chk.checked = true;
        lbl.appendChild(chk); lbl.appendChild(document.createTextNode((currentLang === "JP") ? r.jp : r.en)); raceGrid.appendChild(lbl);
    });

    const checkedProg = document.querySelector('input[name="progress"]:checked')?.value || "5";
    const progressGroup = document.getElementById("progressGroup"); progressGroup.innerHTML = "";
    progressMaster.forEach(p => {
        const lbl = document.createElement("label"); const rad = document.createElement("input"); rad.type = "radio"; rad.name = "progress"; rad.value = p.val; if (String(p.val) === String(checkedProg)) rad.checked = true;
        lbl.className = "radio-label"; lbl.appendChild(rad); lbl.appendChild(document.createTextNode((currentLang === "JP") ? p.jp : p.en)); progressGroup.appendChild(lbl);
    });

    const lex = uiLexicon[currentLang]; Object.keys(lex).forEach(id => { const targetElement = document.getElementById(id); if (targetElement) targetElement.textContent = lex[id]; });

    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.removeEventListener('input', updateCard); el.addEventListener('input', updateCard); el.removeEventListener('change', updateCard); el.addEventListener('change', updateCard);
    });
}
function qSafe(str){ return str.replace(/"/g, '&quot;'); }

document.getElementById('btnLangJP').addEventListener('click', () => { currentLang = "JP"; document.getElementById('btnLangJP').className = "lang-btn active"; document.getElementById('btnLangEN').className = "lang-btn"; constructFormOptions(); updateCard(); });
document.getElementById('btnLangEN').addEventListener('click', () => { currentLang = "EN"; document.getElementById('btnLangEN').className = "lang-btn active"; document.getElementById('btnLangJP').className = "lang-btn"; constructFormOptions(); updateCard(); });

dcSelect.addEventListener('change', () => {
    const selectedDC = dcSelect.value; worldSelect.innerHTML = '';
    if (selectedDC === '') { worldSelect.disabled = true; const option = document.createElement('option'); option.value = ''; option.textContent = '...'; worldSelect.appendChild(option); updateCard(); return; }
    worldSelect.disabled = false; worldData[selectedDC].forEach(world => { const option = document.createElement('option'); option.value = world; option.textContent = world; worldSelect.appendChild(option); }); updateCard();
});

document.getElementById('bgImage').addEventListener('change', (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader(); reader.onload = function(event) { const img = new Image(); img.onload = function() { loadedImage = img; imgX = 0; imgY = 0; imgScale = 1.0; updateCard(); }; img.src = event.target.result; }; reader.readAsDataURL(file);
});

function getEventXY(e) { const rect = resultImage.getBoundingClientRect(); const clientX = e.touches ? e.touches[0].clientX : e.clientX; const clientY = e.touches ? e.touches[0].clientY : e.clientY; return { x: clientX - rect.left, y: clientY - rect.top }; }
resultImage.addEventListener('mousedown', (e) => { if (!loadedImage) return; isDragging = true; e.preventDefault(); const pos = getEventXY(e); startX = pos.x - imgX; startY = pos.y - imgY; });
resultImage.addEventListener('touchstart', (e) => { if (!loadedImage) return; isDragging = true; if(e.cancelable) e.preventDefault(); const pos = getEventXY(e); startX = pos.x - imgX; startY = pos.y - imgY; }, { passive: false });
window.addEventListener('mousemove', (e) => { if (isDragging) { const pos = getEventXY(e); imgX = pos.x - startX; imgY = pos.y - startY; updateCard(); } });
window.addEventListener('touchmove', (e) => { if (isDragging) { const pos = getEventXY(e); imgX = pos.x - startX; imgY = pos.y - startY; updateCard(); } });
window.addEventListener('mouseup', () => { isDragging = false; }); window.addEventListener('touchend', () => { isDragging = false; });
resultImage.addEventListener('wheel', (e) => { if (!loadedImage) return; e.preventDefault(); if (e.deltaY < 0) { imgScale *= 1.04; } else { imgScale /= 1.04; } updateCard(); }, { passive: false });

function updateQrAndCard() {
    const rawID = xTwitterIDInput.value.trim().replace('@', ''); if (!rawID) { cachedQrSourceCanvas = null; updateCard(); return; }
    const twitterUrl = `https://x.com/${rawID}`; hiddenQrContainer.innerHTML = "";
    new QRCode(hiddenQrContainer, { text: twitterUrl, width: 140, height: 140, colorDark: "#000000", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.H });
    setTimeout(() => { const qrCanvasElement = hiddenQrContainer.querySelector('canvas'); if (qrCanvasElement) { cachedQrSourceCanvas = qrCanvasElement; updateCard(); } }, 80);
}
xTwitterIDInput.addEventListener('change', updateQrAndCard); xTwitterIDInput.addEventListener('input', updateQrAndCard);

function updateCard() { renderCanvas(); }

// ⭕ レイアウト位置・オフセットの極限微調整システム
function getLayoutPositionsCyber(orientation, pattern, blockW, blockH, profW, profH, canvasW, canvasH) {
    let chipPt = { x: 90, y: 125 }; 
    const padding = 70; 
    let namePt = { x: canvasW - padding, y: 0 }; 
    let profPt = { x: padding, y: 0 }; 

    if (orientation === 'vertical') {
        if (pattern === 'A') { namePt.y = padding + 55; profPt.y = canvasH - profH - 240; } 
        else { chipPt.x = canvasW - 170; chipPt.y = 125; profPt.y = padding + 130; namePt.y = canvasH - blockH - padding - 40; }
    } else {
        if (pattern === 'A') { namePt.y = padding + 55; profPt.y = canvasH - profH - 180; } 
        else { 
            // ⚡ 【横型・パターンB】上下セパレーション最大化
            chipPt.x = canvasW - 175; 
            chipPt.y = 125; 
            profPt.y = padding + 75;  // ⚡ 点灯項目を限界まで【上へ移動】
            namePt.y = canvasH - blockH - padding - 70; // ⚡ 名前ブロックを限界まで【下へ移動】
        }
    }
    return { namePt, profPt, chipPt };
}
function drawHugeCyberBarcode(targetCtx, x, y, width, height, color, subColor) {
    targetCtx.save(); targetCtx.fillStyle = color; let currentX = x; const barPatterns = [5, 2, 7, 1, 4, 8, 2, 1, 6, 3, 1, 9, 4, 2, 7, 1, 5, 3]; let i = 0;
    while (currentX < x + width) {
        let barW = barPatterns[i % barPatterns.length] * 2.5; if (i % 2 === 0) { targetCtx.fillRect(currentX, y, Math.min(barW, (x + width) - currentX), height); } currentX += barW + 3; i++;
    }
    targetCtx.fillStyle = subColor; targetCtx.fillRect(x - 15, y - 15, width + 30, 4); targetCtx.fillRect(x - 15, y + height + 10, width + 30, 4); 
    targetCtx.fillStyle = color; targetCtx.font = 'bold 12px "Share Tech Mono", monospace'; targetCtx.textAlign = 'left';
    targetCtx.fillText("SYS.NO: 404-092-FF14 // NET.STATUS: ONLINE_NODE", x - 10, y + height + 24); targetCtx.restore();
}

function drawCyberBarcode(targetCtx, x, y, width, height, color, subColor) {
    targetCtx.save(); targetCtx.fillStyle = color; let currentX = x; const barPatterns = [3, 5, 1, 4, 2, 6, 1, 2, 5, 3, 1, 4, 6, 2, 1, 5, 2, 3]; let i = 0;
    while (currentX < x + width) {
        let barW = barPatterns[i % barPatterns.length] * 2; if (i % 2 === 0) { targetCtx.fillRect(currentX, y, Math.min(barW, (x + width) - currentX), height); } currentX += barW + 2; i++;
    }
    targetCtx.fillStyle = subColor || '#ff0055'; targetCtx.fillRect(x, y - 6, width, 2); targetCtx.fillRect(x, y + height + 4, width, 2); targetCtx.restore();
}

// ⭕ 最終リファイン：内側増量高密度・11時開放・3点局所電撃＆全体さざ波システム
function drawCyberTwinWaveScale(targetCtx, cx, cy, color) {
    targetCtx.save();
    targetCtx.strokeStyle = color;
    targetCtx.lineWidth = 3.5; 
    targetCtx.globalAlpha = 0.9;

    // --- コンパクトサイズ＆超内側近接パラメーター ---
    const innerTickCount = 48;   // ⚡ 内側の目盛り数を36から48に増量して高密度化
    const innerRadius = 42;      
    const innerLength = 11;      

    // 1列目：内側サークル（100%完全表示・高密度）
    for (let i = 0; i < innerTickCount; i++) {
        let angle = (i * 2 * Math.PI) / innerTickCount;
        let iStartX = cx + (innerRadius - innerLength) * Math.cos(angle);
        let iStartY = cy + (innerRadius - innerLength) * Math.sin(angle);
        let iEndX = cx + innerRadius * Math.cos(angle);
        let iEndY = cy + innerRadius * Math.sin(angle);
        
        targetCtx.beginPath();
        targetCtx.moveTo(iStartX, iStartY);
        targetCtx.lineTo(iEndX, iEndY);
        targetCtx.stroke();
    }

    // 2列目：外側サークル（内側密着・11時ゼロ・3箇所パルス・全体さざ波）
    const outerTickCount = 72; // 5度刻み（インデックス12が2時、24が4時、36が6時…）
    const outerRadiusBase = innerRadius + 2; 
    const baseLength = 10; 

    for (let j = 0; j < outerTickCount; j++) {
        let angle = (j * 2 * Math.PI) / outerTickCount;
        
        // 【非表示ロジック】時計の11時方向（インデックス52〜56付近）をゼロに
        if (j >= 52 && j <= 56) {
            continue; 
        }

        // 【全体：さざ波エフェクト】
        let ripple = Math.sin(j * 2.3) * 1.3 + Math.cos(j * 4.7) * 0.8;
        let waveHeight = ripple; 

        // 【局所アクセント：2時・5時・8時（突出量は最大2倍＝ベース+10pxまで）】
        // 🔹 2時の方向（インデックス 65〜69 付近）
        if (j >= 65 && j <= 69) {
            if (j === 67) waveHeight = 2; // 真ん中はへこむ
            else waveHeight = 9;          
        }
        
        // 🔹 5時の方向（インデックス 10〜14 付近）
        if (j >= 10 && j <= 14) {
            if (j === 12) waveHeight = 3; // 真ん中はへこむ
            else waveHeight = 10;         
        }

        // 🔹 8時の方向（インデックス 28〜32 付近）
        if (j >= 28 && j <= 32) {
            if (j === 30) waveHeight = 2; // 真ん中はへこむ
            else waveHeight = 8.5;        
        }

        // 最終的な目盛りの長さを計算（1.2倍〜2倍のクランプ保証）
        let finalWaveLength = baseLength + waveHeight;
        if (finalWaveLength < 6)  finalWaveLength = 6;  
        if (finalWaveLength > 20) finalWaveLength = 20; 

        let oStartX = cx + outerRadiusBase * Math.cos(angle);
        let oStartY = cy + outerRadiusBase * Math.sin(angle);
        let oEndX = cx + (outerRadiusBase + finalWaveLength) * Math.cos(angle);
        let oEndY = cy + (outerRadiusBase + finalWaveLength) * Math.sin(angle);

        targetCtx.beginPath();
        targetCtx.moveTo(oStartX, oStartY);
        targetCtx.lineTo(oEndX, oEndY);
        targetCtx.stroke();
    }
    targetCtx.restore();
}

function drawCornerTargets(targetCtx, w, h, color) {
    targetCtx.save(); targetCtx.strokeStyle = color; targetCtx.lineWidth = 3; const size = 35; const m = 35; 
    targetCtx.beginPath(); targetCtx.moveTo(m + size, m); targetCtx.lineTo(m, m); targetCtx.lineTo(m, m + size); targetCtx.stroke();
    targetCtx.beginPath(); targetCtx.moveTo(w - m - size, m); targetCtx.lineTo(w - m, m); targetCtx.lineTo(w - m, m + size); targetCtx.stroke();
    targetCtx.beginPath(); targetCtx.moveTo(m, h - m - size); targetCtx.lineTo(m, h - m); targetCtx.lineTo(m + size, h - m); targetCtx.stroke();
    targetCtx.beginPath(); targetCtx.moveTo(w - m, h - m - size); targetCtx.lineTo(w - m, h - m); targetCtx.lineTo(w - m - size, h - m); targetCtx.stroke(); targetCtx.restore();
}

function drawCyberGridDebris(targetCtx, w, h, color) {
    targetCtx.save(); targetCtx.strokeStyle = color; targetCtx.fillStyle = color; targetCtx.globalAlpha = 0.15;
    const points = [{x: w*0.15, y: h*0.25}, {x: w*0.85, y: h*0.3}, {x: w*0.4, y: h*0.75}];
    points.forEach(p => { targetCtx.beginPath(); targetCtx.moveTo(p.x - 20, p.y); targetCtx.lineTo(p.x + 20, p.y); targetCtx.stroke(); targetCtx.beginPath(); targetCtx.moveTo(p.x, p.y - 20); targetCtx.lineTo(p.x, p.y + 20); targetCtx.stroke(); });
    targetCtx.globalAlpha = 0.08; for(let i = 50; i < w - 50; i += 40) { targetCtx.beginPath(); targetCtx.moveTo(i, 35); targetCtx.lineTo(i + 15, 55); targetCtx.lineWidth = 6; targetCtx.stroke(); } targetCtx.restore();
}

function applyGlossyOverlay(targetCtx, w, h) {
    targetCtx.save(); targetCtx.globalCompositeOperation = 'source-over';
    let grad = targetCtx.createLinearGradient(0, 0, w, h); grad.addColorStop(0.0, 'rgba(255, 255, 255, 0.0)'); grad.addColorStop(0.32, 'rgba(255, 255, 255, 0.18)'); grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.05)'); grad.addColorStop(0.58, 'rgba(255, 255, 255, 0.12)'); grad.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)'); targetCtx.fillStyle = grad; targetCtx.fillRect(0, 0, w, h);
    let vignette = targetCtx.createRadialGradient(w/2, h/2, Math.max(w,h)*0.3, w/2, h/2, Math.max(w,h)*0.7); vignette.addColorStop(0, 'rgba(0,0,0,0)'); vignette.addColorStop(1, 'rgba(0,0,0,0.45)'); targetCtx.fillStyle = vignette; targetCtx.fillRect(0, 0, w, h); targetCtx.restore();
}

function getContrastColor(hexColor) {
    let r = parseInt(hexColor.slice(1, 3), 16); let g = parseInt(hexColor.slice(3, 5), 16); let b = parseInt(hexColor.slice(5, 7), 16);
    let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000; return (yiq >= 128) ? '#000000' : '#ffffff';
}

function fillTextWrapManual(targetCtx, text, x, y, maxWidth, lineHeight) {
    const lines = text.split('\n'); let currentY = y;
    for (let i = 0; i < lines.length; i++) {
        let line = ''; let chars = lines[i].split('');
        for (let j = 0; j < chars.length; j++) {
            let testLine = line + chars[j]; let testWidth = targetCtx.measureText(testLine).width;
            if (testWidth > maxWidth && j > 0) { targetCtx.fillText(line, x, currentY); line = chars[j]; currentY += lineHeight; } else { line = testLine; }
        }
        targetCtx.fillText(line, x, currentY); if (i < lines.length - 1) currentY += lineHeight;
    }
    return currentY - y; 
}

function drawTransparentNeonQR(targetCtx, sourceCanvas, qx, qy, size, tintColor) {
    const sSize = sourceCanvas.width; const sCtx = sourceCanvas.getContext('2d'); const imgData = sCtx.getImageData(0, 0, sSize, sSize).data;
    targetCtx.save(); targetCtx.fillStyle = tintColor; const blockScale = size / sSize;
    for (let sy = 0; sy < sSize; sy++) {
        for (let sx = 0; sx < sSize; sx++) {
            const idx = (sy * sSize + sx) * 4; const r = imgData[idx]; if (r < 128) { targetCtx.fillRect(qx + Math.floor(sx * blockScale), qy + Math.floor(sy * blockScale), Math.ceil(blockScale), Math.ceil(blockScale)); }
        }
    }
    targetCtx.restore();
}

function renderCanvas() {
    const name = document.getElementById('charName').value || 'UNKNOWN_SUBJECT';
    const dc = dcSelect.value || '---'; const world = worldSelect.value || '---';
    const orientation = document.querySelector('input[name="cardOrientation"]:checked').value;
    const layoutPattern = document.querySelector('input[name="layoutPattern"]:checked').value;
    const backComment = backCommentInput.value || '';
    const themeColor = themeColorPicker.value; const alertColor = themeColorPicker2.value; 
    const backTextColor = document.querySelector('input[name="backTextColor"]:checked')?.value || '#ffffff';
    const customFont = textFontFamily.value;

    const targetJobObj = jobMaster.find(j => j.id === mainJobSelect.value) || { code: "N/A", en: "UNKNOWN" };

    const cardW = (orientation === 'vertical') ? 1000 : 1545;
    const cardH = (orientation === 'vertical') ? 1545 : 1000;
    const backW = 1000; const backH = 1545;

    canvas.width = cardW; canvas.height = cardH; canvasBack.width = backW; canvasBack.height = backH;

    const selectedStylesIDs = Array.from(document.querySelectorAll('input[name="style"]:checked')).map(el => el.value);
    const selectedRacesIDs = Array.from(document.querySelectorAll('input[name="race"]:checked')).map(el => el.value);
    const progressVal = parseInt(document.querySelector('input[name="progress"]:checked')?.value || "0", 10);

    ctx.fillStyle = '#050508'; ctx.fillRect(0, 0, cardW, cardH);
    
    if (loadedImage) {
        ctx.save(); ctx.globalAlpha = 0.55; 
        const minScaleX = cardW / loadedImage.width; const minScaleY = cardH / loadedImage.height; const baseScale = Math.max(minScaleX, minScaleY);
        if (imgScale < 1.0) imgScale = 1.0;
        const finalWidth = loadedImage.width * baseScale * imgScale; const finalHeight = loadedImage.height * baseScale * imgScale;
        const maxDeltaX = (finalWidth - cardW) / 2; const maxDeltaY = (finalHeight - cardH) / 2;
        imgX = Math.max(-maxDeltaX, Math.min(imgX, maxDeltaX)); imgY = Math.max(-maxDeltaY, Math.min(imgY, maxDeltaY));
        ctx.drawImage(loadedImage, (cardW - finalWidth)/2 + imgX, (cardH - finalHeight)/2 + imgY, finalWidth, finalHeight); ctx.restore();
    }

    drawCyberGridDebris(ctx, cardW, cardH, alertColor);
    ctx.strokeStyle = themeColor; ctx.lineWidth = 5; ctx.strokeRect(20, 20, cardW - 40, cardH - 40);
    ctx.strokeStyle = alertColor; ctx.lineWidth = 1.5; ctx.strokeRect(28, 28, cardW - 56, cardH - 56);
    drawCornerTargets(ctx, cardW, cardH, themeColor);

    ctx.textBaseline = 'top'; ctx.fillStyle = themeColor; ctx.font = '900 24px "Orbitron", sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('NEO CITIZEN IDENTIFICATION CARD /////', 45, 45);
    ctx.fillStyle = alertColor; ctx.font = 'bold 16px "Share Tech Mono", monospace'; ctx.fillText(`ID_NO: ${generatedID}`, 45, 75);
    ctx.fillStyle = themeColor; ctx.font = 'bold 24px "Share Tech Mono", monospace'; ctx.textAlign = 'right'; ctx.fillText('//////////////////', cardW - 45, 45);

    let labelWidth = 190; let colGapStyle = 160; let colGapRace = 135; let colGapProg = 310; let rowGap = 38; let blockSpacing = 16;
    let profileBlockWidth = 750; let profileBlockHeight = (3 * rowGap) + blockSpacing + (2 * rowGap) + blockSpacing + (3 * rowGap);
    let nameBlockHeight = 240;

    let pts = getLayoutPositionsCyber(orientation, layoutPattern, 550, nameBlockHeight, profileBlockWidth, profileBlockHeight, cardW, cardH);

// (renderCanvas関数内の名前描画部分。自動的に連動して綺麗に下がります)
    ctx.textAlign = 'right'; ctx.fillStyle = '#ffffff'; ctx.font = `900 72px ${customFont}`; ctx.fillText(name, pts.namePt.x, pts.namePt.y);
    ctx.fillStyle = themeColor; ctx.font = '900 32px "Orbitron", sans-serif'; ctx.fillText(`JOB: [ ${targetJobObj.en} ]`, pts.namePt.x, pts.namePt.y + 82); 

    let subInfoText = (dc === "Secret" && world === "Secret") ? `SECTOR: RESTRICTED` : `SECTOR: ${dc} // NODE: ${world}`;
    ctx.fillStyle = alertColor; ctx.font = 'bold 24px "Share Tech Mono", monospace'; ctx.fillText(subInfoText, pts.namePt.x, pts.namePt.y + 124);    // 新2連サークル配置
    let baseAreaSize = 80;
    let circleCenterX = pts.chipPt.x + (baseAreaSize / 2);
    let circleCenterY = pts.chipPt.y + (baseAreaSize / 2);
    drawCyberTwinWaveScale(ctx, circleCenterX, circleCenterY, themeColor);

    ctx.save(); ctx.fillStyle = themeColor; ctx.globalAlpha = 0.08; ctx.font = '900 220px "Orbitron", sans-serif'; ctx.textAlign = 'right';
    let jobCodeX = cardW - 240; ctx.fillText(targetJobObj.code, jobCodeX, cardH - 220); ctx.restore();

    ctx.font = 'bold 24px "Share Tech Mono", monospace'; let currentY = pts.profPt.y; ctx.textAlign = 'left';
    ctx.fillStyle = alertColor; ctx.fillText('PLAY_STYLE:', pts.profPt.x, currentY);
    styleMaster.forEach((s, i) => { let col = i % 3, row = Math.floor(i / 3); drawCustomCyberPanel(ctx, s.en, pts.profPt.x + labelWidth + (col * colGapStyle), currentY + (row * rowGap), 24, selectedStylesIDs.includes(s.id), themeColor); });
    
    currentY += (3 * rowGap) + blockSpacing; ctx.fillStyle = alertColor; ctx.fillText('FAV_RACE:', pts.profPt.x, currentY);
    raceMaster.forEach((r, i) => { let col = i % 4, row = Math.floor(i / 4); drawCustomCyberPanel(ctx, r.en, pts.profPt.x + labelWidth + (col * colGapRace), currentY + (row * rowGap), 24, selectedRacesIDs.includes(r.id), themeColor); });
    
    currentY += (2 * rowGap) + blockSpacing; ctx.fillStyle = alertColor; ctx.fillText('MSQ_PHASE:', pts.profPt.x, currentY);
    progressMaster.forEach((p, i) => { let col = i % 2, row = Math.floor(i / 2); drawCustomCyberPanel(ctx, p.en, pts.profPt.x + labelWidth + (col * colGapProg), currentY + (row * rowGap), 24, p.val <= progressVal, themeColor); });

    drawHugeCyberBarcode(ctx, 45, cardH - 125, 420, 55, themeColor, alertColor);

    if (cachedQrSourceCanvas) {
        const qrSize = 135; const qx = cardW - qrSize - 45; const qy = cardH - qrSize - 45;
        drawTransparentNeonQR(ctx, cachedQrSourceCanvas, qx, qy, qrSize, themeColor);
        ctx.strokeStyle = alertColor; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(qx-4, qy+12); ctx.lineTo(qx-4, qy-4); ctx.lineTo(qx+12, qy-4); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(qx+qrSize+4, qy+qrSize-12); ctx.lineTo(qx+qrSize+4, qy+qrSize+4); ctx.lineTo(qx+qrSize-12, qy+qrSize+4); ctx.stroke();
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; ctx.font = '14px "Share Tech Mono", monospace'; ctx.fillText('SYSTEM RIGHTS: (C) SQUARE ENIX CO., LTD.', cardW - 520, cardH - 45);
    applyGlossyOverlay(ctx, cardW, cardH); resultImage.src = canvas.toDataURL('image/png');

    // ==========================================
    // 裏面描画
    // ==========================================
    ctxBack.fillStyle = themeColor; ctxBack.fillRect(0, 0, backW, backH); drawCyberGridDebris(ctxBack, backW, backH, alertColor);
    ctxBack.strokeStyle = alertColor; ctxBack.lineWidth = 5; ctxBack.strokeRect(20, 20, backW - 40, backH - 40); ctxBack.strokeStyle = backTextColor; ctxBack.lineWidth = 1.5; ctxBack.strokeRect(28, 28, backW - 56, backH - 56); drawCornerTargets(ctxBack, backW, backH, backTextColor);
    ctxBack.textBaseline = 'middle'; ctxBack.textAlign = 'center'; ctxBack.fillStyle = backTextColor; ctxBack.font = 'bold 52px "Times New Roman", serif'; ctxBack.fillText('FINAL FANTASY XIV', backW / 2, backH * 0.08); ctxBack.fillStyle = alertColor; ctxBack.font = '900 28px "Share Tech Mono", monospace'; ctxBack.fillText('////////////////////////////////////', backW / 2, backH * 0.12);
    
    ctxBack.save(); ctxBack.fillStyle = (backTextColor === '#ffffff') ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.90)'; let dynamicSize = getDynamicSignFontSize(ctxBack, name, 900); ctxBack.font = `lighter ${dynamicSize}px "Meow Script", "cursive"`; ctxBack.translate(backW / 2, backH * 0.25); ctxBack.rotate(-6 * Math.PI / 180); ctxBack.fillText(name, 0, 0); ctxBack.restore();
    
    ctxBack.save(); ctxBack.fillStyle = backTextColor; ctxBack.font = `32px ${customFont}`; let commentEndY = fillTextWrapManual(ctxBack, backComment, backW / 2, backH * 0.44, 760, 52); ctxBack.restore();
    
    ctxBack.fillStyle = backTextColor; ctxBack.font = `900 60px "Orbitron", sans-serif`; ctxBack.fillText(name, backW / 2, backH * 0.44 + commentEndY + 110);
    ctxBack.font = `bold 42px "Orbitron", sans-serif`; ctxBack.fillText(`[ ${targetJobObj.en} ]`, backW / 2, backH - 310); 
    drawCyberBarcode(ctxBack, backW / 2 - 220, backH - 180, 440, 45, backTextColor, alertColor); 
    
    if (cachedQrSourceCanvas) {
        const bQrSize = 120; const bQx = backW / 2 - bQrSize / 2; const bQy = backH - 490;
        drawTransparentNeonQR(ctxBack, cachedQrSourceCanvas, bQx, bQy, bQrSize, alertColor);
    }
    
    ctxBack.fillStyle = backTextColor; ctxBack.globalAlpha = 0.5; ctxBack.font = 'bold 20px "Share Tech Mono", monospace'; ctxBack.fillText(`SEC_REG_ID: ${generatedID}`, backW / 2, backH - 100); ctxBack.fillStyle = backTextColor; ctxBack.globalAlpha = 0.3; ctxBack.font = '14px sans-serif'; ctxBack.fillText('MINISTRY OF AETHER PROTOCOL // CLASSIFIED DATA', backW / 2, backH - 50);
    applyGlossyOverlay(ctxBack, backW, backH); resultImageBack.src = canvasBack.toDataURL('image/png');
}

function getDynamicSignFontSize(targetCtx, text, targetWidth) { let fontSize = 260; targetCtx.font = `lighter ${fontSize}px "Meow Script", "cursive"`; let currentWidth = targetCtx.measureText(text).width; return Math.min(fontSize * (targetWidth / currentWidth), 420); }

function drawCustomCyberPanel(tCtx, text, x, y, fSize, active, tCol) { 
    tCtx.save(); tCtx.font = `bold ${fSize - 3}px "Share Tech Mono", monospace`; 
    let mWidth = tCtx.measureText(text).width + 16; let pX = 8, pY = 4; let h = fSize + (pY * 2); 
    if (active) { 
        tCtx.fillStyle = tCol; tCtx.fillRect(x - pX, y - pY, mWidth, h); tCtx.fillStyle = getContrastColor(tCol); tCtx.textAlign = 'left'; tCtx.fillText(text, x, y + 3); 
    } else { 
        tCtx.fillStyle = 'rgba(255, 255, 255, 0.05)'; tCtx.fillRect(x - pX, y - pY, mWidth, h); tCtx.fillStyle = 'rgba(255, 255, 255, 0.28)'; tCtx.textAlign = 'left'; tCtx.fillText(text, x, y + 3); 
    } 
    tCtx.restore(); 
}

initPaletteUI();
constructFormOptions();
updateQrAndCard();