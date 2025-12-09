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

// --- アイコン設定 ---
const iconMap = {
    "とくせんリンゴ": "🍎", "モーモーミルク": "🥛", "ワカクサ大豆": "🟢", "あまいミツ": "🍯",
    "マメミート": "🥓", "あったかジンジャー": "🔥", "あんみんトマト": "🍅", "とくせんエッグ": "🥚",
    "ピュアなオイル": "🧴", "ほっこりポテト": "🥔", "げきからハーブ": "🌿", "リラックスカカオ": "🍫",
    "あじわいキノコ": "🍄", "ふといながねぎ": "🎋", "ずっしりカボチャ": "🎃", "ワカクサコーン": "🌽",
    "つやつやアボカド": "🥑", "めざましコーヒー": "☕", "おいしいシッポ": "🍖"
};

// --- アプリの動作ロジック ---

const allIngredients = Array.from(new Set(allRecipes.flatMap(r => Object.keys(r.ingredients)))).sort();
let selectedIngredients = new Set();
const ingredientContainer = document.getElementById('ingredient-container');
const recipeContainer = document.getElementById('recipe-container');
const countSpan = document.getElementById('count');

function init() {
    allIngredients.forEach(ing => {
        const btn = document.createElement('div');
        btn.id = 'btn-' + ing;
        btn.className = 'chip';
        const icon = iconMap[ing] || "❓";
        btn.textContent = `${icon} ${ing}`;
        btn.onclick = () => toggleIngredient(ing);
        ingredientContainer.appendChild(btn);
    });
    updateDisplay();
}

function toggleIngredient(ing) {
    if (selectedIngredients.has(ing)) {
        selectedIngredients.delete(ing);
    } else {
        selectedIngredients.add(ing);
    }
    updateDisplay();
}

// ★ここが重要な判定関数です
// レシピに必要な食材が、すべて選択済みかどうかをチェックする
function isCookable(recipe) {
    const recipeIngs = Object.keys(recipe.ingredients);
    // すべての必要食材について、選択済みセットの中に含まれているか？
    return recipeIngs.every(ing => selectedIngredients.has(ing));
}

function updateDisplay() {
    // 1. 食材ボタンの更新
    allIngredients.forEach(ing => {
        const btn = document.getElementById('btn-' + ing);
        if (btn) {
            if (selectedIngredients.has(ing)) btn.classList.add('selected');
            else btn.classList.remove('selected');
        }
    });

    // 2. レシピリストの更新
    recipeContainer.innerHTML = '';
    
    // (A) まず、1つでも食材が一致するレシピをすべて抽出（候補）
    let results = allRecipes.filter(recipe => {
        if (selectedIngredients.size === 0) return false;
        const recipeIngs = Object.keys(recipe.ingredients);
        return recipeIngs.some(ri => selectedIngredients.has(ri));
    });

    // (B) 候補の中で「作れるもの」を先頭に並び替え（ソート）
    results.sort((a, b) => {
        const aOk = isCookable(a);
        const bOk = isCookable(b);
        // aが作れてbが作れないなら、aを上に
        if (aOk && !bOk) return -1;
        // 逆ならbを上に
        if (!aOk && bOk) return 1;
        // どちらも同じなら元の順序（またはエナジー順など）
        return 0; 
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

        // ★作れるかどうかの判定
        const canCook = isCookable(recipe);
        
        // ★作れない場合は 'disabled' クラスを追加
        const disabledClass = canCook ? '' : 'disabled';
        
        div.className = `recipe-card ${catClass} ${disabledClass}`;

        const ingText = Object.entries(recipe.ingredients)
            .map(([k, v]) => {
                const icon = iconMap[k] || "";
                return `${icon}${k} x${v}`;
            })
            .join(' / ');
        
        // 作れる場合は「作れる！」バッジを表示したりもできますが、今回はシンプルに
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

init();
