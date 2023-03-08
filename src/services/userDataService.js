import BrunchImagesEnum from "../enums/BrunchImagesEnum";
import DaysEnum from "../enums/DaysEnum";

export const login = (login, password) => {
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
            day: DaysEnum.tuesday,
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
            day: DaysEnum.friday,
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
}

export default { login };