// エクセル「RecipeList」から抽出したレシピデータ
const allRecipes = [
    {
        "name": "しんりょくアボカドグラタン",
        "category": "Curry",
        "baseEnergy": 24802,
        "ingredients": { "モーモーミルク": 41, "ほっこりポテト": 20, "ピュアなオイル": 32, "つやつやアボカド": 22 }
    },
    {
        "name": "いあいぎりすき焼きカレー",
        "category": "Curry",
        "baseEnergy": 20655,
        "ingredients": { "マメミート": 26, "ふといながねぎ": 27, "とくせんエッグ": 22, "あまいミツ": 26 }
    },
    {
        "name": "めざめるパワーシチュー",
        "category": "Curry",
        "baseEnergy": 19061,
        "ingredients": { "ワカクサ大豆": 28, "あんみんトマト": 25, "あじわいキノコ": 23, "めざましコーヒー": 16 }
    },
    {
        "name": "なりきりバケッチャシチュー",
        "category": "Curry",
        "baseEnergy": 15621,
        "ingredients": { "マメミート": 16, "ほっこりポテト": 18, "あじわいキノコ": 25, "ずっしりカボチャ": 10 }
    },
    {
        "name": "じならしワカモレチップス",
        "category": "Salad",
        "baseEnergy": 25162,
        "ingredients": { "ワカクサ大豆": 22, "げきからハーブ": 30, "ワカクサコーン": 25, "つやつやアボカド": 28 }
    },
    {
        "name": "まけんきコーヒーサラダ",
        "category": "Salad",
        "baseEnergy": 20218,
        "ingredients": { "マメミート": 28, "ほっこりポテト": 22, "ピュアなオイル": 22, "めざましコーヒー": 28 }
    },
    {
        "name": "りんごさんヨーグルトサラダ",
        "category": "Salad",
        "baseEnergy": 19293,
        "ingredients": { "モーモーミルク": 18, "とくせんリンゴ": 28, "とくせんエッグ": 35, "あんみんトマト": 23 }
    },
    {
        "name": "はなふぶきミモザサラダ",
        "category": "Salad",
        "baseEnergy": 11811,
        "ingredients": { "マメミート": 12, "ほっこりポテト": 15, "ピュアなオイル": 17, "とくせんエッグ": 25 }
    },
    {
        "name": "ドキドキこわいかおパンケーキ",
        "category": "Dessert",
        "baseEnergy": 24354,
        "ingredients": { "とくせんエッグ": 24, "あんみんトマト": 29, "あまいミツ": 32, "ずっしりカボチャ": 18 }
    },
    {
        "name": "ドオーのエクレア",
        "category": "Dessert",
        "baseEnergy": 20885,
        "ingredients": { "リラックスカカオ": 30, "モーモーミルク": 26, "あまいミツ": 22, "めざましコーヒー": 24 }
    },
    {
        "name": "スパークスパイスコーラ",
        "category": "Dessert",
        "baseEnergy": 17494,
        "ingredients": { "ふといながねぎ": 20, "とくせんリンゴ": 35, "あったかジンジャー": 20, "めざましコーヒー": 12 }
    },
    {
        "name": "フラワーギフトマカロン",
        "category": "Dessert",
        "baseEnergy": 13834,
        "ingredients": { "リラックスカカオ": 25, "モーモーミルク": 10, "とくせんエッグ": 25, "あまいミツ": 17 }
    }
];

// --- 以下、ロジック部分は共通 ---

// 全ての食材リストを自動抽出してソート
const allIngredients = Array.from(new Set(allRecipes.flatMap(r => Object.keys(r.ingredients)))).sort();

// 選択中の食材
let selectedIngredients = new Set();

// 画面要素の取得
const ingredientContainer = document.getElementById('ingredient-container');
const recipeContainer = document.getElementById('recipe-container');
const countSpan = document.getElementById('count');

// 初期化：食材ボタンの生成
allIngredients.forEach(ing => {
    const btn = document.createElement('div');
    btn.className = 'chip';
    btn.textContent = ing;
    btn.onclick = () => toggleIngredient(ing, btn);
    ingredientContainer.appendChild(btn);
});

// 食材の選択/解除
function toggleIngredient(ing, btnElement) {
    if (selectedIngredients.has(ing)) {
        selectedIngredients.delete(ing);
        btnElement.classList.remove('selected');
    } else {
        selectedIngredients.add(ing);
        btnElement.classList.add('selected');
    }
    updateRecipeList();
}

// レシピリストの更新
function updateRecipeList() {
    recipeContainer.innerHTML = '';
    
    // 選択された食材を1つでも含むレシピを抽出
    const results = allRecipes.filter(recipe => {
        if (selectedIngredients.size === 0) return false;
        const recipeIngs = Object.keys(recipe.ingredients);
        return recipeIngs.some(ri => selectedIngredients.has(ri));
    });

    countSpan.textContent = results.length;

    // レシピカードの生成
    results.forEach(recipe => {
        const div = document.createElement('div');
        
        // カテゴリ判定
        let catClass = 'card-curry';
        let bgClass = 'bg-curry';
        let catName = 'カレー';
        
        if (recipe.category === 'Salad') {
            catClass = 'card-salad';
            bgClass = 'bg-salad';
            catName = 'サラダ';
        } else if (recipe.category === 'Dessert') {
            catClass = 'card-dessert';
            bgClass = 'bg-dessert';
            catName = 'デザート';
        }

        div.className = `recipe-card ${catClass}`;

        // 食材リストのテキスト化
        const ingText = Object.entries(recipe.ingredients)
            .map(([k, v]) => `${k} x${v}`).join(' / ');

        div.innerHTML = `
            <div class="recipe-header">
                <div class="recipe-name">
                    <span class="badge ${bgClass}">${catName}</span>
                    ${recipe.name}
                </div>
                <div class="recipe-energy">⚡ ${recipe.baseEnergy.toLocaleString()}</div>
            </div>
            <div class="recipe-info">
                <div class="ing-list">🥕 ${ingText}</div>
            </div>
        `;
        recipeContainer.appendChild(div);
    });
}
