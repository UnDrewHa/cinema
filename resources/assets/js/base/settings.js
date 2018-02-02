export const menu = {
    defaultSelectedKeys: ['1'],
    items: [
        {
            icon: '',
            label: 'Кинотеатры',
            link: '/cinemas'
        },
        {
            icon: '',
            label: 'Залы',
            link: '/halls'
        },
        {
            icon: '',
            label: 'Фильмы',
            link: '/films',
            items: [
                {
                    icon: '',
                    label: 'Все фильмы',
                    link: '/films'
                },
                {
                    icon: '',
                    label: 'Актеры',
                    link: '/actors'
                },
                {
                    icon: '',
                    label: 'Возр. ограничение',
                    link: '/age-limits'
                },
                {
                    icon: '',
                    label: 'Страны производства',
                    link: '/countries'
                },
                {
                    icon: '',
                    label: 'Режисеры',
                    link: '/directors'
                },
                {
                    icon: '',
                    label: 'Форматы',
                    link: '/film-formats'
                },
                {
                    icon: '',
                    label: 'Жанры',
                    link: '/genres'
                }
            ]
        },
        {
            icon: '',
            label: 'Сеансы',
            link: '/sessions'
        },
        {
            icon: '',
            label: 'Лицензии',
            link: '/licenses'
        }
    ],
    mode: 'inline',
    theme: 'dark'
};

export const common = {};

export const modal = {
    cinemas: {
        CREATE: {
            cancelText: 'Отмена',
            okText: 'Добавить',
            title: 'Добавить новый кинотеатр'
        },
        EDIT: {
            cancelText: 'Отмена',
            okText: 'Сохранить',
            title: 'Изменить данные кинотеатра'
        }
    }
}