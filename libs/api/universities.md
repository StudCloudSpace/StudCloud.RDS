
## RDS
    
* [RDS](#module_RDS)
    * [~Faculty](#module_RDS..Faculty)
        * [.getTitle()](#module_RDS..Faculty+getTitle) ⇒ <code>string</code>
        * [.getShortTitle()](#module_RDS..Faculty+getShortTitle) ⇒ <code>string</code>
        * [.formatForSearch(format)](#module_RDS..Faculty+formatForSearch) ⇒ <code>object</code>
    * [~University](#module_RDS..University)
        * _instance_
            * [.getTitle()](#module_RDS..University+getTitle) ⇒ <code>string</code>
            * [.getShortTitle()](#module_RDS..University+getShortTitle) ⇒ <code>string</code>
            * [.formatForSearch(format)](#module_RDS..University+formatForSearch) ⇒ <code>object</code>
            * [.addFaculty(title, shortTitle)](#module_RDS..University+addFaculty)
        * _static_
            * [.getById(id)](#module_RDS..University.getById) ⇒ <code>promise</code>
            * [.getUniversitiesByTitle(title, format)](#module_RDS..University.getUniversitiesByTitle) ⇒ <code>promise</code>
            * [.getFacultiesByTitle(title, university, format)](#module_RDS..University.getFacultiesByTitle) ⇒ <code>promise</code>
            * [.isExist(university, faculty)](#module_RDS..University.isExist) ⇒ <code>promise</code>
            * [.getUniversityAndFacultyTitles(university, faculty)](#module_RDS..University.getUniversityAndFacultyTitles) ⇒ <code>promise</code>
            * [.createNew(title, shortTitle, street, building, city, rating)](#module_RDS..University.createNew) ⇒ <code>promise</code>


# Методы

## &nbsp;&nbsp;RDS
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
    * [.getTitle()](#module_RDS..Faculty+getTitle) ⇒ <code>string</code>
    * [.getShortTitle()](#module_RDS..Faculty+getShortTitle) ⇒ <code>string</code>
    * [.formatForSearch(format)](#module_RDS..Faculty+formatForSearch) ⇒ <code>object</code>

<a name="module_RDS..Faculty+getTitle"></a>

#### faculty.getTitle() ⇒ <code>string</code>
**Kind**: instance method of <code>[Faculty](#module_RDS..Faculty)</code>  
**Returns**: <code>string</code> - - название  
**this**: <code>{Faculty}</code>  
<a name="module_RDS..Faculty+getShortTitle"></a>

#### faculty.getShortTitle() ⇒ <code>string</code>
**Kind**: instance method of <code>[Faculty](#module_RDS..Faculty)</code>  
**Returns**: <code>string</code> - - краткое название  
**this**: <code>{Faculty}</code>  
<a name="module_RDS..Faculty+formatForSearch"></a>

#### faculty.formatForSearch(format) ⇒ <code>object</code>
**Kind**: instance method of <code>[Faculty](#module_RDS..Faculty)</code>  
**Returns**: <code>object</code> - formatted faculty  
**this**: <code>{Faculty}</code>  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>boolean</code> | true - длинное(title), false - краткое(shortTitle) |

<a name="module_RDS..University"></a>

### RDS~University
**Kind**: inner class of <code>[RDS](#module_RDS)</code>  
**Rating**: <code>number</code> rating - рейтинг университета  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | полное название |
| shortTitle | <code>string</code> | сокращенное название |
| faculties | <code>Array.&lt;Faculty&gt;</code> | массив факультетов |
| location.city | <code>string</code> | Город |
| location.street | <code>string</code> | улица |
| location.building | <code>string</code> | Номер дома |
| created | <code>date</code> | дата создания |
| updated | <code>date</code> | дата обновления |
| enabled | <code>boolean</code> | Активен ли предмет? |
| id | <code>mongoose.Types.ObjectId</code> | идентификатор |


* [~University](#module_RDS..University)
    * _instance_
        * [.getTitle()](#module_RDS..University+getTitle) ⇒ <code>string</code>
        * [.getShortTitle()](#module_RDS..University+getShortTitle) ⇒ <code>string</code>
        * [.formatForSearch(format)](#module_RDS..University+formatForSearch) ⇒ <code>object</code>
        * [.addFaculty(title, shortTitle)](#module_RDS..University+addFaculty)
    * _static_
        * [.getById(id)](#module_RDS..University.getById) ⇒ <code>promise</code>
        * [.getUniversitiesByTitle(title, format)](#module_RDS..University.getUniversitiesByTitle) ⇒ <code>promise</code>
        * [.getFacultiesByTitle(title, university, format)](#module_RDS..University.getFacultiesByTitle) ⇒ <code>promise</code>
        * [.isExist(university, faculty)](#module_RDS..University.isExist) ⇒ <code>promise</code>
        * [.getUniversityAndFacultyTitles(university, faculty)](#module_RDS..University.getUniversityAndFacultyTitles) ⇒ <code>promise</code>
        * [.createNew(title, shortTitle, street, building, city, rating)](#module_RDS..University.createNew) ⇒ <code>promise</code>

<a name="module_RDS..University+getTitle"></a>

#### university.getTitle() ⇒ <code>string</code>
**Kind**: instance method of <code>[University](#module_RDS..University)</code>  
**Returns**: <code>string</code> - - название  
**this**: <code>{University}</code>  
<a name="module_RDS..University+getShortTitle"></a>

#### university.getShortTitle() ⇒ <code>string</code>
**Kind**: instance method of <code>[University](#module_RDS..University)</code>  
**Returns**: <code>string</code> - - краткое название  
**this**: <code>{University}</code>  
<a name="module_RDS..University+formatForSearch"></a>

#### university.formatForSearch(format) ⇒ <code>object</code>
**Kind**: instance method of <code>[University](#module_RDS..University)</code>  
**Returns**: <code>object</code> - formatted University  
**this**: <code>{University}</code>  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>boolean</code> | true - длинное(title), false - краткое(shortTitle) |

<a name="module_RDS..University+addFaculty"></a>

#### university.addFaculty(title, shortTitle)
**Kind**: instance method of <code>[University](#module_RDS..University)</code>  
**Summary**: Добавление нового факультета в университет  
**Throws**:

- <code>ValidationError</code> , 400 - Факультет уже присутствует в университете

**this**: <code>{University}</code>  

| Param | Description |
| --- | --- |
| title | полное название |
| shortTitle | краткое название |

<a name="module_RDS..University.getById"></a>

#### University.getById(id) ⇒ <code>promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**this**: <code>{University}</code>  
**Fulfill**: <code>University</code> - все прошло хорошо  
**Reject**: <code>DbError</code>, 404 - не найден тип по id  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Description |
| --- | --- |
| id | идентификатор типа |

<a name="module_RDS..University.getUniversitiesByTitle"></a>

#### University.getUniversitiesByTitle(title, format) ⇒ <code>promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Получение университетов по названию  
**this**: <code>{University}</code>  
**Fulfill**: - Массив для выдачи  
**Reject**: <code>DbError</code>, 204 - не найдено университетов  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Type | Description |
| --- | --- | --- |
| title |  | регулярное выражение для поиска |
| format | <code>boolean</code> | true - длинное(title), false - краткое(shortTitle) |

<a name="module_RDS..University.getFacultiesByTitle"></a>

#### University.getFacultiesByTitle(title, university, format) ⇒ <code>promise</code>
**Kind**: static method of <code>[University](#module_RDS..University)</code>  
**Summary**: Получение университетов по названию  
**this**: <code>{University}</code>  
**Fulfill**: - Массив для выдачи  
**Reject**: <code>DbError</code>, 204 - не найдено университетов  
**Reject**: <code>DbError</code>, 500 - ошибка базы данных.  

| Param | Type | Description |
| --- | --- | --- |
| title |  | регулярное выражение для поиска |
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

#### University.getUniversityAndFacultyTitles(university, faculty) ⇒ <code>promise</code>
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

