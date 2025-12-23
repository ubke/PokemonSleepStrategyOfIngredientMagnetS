// エクセル「RecipeList」から読み取ったデータベース（全31種）
const allRecipes = [
  {
    "name": "しんりょくアボカドグラタン",
    "category": "Curry",
    "baseEnergy": 24802,
    "bonus": 1.78,
    "ingredients": { "モーモーミルク": 41, "ほっこりポテト": 20, "ピュアなオイル": 32, "つやつやアボカド": 22 }
  },
  {
    "name": "いあいぎりすき焼きカレー",
    "category": "Curry",
    "baseEnergy": 20655,
    "bonus": 1.61,
    "ingredients": { "マメミート": 26, "ふといながねぎ": 27, "とくせんエッグ": 22, "あまいミツ": 26 }
  },
  {
    "name": "めざめるパワーシチュー",
    "category": "Curry",
    "baseEnergy": 19061,
    "bonus": 1.61,
    "ingredients": { "ワカクサ大豆": 28, "あんみんトマト": 25, "あじわいキノコ": 23, "めざましコーヒー": 16 }
  },
  {
    "name": "なりきりバケッチャシチュー",
    "category": "Curry",
    "baseEnergy": 15621,
    "bonus": 1.48,
    "ingredients": { "マメミート": 16, "ほっこりポテト": 18, "あじわいキノコ": 25, "ずっしりカボチャ": 10 }
  },
  {
    "name": "れんごくコーンキーマカレー",
    "category": "Curry",
    "baseEnergy": 13690,
    "bonus": 1.48,
    "ingredients": { "マメミート": 24, "げきからハーブ": 27, "ワカクサコーン": 14, "あったかジンジャー": 12 }
  },
  {
    "name": "絶対眠りバターカレー",
    "category": "Curry",
    "baseEnergy": 11556,
    "bonus": 1.35,
    "ingredients": { "モーモーミルク": 10, "ほっこりポテト": 18, "あんみんトマト": 15, "リラックスカカオ": 12 }
  },
  {
    "name": "あぶりテールカレー",
    "category": "Curry",
    "baseEnergy": 7483,
    "bonus": 1.25,
    "ingredients": { "げきからハーブ": 25, "おいしいシッポ": 8 }
  },
  {
    "name": "キノコのほうしカレー",
    "category": "Curry",
    "baseEnergy": 6430,
    "bonus": 1.21,
    "ingredients": { "あじわいキノコ": 14, "ほっこりポテト": 9 }
  },
  {
    "name": "おやこあいいりどうふカレー",
    "category": "Curry",
    "baseEnergy": 5832,
    "bonus": 1.21,
    "ingredients": { "ワカクサ大豆": 12, "マメミート": 6, "とくせんエッグ": 8, "ふといながねぎ": 9 }
  },
  {
    "name": "ビルドアップマメカレー",
    "category": "Curry",
    "baseEnergy": 5683,
    "bonus": 1.21,
    "ingredients": { "ワカクサ大豆": 12, "マメミート": 6, "げきからハーブ": 4, "とくせんエッグ": 4 }
  },
  {
    "name": "ニンジャカレー",
    "category": "Curry",
    "baseEnergy": 4943,
    "bonus": 1.21,
    "ingredients": { "ワカクサ大豆": 15, "マメミート": 9, "ふといながねぎ": 9, "あじわいキノコ": 5 }
  },
  {
    "name": "ソーラーパワー特製キーマカレー",
    "category": "Curry",
    "baseEnergy": 4488,
    "bonus": 1.17,
    "ingredients": { "あんみんトマト": 10, "げきからハーブ": 6, "マメミート": 10 }
  },
  {
    "name": "からくちネギもりカレー",
    "category": "Curry",
    "baseEnergy": 4436,
    "bonus": 1.17,
    "ingredients": { "ふといながねぎ": 14, "あったかジンジャー": 10, "げきからハーブ": 8 }
  },
  {
    "name": "ふくよかマメカレー",
    "category": "Curry",
    "baseEnergy": 3236,
    "bonus": 1.17,
    "ingredients": { "ワカクサ大豆": 12, "マメミート": 6, "とくせんエッグ": 4 }
  },
  {
    "name": "ほっこりホワイトシチュー",
    "category": "Curry",
    "baseEnergy": 3181,
    "bonus": 1.17,
    "ingredients": { "モーモーミルク": 10, "ほっこりポテト": 8, "あじわいキノコ": 4 }
  },
  {
    "name": "とけるオムカレー",
    "category": "Curry",
    "baseEnergy": 2150,
    "bonus": 1.11,
    "ingredients": { "とくせんエッグ": 10, "あんみんトマト": 6 }
  },
  {
    "name": "サンパワートマトカレー",
    "category": "Curry",
    "baseEnergy": 2078,
    "bonus": 1.11,
    "ingredients": { "げきからハーブ": 5, "あんみんトマト": 10 }
  },
  {
    "name": "ひでりカツレツカレー",
    "category": "Curry",
    "baseEnergy": 1942,
    "bonus": 1.11,
    "ingredients": { "マメミート": 10, "ピュアなオイル": 5 }
  },
  {
    "name": "満腹チーズバーグカレー",
    "category": "Curry",
    "baseEnergy": 1910,
    "bonus": 1.11,
    "ingredients": { "モーモーミルク": 8, "マメミート": 8 }
  },
  {
    "name": "マメバーグカレー",
    "category": "Curry",
    "baseEnergy": 856,
    "bonus": 1.06,
    "ingredients": { "マメミート": 7 }
  },
  {
    "name": "ベイビィハニーカレー",
    "category": "Curry",
    "baseEnergy": 839,
    "bonus": 1.06,
    "ingredients": { "あまいミツ": 7 }
  },
  {
    "name": "たんじゅんホワイトシチュー",
    "category": "Curry",
    "baseEnergy": 814,
    "bonus": 1.06,
    "ingredients": { "モーモーミルク": 7 }
  },
  {
    "name": "とくせんリンゴカレー",
    "category": "Curry",
    "baseEnergy": 748,
    "bonus": 1.06,
    "ingredients": { "とくせんリンゴ": 7 }
  },
  {
    "name": "じならしワカモレチップス",
    "category": "Salad",
    "baseEnergy": 25162,
    "bonus": 1.78,
    "ingredients": { "ワカクサ大豆": 22, "げきからハーブ": 30, "ワカクサコーン": 25, "つやつやアボカド": 28 }
  },
  {
    "name": "まけんきコーヒーサラダ",
    "category": "Salad",
    "baseEnergy": 20218,
    "bonus": 1.61,
    "ingredients": { "マメミート": 28, "ほっこりポテト": 22, "ピュアなオイル": 22, "めざましコーヒー": 28 }
  },
  {
    "name": "りんごさんヨーグルトサラダ",
    "category": "Salad",
    "baseEnergy": 19293,
    "bonus": 1.61,
    "ingredients": { "モーモーミルク": 18, "とくせんリンゴ": 28, "とくせんエッグ": 35, "あんみんトマト": 23 }
  },
  {
    "name": "はなふぶきミモザサラダ",
    "category": "Salad",
    "baseEnergy": 11811,
    "bonus": 1.35,
    "ingredients": { "マメミート": 12, "ほっこりポテト": 15, "ピュアなオイル": 17, "とくせんエッグ": 25 }
  },
  {
    "name": "ドキドキこわいかおパンケーキ",
    "category": "Dessert",
    "baseEnergy": 24354,
    "bonus": 1.78,
    "ingredients": { "とくせんエッグ": 24, "あんみんトマト": 29, "あまいミツ": 32, "ずっしりカボチャ": 18 }
  },
  {
    "name": "ドオーのエクレア",
    "category": "Dessert",
    "baseEnergy": 20885,
    "bonus": 1.61,
    "ingredients": { "リラックスカカオ": 30, "モーモーミルク": 26, "あまいミツ": 22, "めざましコーヒー": 24 }
  },
  {
    "name": "スパークスパイスコーラ",
    "category": "Dessert",
    "baseEnergy": 17494,
    "bonus": 1.61,
    "ingredients": { "ふといながねぎ": 20, "とくせんリンゴ": 35, "あったかジンジャー": 20, "めざましコーヒー": 12 }
  },
  {
    "name": "フラワーギフトマカロン",
    "category": "Dessert",
    "baseEnergy": 13834,
    "bonus": 1.35,
    "ingredients": { "リラックスカカオ": 25, "モーモーミルク": 10, "とくせんエッグ": 25, "あまいミツ": 17 }
  }
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
const buttonElements = {}; 

const ingredientContainer = document.getElementById('ingredient-container');
const recipeContainer = document.getElementById('recipe-container');
const countSpan = document.getElementById('count');

function init() {
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

function isCookable(recipe) {
    const recipeIngs = Object.keys(recipe.ingredients);
    return recipeIngs.every(ing => selectedIngredients.has(ing));
}

function updateDisplay() {
    const results = allRecipes.filter(recipe => {
        if (selectedIngredients.size === 0) return false;
        const recipeIngs = Object.keys(recipe.ingredients);
        return recipeIngs.some(ri => selectedIngredients.has(ri));
    });

    // 食材ボタンの更新（数字表示）
    allIngredients.forEach(ing => {
        const btn = buttonElements[ing];
        if (!btn) return;
        const icon = iconMap[ing] || "";
        if (selectedIngredients.has(ing)) {
            btn.className = 'chip selected';
            btn.innerHTML = `${icon} ${ing}`;
        } else {
            btn.className = 'chip';
            const count = results.filter(r => r.ingredients.hasOwnProperty(ing)).length;
            if (count > 0) {
                btn.innerHTML = `${icon} ${ing} <span style="color:#e91e63; font-weight:bold; margin-left:4px;">(${count})</span>`;
            } else {
                btn.innerHTML = `${icon} ${ing}`;
            }
        }
    });

    // 並び替え：作れるものが先頭
    results.sort((a, b) => {
        const aOk = isCookable(a);
        const bOk = isCookable(b);
        if (aOk && !bOk) return -1;
        if (!aOk && bOk) return 1;
        // 同じ条件ならエナジーが高い順
        return b.baseEnergy - a.baseEnergy; 
    });

    recipeContainer.innerHTML = '';
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

        const canCook = isCookable(recipe);
        const disabledClass = canCook ? '' : 'disabled';
        const totalCount = Object.values(recipe.ingredients).reduce((sum, num) => sum + num, 0);

        div.className = `recipe-card ${catClass} ${disabledClass}`;

        const ingHtml = Object.entries(recipe.ingredients)
            .map(([k, v]) => {
                const icon = iconMap[k] || "";
                const hasIt = selectedIngredients.has(k);
                const spanClass = hasIt ? 'ing-ok' : 'ing-missing';
                return `<span class="${spanClass}">${icon}${k} x${v}</span>`;
            })
            .join(' / ');
        
        // 画像パス設定（料理名.png）
        const imagePath = `images/${recipe.name}.png`;

        div.innerHTML = `
            <div class="recipe-header">
                <img src="${imagePath}" alt="${recipe.name}" class="recipe-img" onerror="this.style.display='none'">
                
                <div class="recipe-title-group">
                    <div class="recipe-name">
                        <span class="${bgClass}">${catLabel}</span>
                        ${recipe.name}
                    </div>
                    <div class="energy-val">⚡ ${recipe.baseEnergy.toLocaleString()}</div>
                </div>
            </div>
            
            <div style="font-size:0.85rem; color:#666; margin-bottom:6px; margin-left: 70px;">
                <span style="margin-right:10px;">🍲 数: <b>${totalCount}</b>個</span>
                <span>✨ ボ: <b>${recipe.bonus.toFixed(2)}</b></span>
            </div>

            <div class="ing-row">
                🥕 ${ingHtml}
            </div>
        `;
        recipeContainer.appendChild(div);
    });
}

init();
