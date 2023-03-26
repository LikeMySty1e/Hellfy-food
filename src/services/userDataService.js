import BrunchImagesEnum from "../enums/BrunchImagesEnum";
import DaysEnum from "../enums/DaysEnum";

export const loginIn = (login, password) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random() * 100000000)
        }, 1000)
    })
}

export const getFoodPlan = () => {
    return [
        {
            day: DaysEnum.monday,
            data: [
                {
                    id: 1,
                    brunch: BrunchImagesEnum.breakfast,
                    title: `Морков`,
                    kkal: 300,
                    description: `Морков есть морков, что ещё может быть морков, кроме самой морков?`,
                    avPrice: 300,
                    avTime: 900,
                    checked: false
                },
                {
                    id: 2,
                    brunch: BrunchImagesEnum.lunch,
                    title: `Фритатушки-фритата`,
                    kkal: 500,
                    description: `Итальянская яичница, которую готовят с начинками из сыра, овощей, колбасы или мяса.
            Обычно фриттату готовят на плите, затем доводят до готовности в духовке.`,
                    avPrice: 500,
                    avTime: 3600,
                    checked: true
                },
                {
                    id: 1,
                    brunch: BrunchImagesEnum.sweetSnack,
                    title: `Матча блинный тортик`,
                    kkal: 500,
                    description: `400 рублей за кусочек, они охренели`,
                    avPrice: 500,
                    avTime: 3445,
                    checked: true
                },
                {
                    id: 2,
                    brunch: BrunchImagesEnum.dinner,
                    title: `Риба на пару`,
                    kkal: 300,
                    description: `Смаженна курка`,
                    avPrice: 300,
                    avTime: 1800,
                    checked: false
                }
            ]
        },
        {
            day: DaysEnum.tuesday,
            data: [
                {
                    id: 1,
                    brunch: BrunchImagesEnum.breakfast,
                    title: `Морков`,
                    kkal: 300,
                    description: `Морков есть морков, что ещё может быть морков, кроме самой морков?`,
                    avPrice: 300,
                    avTime: 900,
                    checked: false
                },
                {
                    id: 2,
                    brunch: BrunchImagesEnum.lunch,
                    title: `Кура по-питерски`,
                    kkal: 700,
                    description: `Особенно богаты гастрономические изыски петербургского языка. С ними можно столкнуться, как только выйдешь из парадной своего дома и приметишь витрины.`,
                    avPrice: 500,
                    avTime: 3600,
                    checked: true
                },
                {
                    id: 6,
                    brunch: BrunchImagesEnum.dinner,
                    title: `Корнеплоди`,
                    kkal: 300,
                    description: `ССамоочещения генератору`,
                    avPrice: 300,
                    avTime: 1800,
                    checked: false
                }
            ]
        },
        {
            day: DaysEnum.wednesday,
            data: [
                {
                    brunch: BrunchImagesEnum.breakfast,
                    title: `Морков`,
                    kkal: 300,
                    description: `Морков есть морков, что ещё может быть морков, кроме самой морков?`,
                    avPrice: 300,
                    avTime: 900,
                    checked: false
                },
                {
                    brunch: BrunchImagesEnum.lunch,
                    title: `Фритатушки-фритата`,
                    kkal: 500,
                    description: `Итальянская яичница, которую готовят с начинками из сыра, овощей, колбасы или мяса.
            Обычно фриттату готовят на плите, затем доводят до готовности в духовке.`,
                    avPrice: 500,
                    avTime: 3600,
                    checked: true
                },
                {
                    brunch: BrunchImagesEnum.sweetSnack,
                    title: `Матча блинный тортик`,
                    kkal: 500,
                    description: `400 рублей за кусочек, они охренели`,
                    avPrice: 500,
                    avTime: 3445,
                    checked: true
                },
                {
                    brunch: BrunchImagesEnum.dinner,
                    title: `Риба на пару`,
                    kkal: 300,
                    description: `Смаженна курка`,
                    avPrice: 300,
                    avTime: 1800,
                    checked: false
                }
            ]
        },
        {
            day: DaysEnum.thursday,
            data: [
                {
                    id: 1,
                    brunch: BrunchImagesEnum.breakfast,
                    title: `Морков`,
                    kkal: 300,
                    description: `Морков есть морков, что ещё может быть морков, кроме самой морков?`,
                    avPrice: 300,
                    avTime: 900,
                    checked: false
                },
                {
                    id: 2,
                    brunch: BrunchImagesEnum.lunch,
                    title: `Кура по-питерски`,
                    kkal: 700,
                    description: `Особенно богаты гастрономические изыски петербургского языка. С ними можно столкнуться, как только выйдешь из парадной своего дома и приметишь витрины.`,
                    avPrice: 500,
                    avTime: 3600,
                    checked: true
                },
                {
                    id: 3,
                    brunch: BrunchImagesEnum.dinner,
                    title: `Корнеплоди`,
                    kkal: 300,
                    description: `ССамоочещения генератору`,
                    avPrice: 300,
                    avTime: 1800,
                    checked: false
                }
            ]
        },
        {
            day: DaysEnum.friday,
            data: [
                {
                    id: 1,
                    brunch: BrunchImagesEnum.breakfast,
                    title: `Морков`,
                    kkal: 300,
                    description: `Морков есть морков, что ещё может быть морков, кроме самой морков?`,
                    avPrice: 300,
                    avTime: 900,
                    checked: false
                },
                {
                    id: 1,
                    brunch: BrunchImagesEnum.lunch,
                    title: `Фритатушки-фритата`,
                    kkal: 500,
                    description: `Итальянская яичница, которую готовят с начинками из сыра, овощей, колбасы или мяса.
            Обычно фриттату готовят на плите, затем доводят до готовности в духовке.`,
                    avPrice: 500,
                    avTime: 3600,
                    checked: true
                },
                {
                    id: 2,
                    brunch: BrunchImagesEnum.sweetSnack,
                    title: `Матча блинный тортик`,
                    kkal: 500,
                    description: `400 рублей за кусочек, они охренели`,
                    avPrice: 500,
                    avTime: 3445,
                    checked: true
                },
                {
                    id: 2,
                    brunch: BrunchImagesEnum.dinner,
                    title: `Риба на пару`,
                    kkal: 300,
                    description: `Смаженна курка`,
                    avPrice: 300,
                    avTime: 1800,
                    checked: false
                }
            ]
        },
        {
            day: DaysEnum.saturday,
            data: [
                {
                    brunch: BrunchImagesEnum.breakfast,
                    title: `Морков`,
                    kkal: 300,
                    description: `Морков есть морков, что ещё может быть морков, кроме самой морков?`,
                    avPrice: 300,
                    avTime: 900,
                    checked: false
                },
                {
                    brunch: BrunchImagesEnum.lunch,
                    title: `Кура по-питерски`,
                    kkal: 700,
                    description: `Особенно богаты гастрономические изыски петербургского языка. С ними можно столкнуться, как только выйдешь из парадной своего дома и приметишь витрины.`,
                    avPrice: 500,
                    avTime: 3600,
                    checked: true
                },
                {
                    brunch: BrunchImagesEnum.dinner,
                    title: `Корнеплоди`,
                    kkal: 300,
                    description: `ССамоочещения генератору`,
                    avPrice: 300,
                    avTime: 1800,
                    checked: false
                }
            ]
        },
        {
            day: DaysEnum.sunday,
            data: [
                {
                    brunch: BrunchImagesEnum.breakfast,
                    title: `Морков`,
                    kkal: 300,
                    description: `Морков есть морков, что ещё может быть морков, кроме самой морков?`,
                    avPrice: 300,
                    avTime: 900,
                    checked: false
                },
                {
                    brunch: BrunchImagesEnum.lunch,
                    title: `Фритатушки-фритата`,
                    kkal: 500,
                    description: `Итальянская яичница, которую готовят с начинками из сыра, овощей, колбасы или мяса.
            Обычно фриттату готовят на плите, затем доводят до готовности в духовке.`,
                    avPrice: 500,
                    avTime: 3600,
                    checked: true
                },
                {
                    brunch: BrunchImagesEnum.sweetSnack,
                    title: `Матча блинный тортик`,
                    kkal: 500,
                    description: `400 рублей за кусочек, они охренели`,
                    avPrice: 500,
                    avTime: 3445,
                    checked: true
                },
                {
                    brunch: BrunchImagesEnum.dinner,
                    title: `Риба на пару`,
                    kkal: 300,
                    description: `Смаженна курка`,
                    avPrice: 300,
                    avTime: 1800,
                    checked: false
                }
            ]
        }
    ]
};

export const getRecipe = id => {
    const recipes = [
        {
            id: 1,
            portions: 1,
            ingredients: [
                `Молоко коровье — 2 стакана`,
                `Крутой кипяток — 1 стакан`,
                `Мука пшеничная — 2 стакана`,
                `Яйца куриные отборные — 3 шт.`,
                `Сахар — 3 ст.л.`,
                `Соль — 0,5 ч. л.`,
                `Масло подсолнечное без запаха — 4 ст. л.`,
                `Масло сливочное — 2 ст. л.`,
            ],
            steps: [
                {
                    icon: 1,
                    description: `В широкую посуду разбить яйца, всыпать сахар и соль, взбить массу венчиком или миксером до объединения.`
                },
                {
                    description: `К яичной смеси добавить молоко, половину подсолнечного масла.`
                },
                {
                    icon: 1,
                    description: `В другую миску просеять муку и понемногу подмешать в тесто, непрерывно взбивая миксером или венчиком.
                    В другую миску просеять муку и понемногу подмешать в тесто, непрерывно взбивая миксером или венчиком.
                    В другую миску просеять муку и понемногу подмешать в тесто, непрерывно взбивая миксером или венчиком.
                    В другую миску просеять муку и понемногу подмешать в тесто, непрерывно взбивая миксером или венчиком.`
                },
                {
                    description: `Закипятить чайник и набрать стакан кипятка. Не переставая размешивать,
                    тонкой струйкой осторожно влить в тесто весь кипяток. Еще раз взбить миксером или венчиком, убирая появившиеся комочки и
                    добиваясь максимальной гладкости теста.`
                }
            ]
        },
        {
            id: 2,
            portions: 6,
            ingredients: [
                `Курица — 800 г`,
                `Рис — 300 г`,
                `Соль — (по вкусу)`,
                `Специи — (по вкусу)`,
                `Майонез — 1 ст. л.`,
                `Масло оливковое — 1 ст. л.`,
                `Зелень — (по вкусу)`,
            ],
            steps: [
                {
                    icon: 1,
                    description: `Добавляем специи, ложку оливкового масла, ложку майонеза, зелень и соль.
                    Она маринуется и через полчаса может использоваться по назначению. Ее можно жарить, тушить, запекать.`
                },
                {
                    description: `Подготовим рис. Промыть тщательно в холодной воде.
                    И так рис у нас подготовлен, духовка нагрелась до 210 градусов, кура замаринована.
                    Выкладываем рис в емкость для запекания.
                    На рис наливаем кипятка ровно столько, чтобы накрыть рис, не более того.`
                },
                {
                    icon: 1,
                    description: `На подготовленный рис выкладываем куру.
                    В идеале, она должна полностью закрыть рис, накрываем крышкой и в духовку на 1 час 20 минут.
                    Промаринованная курица все отдает рису и соль и специи и сок. Отправляем в духовку`
                },
                {
                    description: `Время пролетело незаметно, можно звать к столу.
                    Приятного аппетита!`
                }
            ]
        }
    ]

    return new Promise(resolve => {
        setTimeout(() => resolve(recipes.find(recipe => recipe.id === id) || {}), 100);
    });
};

export default {
    loginIn,
    getFoodPlan,
    getRecipe
};