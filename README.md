


# Документация


* [RDS](#module_RDS)
    * [~RDS](#module_RDS..RDS)
        * [.configure()](#module_RDS..RDS.configure)
        * [.getUniversityModel()](#module_RDS..RDS.getUniversityModel) ⇒ <code>Mongoose.model</code>
        * [.getWorkTypeModel()](#module_RDS..RDS.getWorkTypeModel) ⇒ <code>Mongoose.model</code>
        * [.getSubjectModel()](#module_RDS..RDS.getSubjectModel) ⇒ <code>Mongoose.model</code>
    * [~Subject](#module_RDS..Subject)
        * _instance_
            * [.saveSubject()](#module_RDS..Subject+saveSubject) ⇒ <code>Subject</code>
            * [.getTitle()](#module_RDS..Subject+getTitle) ⇒ <code>string</code>
        * _static_
            * [.isExist(id)](#module_RDS..Subject.isExist) ⇒ <code>promise</code>
            * [.getById(id)](#module_RDS..Subject.getById) ⇒ <code>Promise</code>
            * [.getEnabled(query, skip)](#module_RDS..Subject.getEnabled) ⇒ <code>promise</code>
            * [.getAll(query, skip)](#module_RDS..Subject.getAll) ⇒ <code>promise</code>
            * [.getDisabled(query, skip)](#module_RDS..Subject.getDisabled) ⇒ <code>promise</code>
            * [.setName(id, newTitle)](#module_RDS..Subject.setName) ⇒ <code>promise</code>
            * [.enable(id)](#module_RDS..Subject.enable) ⇒ <code>promise</code>
            * [.disable(id)](#module_RDS..Subject.disable) ⇒ <code>promise</code>
    * [~Faculty](#module_RDS..Faculty)
        * _instance_
            * [.getShortTitle()](#module_RDS..Faculty+getShortTitle) ⇒ <code>string</code>
            * [.formatForSearch(format)](#module_RDS..Faculty+formatForSearch) ⇒ <code>object</code>
        * _static_
            * [.getTitle()](#module_RDS..Faculty.getTitle) ⇒ <code>string</code>
    * [~University](#module_RDS..University)
        * _instance_
            * [.getTitle()](#module_RDS..University+getTitle) ⇒ <code>string</code>
            * [.getShortTitle()](#module_RDS..University+getShortTitle) ⇒ <code>String</code>
            * [.formatForSearch(format)](#module_RDS..University+formatForSearch) ⇒ <code>object</code>
            * [.saveUniversity()](#module_RDS..University+saveUniversity) ⇒ <code>university</code>
        * _static_
            * [.getById(id)](#module_RDS..University.getById) ⇒ <code>Promise</code>
            * [.getFaculties(university, format,)](#module_RDS..University.getFaculties) ⇒ <code>Promise</code>
            * [.getUniversities(format)](#module_RDS..University.getUniversities) ⇒ <code>promise</code>
            * [.getUniversitiesByTitle(title, format)](#module_RDS..University.getUniversitiesByTitle) ⇒ <code>Promise</code>
            * [.getFacultiesByTitle(title, university, format)](#module_RDS..University.getFacultiesByTitle) ⇒ <code>Promise</code>
            * [.isExist(university, faculty)](#module_RDS..University.isExist) ⇒ <code>promise</code>
            * [.getUniversityAndFacultyTitles(university, faculty)](#module_RDS..University.getUniversityAndFacultyTitles) ⇒ <code>Promise</code>
            * [.createNew(title, shortTitle, street, building, city, rating)](#module_RDS..University.createNew) ⇒ <code>promise</code>
            * [.addFaculty(title, shortTitle)](#module_RDS..University.addFaculty)
    * [~WorkType](#module_RDS..WorkType)
        * _instance_
            * [.saveType()](#module_RDS..WorkType+saveType) ⇒ <code>WorkType</code>
        * _static_
            * [.setName(id, newTitle)](#module_RDS..WorkType.setName) ⇒ <code>Promise</code>
            * [.enable(id)](#module_RDS..WorkType.enable) ⇒ <code>Promise</code>
            * [.disable(id)](#module_RDS..WorkType.disable) ⇒ <code>Promise</code>
            * [.getById(id)](#module_RDS..WorkType.getById) ⇒ <code>Promise</code>
            * [.getEnabled(query, skip)](#module_RDS..WorkType.getEnabled) ⇒ <code>Promise</code>
            * [.getAll(query, skip)](#module_RDS..WorkType.getAll) ⇒ <code>Promise</code>
            * [.getDisabled(query, skip)](#module_RDS..WorkType.getDisabled) ⇒ <code>Promise</code>
            * [.isExist(id)](#module_RDS..WorkType.isExist) ⇒ <code>Promise</code>

<a name="module_RDS..RDS"></a>

### RDS~RDS
**Kind**: inner class of <code>[RDS](#module_RDS)</code>  

* [~RDS](#module_RDS..RDS)
    * [.configure()](#module_RDS..RDS.configure)
    * [.getUniversityModel()](#module_RDS..RDS.getUniversityModel) ⇒ <code>Mongoose.model</code>
    * [.getWorkTypeModel()](#module_RDS..RDS.getWorkTypeModel) ⇒ <code>Mongoose.model</code>
    * [.getSubjectModel()](#module_RDS..RDS.getSubjectModel) ⇒ <code>Mongoose.model</code>

<a name="module_RDS..RDS.configure"></a>

#### RDS.configure()
Настройка модуля

**Kind**: static method of <code>[RDS](#module_RDS..RDS)</code>  
**Throws**:

- <code>Error</code> , не смог подключиться к базе данных.

**this**: <code>{RDS}</code>  
<a name="module_RDS..RDS.getUniversityModel"></a>

#### RDS.getUniversityModel() ⇒ <code>Mongoose.model</code>
Получение класса University для работы с типами работ

**Kind**: static method of <code>[RDS](#module_RDS..RDS)</code>  
**Throws**:

- <code>DbError</code> , 500 - модуль не был инициализирован

<a name="module_RDS..RDS.getWorkTypeModel"></a>

#### RDS.getWorkTypeModel() ⇒ <code>Mongoose.model</code>
Получение класса WorkType для работы с типами работ

**Kind**: static method of <code>[RDS](#module_RDS..RDS)</code>  
**Throws**:

- <code>DbError</code> , 500 - модуль не был инициализирован

<a name="module_RDS..RDS.getSubjectModel"></a>

#### RDS.getSubjectModel() ⇒ <code>Mongoose.model</code>
Получение класса Subject для работы с типами работ

**Kind**: static method of <code>[RDS](#module_RDS..RDS)</code>  
**Throws**:

- <code>DbError</code> , 500 - модуль не был инициализирован

<a name="module_RDS..Subject"></a>

### RDS~Subject
**Kind**: inner class of <code>[RDS](#module_RDS)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | название |
| created | <code>date</code> | дата создания |
| updated | <code>date</code> | дата обновления |
| enabled | <code>boolean</code> | Активен ли предмет? |


* [~Subject](#module_RDS..Subject)
    * _instance_
        * [.saveSubject()](#module_RDS..Subject+saveSubject) ⇒ <code>Subject</code>
        * [.getTitle()](#module_RDS..Subject+getTitle) ⇒ <code>string</code>
    * _static_
        * [.isExist(id)](#module_RDS..Subject.isExist) ⇒ <code>promise</code>
        * [.getById(id)](#module_RDS..Subject.getById) ⇒ <code>Promise</code>
        * [.getEnabled(query, skip)](#module_RDS..Subject.getEnabled) ⇒ <code>promise</code>
        * [.getAll(query, skip)](#module_RDS..Subject.getAll) ⇒ <code>promise</code>
        * [.getDisabled(query, skip)](#module_RDS..Subject.getDisabled) ⇒ <code>promise</code>
        * [.setName(id, newTitle)](#module_RDS..Subject.setName) ⇒ <code>promise</code>
        * [.enable(id)](#module_RDS..Subject.enable) ⇒ <code>promise</code>
        * [.disable(id)](#module_RDS..Subject.disable) ⇒ <code>promise</code>

<a name="module_RDS..Subject+saveSubject"></a>

#### subject.saveSubject() ⇒ <code>Subject</code>
Безопасное сохранение предмета

**Kind**: instance method of <code>[Subject](#module_RDS..Subject)</code>  
**Throws**:

- <code>DbError</code> , 500 - ошибка базы данных

**this**: <code>{Subject}</code>  
<a name="module_RDS..Subject+getTitle"></a>

#### subject.getTitle() ⇒ <code>string</code>
Получение имени предмета

**Kind**: instance method of <code>[Subject](#module_RDS..Subject)</code>  
**this**: <code>{Subject}</code>  
<a name="module_RDS..Subject.isExist"></a>

#### Subject.isExist(id) ⇒ <code>promise</code>
Проверка существуюет ли такой предмет

**Kind**: static method of <code>[Subject](#module_RDS..Subject)</code>  
**this**: <code>{Subject}</code>  
**Fulfill**: <code>boolean</code>, true - предмет существует, false - предмета нет.  
**Reject**: <code>DbError</code>, 500 - ошибка бд  

| Param | Description |
| --- | --- |
| id | идентификатор предмета |

<a name="module_RDS..Subject.getById"></a>

#### Subject.getById(id) ⇒ <code>Promise</code>
Получение предмета по id

**Kind**: static method of <code>[Subject](#module_RDS..Subject)</code>  
**this**: <code>{Subject}</code>  
**Fulfill**: <code>Subject</code> - все прошло хорошо  
**Reject**: <code>DbError</code>, 404 - не найден предмет по id  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Description |
| --- | --- |
| id | идентификатор предмета |

<a name="module_RDS..Subject.getEnabled"></a>

#### Subject.getEnabled(query, skip) ⇒ <code>promise</code>
Поиск/получение неактивированных предметов

**Kind**: static method of <code>[Subject](#module_RDS..Subject)</code>  
**this**: <code>{Subject}</code>  
**Fulfill**: <code>Subject</code>  
**Reject**: <code>DbError</code>, 204 - ничего не найдено  
**Reject**: <code>DbError</code>, 500 - ошибка сервера бд  

| Param | Type | Description |
| --- | --- | --- |
| query |  | опционально. Строка для поиска |
| skip | <code>number</code> | сколько страниц пропускаем сначала? |

<a name="module_RDS..Subject.getAll"></a>

#### Subject.getAll(query, skip) ⇒ <code>promise</code>
Поиск/получение по всем предметам

**Kind**: static method of <code>[Subject](#module_RDS..Subject)</code>  
**this**: <code>{Subject}</code>  
**Fulfill**: <code>Subject</code>  
**Reject**: <code>DbError</code>, 204 - ничего не найдено  
**Reject**: <code>DbError</code>, 500 - ошибка сервера бд  

| Param | Type | Description |
| --- | --- | --- |
| query |  | опционально. Строка для поиска |
| skip | <code>number</code> | сколько страниц пропускаем сначала? |

<a name="module_RDS..Subject.getDisabled"></a>

#### Subject.getDisabled(query, skip) ⇒ <code>promise</code>
Поиск/получение неактивированных предметов

**Kind**: static method of <code>[Subject](#module_RDS..Subject)</code>  
**this**: <code>{Subject}</code>  
**Fulfill**: <code>Subject</code>  
**Reject**: <code>DbError</code>, 204 - ничего не найдено  
**Reject**: <code>DbError</code>, 500 - ошибка сервера бд  

| Param | Type | Description |
| --- | --- | --- |
| query |  | опционально. Строка для поиска |
| skip | <code>number</code> | сколько страниц пропускаем сначала? |

<a name="module_RDS..Subject.setName"></a>

#### Subject.setName(id, newTitle) ⇒ <code>promise</code>
Изменение title у предмета,

**Kind**: static method of <code>[Subject](#module_RDS..Subject)</code>  
**this**: <code>{Subject}</code>  
**Reject**: <code>DbError</code>, 400 - нарушена уникальность названия  
**Reject**: <code>DbError</code>, 500 - ошибка бд  
**Fulfill**: <code>Subject</code> объект типа Subject  

| Param | Description |
| --- | --- |
| id | идентификатор |
| newTitle | новое название |

<a name="module_RDS..Subject.enable"></a>

#### Subject.enable(id) ⇒ <code>promise</code>
Активация предмета по id,

**Kind**: static method of <code>[Subject](#module_RDS..Subject)</code>  
**this**: <code>{Subject}</code>  
**Fulfill**: <code>WorkType</code> - все прошло хорошо  
**Reject**: <code>DbError</code>, 404 - не найден тип по id  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Description |
| --- | --- |
| id | идентификатор работы |

<a name="module_RDS..Subject.disable"></a>

#### Subject.disable(id) ⇒ <code>promise</code>
Дизактивация работы по id

**Kind**: static method of <code>[Subject](#module_RDS..Subject)</code>  
**this**: <code>{Subject}</code>  
**Fulfill**: <code>WorkType</code> - все прошло хорошо  
**Reject**: <code>DbError</code>, 404 - не найден тип по id  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Description |
| --- | --- |
| id | идентификатор работы |

<a name="module_RDS..Faculty"></a>

### RDS~Faculty
**Kind**: inner class of <code>[RDS](#module_RDS)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | полное название |
| shortTitle | <code>string</code> | сокращенное название |
| created | <code>date</code> | дата создания |
| updated | <code>date</code> | дата обновления |
| id | <code>mongoose.Types.ObjectId</code> | идентификатор |


* [~Faculty](#module_RDS..Faculty)
    * _instance_
        * [.getShortTitle()](#module_RDS..Faculty+getShortTitle) ⇒ <code>string</code>
        * [.formatForSearch(format)](#module_RDS..Faculty+formatForSearch) ⇒ <code>object</code>
    * _static_
        * [.getTitle()](#module_RDS..Faculty.getTitle) ⇒ <code>string</code>

<a name="module_RDS..Faculty+getShortTitle"></a>

#### faculty.getShortTitle() ⇒ <code>string</code>
**Kind**: instance method of <code>[Faculty](#module_RDS..Faculty)</code>  
**Summary**: Получение краткого названия университета  
**Returns**: <code>string</code> - - краткое название  
**this**: <code>{Faculty}</code>  
<a name="module_RDS..Faculty+formatForSearch"></a>

#### faculty.formatForSearch(format) ⇒ <code>object</code>
**Kind**: instance method of <code>[Faculty](#module_RDS..Faculty)</code>  
**Summary**: Метод для форматирования факультетов или университетов для выдачи  
**Returns**: <code>object</code> - formatted faculty  
**this**: <code>{Faculty}</code>  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>boolean</code> | true - длинное(title), false - краткое(shortTitle) |

<a name="module_RDS..Faculty.getTitle"></a>

#### Faculty.getTitle() ⇒ <code>string</code>
**Kind**: static method of <code>[Faculty](#module_RDS..Faculty)</code>  
**Summary**: Получение названия университета  
**Returns**: <code>string</code> - - название  
**this**: <code>{Faculty}</code>  
<a name="module_RDS..University"></a>

### RDS~University
**Kind**: inner class of <code>[RDS](#module_RDS)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | полное название |
| shortTitle | <code>String</code> | сокращенное название |
| faculties | <code>Array.&lt;Faculty&gt;</code> | массив факультетов |
| location.city | <code>String</code> | Город |
| location.street | <code>String</code> | улица |
| location.building | <code>string</code> | Номер дома |
| rating | <code>number</code> | рейтинг университета |
| created | <code>date</code> | дата создания |
| updated | <code>date</code> | дата обновления |
| enabled | <code>boolean</code> | Активен ли предмет? |
| _id | <code>mongoose.Types.ObjectId</code> | идентификатор |


* [~University](#module_RDS..University)
    * _instance_
        * [.getTitle()](#module_RDS..University+getTitle) ⇒ <code>string</code>
        * [.getShortTitle()](#module_RDS..University+getShortTitle) ⇒ <code>String</code>
        * [.formatForSearch(format)](#module_RDS..University+formatForSearch) ⇒ <code>object</code>
        * [.saveUniversity()](#module_RDS..University+saveUniversity) ⇒ <code>university</code>
    * _static_
        * [.getById(id)](#module_RDS..University.getById) ⇒ <code>Promise</code>
        * [.getFaculties(university, format,)](#module_RDS..University.getFaculties) ⇒ <code>Promise</code>
        * [.getUniversities(format)](#module_RDS..University.getUniversities) ⇒ <code>promise</code>
        * [.getUniversitiesByTitle(title, format)](#module_RDS..University.getUniversitiesByTitle) ⇒ <code>Promise</code>
        * [.getFacultiesByTitle(title, university, format)](#module_RDS..University.getFacultiesByTitle) ⇒ <code>Promise</code>
        * [.isExist(university, faculty)](#module_RDS..University.isExist) ⇒ <code>promise</code>
        * [.getUniversityAndFacultyTitles(university, faculty)](#module_RDS..University.getUniversityAndFacultyTitles) ⇒ <code>Promise</code>
        * [.createNew(title, shortTitle, street, building, city, rating)](#module_RDS..University.createNew) ⇒ <code>promise</code>
        * [.addFaculty(title, shortTitle)](#module_RDS..University.addFaculty)

<a name="module_RDS..University+getTitle"></a>

#### university.getTitle() ⇒ <code>string</code>
**Kind**: instance method of <code>[University](#module_RDS..University)</code>  
**Summary**: Получение названия университета  
**Returns**: <code>string</code> - - название  
**this**: <code>{University}</code>  
<a name="module_RDS..University+getShortTitle"></a>

#### university.getShortTitle() ⇒ <code>String</code>
**Kind**: instance method of <code>[University](#module_RDS..University)</code>  
**Summary**: Получение краткого названия университета  
**Returns**: <code>String</code> - - краткое название  
**this**: <code>{University}</code>  
<a name="module_RDS..University+formatForSearch"></a>

#### university.formatForSearch(format) ⇒ <code>object</code>
**Kind**: instance method of <code>[University](#module_RDS..University)</code>  
**Summary**: Метод для форматирования факультетов или университетов для выдачи  
**Returns**: <code>object</code> - formatted University  
**this**: <code>{University}</code>  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>boolean</code> | true - длинное(title), false - краткое(shortTitle) |

<a name="module_RDS..University+saveUniversity"></a>

#### university.saveUniversity() ⇒ <code>university</code>
**Kind**: instance method of <code>[University](#module_RDS..University)</code>  
**Summary**: Безопасное сохранение университета  
**Throws**:

- <code>DbError</code> , 500 - ошибка базы данных

**this**: <code>{University}</code>  
<a name="module_RDS..University.getById"></a>

#### University.getById(id) ⇒ <code>Promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Получение университета по id  
**this**: <code>{University}</code>  
**Fulfill**: <code>University</code> - все прошло хорошо  
**Reject**: <code>DbError</code>, 404 - не найден тип по id  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Description |
| --- | --- |
| id | идентификатор типа |

<a name="module_RDS..University.getFaculties"></a>

#### University.getFaculties(university, format,) ⇒ <code>Promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Метод для получения списка факультетов в рамках одного универа по id  
**this**: <code>{University}</code>  
**Fulfill**: - Массив для выдачи  
**Reject{dberror},**: 204 - не найдено факультетов  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Type | Description |
| --- | --- | --- |
| university | <code>string</code> | id университета |
| format, | <code>boolean</code> | true - длинное(title), false - краткое(shortTitle) |

<a name="module_RDS..University.getUniversities"></a>

#### University.getUniversities(format) ⇒ <code>promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Метод для получения списка универов  
**this**: <code>{University}</code>  
**Fulfill**: - Массив для выдачи  
**Reject**: <code>DbError</code>, 204 - не найдено университетов  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>boolean</code> | true - длинное(title), false - краткое(shortTitle) |

<a name="module_RDS..University.getUniversitiesByTitle"></a>

#### University.getUniversitiesByTitle(title, format) ⇒ <code>Promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Получение университетов по названию  
**this**: <code>{University}</code>  
**Fulfill**: - Массив для выдачи  
**Reject**: <code>DbError</code>, 204 - не найдено университетов  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Type | Description |
| --- | --- | --- |
| title |  | строка поиска |
| format | <code>boolean</code> | true - длинное(title), false - краткое(shortTitle) |

<a name="module_RDS..University.getFacultiesByTitle"></a>

#### University.getFacultiesByTitle(title, university, format) ⇒ <code>Promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Получение университетов по названию  
**this**: <code>{University}</code>  
**Fulfill**: - Массив для выдачи  
**Reject**: <code>DbError</code>, 204 - не найдено университетов  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Type | Description |
| --- | --- | --- |
| title |  | строка для поиска |
| university |  | идентификатор университета |
| format | <code>boolean</code> | true - длинное(title), false - краткое(shortTitle) |

<a name="module_RDS..University.isExist"></a>

#### University.isExist(university, faculty) ⇒ <code>promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Метод проверки валидности университета и факультета  
**this**: <code>{University}</code>  
**Fulfill**: <code>boolean</code>, true - данные валидны, false - данные не валидны  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных  

| Param | Description |
| --- | --- |
| university | идентификатор университета |
| faculty | идентификатор факульета |

<a name="module_RDS..University.getUniversityAndFacultyTitles"></a>

#### University.getUniversityAndFacultyTitles(university, faculty) ⇒ <code>Promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Метод, возвращающий названия факультета и университета  
**this**: <code>{University}</code>  
**Fulfill**: <code>object</code>, проперти university, faculty  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных  

| Param | Description |
| --- | --- |
| university | идентификатор университета |
| faculty | идентификатор факульета |

<a name="module_RDS..University.createNew"></a>

#### University.createNew(title, shortTitle, street, building, city, rating) ⇒ <code>promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Добавление нового университета  
**this**: <code>{University}</code>  

| Param | Description |
| --- | --- |
| title | полное название |
| shortTitle | краткое название |
| street | улица/проспект |
| building | номер дома |
| city | город |
| rating | рейтинг |

<a name="module_RDS..University.addFaculty"></a>

#### University.addFaculty(title, shortTitle)
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Добавление нового факультета в университет  
**Throws**:

- <code>ValidationError</code> , 400 - Факультет уже присутствует в университете

**this**: <code>{University}</code>  

| Param | Description |
| --- | --- |
| title | полное название |
| shortTitle | краткое название |

<a name="module_RDS..WorkType"></a>

### RDS~WorkType
**Kind**: inner class of <code>[RDS](#module_RDS)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | название |
| created | <code>date</code> | дата создания |
| updated | <code>date</code> | дата обновления |
| enabled | <code>boolean</code> | Активен ли предмет? |
| tags | <code>Array.&lt;string&gt;</code> | Тэги |


* [~WorkType](#module_RDS..WorkType)
    * _instance_
        * [.saveType()](#module_RDS..WorkType+saveType) ⇒ <code>WorkType</code>
    * _static_
        * [.setName(id, newTitle)](#module_RDS..WorkType.setName) ⇒ <code>Promise</code>
        * [.enable(id)](#module_RDS..WorkType.enable) ⇒ <code>Promise</code>
        * [.disable(id)](#module_RDS..WorkType.disable) ⇒ <code>Promise</code>
        * [.getById(id)](#module_RDS..WorkType.getById) ⇒ <code>Promise</code>
        * [.getEnabled(query, skip)](#module_RDS..WorkType.getEnabled) ⇒ <code>Promise</code>
        * [.getAll(query, skip)](#module_RDS..WorkType.getAll) ⇒ <code>Promise</code>
        * [.getDisabled(query, skip)](#module_RDS..WorkType.getDisabled) ⇒ <code>Promise</code>
        * [.isExist(id)](#module_RDS..WorkType.isExist) ⇒ <code>Promise</code>

<a name="module_RDS..WorkType+saveType"></a>

#### workType.saveType() ⇒ <code>WorkType</code>
Безопасное сохранение типа

**Kind**: instance method of <code>[WorkType](#module_RDS..WorkType)</code>  
**Throws**:

- <code>DbError</code> , 500 - ошибка базы данных

**this**: <code>{WorkType}</code>  
<a name="module_RDS..WorkType.setName"></a>

#### WorkType.setName(id, newTitle) ⇒ <code>Promise</code>
Изменение title у типа работы

**Kind**: static method of <code>[WorkType](#module_RDS..WorkType)</code>  
**this**: <code>{WorkType}</code>  
**Fulfil**: <code>WorkType</code>, объект типа WorkType  
**Reject**: <code>DbError</code>, 400 - нарушена уникальность названия  
**Reject**: <code>DbError</code>, 404 - нет типа с таким названием  
**Reject**: <code>DbError</code>, 500 - ошибка бд  

| Param | Description |
| --- | --- |
| id | идентификатор типа работы |
| newTitle | новое название |

<a name="module_RDS..WorkType.enable"></a>

#### WorkType.enable(id) ⇒ <code>Promise</code>
Активация работы по id

**Kind**: static method of <code>[WorkType](#module_RDS..WorkType)</code>  
**this**: <code>{WorkType}</code>  
**Fulfill**: <code>WorkType</code> - все прошло хорошо  
**Reject**: <code>DbError</code>, 404 - не найден тип по id  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Description |
| --- | --- |
| id | идентификатор работы |

<a name="module_RDS..WorkType.disable"></a>

#### WorkType.disable(id) ⇒ <code>Promise</code>
Дизактивация работы по id

**Kind**: static method of <code>[WorkType](#module_RDS..WorkType)</code>  
**this**: <code>{WorkType}</code>  
**Fulfill**: <code>WorkType</code> - все прошло хорошо  
**Reject**: <code>DbError</code>, 404 - не найден тип по id  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Description |
| --- | --- |
| id | идентификатор работы |

<a name="module_RDS..WorkType.getById"></a>

#### WorkType.getById(id) ⇒ <code>Promise</code>
Получение типа по id

**Kind**: static method of <code>[WorkType](#module_RDS..WorkType)</code>  
**this**: <code>{WorkType}</code>  
**Fulfill**: <code>WorkType</code> - все прошло хорошо  
**Reject**: <code>DbError</code>, 404 - не найден тип по id  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Description |
| --- | --- |
| id | идентификатор типа |

<a name="module_RDS..WorkType.getEnabled"></a>

#### WorkType.getEnabled(query, skip) ⇒ <code>Promise</code>
Поиск/получение неактивированных типов

**Kind**: static method of <code>[WorkType](#module_RDS..WorkType)</code>  
**this**: <code>{WorkType}</code>  
**Fulfill**: <code>workType</code>  
**Reject**: <code>DbError</code>, 204 - ничего не найдено  
**Reject**: <code>DbError</code>, 500 - ошибка сервера бд  

| Param | Type | Description |
| --- | --- | --- |
| query |  | опционально. Строка для поиска |
| skip | <code>number</code> | сколько страниц пропускаем сначала? |

<a name="module_RDS..WorkType.getAll"></a>

#### WorkType.getAll(query, skip) ⇒ <code>Promise</code>
Поиск/получение по всем типам работ

**Kind**: static method of <code>[WorkType](#module_RDS..WorkType)</code>  
**this**: <code>{WorkType}</code>  
**Fulfill**: <code>workType</code>  
**Reject**: <code>DbError</code>, 204 - ничего не найдено  
**Reject**: <code>DbError</code>, 500 - ошибка сервера бд  

| Param | Type | Description |
| --- | --- | --- |
| query |  | опционально. Строка для поиска |
| skip | <code>number</code> | сколько страниц пропускаем сначала? |

<a name="module_RDS..WorkType.getDisabled"></a>

#### WorkType.getDisabled(query, skip) ⇒ <code>Promise</code>
Поиск/получение неактивированных типов

**Kind**: static method of <code>[WorkType](#module_RDS..WorkType)</code>  
**this**: <code>{WorkType}</code>  
**Fulfill**: <code>workType</code>  
**Reject**: <code>DbError</code>, 204 - ничего не найдено  
**Reject**: <code>DbError</code>, 500 - ошибка сервера бд  

| Param | Type | Description |
| --- | --- | --- |
| query |  | опционально. Строка для поиска |
| skip | <code>number</code> | сколько страниц пропускаем сначала? |

<a name="module_RDS..WorkType.isExist"></a>

#### WorkType.isExist(id) ⇒ <code>Promise</code>
Проверка существуюет ли такой тип

**Kind**: static method of <code>[WorkType](#module_RDS..WorkType)</code>  
**this**: <code>{WorkType}</code>  
**Fulfill**: <code>boolean</code>, true - тип существует, false - типа нет.  
**Reject**: <code>DbError</code>, 500 - ошибка бд  

| Param | Description |
| --- | --- |
| id | идентификатор типа |

