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
                    label: 'Режиссеры',
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
    actors: {
        CREATE: {
            cancelText: 'Отмена',
            okText: 'Добавить',
            title: 'Добавить актера'
        },
        EDIT: {
            cancelText: 'Отмена',
            okText: 'Сохранить',
            title: 'Изменить данные актера'
        }
    },
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
    },
    directors: {
        CREATE: {
            cancelText: 'Отмена',
            okText: 'Добавить',
            title: 'Добавить режиссера'
        },
        EDIT: {
            cancelText: 'Отмена',
            okText: 'Сохранить',
            title: 'Изменить данные режиссера'
        }
    },
    genres: {
        CREATE: {
            cancelText: 'Отмена',
            okText: 'Добавить',
            title: 'Добавить жанр'
        },
        EDIT: {
            cancelText: 'Отмена',
            okText: 'Сохранить',
            title: 'Изменить данные жанра'
        }
    },
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

export const actors = {
    ACTORS_STORE: {
        success: 'Новый актер успешно добавлен.',
        failure: 'Ошибка при добавлении актера.'
    },
    ACTORS_DESTROY: {
        success: 'Актер удален.',
        failure: 'Ошибка при удалении актера.'
    },
    ACTORS_BATCH_DELETE: {
        success: 'Актеры удалены.',
        failure: 'Ошибка при удалении актеров.'
    },
    ACTORS_UPDATE: {
        success: 'Данные актера обновлены.',
        failure: 'Ошибка при обновлении данных актера.'
    },
    ACTORS_LOAD: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    },
    ACTORS_LOAD_BY_ID: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    }
};

export const directors = {
    DIRECTORS_STORE: {
        success: 'Новый режиссер успешно добавлен.',
        failure: 'Ошибка при добавлении режиссера.'
    },
    DIRECTORS_DESTROY: {
        success: 'Режиссер удален.',
        failure: 'Ошибка при удалении режиссера.'
    },
    DIRECTORS_BATCH_DELETE: {
        success: 'Режиссеры удалены.',
        failure: 'Ошибка при удалении режиссеров.'
    },
    DIRECTORS_UPDATE: {
        success: 'Данные режиссера обновлены.',
        failure: 'Ошибка при обновлении данных режиссера.'
    },
    DIRECTORS_LOAD: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    },
    DIRECTORS_LOAD_BY_ID: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    }
};

export const genres = {
    GENRES_STORE: {
        success: 'Новый жанр успешно добавлен.',
        failure: 'Ошибка при добавлении жанра.'
    },
    GENRES_DESTROY: {
        success: 'Жанр удален.',
        failure: 'Ошибка при удалении жанра.'
    },
    GENRES_BATCH_DELETE: {
        success: 'Жанры удалены.',
        failure: 'Ошибка при удалении жанров.'
    },
    GENRES_UPDATE: {
        success: 'Данные жанра обновлены.',
        failure: 'Ошибка при обновлении данных жанра.'
    },
    GENRES_LOAD: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    },
    GENRES_LOAD_BY_ID: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    }
};
