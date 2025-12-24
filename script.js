// エクセル「RecipeList」から一字一句正確に読み取ったデータベース（全74種）
const allRecipes = [
  { "name": "しんりょくアボカドグラタン", "category": "Curry", "baseEnergy": 24802, "bonus": 1.78, "ingredients": { "モーモーミルク": 41, "ほっこりポテト": 20, "ピュアなオイル": 32, "つやつやアボカド": 22 } },
  { "name": "いあいぎりすき焼きカレー", "category": "Curry", "baseEnergy": 20655, "bonus": 1.61, "ingredients": { "マメミート": 26, "ふといながねぎ": 27, "とくせんエッグ": 22, "あまいミツ": 26 } },
  { "name": "めざめるパワーシチュー", "category": "Curry", "baseEnergy": 19061, "bonus": 1.61, "ingredients": { "ワカクサ大豆": 28, "あんみんトマト": 25, "あじわいキノコ": 23, "めざましコーヒー": 16 } },
  { "name": "なりきりバケッチャシチュー", "category": "Curry", "baseEnergy": 15621, "bonus": 1.48, "ingredients": { "マメミート": 16, "ほっこりポテト": 18, "あじわいキノコ": 25, "ずっしりカボチャ": 10 } },
  { "name": "れんごくコーンキーマカレー", "category": "Curry", "baseEnergy": 13690, "bonus": 1.48, "ingredients": { "マメミート": 24, "げきからハーブ": 27, "あったかジンジャー": 12, "ワカクサコーン": 14 } },
  { "name": "ニンジャカレー", "category": "Curry", "baseEnergy": 9445, "bonus": 1.48, "ingredients": { "ワカクサ大豆": 24, "マメミート": 9, "ふといながねぎ": 12, "あじわいキノコ": 5 } },
  { "name": "ぜったいねむりバターカレー", "category": "Curry", "baseEnergy": 9010, "bonus": 1.35, "ingredients": { "リラックスカカオ": 12, "モーモーミルク": 10, "ほっこりポテト": 18, "あんみんトマト": 15 } },
  { "name": "あぶりテールカレー", "category": "Curry", "baseEnergy": 7483, "bonus": 1.25, "ingredients": { "げきからハーブ": 25, "おいしいシッポ": 8 } },
  { "name": "からくちネギもりカレー", "category": "Curry", "baseEnergy": 5900, "bonus": 1.25, "ingredients": { "ふといながねぎ": 14, "げきからハーブ": 8, "あったかジンジャー": 10 } },
  { "name": "ピヨピヨパンチ辛口カレー", "category": "Curry", "baseEnergy": 5702, "bonus": 1.35, "ingredients": { "げきからハーブ": 11, "あまいミツ": 11, "めざましコーヒー": 11 } },
  { "name": "じゅうなんコーンシチュー", "category": "Curry", "baseEnergy": 4670, "bonus": 1.25, "ingredients": { "モーモーミルク": 8, "ほっこりポテト": 8, "ワカクサコーン": 14 } },
  { "name": "おやこあいカレー", "category": "Curry", "baseEnergy": 4523, "bonus": 1.25, "ingredients": { "ほっこりポテト": 4, "とくせんリンゴ": 11, "とくせんエッグ": 8, "あまいミツ": 12 } },
  { "name": "キノコのほうしカレー", "category": "Curry", "baseEnergy": 4162, "bonus": 1.17, "ingredients": { "ほっこりポテト": 9, "あじわいキノコ": 14 } },
  { "name": "ビルドアップマメカレー", "category": "Curry", "baseEnergy": 3372, "bonus": 1.17, "ingredients": { "ワカクサ大豆": 12, "マメミート": 6, "とくせんエッグ": 4, "げきからハーブ": 4 } },
  { "name": "ほっこりホワイトシチュー", "category": "Curry", "baseEnergy": 3181, "bonus": 1.17, "ingredients": { "モーモーミルク": 10, "ほっこりポテト": 8, "あじわいキノコ": 4 } },
  { "name": "とけるオムカレー", "category": "Curry", "baseEnergy": 2150, "bonus": 1.11, "ingredients": { "とくせんエッグ": 10, "あんみんトマト": 6 } },
  { "name": "サンパワートマトカレー", "category": "Curry", "baseEnergy": 2078, "bonus": 1.11, "ingredients": { "げきからハーブ": 5, "あんみんトマト": 10 } },
  { "name": "ひでりカツレツカレー", "category": "Curry", "baseEnergy": 1942, "bonus": 1.11, "ingredients": { "マメミート": 10, "ピュアなオイル": 5 } },
  { "name": "満腹チーズバーグカレー", "category": "Curry", "baseEnergy": 1910, "bonus": 1.11, "ingredients": { "モーモーミルク": 8, "マメミート": 8 } },
  { "name": "マメバーグカレー", "category": "Curry", "baseEnergy": 856, "bonus": 1.06, "ingredients": { "マメミート": 7 } },
  { "name": "ベイビィハニーカレー", "category": "Curry", "baseEnergy": 839, "bonus": 1.06, "ingredients": { "あまいミツ": 7 } },
  { "name": "たんじゅんホワイトシチュー", "category": "Curry", "baseEnergy": 814, "bonus": 1.06, "ingredients": { "モーモーミルク": 7 } },
  { "name": "とくせんリンゴカレー", "category": "Curry", "baseEnergy": 748, "bonus": 1.06, "ingredients": { "とくせんリンゴ": 7 } },
  { "name": "じならしワカモレチップス", "category": "Salad", "baseEnergy": 25162, "bonus": 1.78, "ingredients": { "ワカクサ大豆": 22, "げきからハーブ": 30, "ワカクサコーン": 25, "つやつやアボカド": 28 } },
  { "name": "まけんきコーヒーサラダ", "category": "Salad", "baseEnergy": 20218, "bonus": 1.61, "ingredients": { "マメミート": 28, "ほっこりポテト": 22, "ピュアなオイル": 22, "めざましコーヒー": 28 } },
  { "name": "りんごさんヨーグルトサラダ", "category": "Salad", "baseEnergy": 19293, "bonus": 1.47, "ingredients": { "モーモーミルク": 18, "とくせんリンゴ": 28, "とくせんエッグ": 35, "あんみんトマト": 23 } },
  { "name": "はなふぶきミモザサラダ", "category": "Salad", "baseEnergy": 11811, "bonus": 1.47, "ingredients": { "マメミート": 12, "ほっこりポテト": 15, "ピュアなオイル": 17, "とくせんエッグ": 25 } },
  { "name": "ニンジャサラダ", "category": "Salad", "baseEnergy": 11659, "bonus": 1.48, "ingredients": { "ふといながねぎ": 15, "あじわいキノコ": 12, "あったかジンジャー": 11, "ワカクサ大豆": 15 } },
  { "name": "ワカクササラダ", "category": "Salad", "baseEnergy": 11393, "bonus": 1.48, "ingredients": { "ピュアなオイル": 22, "ワカクサコーン": 17, "あんみんトマト": 14, "ほっこりポテト": 9 } },
  { "name": "クロスチョップドサラダ", "category": "Salad", "baseEnergy": 10925, "bonus": 1.35, "ingredients": { "マメミート": 15, "ワカクサ大豆": 10, "とくせんエッグ": 10, "あんみんトマト": 10 } },
  { "name": "ヤドンテールのペッパーサラダ", "category": "Salad", "baseEnergy": 8169, "bonus": 1.25, "ingredients": { "おいしいシッポ": 10, "げきからハーブ": 10, "ピュアなオイル": 15 } },
  { "name": "めいそうスイートサラダ", "category": "Salad", "baseEnergy": 7682, "bonus": 1.25, "ingredients": { "とくせんリンゴ": 21, "あまいミツ": 16, "ワカクサコーン": 12 } },
  { "name": "くだけるアボカドサラダ", "category": "Salad", "baseEnergy": 5667, "bonus": 1.35, "ingredients": { "マメミート": 5, "ピュアなオイル": 5, "げきからハーブ": 5, "つやつやアボカド": 10 } },
  { "name": "キノコのほうしサラダ", "category": "Salad", "baseEnergy": 5600, "bonus": 1.25, "ingredients": { "あじわいキノコ": 17, "あんみんトマト": 8, "ピュアなオイル": 8 } },
  { "name": "オーバーヒートサラダ", "category": "Salad", "baseEnergy": 5176, "bonus": 1.25, "ingredients": { "げきからハーブ": 17, "あんみんトマト": 10, "あったかジンジャー": 6 } },
  { "name": "くいしんぼうポテトサラダ", "category": "Salad", "baseEnergy": 5040, "bonus": 1.17, "ingredients": { "ほっこりポテト": 14, "とくせんエッグ": 9, "とくせんリンゴ": 7, "マメミート": 6 } },
  { "name": "ムラっけチョコミートサラダ", "category": "Salad", "baseEnergy": 4929, "bonus": 1.17, "ingredients": { "リラックスカカオ": 14, "マメミート": 9, "げきからハーブ": 7 } },
  { "name": "うるおいとうふサラダ", "category": "Salad", "baseEnergy": 4443, "bonus": 1.17, "ingredients": { "ワカクサ大豆": 10, "あんみんトマト": 6 } },
  { "name": "ばかぢからワイルドサラダ", "category": "Salad", "baseEnergy": 3717, "bonus": 1.17, "ingredients": { "マメミート": 9, "あったかジンジャー": 6, "とくせんエッグ": 5, "ほっこりポテト": 3 } },
  { "name": "モーモーカプレーゼ", "category": "Salad", "baseEnergy": 2856, "bonus": 1.11, "ingredients": { "モーモーミルク": 12, "あんみんトマト": 6, "ピュアなオイル": 5 } },
  { "name": "めんえきネギサラダ", "category": "Salad", "baseEnergy": 2658, "bonus": 1.11, "ingredients": { "ふといながねぎ": 10, "あったかジンジャー": 5 } },
  { "name": "みだれづきコーンサラダ", "category": "Salad", "baseEnergy": 2525, "bonus": 1.11, "ingredients": { "ワカクサコーン": 9, "ピュアなオイル": 8 } },
  { "name": "メロメロりんごのチーズサラダ", "category": "Salad", "baseEnergy": 2525, "bonus": 1.11, "ingredients": { "とくせんリンゴ": 15, "モーモーミルク": 5, "ピュアなオイル": 3 } },
  { "name": "ねっぷうとうふサラダ", "category": "Salad", "baseEnergy": 2185, "bonus": 1.11, "ingredients": { "ワカクサ大豆": 10, "げきからハーブ": 6 } },
  { "name": "ゆきかきシーザーサラダ", "category": "Salad", "baseEnergy": 1774, "bonus": 1.11, "ingredients": { "モーモーミルク": 10, "マメミート": 6 } },
  { "name": "あんみんトマトサラダ", "category": "Salad", "baseEnergy": 864, "bonus": 1.06, "ingredients": { "あんみんトマト": 8 } },
  { "name": "マメハムサラダ", "category": "Salad", "baseEnergy": 856, "bonus": 1.06, "ingredients": { "マメミート": 8 } },
  { "name": "とくせんリンゴサラダ", "category": "Salad", "baseEnergy": 748, "bonus": 1.06, "ingredients": { "とくせんリンゴ": 8 } },
  { "name": "ドキドキこわいかおパンケーキ", "category": "Dessert", "baseEnergy": 24354, "bonus": 1.78, "ingredients": { "とくせんエッグ": 24, "あんみんトマト": 29, "あまいミツ": 32, "ずっしりカボチャ": 18 } },
  { "name": "ドオーのエクレア", "category": "Dessert", "baseEnergy": 20885, "bonus": 1.61, "ingredients": { "リラックスカカオ": 30, "モーモーミルク": 26, "あまいミツ": 22, "めざましコーヒー": 24 } },
  { "name": "スパークスパイスコーラ", "category": "Dessert", "baseEnergy": 17494, "bonus": 1.61, "ingredients": { "ふといながねぎ": 20, "とくせんリンゴ": 35, "あったかジンジャー": 20, "めざましコーヒー": 12 } },
  { "name": "フラワーギフトマカロン", "category": "Dessert", "baseEnergy": 13834, "bonus": 1.48, "ingredients": { "リラックスカカオ": 25, "モーモーミルク": 10, "とくせんエッグ": 25, "あまいミツ": 17 } },
  { "name": "おちゃかいコーンスコーン", "category": "Dessert", "baseEnergy": 10925, "bonus": 1.48, "ingredients": { "とくせんリンゴ": 20, "あったかジンジャー": 20, "ワカクサコーン": 18, "モーモーミルク": 9 } },
  { "name": "グラスミキサースムージー", "category": "Dessert", "baseEnergy": 8165, "bonus": 1.35, "ingredients": { "つやつやアボカド": 18, "あんみんトマト": 16, "モーモーミルク": 14 } },
  { "name": "プリンのプリンアラモード", "category": "Dessert", "baseEnergy": 7594, "bonus": 1.35, "ingredients": { "あまいミツ": 20, "とくせんエッグ": 15, "モーモーミルク": 10, "とくせんリンゴ": 10 } },
  { "name": "かたやぶりコーンティラミス", "category": "Dessert", "baseEnergy": 7125, "bonus": 1.35, "ingredients": { "めざましコーヒー": 14, "ワカクサコーン": 14, "モーモーミルク": 12 } },
  { "name": "はやおきコーヒーゼリー", "category": "Dessert", "baseEnergy": 6793, "bonus": 1.35, "ingredients": { "めざましコーヒー": 16, "モーモーミルク": 14, "あまいミツ": 12 } },
  { "name": "だいばくはつポップコーン", "category": "Dessert", "baseEnergy": 6048, "bonus": 1.35, "ingredients": { "ワカクサコーン": 15, "ピュアなオイル": 14, "モーモーミルク": 7 } },
  { "name": "ちからもちソイドーナッツ", "category": "Dessert", "baseEnergy": 5547, "bonus": 1.35, "ingredients": { "ワカクサ大豆": 16, "ピュアなオイル": 12, "リラックスカカオ": 7 } },
  { "name": "ネロリのデトックスティー", "category": "Dessert", "baseEnergy": 5065, "bonus": 1.25, "ingredients": { "あったかジンジャー": 11, "とくせんリンゴ": 15, "あじわいキノコ": 9 } },
  { "name": "ふくつのジンジャークッキー", "category": "Dessert", "baseEnergy": 4905, "bonus": 1.25, "ingredients": { "あまいミツ": 14, "あったかジンジャー": 12, "リラックスカカオ": 5, "とくせんエッグ": 4 } },
  { "name": "あくまのキッスフルーツオレ", "category": "Dessert", "baseEnergy": 4794, "bonus": 1.25, "ingredients": { "とくせんリンゴ": 11, "モーモーミルク": 9, "あまいミツ": 7, "リラックスカカオ": 8 } },
  { "name": "あまいかおりチョコケーキ", "category": "Dessert", "baseEnergy": 3280, "bonus": 1.17, "ingredients": { "あまいミツ": 9, "リラックスカカオ": 8, "モーモーミルク": 7 } },
  { "name": "はなびらのまいチョコタルト", "category": "Dessert", "baseEnergy": 3280, "bonus": 1.17, "ingredients": { "リラックスカカオ": 11, "とくせんリンゴ": 11 } },
  { "name": "はりきりプロテインスムージー", "category": "Dessert", "baseEnergy": 3165, "bonus": 1.17, "ingredients": { "ワカクサ大豆": 15, "リラックスカカオ": 8 } },
  { "name": "おおきいマラサダ", "category": "Dessert", "baseEnergy": 2927, "bonus": 1.17, "ingredients": { "ピュアなオイル": 10, "モーモーミルク": 7, "あまいミツ": 6 } },
  { "name": "かるわざソイケーキ", "category": "Dessert", "baseEnergy": 1827, "bonus": 1.11, "ingredients": { "とくせんエッグ": 8, "ワカクサ大豆": 7 } },
  { "name": "マイペースやさいジュース", "category": "Dessert", "baseEnergy": 1754, "bonus": 1.11, "ingredients": { "あんみんトマト": 9, "とくせんリンゴ": 7 } },
  { "name": "ひのこのジンジャーティー", "category": "Dessert", "baseEnergy": 1754, "bonus": 1.11, "ingredients": { "あったかジンジャー": 9, "とくせんリンゴ": 7 } },
  { "name": "じゅくせいスイートポテト", "category": "Dessert", "baseEnergy": 1391, "bonus": 1.11, "ingredients": { "ほっこりポテト": 9, "モーモーミルク": 5 } },
  { "name": "ねがいごとアップルパイ", "category": "Dessert", "baseEnergy": 1269, "bonus": 1.11, "ingredients": { "とくせんリンゴ": 12, "モーモーミルク": 4 } },
  { "name": "クラフトサイコソーダ", "category": "Dessert", "baseEnergy": 956, "bonus": 1.06, "ingredients": { "あまいミツ": 9 } },
  { "name": "とくせんリンゴジュース", "category": "Dessert", "baseEnergy": 748, "bonus": 1.06, "ingredients": { "とくせんリンゴ": 8 } },
  { "name": "モーモーホットミルク", "category": "Dessert", "baseEnergy": 732, "bonus": 1.06, "ingredients": { "モーモーミルク": 7 } }
];

// --- アイコン設定 ---
const iconMap = {
    "とくせんリンゴ": "🍎", "モーモーミルク": "🥛", "ワカクサ大豆": "🟢", "あまいミツ": "🍯",
    "マメミート": "🥓", "あったかジンジャー": "🔥", "あんみんトマト": "🍅", "とくせんエッグ": "🥚",
    "ピュアなオイル": "🧴", "ほっこりポテト": "🥔", "げきからハーブ": "🌿", "リラックスカカオ": "🍫",
    "あじわいキノコ": "🍄", "ふといながねぎ": "🎋", "ずっしりカボチャ": "🎃", "ワカクサコーン": "🌽",
    "つやつやアボカド": "🥑", "めざましコーヒー": "☕", "おいしいシッポ": "🍖"
};

const categoryMap = { 'Curry': 'カレー', 'Salad': 'サラダ', 'Dessert': 'デザート' };
const allCategories = ['Curry', 'Salad', 'Dessert'];

// --- アプリの状態 ---
const allIngredients = Array.from(new Set(allRecipes.flatMap(r => Object.keys(r.ingredients)))).sort();
// 初期状態で全食材を選択状態にする
let selectedIngredients = new Set(allIngredients);
let selectedCategories = new Set(allCategories);

// 要素参照
let ingredientContainer, categoryContainer, recipeContainer, countSpan, btnAllIngredients, btnAllCategories, energyInput;
const buttonElements = {}; 
const categoryElements = {};

function init() {
    ingredientContainer = document.getElementById('ingredient-container');
    categoryContainer = document.getElementById('category-container');
    recipeContainer = document.getElementById('recipe-container');
    countSpan = document.getElementById('count');
    btnAllIngredients = document.getElementById('btn-all-ingredients');
    btnAllCategories = document.getElementById('btn-all-categories');
    energyInput = document.getElementById('energy-threshold');

    // 1. 食材ボタン生成
    ingredientContainer.innerHTML = '';
    allIngredients.forEach(ing => {
        const btn = document.createElement('div');
        btn.className = 'chip';
        buttonElements[ing] = btn;
        const icon = iconMap[ing] || "❓";
        btn.innerHTML = `${icon} ${ing}`; 
        btn.onclick = () => toggleIngredient(ing);
        ingredientContainer.appendChild(btn);
    });

    // 2. カテゴリボタン生成
    categoryContainer.innerHTML = '';
    allCategories.forEach(cat => {
        const btn = document.createElement('div');
        btn.className = `chip cat-${cat}`;
        categoryElements[cat] = btn;
        btn.innerHTML = categoryMap[cat];
        btn.onclick = () => toggleCategory(cat);
        categoryContainer.appendChild(btn);
    });

    // イベントリスナー
    btnAllIngredients.onclick = toggleAllIngredients;
    btnAllCategories.onclick = toggleAllCategories;
    // エナジー入力時に更新（リアルタイム）
    energyInput.oninput = updateDisplay;

    updateDisplay();
}

// --- 操作ロジック ---

function toggleIngredient(ing) {
    if (selectedIngredients.has(ing)) {
        selectedIngredients.delete(ing);
    } else {
        selectedIngredients.add(ing);
    }
    updateDisplay();
}

function toggleCategory(cat) {
    if (selectedCategories.has(cat)) {
        selectedCategories.delete(cat);
    } else {
        selectedCategories.add(cat);
    }
    updateDisplay();
}

function toggleAllIngredients() {
    if (selectedIngredients.size === allIngredients.length) {
        selectedIngredients.clear();
    } else {
        selectedIngredients.clear(); 
        allIngredients.forEach(ing => selectedIngredients.add(ing)); 
    }
    updateDisplay();
}

function toggleAllCategories() {
    if (selectedCategories.size === allCategories.length) {
        selectedCategories.clear();
    } else {
        selectedCategories.clear();
        allCategories.forEach(cat => selectedCategories.add(cat));
    }
    updateDisplay();
}

function isCookable(recipe) {
    const recipeIngs = Object.keys(recipe.ingredients);
    return recipeIngs.every(ing => selectedIngredients.has(ing));
}

// 画面更新
function updateDisplay() {
    // 入力された閾値（未入力の場合は0）
    const threshold = parseInt(energyInput.value, 10) || 0;

    // 1. 検索ヒット判定（結果リスト用：部分一致でも出す）
    const results = allRecipes.filter(recipe => {
        // カテゴリチェック
        if (!selectedCategories.has(recipe.category)) return false;
        
        // ▼ エナジーフィルター（閾値以下は除外 = 閾値より大きいものだけ残す）
        if (recipe.baseEnergy <= threshold) return false;

        // 食材チェック
        if (selectedIngredients.size === 0) return false;
        const recipeIngs = Object.keys(recipe.ingredients);
        return recipeIngs.some(ri => selectedIngredients.has(ri));
    });

    // 2. 食材ボタンの表示更新
    allIngredients.forEach(ing => {
        const btn = buttonElements[ing];
        if (!btn) return;
        const icon = iconMap[ing] || "";

        if (selectedIngredients.has(ing)) {
            btn.className = 'chip selected';
            btn.innerHTML = `${icon} ${ing}`;
        } else {
            // 未選択の場合: 今のリストの中で使用されている数を表示
            btn.className = 'chip';
            const count = results.filter(r => r.ingredients.hasOwnProperty(ing)).length;
            
            if (count > 0) {
                btn.innerHTML = `${icon} ${ing} <span style="color:#e91e63; font-weight:bold; margin-left:4px;">(${count})</span>`;
            } else {
                btn.innerHTML = `${icon} ${ing}`;
            }
        }
    });

    // 3. カテゴリ・全選択ボタンの見た目更新
    allCategories.forEach(cat => {
        const btn = categoryElements[cat];
        if (selectedCategories.has(cat)) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    if (selectedIngredients.size === allIngredients.length && allIngredients.length > 0) {
        btnAllIngredients.classList.add('selected');
    } else {
        btnAllIngredients.classList.remove('selected');
    }

    if (selectedCategories.size === allCategories.length) {
        btnAllCategories.classList.add('selected');
    } else {
        btnAllCategories.classList.remove('selected');
    }

    // 4. レシピリストの並び替え
    results.sort((a, b) => {
        const aOk = isCookable(a);
        const bOk = isCookable(b);
        if (aOk && !bOk) return -1;
        if (!aOk && bOk) return 1;
        return b.baseEnergy - a.baseEnergy; 
    });

    // 5. 描画
    recipeContainer.innerHTML = '';
    
    // 表示する件数を「実際に作れる(isCookableがtrue)料理の数」にする
    const cookableCount = results.filter(isCookable).length;
    countSpan.textContent = cookableCount;

    if (results.length === 0) {
        recipeContainer.innerHTML = '<div style="color:#999; padding:20px; text-align:center;">条件に合う料理がありません</div>';
        return;
    }

    results.forEach(recipe => {
        const div = document.createElement('div');
        let catLabel = recipe.category;
        if(catLabel === 'Curry') catLabel = 'カレー';
        if(catLabel === 'Salad') catLabel = 'サラダ';
        if(catLabel === 'Dessert') catLabel = 'デザート';

        const canCook = isCookable(recipe);
        const disabledClass = canCook ? '' : 'disabled';
        const totalCount = Object.values(recipe.ingredients).reduce((sum, num) => sum + num, 0);

        div.className = `recipe-card type-${recipe.category} ${disabledClass}`;

        const ingHtml = Object.entries(recipe.ingredients)
            .map(([k, v]) => {
                const icon = iconMap[k] || "";
                const hasIt = selectedIngredients.has(k);
                const spanClass = hasIt ? 'ing-ok' : 'ing-missing';
                return `<span class="${spanClass}">${icon}${k} x${v}</span>`;
            })
            .join(' / ');
        
        const imagePath = `images/${recipe.name}.png`;

        div.innerHTML = `
            <div class="recipe-header">
                <img src="${imagePath}" alt="${recipe.name}" class="recipe-img" onerror="this.style.display='none'">
                <div class="recipe-title-group">
                    <div class="recipe-name">
                        <span class="bg-${recipe.category}">${catLabel}</span>
                        ${recipe.name}
                    </div>
                    <div class="energy-val">⚡ ${recipe.baseEnergy.toLocaleString()}</div>
                </div>
            </div>
            <div style="font-size:0.85rem; color:#666; margin-bottom:6px; margin-left: 55px;">
                <span style="margin-right:10px;">🍲 数: <b>${totalCount}</b>個</span>
                <span>✨ ボ: <b>${recipe.bonus.toFixed(2)}</b></span>
            </div>
            <div class="ing-row">
                ${ingHtml}
            </div>
        `;
        recipeContainer.appendChild(div);
    });
}

init();
