export const menu = {
    defaultSelectedKeys: ['0'],
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
};

export const cinemas = {
    CINEMAS_STORE: {
        success: 'Новый кинотеатр успешно добавлен.',
        failure: 'Ошибка при добавлении кинотеатра.'
    },
    CINEMAS_DESTROY: {
        success: 'Кинотеатр удален.',
        failure: 'Ошибка при удалении кинотеатра.'
    },
    CINEMAS_UPDATE: {
        success: 'Данные кинотеатра обновлены.',
        failure: 'Ошибка при обновлении данных кинотеатра.'
    },
    CINEMAS_LOAD: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    },
    CINEMAS_LOAD_BY_ID: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    }
};

export const halls = {
    HALLS_STORE: {
        success: 'Новый зал успешно добавлен.',
        failure: 'Ошибка при добавлении зала.'
    },
    HALLS_DESTROY: {
        success: 'Зал удален.',
        failure: 'Ошибка при удалении зала.'
    },
    HALLS_BATCH_DELETE: {
        success: 'Залы удалены.',
        failure: 'Ошибка при удалении залов.'
    },
    HALLS_UPDATE: {
        success: 'Данные зала обновлены.',
        failure: 'Ошибка при обновлении данных зала.'
    },
    HALLS_LOAD: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    },
    HALLS_LOAD_BY_ID: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    }
};
