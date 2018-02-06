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
                    label: 'Страна производства',
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
    countries: {
        CREATE: {
            cancelText: 'Отмена',
            okText: 'Добавить',
            title: 'Добавить новую страну'
        },
        EDIT: {
            cancelText: 'Отмена',
            okText: 'Сохранить',
            title: 'Изменить данные страны'
        }
    },
    filmFormats: {
        CREATE: {
            cancelText: 'Отмена',
            okText: 'Добавить',
            title: 'Добавить новый формат'
        },
        EDIT: {
            cancelText: 'Отмена',
            okText: 'Сохранить',
            title: 'Изменить данные формата'
        }
    },
    ageLimits: {
        CREATE: {
            cancelText: 'Отмена',
            okText: 'Добавить',
            title: 'Добавить новую запись'
        },
        EDIT: {
            cancelText: 'Отмена',
            okText: 'Сохранить',
            title: 'Изменить данные'
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

export const films = {
    FILMS_STORE: {
        success: 'Новый фильм успешно добавлен.',
        failure: 'Ошибка при добавлении фильма.'
    },
    FILMS_DESTROY: {
        success: 'Фильм удален.',
        failure: 'Ошибка при удалении фильма.'
    },
    FILMS_BATCH_DELETE: {
        success: 'Фильмы удалены.',
        failure: 'Ошибка при удалении фильмов.'
    },
    FILMS_UPDATE: {
        success: 'Данные фильма обновлены.',
        failure: 'Ошибка при обновлении данных фильма.'
    },
    FILMS_LOAD: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    },
    FILMS_LOAD_BY_ID: {
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

export const countries = {
    COUNTRIES_STORE: {
        success: 'Новая страна успешно добавлен.',
        failure: 'Ошибка при добавлении страны.'
    },
    COUNTRIES_DESTROY: {
        success: 'Страна удалена.',
        failure: 'Ошибка при удалении страны.'
    },
    COUNTRIES_BATCH_DELETE: {
        success: 'Страны удалены.',
        failure: 'Ошибка при удалении стран.'
    },
    COUNTRIES_UPDATE: {
        success: 'Данные страны обновлены.',
        failure: 'Ошибка при обновлении данных страны.'
    },
    COUNTRIES_LOAD: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    },
    COUNTRIES_LOAD_BY_ID: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    }
};

export const filmFormats = {
    FILM_FORMATS_STORE: {
        success: 'Новый формат успешно добавлен.',
        failure: 'Ошибка при добавлении формата.'
    },
    FILM_FORMATS_DESTROY: {
        success: 'Формат удален.',
        failure: 'Ошибка при удалении формата.'
    },
    FILM_FORMATS_BATCH_DELETE: {
        success: 'Форматы удалены.',
        failure: 'Ошибка при удалении форматов.'
    },
    FILM_FORMATS_UPDATE: {
        success: 'Данные формата обновлены.',
        failure: 'Ошибка при обновлении данных формата.'
    },
    FILM_FORMATS_LOAD: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    },
    FILM_FORMATS_LOAD_BY_ID: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    }
};

export const ageLimits = {
    AGE_LIMITS_STORE: {
        success: 'Успешно добавлен.',
        failure: 'Ошибка при добавлении.'
    },
    AGE_LIMITS_DESTROY: {
        success: 'Удален.',
        failure: 'Ошибка при удалении.'
    },
    AGE_LIMITS_BATCH_DELETE: {
        success: 'Удалены.',
        failure: 'Ошибка при удалении.'
    },
    AGE_LIMITS_UPDATE: {
        success: 'Данные обновлены.',
        failure: 'Ошибка при обновлении данных.'
    },
    AGE_LIMITS_LOAD: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    },
    AGE_LIMITS_LOAD_BY_ID: {
        success: '',
        failure: 'Ошибка при загрузке данных.'
    }
};
