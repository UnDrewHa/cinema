export const menu = {
    defaultSelectedKeys: ['1'],
    items: [
        {
            icon: '',
            label: 'Главная',
            link: '/main'
        },
        {
            icon: '',
            label: 'Кинотеатры',
            link: '/main/cinemas'
        },
        {
            icon: '',
            label: 'Залы',
            link: '/main/halls'
        },
        {
            icon: '',
            label: 'Фильмы',
            link: '/main/films',
            items: [
                {
                    icon: '',
                    label: 'Все фильмы',
                    link: '/main/films'
                },
                {
                    icon: '',
                    label: 'Актеры',
                    link: '/main/actors'
                },
                {
                    icon: '',
                    label: 'Возр. ограничение',
                    link: '/main/age-limits'
                },
                {
                    icon: '',
                    label: 'Страны производства',
                    link: '/main/countries'
                },
                {
                    icon: '',
                    label: 'Режисеры',
                    link: '/main/directors'
                },
                {
                    icon: '',
                    label: 'Форматы',
                    link: '/main/film-formats'
                },
                {
                    icon: '',
                    label: 'Жанры',
                    link: '/main/genres'
                }
            ]
        },
        {
            icon: '',
            label: 'Сеансы',
            link: '/main/sessions'
        },
        {
            icon: '',
            label: 'Лицензии',
            link: '/main/licenses'
        }
    ],
    mode: 'inline',
    theme: 'dark'
};

export const common = {};
