// Pizza
import tortillaChickenPizza from '../assets/recipes/pizza/tortillaChickenPizza.png'
import oatspizzabase from '../assets/recipes/pizza/oatspizzabase.png'
import cauliflowerpizza from '../assets/recipes/pizza/cauliflowerpizza.png'
import highproteinmargherita from '../assets/recipes/pizza/highproteinmargherita.png'
import turkeypepperonipizza from '../assets/recipes/pizza/turkeypepperonipizza.png'
import cottagecheesepizzabase from '../assets/recipes/pizza/cottagecheesepizzabase.png'
import miniairfryerpizza from '../assets/recipes/pizza/miniairfryerpizza.png'
import bbqchickenpizzalight from '../assets/recipes/pizza/bbqchickenpizzalight.png'
import spinachmushroompizza from '../assets/recipes/pizza/spinachmushroompizza.png'
import lowcarbmeatpizzabowl from '../assets/recipes/pizza/lowcarbmeatpizzabowl.png'


const recipes = [
  {
    id: 1,
    title: "Chicken Burger Low Fat",
    category: ["burger", "chicken"],
    calories: "300 kcal – 32g protein",
    ingredients: `المكونات
120 جم صدور دجاج مفرومة
خبز برجر أسمر أو لايت
خس + طماطم شرائح
1 ملعقة صغيرة زبادي يوناني
ملح وفلفل`,
    instructions: `طريقة التحضير
تبلي الدجاج بالملح والفلفل وشكليه على هيئة برجر.
اطهيه على طاسة غير لاصقة 8–10 دقائق لكل جانب.
سخني الخبز وادهني الزبادي.
ضعي البرجر مع الخس والطماطم وقدمي.`,
  },
  {
    id: 2,
    title: "Beef Burger 5% fat",
    category: ["burger", "beef"],
    calories: "350 kcal – 30g protein",
    ingredients: `المكونات
120 جم لحم بقري قليل الدهن
خبز برجر أسمر
خس، خيار، طماطم
1 ملعقة صغيرة خردل أو زبادي`,
    instructions: `طريقة التحضير
شكلي اللحم على شكل برجر، تبليه بالملح والفلفل.
اطهيه على طاسة غير لاصقة 8–10 دقائق لكل جانب.
سخني الخبز وادهني الزبادي أو الخردل.
ضعي البرجر مع الخضار وقدمي.`,
  },
  {
    id: 3,
    title: "Lettuce Wrap Burger",
    category: ["burger", "chicken", "beef", "low-carb"],
    calories: "250 kcal – 28g protein",
    ingredients: `المكونات
100 جم صدور دجاج أو لحم مفروم
أوراق خس كبيرة
طماطم شرائح
1 ملعقة صغيرة زبادي يوناني`,
    instructions: `طريقة التحضير
اطهي الدجاج أو اللحم على طاسة غير لاصقة 5–7 دقائق حتى ينضج.
ضعي الخس، الطماطم والدجاج/اللحم ولفيها كسندوتش.
قدمي فورًا كوجبة خفيفة منخفضة الكربوهيدرات.`,
  },
  {
    id: 4,
    title: "Turkey Burger",
    category: ["burger", "turkey"],
    calories: "280 kcal – 30g protein",
    ingredients: `المكونات
120 جم ديك رومي مفروم
خبز أسمر صغير
خس + خيار شرائح
1 ملعقة صغيرة زبادي يوناني
بهارات: فلفل، بابريكا`,
    instructions: `طريقة التحضير
شكلي الديك الرومي على شكل برجر.
اطهيه في طاسة غير لاصقة 8–10 دقائق.
سخني الخبز وادهني الزبادي.
ضعي الخس والخيار والبرجر.`,
  },
  {
    id: 5,
    title: "Airfryer Crispy Chicken Sandwich",
    category: ["sandwich", "chicken"],
    calories: "330 kcal – 31g protein",
    ingredients: `المكونات
100 جم صدور دجاج شرائح
1 ملعقة صغيرة زبادي لايت
خبز برجر صغير
خس + طماطم
توابل: ثوم بودر، فلفل، بابريكا`,
    instructions: `طريقة التحضير
تبلي الدجاج بالزبادي والتوابل.
اطهيه في الـ Airfryer على 180 درجة 12 دقيقة.
سخني الخبز وضع الخس والطماطم والدجاج بداخله.`,
  },
  {
    id: 6,
    title: "Tuna Melt Light",
    category: ["sandwich", "seafood"],
    calories: "290 kcal – 29g protein",
    ingredients: `المكونات
100 جم تونة في الماء
خبز أسمر صغير
20 جم جبنة موزاريلا لايت
1 ملعقة صغيرة زبادي يوناني
طماطم شرائح`,
    instructions: `طريقة التحضير
اخلطي التونة مع الزبادي.
ضعيها على الخبز، أضيفي الطماطم والجبنة.
سخني في الفرن أو Airfryer 5–7 دقائق حتى تذوب الجبنة.`,
  },
  {
    id: 7,
    title: "Egg & Turkey Breakfast Sandwich",
    category: ["breakfast", "sandwich", "turkey"],
    calories: "270 kcal – 26g protein",
    ingredients: `المكونات
1 بيضة مسلوقة أو أومليت
50 جم ديك رومي مدخن
خبز صغير أسمر
خس`,
    instructions: `طريقة التحضير
اطهي البيضة حسب الرغبة (سلق أو أومليت خفيف).
ضعي الخس والديك الرومي والبيضة داخل الخبز.
قدم فورًا كوجبة إفطار صحية.`,
  },
  {
    id: 8,
    title: "Shawarma Wrap Light",
    category: ["wrap", "chicken"],
    calories: "340 kcal – 35g protein",
    ingredients: `المكونات
100 جم صدور دجاج شرائح
تورتيلا قمح كامل
خس، خيار، طماطم
1 ملعقة زبادي يوناني مع ثوم بودر وليمون`,
    instructions: `طريقة التحضير
اطهي الدجاج على طاسة غير لاصقة مع بهارات الشاورما 8–10 دقائق.
افردي الخضار والصوص على التورتيلا.
ضعي الدجاج ولفيها.`,
  },
  {
    id: 9,
    title: "Chicken Club Low Calorie",
    category: ["sandwich", "chicken"],
    calories: "320 kcal – 33g protein",
    ingredients: `المكونات
100 جم صدور دجاج مشوية
خبز برجر صغير
خس، طماطم
1 ملعقة صغيرة زبادي يوناني
خيار شرائح`,
    instructions: `طريقة التحضير
سخني الخبز وضع الخس والطماطم.
أضيفي الدجاج والخيار والزبادي.
قدم فورًا.`,
  },
  {
    id: 10,
    title: "Philly Steak Healthy Wrap",
    category: ["wrap", "beef"],
    calories: "360 kcal – 34g protein",
    ingredients: `المكونات
100 جم شرائح لحم بقري قليل الدهن
1 تورتيلا قمح كامل
فلفل رومي، بصل مقلي خفيف
20 جم جبنة موزاريلا لايت`,
    instructions: `طريقة التحضير
اطهي اللحم مع الفلفل والبصل 5–7 دقائق.
ضعي الخليط على التورتيلا وأضيفي الجبنة.
لفيها وقدميها.`,
  },
  {
  id: 11,
  title: "Tortilla Chicken Pizza",
  category: ["chicken", "pizza"],
  calories: "320 kcal – 30g protein",
  image: tortillaChickenPizza,
  ingredients: `المكونات
1 تورتيلا قمح كامل
80 جم صدور دجاج مشوية
2 ملعقة كبيرة صوص طماطم بدون سكر
30 جم جبنة موزاريلا لايت
فلفل رومي + مشروم (اختياري)`,
  instructions: `طريقة التحضير
سخني الفرن على 180 درجة.
ضعي التورتيلا على صينية.
افردي الصوص، أضيفي الدجاج والخضار.
ضعي الجبنة على الوجه.
اخبزي 8–10 دقائق حتى تذوب الجبنة.`
},
{
  id: 12,
  title: "Oats Pizza Base",
  category: ["chicken", "pizza"],
  calories: "350 kcal – 28g protein",
  image: oatspizzabase,
  ingredients: `المكونات
50 جم شوفان مطحون
1 بيضة
80 جم صدور دجاج مشوية
صوص طماطم
25 جم جبنة موزاريلا لايت
بهارات: ملح، فلفل، زعتر`,
  instructions: `طريقة التحضير
اخلطي الشوفان مع البيضة لتشكيل عجينة.
افرديها على ورقة زبدة واخبزي 8 دقائق على 180 درجة.
أضيفي الصوص والدجاج والجبنة.
اخبزي 5–7 دقائق إضافية.`
},
{
  id: 13,
  title: "Cauliflower Pizza",
  category: ["chicken", "pizza", "low-carb"],
  calories: "300 kcal – 25g protein",
  image: cauliflowerpizza,
  ingredients: `المكونات
150 جم قرنبيط مطحون
1 بيضة
20 جم جبنة بارميزان
50 جم صدور دجاج
صوص طماطم خفيف
فلفل ومشروم`,
  instructions: `طريقة التحضير
اسلقي القرنبيط واهرسيه.
امزجيه مع البيضة والجبنة لتشكيل قاعدة.
اخبزي 10 دقائق على 180 درجة.
أضيفي الصوص، الدجاج والخضار.
اخبزي 5–7 دقائق إضافية حتى تذوب الجبنة.`
},
{
  id: 14,
  title: "High Protein Margherita",
  category: ["pizza", "vegetarian"],
  calories: "280 kcal – 24g protein",
  image: highproteinmargherita,
  ingredients: `المكونات
تورتيلا أو شوفان قاعدة
30 جم جبنة موزاريلا لايت
صوص طماطم
أوراق ريحان
ملح وفلفل`,
  instructions: `طريقة التحضير
افردي الصوص على القاعدة.
أضيفي الجبنة والريحان.
اخبزي 8–10 دقائق على 180 درجة.`
},
{
  id: 15,
  title: "Turkey Pepperoni Pizza",
  category: ["turkey", "pizza"],
  calories: "340 kcal – 32g protein",
  image: turkeypepperonipizza,
  ingredients: `المكونات
1 تورتيلا
80 جم شرائح ديك رومي مدخن
صوص طماطم
30 جم جبنة موزاريلا لايت
فلفل رومي`,
  instructions: `طريقة التحضير
سخني الفرن 180 درجة.
ضعي الصوص على التورتيلا، أضيفي الشرائح والفلفل.
ضعي الجبنة على الوجه.
اخبزي 8–10 دقائق حتى تذوب الجبنة.`
},
{
  id: 16,
  title: "Cottage Cheese Pizza Base",
  category: ["chicken", "pizza"],
  calories: "330 kcal – 35g protein",
  image: cottagecheesepizzabase,
  ingredients: `المكونات
50 جم جبنة قريش
1 بيضة
70 جم دجاج مشوي
صوص طماطم
خضار حسب الرغبة`,
  instructions: `طريقة التحضير
اخلطي الجبنة مع البيضة لتكوين عجينة.
افرديها على ورقة زبدة واخبزي 8 دقائق.
أضيفي الدجاج، الصوص والخضار.
اخبزي 5 دقائق إضافية مع رشة جبنة على الوجه.`
},
{
  id: 17,
  title: "Mini Airfryer Pizza",
  category: ["chicken", "pizza"],
  calories: "260 kcal – 22g protein",
  image: miniairfryerpizza,
  ingredients: `المكونات
1 تورتيلا صغيرة
50 جم دجاج مشوي
صوص طماطم
20 جم جبنة موزاريلا
فلفل رومي أو مشروم`,
  instructions: `طريقة التحضير
ضعي التورتيلا في Airfryer 180 درجة 3 دقائق.
أضيفي الصوص والدجاج والخضار والجبنة.
اطهي 5–6 دقائق إضافية حتى تذوب الجبنة.`
},
{
  id: 18,
  title: "BBQ Chicken Pizza Light",
  category: ["chicken", "pizza"],
  calories: "360 kcal – 34g protein",
  image: bbqchickenpizzalight,
  ingredients: `المكونات
1 تورتيلا
80 جم صدور دجاج مشوية
2 ملعقة صغيرة صوص باربكيو قليل السكر
30 جم جبنة موزاريلا
فلفل رومي`,
  instructions: `طريقة التحضير
سخني التورتيلا 2–3 دقائق.
افردي الصوص، أضيفي الدجاج والخضار.
ضعي الجبنة واخبزي 8–10 دقائق.`
},
{
  id: 19,
  title: "Spinach & Mushroom Pizza",
  category: ["pizza", "vegetarian"],
  calories: "290 kcal – 23g protein",
  image: spinachmushroompizza,
  ingredients: `المكونات
تورتيلا أو قاعدة شوفان
50 جم سبانخ + 50 جم مشروم
30 جم جبنة موزاريلا
صوص طماطم`,
  instructions: `طريقة التحضير
سخني الطاسة أو الفرن.
ضعي الصوص والخضار والجبنة على القاعدة.
اخبزي 8–10 دقائق حتى تذوب الجبنة.`
},
{
  id: 20,
  title: "Low Carb Meat Pizza Bowl",
  category: ["beef", "pizza", "low-carb"],
  calories: "310 kcal – 33g protein",
  image: lowcarbmeatpizzabowl,
  ingredients: `المكونات
80 جم لحم مفروم قليل الدهن
2 ملعقة كبيرة صوص طماطم
30 جم جبنة موزاريلا
فلفل رومي + بصل`,
  instructions: `طريقة التحضير
اطهي اللحم على طاسة غير لاصقة مع البصل والفلفل 5–6 دقائق.
ضعي اللحم والخضار في وعاء فرن صغير.
أضيفي الصوص والجبنة.
اخبزي 5–7 دقائق حتى تذوب الجبنة.`
},
{
  id: 21,
  title: "Creamy Pasta بالزبادي اليوناني",
  category: ["chicken", "pasta"],
  calories: "380 kcal – 32g protein",
  ingredients: `المكونات
70 جم مكرونة قمح كامل
100 جم صدور دجاج مشوية
3 ملاعق كبيرة زبادي يوناني لايت
فص ثوم مفروم
رشة ملح وفلفل
10 جم جبنة بارميزان`,
  instructions: `طريقة التحضير
اسلقي المكرونة حسب التعليمات واحتفظي بالقليل من ماء السلق.
في طاسة، شوحي الثوم مع قليل من الماء 1–2 دقيقة.
أضيفي الزبادي والتوابل وقلبي على نار هادئة 2–3 دقائق.
أضيفي الدجاج والمكرونة وقلبي جيدًا، أضيفي القليل من ماء السلق إذا احتاج الصوص.
رشي جبنة البارميزان وقدمي دافئًا.`
},
{
  id: 22,
  title: "White Sauce Chicken Pasta Light",
  category: ["chicken", "pasta"],
  calories: "400 kcal – 35g protein",
  ingredients: `المكونات
70 جم مكرونة قمح كامل
100 جم صدور دجاج
3 ملاعق كبيرة زبادي يوناني
1 ملعقة صغيرة دقيق أسمر
رشة فلفل أبيض وملح`,
  instructions: `طريقة التحضير
اسلقي المكرونة.
حضري الصوص: سخني الزبادي مع الدقيق والتوابل على نار هادئة مع التحريك المستمر 2–3 دقائق.
أضيفي الدجاج المطهو مسبقًا والمكرونة وقلبي.
قدميه دافئًا.`
},
{
  id: 23,
  title: "Protein Mac & Cheese",
  category: ["pasta"],
  calories: "370 kcal – 30g protein",
  ingredients: `المكونات
70 جم مكرونة قمح كامل
30 جم جبنة موزاريلا لايت
1 سكوب بروتين جبنة أو Neutral whey
100 مل حليب خالي الدسم
رشة فلفل أسود`,
  instructions: `طريقة التحضير
اسلقي المكرونة.
حضري الصوص: اخلطي الحليب، البروتين، الجبنة والفلفل على نار هادئة حتى يتماسك الصوص.
أضيفي المكرونة وقلبي حتى تتجانس.
قدمي دافئًا.`
},
{
  id: 24,
  title: "Pasta Bolognese Lean Beef",
  category: ["beef", "pasta"],
  calories: "420 kcal – 34g protein",
  ingredients: `المكونات
70 جم مكرونة قمح كامل
100 جم لحم بقري قليل الدهن
صوص طماطم خفيف
بصل مفروم، ثوم
توابل: أوريجانو، ملح، فلفل`,
  instructions: `طريقة التحضير
اسلقي المكرونة.
اطهي اللحم مع البصل والثوم 5–6 دقائق.
أضيفي الصوص وقلبي 3–4 دقائق.
قدمي المكرونة مع الصوص واللحم.`
},
{
  id: 25,
  title: "Shrimp Pasta Light",
  category: ["pasta", "seafood"],
  calories: "350 kcal – 33g protein",
  ingredients: `المكونات
70 جم مكرونة قمح كامل
100 جم جمبري مقشر
1 فص ثوم مفروم
2 ملعقة كبيرة زبادي يوناني
ملح وفلفل
رشة فلفل أحمر (اختياري)`,
  instructions: `طريقة التحضير
اسلقي المكرونة.
اطهي الجمبري مع الثوم والتوابل 4–5 دقائق.
أضيفي الزبادي وقلبي دقيقة إضافية.
اخلطي مع المكرونة وقدمي دافئًا.`
},
{
  id: 26,
  title: "Chicken Alfredo Healthy",
  category: ["chicken", "pasta"],
  calories: "390 kcal – 36g protein",
  ingredients: `المكونات
70 جم مكرونة قمح كامل
100 جم صدور دجاج
2 ملعقة كبيرة جبنة بارميزان
3 ملاعق كبيرة زبادي يوناني
فلفل أسود وملح`,
  instructions: `طريقة التحضير
اسلقي المكرونة.
اطهي الدجاج على طاسة غير لاصقة 6–7 دقائق لكل جانب.
حضري الصوص بخلط الزبادي والجبنة والتوابل على نار هادئة.
أضيفي المكرونة والدجاج وقلبي جيدًا.`
},
{
  id: 27,
  title: "High Protein Lasagna",
  category: ["beef", "pasta"],
  calories: "410 kcal – 38g protein",
  ingredients: `المكونات
2–3 شرائح مكرونة لازانيا قمح كامل
100 جم لحم بقري قليل الدهن
2 ملعقة كبيرة صوص طماطم
30 جم جبنة موزاريلا
سبانخ أو خضار حسب الرغبة`,
  instructions: `طريقة التحضير
اسلقي شرائح اللازانيا 3–4 دقائق.
اطهي اللحم مع الصوص والخضار 5–6 دقائق.
رصي اللازانيا في صينية فرن، ضعي طبقة لحم وصوص، كرري حتى تنتهي المكونات.
ضعي الجبنة على الوجه واخبزي 10–12 دقيقة على 180 درجة.`
},
{
  id: 28,
  title: "Rice Chicken Bowl",
  category: ["chicken", "rice"],
  calories: "400 kcal – 35g protein",
  ingredients: `المكونات
70 جم أرز بني مطهو
100 جم صدور دجاج مشوية
½ كوب فلفل رومي + بصل
1 ملعقة صغيرة زيت زيتون`,
  instructions: `طريقة التحضير
اطهي الدجاج على طاسة غير لاصقة 6–8 دقائق لكل جانب.
سخني الخضار مع الزيت 3–4 دقائق.
ضعي الأرز في وعاء، أضيفي الدجاج والخضار وقدمي.`
},
{
  id: 29,
  title: "Mexican Burrito Bowl",
  category: ["chicken", "beef", "rice"],
  calories: "420 kcal – 36g protein",
  ingredients: `المكونات
70 جم أرز بني مطهو
100 جم صدور دجاج أو لحم مفروم قليل الدهن
فلفل رومي، طماطم، كزبرة
1 ملعقة صغيرة صوص طماطم خفيف
1 ملعقة صغيرة زيت زيتون`,
  instructions: `طريقة التحضير
اطهي اللحم أو الدجاج مع الزيت والخضار 5–6 دقائق.
أضيفي الصوص وقلبي دقيقة إضافية.
ضعي الأرز في وعاء وأضيفي خليط اللحم والخضار فوقه.`
},
{
  id: 30,
  title: "Fried Rice Healthy (Airfryer)",
  category: ["chicken", "rice"],
  calories: "360 kcal – 30g protein",
  ingredients: `المكونات
70 جم أرز بني مطهو
100 جم صدور دجاج مقطعة مكعبات
½ كوب خضار مشكلة (جزر، بازلاء، فلفل)
1 ملعقة صغيرة صوص صويا خفيف`,
  instructions: `طريقة التحضير
اطهي الدجاج في Airfryer 10 دقائق على 180 درجة حتى ينضج.
أضيفي الخضار والأرز مع الصوص، قلبي 3–4 دقائق في الطاسة أو Airfryer لو فيها خيار التحريك.
قدم فورًا.`
},
{
  id: 31,
  title: "KFC Airfryer Chicken",
  category: ["chicken"],
  calories: "280 kcal – 35g protein",
  ingredients: `المكونات
150 جم صدور دجاج مقطعة شرائح
1 ملعقة صغيرة زيت زيتون
بهارات: فلفل، بابريكا، ثوم بودر
رشة ملح`,
  instructions: `طريقة التحضير
تبلي الدجاج بالبهارات والزيت.
ضعيه في Airfryer على 180 درجة 12 دقيقة مع التقليب منتصف الوقت.
قدميه مع سلطة خضار طازجة.`
},
{
  id: 32,
  title: "Chicken Strips Oven",
  category: ["chicken"],
  calories: "260 kcal – 32g protein",
  ingredients: `المكونات
150 جم صدور دجاج مقطعة أصابع
1 ملعقة صغيرة زيت زيتون
توابل: فلفل، ثوم بودر، بابريكا
رشة ملح`,
  instructions: `طريقة التحضير
سخني الفرن على 180 درجة.
تبلي الدجاج بالبهارات والزيت.
اخبزي 15 دقيقة حتى يتحمر.
قدم مع صوص زبادي لايت.`
},
{
  id: 33,
  title: "Healthy Nuggets",
  category: ["chicken"],
  calories: "240 kcal – 30g protein",
  ingredients: `المكونات
150 جم صدور دجاج مفرومة
1 بياض بيض
2 ملعقة كبيرة شوفان مطحون
بهارات: فلفل، بابريكا، ثوم بودر`,
  instructions: `طريقة التحضير
اخلطي الدجاج مع البياض والشوفان والتوابل.
شكليها كـ Nuggets صغيرة.
اطهيها في Airfryer 12–15 دقيقة على 180 درجة حتى تتحمر.`
},
{
  id: 34,
  title: "Shawarma Bowl",
  category: ["chicken"],
  calories: "350 kcal – 38g protein",
  ingredients: `المكونات
120 جم صدور دجاج شرائح
فلفل رومي وبصل مقطع
خس، خيار، طماطم
1 ملعقة كبيرة صوص زبادي + ليمون + ثوم بودر`,
  instructions: `طريقة التحضير
اطهي الدجاج مع الفلفل والبصل 8–10 دقائق على طاسة غير لاصقة.
ضعي الخضار في وعاء، أضيفي الدجاج فوقها.
صبي الصوص وقلبي قبل التقديم.`
},
{
  id: 35,
  title: "Chicken Fajita Light",
  category: ["chicken", "wrap"],
  calories: "320 kcal – 34g protein",
  ingredients: `المكونات
100 جم صدور دجاج شرائح
فلفل رومي، بصل شرائح
1 تورتيلا قمح كامل
1 ملعقة صغيرة زيت زيتون`,
  instructions: `طريقة التحضير
سخني الزيت واطهي الدجاج مع الخضار 6–8 دقائق.
ضعي الخليط على التورتيلا ولفيها.
قدم دافئة.`
},
{
  id: 36,
  title: "Healthy Kofta",
  category: ["beef"],
  calories: "300 kcal – 32g protein",
  ingredients: `المكونات
150 جم لحم بقري قليل الدهن مفروم
بصلة صغيرة مبشورة
بهارات: فلفل، بابريكا، كزبرة
رشة ملح`,
  instructions: `طريقة التحضير
اخلطي اللحم مع البصل والتوابل جيدًا.
شكلي أصابع كوفتة.
اطهي في طاسة غير لاصقة أو Airfryer 10–12 دقيقة حتى تنضج.`
},
{
  id: 37,
  title: "Grilled Chicken Meal Prep Box",
  category: ["chicken", "meal-prep"],
  calories: "400 kcal – 40g protein",
  ingredients: `المكونات
150 جم صدور دجاج مشوية
½ كوب بروكلي مسلوق
½ كوب جزر مسلوق
70 جم أرز بني أو كينوا`,
  instructions: `طريقة التحضير
اطهي الدجاج على طاسة غير لاصقة 6–8 دقائق لكل جانب.
حضري الخضار والأرز مسبقًا.
رصي المكونات في علبة وجبات.`
},
{
  id: 38,
  title: "Healthy Hotdog Wrap",
  category: ["turkey", "wrap"],
  calories: "270 kcal – 25g protein",
  ingredients: `المكونات
1 نقانق دجاج أو ديك رومي
تورتيلا قمح كامل
خس، طماطم، خيار
1 ملعقة صغيرة زبادي يوناني`,
  instructions: `طريقة التحضير
اطهي النقانق 5–6 دقائق في الطاسة أو Airfryer.
ضعي الخضار والصوص على التورتيلا.
أضيفي النقانق ولفيها.`
},
{
  id: 39,
  title: "Protein Quesadilla",
  category: ["chicken", "wrap"],
  calories: "330 kcal – 34g protein",
  ingredients: `المكونات
1 تورتيلا قمح كامل
80 جم صدور دجاج مشوية
30 جم جبنة موزاريلا لايت
فلفل رومي، بصل شرائح`,
  instructions: `طريقة التحضير
افردي الدجاج والخضار والجبنة على نصف التورتيلا.
اطوي النصف الآخر واضغطي قليلًا.
اطهي في طاسة غير لاصقة 3–4 دقائق لكل جانب حتى تتحمر.`
},
{
  id: 40,
  title: "Chicken Taco Low Calorie",
  category: ["chicken", "wrap"],
  calories: "310 kcal – 32g protein",
  ingredients: `المكونات
80 جم صدور دجاج مقطعة مكعبات
1 تورتيلا صغيرة
خس، طماطم، فلفل
1 ملعقة صغيرة صوص زبادي لايت`,
  instructions: `طريقة التحضير
اطهي الدجاج مع البهارات 5–6 دقائق.
ضعي الخضار والصوص على التورتيلا، أضيفي الدجاج.
قدميها ملفوفة.`
},
{
  id: 41,
  title: "Protein Brownies",
  category: ["dessert", "sweet"],
  calories: "180 kcal – 15g protein",
  ingredients: `المكونات
40 جم بروتين شوكولاتة
1 ملعقة كبيرة كاكاو خام
1 بيضة
1 ملعقة صغيرة عسل أو سكر دايت
2 ملعقة كبيرة حليب خالي الدسم`,
  instructions: `طريقة التحضير
اخلطي جميع المكونات جيدًا حتى تتكون عجينة سميكة.
صبي الخليط في قالب صغير مبطن بورق زبدة.
اخبزي 12–15 دقيقة على 180 درجة.
اتركيه يبرد قليلاً ثم قطعيه مكعبات.`
},
{
  id: 42,
  title: "Baked Oats Cake",
  category: ["dessert", "breakfast"],
  calories: "220 kcal – 18g protein",
  ingredients: `المكونات
40 جم شوفان مطحون
1 بيضة
1 سكوب بروتين فانيليا
½ ملعقة صغيرة بيكنج بودر
80 مل حليب خالي الدسم`,
  instructions: `طريقة التحضير
اخلطي جميع المكونات جيدًا.
صبي الخليط في قالب فرن صغير.
اخبزي 15–18 دقيقة على 180 درجة.
اتركيه يبرد ثم قدميه.`
},
{
  id: 43,
  title: "Mug Cake Protein",
  category: ["dessert", "quick"],
  calories: "150 kcal – 12g protein",
  ingredients: `المكونات
20 جم شوفان مطحون
1 بيضة
1 سكوب بروتين فانيليا
2 ملعقة كبيرة حليب خالي الدسم
½ ملعقة صغيرة بيكنج بودر`,
  instructions: `طريقة التحضير
اخلطي جميع المكونات في كوب مقاوم للحرارة.
سخني المايكروويف 90 ثانية على قوة متوسطة.
اتركيه يبرد قليلاً قبل التقديم.`
},
{
  id: 44,
  title: "Protein Pancakes",
  category: ["breakfast", "sweet"],
  calories: "240 kcal – 22g protein",
  ingredients: `المكونات
40 جم شوفان مطحون
1 بيضة + 1 بياض بيض
1 سكوب بروتين
50 مل حليب خالي الدسم
½ ملعقة صغيرة بيكنج بودر`,
  instructions: `طريقة التحضير
اخلطي المكونات لتكوين عجينة سميكة.
سخني طاسة غير لاصقة ورشي رذاذ زيت.
صبي مقدار صغير من العجينة واقلي 2–3 دقائق لكل جانب حتى تتحمر.
قدميها مع ملعقة صغيرة عسل أو زبادي لايت.`
},
{
  id: 45,
  title: "Greek Yogurt Cheesecake",
  category: ["dessert", "sweet"],
  calories: "200 kcal – 17g protein",
  ingredients: `المكونات
100 جم زبادي يوناني لايت
1 ملعقة كبيرة جبنة قريش
1 ملعقة صغيرة عسل
½ ملعقة صغيرة فانيليا`,
  instructions: `طريقة التحضير
اخلطي جميع المكونات جيدًا حتى تتجانس.
صبي الخليط في كوب أو قالب صغير.
بردي في الثلاجة 1–2 ساعة قبل التقديم.`
},
{
  id: 46,
  title: "Protein Ice Cream",
  category: ["dessert", "sweet"],
  calories: "160 kcal – 20g protein",
  ingredients: `المكونات
1 سكوب بروتين فانيليا
100 جم زبادي يوناني لايت
1 ملعقة صغيرة كاكاو أو فواكه مهروسة`,
  instructions: `طريقة التحضير
اخلطي البروتين مع الزبادي والفواكه أو الكاكاو.
ضعي الخليط في قالب وأدخليه الفريزر 2–3 ساعات.
قدميه مثل الآيس كريم.`
},
{
  id: 47,
  title: "Date Protein Balls",
  category: ["dessert", "snack"],
  calories: "190 kcal – 10g protein",
  ingredients: `المكونات
5 تمر متوسط الحجم
20 جم بروتين فانيليا
10 جم لوز مطحون`,
  instructions: `طريقة التحضير
انخلي التمر جيدًا واهرسيه.
اخلطيه مع البروتين واللوز.
شكلي كرات صغيرة وضعيها في الثلاجة 30 دقيقة قبل التقديم.`
},
{
  id: 48,
  title: "Chocolate Protein Mousse",
  category: ["dessert", "sweet"],
  calories: "170 kcal – 18g protein",
  ingredients: `المكونات
1 سكوب بروتين شوكولاتة
50 جم زبادي يوناني لايت
½ ملعقة صغيرة كاكاو خام`,
  instructions: `طريقة التحضير
اخلطي جميع المكونات جيدًا حتى تصبح كريمية.
بردي في الثلاجة نصف ساعة قبل التقديم.`
},
{
  id: 49,
  title: "Low Calorie Cookies",
  category: ["dessert", "sweet"],
  calories: "140 kcal – 12g protein",
  ingredients: `المكونات
40 جم شوفان مطحون
1 بياض بيض
1 سكوب بروتين فانيليا
1 ملعقة صغيرة عسل أو سكر دايت`,
  instructions: `طريقة التحضير
اخلطي جميع المكونات لتكوين عجينة.
شكلي دوائر صغيرة على ورقة فرن.
اخبزي 10–12 دقيقة على 180 درجة.`
},
{
  id: 50,
  title: "High Protein Tiramisu Light",
  category: ["dessert", "sweet"],
  calories: "210 kcal – 20g protein",
  ingredients: `المكونات
100 جم زبادي يوناني لايت
1 سكوب بروتين فانيليا
1 ملعقة صغيرة كاكاو
2 قطعة بسكويت دايت أو شوفان`,
  instructions: `طريقة التحضير
اخفقي الزبادي مع البروتين والفانيليا.
قطعي البسكويت إلى قطع صغيرة وضعي طبقة في كوب.
أضيفي طبقة من خليط الزبادي والبروتين.
رشي الكاكاو على الوجه وقدمي بارد.`
}
];

const getRecipes = (category = null) => {
    if (category) {
        return recipes.filter(recipe => recipe.category && recipe.category.includes(category));
    }
    return recipes;
};

const getCategories = () => {
    const categories = new Set();
    recipes.forEach(recipe => {
        if (recipe.category) {
            recipe.category.forEach(cat => categories.add(cat));
        }
    });
    return Array.from(categories).sort();
};

export { recipes, getRecipes, getCategories };
export default getRecipes;