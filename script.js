// エクセル「RecipeList」から読み取ったデータベース
const allRecipes = [
    { name: "しんりょくアボカドグラタン", category: "Curry", baseEnergy: 24802, ingredients: { "モーモーミルク": 41, "ほっこりポテト": 20, "ピュアなオイル": 32, "つやつやアボカド": 22 } },
    { name: "いあいぎりすき焼きカレー", category: "Curry", baseEnergy: 20655, ingredients: { "マメミート": 26, "ふといながねぎ": 27, "とくせんエッグ": 22, "あまいミツ": 26 } },
    { name: "めざめるパワーシチュー", category: "Curry", baseEnergy: 19061, ingredients: { "ワカクサ大豆": 28, "あんみんトマト": 25, "あじわいキノコ": 23, "めざましコーヒー": 16 } },
    { name: "なりきりバケッチャシチュー", category: "Curry", baseEnergy: 15621, ingredients: { "マメミート": 16, "ほっこりポテト": 18, "あじわいキノコ": 25, "ずっしりカボチャ": 10 } },
    { name: "じならしワカモレチップス", category: "Salad", baseEnergy: 25162, ingredients: { "ワカクサ大豆": 22, "げきからハーブ": 30, "ワカクサコーン": 25, "つやつやアボカド": 28 } },
    { name: "まけんきコーヒーサラダ", category: "Salad", baseEnergy: 20218, ingredients: { "マメミート": 28, "ほっこりポテト": 22, "ピュアなオイル": 22, "めざましコーヒー": 28 } },
    { name: "りんごさんヨーグルトサラダ", category: "Salad", baseEnergy: 19293, ingredients: { "モーモーミルク": 18, "とくせんリンゴ": 28, "とくせんエッグ": 35, "あんみんトマト": 23 } },
    { name: "はなふぶきミモザサラダ", category: "Salad", baseEnergy: 11811, ingredients: { "マメミート": 12, "ほっこりポテト": 15, "ピュアなオイル": 17, "とくせんエッグ": 25 } },
    { name: "ドキドキこわいかおパンケーキ", category: "Dessert", baseEnergy: 24354, ingredients: { "とくせんエッグ": 24, "あんみんトマト": 29, "あまいミツ": 32, "ずっしりカボチャ": 18 } },
    { name: "ドオーのエクレア", category: "Dessert", baseEnergy: 20885, ingredients: { "リラックスカカオ": 30, "モーモーミルク": 26, "あまいミツ": 22, "めざましコーヒー": 24 } },
    { name: "スパークスパイスコーラ", category: "Dessert", baseEnergy: 17494, ingredients: { "ふといながねぎ": 20, "とくせんリンゴ": 35, "あったかジンジャー": 20, "めざましコーヒー": 12 } },
    { name: "フラワーギフトマカロン", category: "Dessert", baseEnergy: 13834, ingredients: { "リラックスカカオ": 25, "モーモーミルク": 10, "とくせんエッグ": 25, "あまいミツ": 17 } }
];

// --- アイコン設定 (ここで絵文字を指定) ---
const iconMap = {
    "とくせんリンゴ": "🍎",
    "モーモーミルク": "🥛",
    "ワカクサ大豆": "🟢",      // 豆の代わりに緑の丸
    "あまいミツ": "🍯",
    "マメミート": "🥓",
    "あったかジンジャー": "🔥", // 生姜の代わりに炎
    "あんみんトマト": "🍅",
    "とくせんエッグ": "🥚",
    "ピュアなオイル": "🧴",
    "ほっこりポテト": "🥔",
    "げきからハーブ": "🌿",
    "リラックスカカオ": "🍫",
    "あじわいキノコ": "🍄",
    "ふといながねぎ": "🎋",     // 長いネギの代わりに笹
    "ずっしりカボチャ": "🎃",
    "ワカクサコーン": "🌽",
    "つやつやアボカド": "🥑",
    "めざましコーヒー": "☕",
    "おいしいシッポ": "🍖"      // 骨付き肉
};

// --- アプリの動作ロジック ---

// 全食材リストの抽出とソート
const allIngredients = Array.from(new Set(allRecipes.flatMap(r => Object.keys(r.ingredients)))).sort();

let selectedIngredients = new Set();

const ingredientContainer = document.getElementById('ingredient-container');
const recipeContainer = document.getElementById('recipe-container');
const countSpan = document.getElementById('count');

// 初期化処理
function init() {
    // 食材ボタンの生成
    allIngredients.forEach(ing => {
        const btn = document.createElement('div');
        btn.id = 'btn-' + ing;
        btn.className = 'chip';
        
        // アイコン + 食材名 の形にする
        const icon = iconMap[ing] || "❓"; // アイコンがない場合の保険
        btn.textContent = `${icon} ${ing}`;
        
        btn.onclick = () => toggleIngredient(ing);
        ingredientContainer.appendChild(btn);
    });

    updateDisplay();
}

// 食材の選択切り替え
function toggleIngredient(ing) {
    if (selectedIngredients.has(ing)) {
        selectedIngredients.delete(ing);
    } else {
        selectedIngredients.add(ing);
    }
    updateDisplay();
}

// 画面全体の表示を更新
function updateDisplay() {
    // 1. 食材ボタンの選択状態更新
    allIngredients.forEach(ing => {
        const btn = document.getElementById('btn-' + ing);
        if (btn) {
            if (selectedIngredients.has(ing)) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        }
    });

    // 2. 検索結果更新
    recipeContainer.innerHTML = '';
    
    const results = allRecipes.filter(recipe => {
        if (selectedIngredients.size === 0) return false;
        const recipeIngs = Object.keys(recipe.ingredients);
        return recipeIngs.some(ri => selectedIngredients.has(ri));
    });

    countSpan.textContent = results.length;

    if (results.length === 0 && selectedIngredients.size > 0) {
        recipeContainer.innerHTML = '<div style="color:#999; padding:20px; text-align:center;">条件に合う料理が見つかりませんでした</div>';
        return;
    }

    results.forEach(recipe => {
        const div = document.createElement('div');
        const catClass = `type-${recipe.category}`;
        const bgClass = `bg-${recipe.category}`;
        
        let catLabel = recipe.category;
        if(catLabel === 'Curry') catLabel = 'カレー';
        if(catLabel === 'Salad') catLabel = 'サラダ';
        if(catLabel === 'Dessert') catLabel = 'デザート';

        div.className = `recipe-card ${catClass}`;

        // レシピ内の食材リストにもアイコンをつける
        const ingText = Object.entries(recipe.ingredients)
            .map(([k, v]) => {
                const icon = iconMap[k] || "";
                return `${icon}${k} x${v}`;
            })
            .join(' / ');

        div.innerHTML = `
            <div class="recipe-header">
                <div class="recipe-name">
                    <span class="${bgClass}">${catLabel}</span>
                    ${recipe.name}
                </div>
                <div class="energy-val">⚡ ${recipe.baseEnergy.toLocaleString()}</div>
            </div>
            <div class="ing-row">
                🥕 ${ingText}
            </div>
        `;
        recipeContainer.appendChild(div);
    });
}

// アプリ起動
init();
