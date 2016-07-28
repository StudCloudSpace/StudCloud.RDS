
## RDS
    
* [RDS](#module_RDS)
    * [~Subject](#module_RDS..Subject)
        * _instance_
            * [.saveSubject()](#module_RDS..Subject+saveSubject) ⇒ <code>Subject</code>
            * [.getTitle()](#module_RDS..Subject+getTitle) ⇒ <code>string</code>
        * _static_
            * [.isExist(id)](#module_RDS..Subject.isExist) ⇒ <code>promise</code>
            * [.getById(id)](#module_RDS..Subject.getById) ⇒ <code>promise</code>
            * [.getEnabled(query, skip)](#module_RDS..Subject.getEnabled) ⇒ <code>promise</code>
            * [.getAll(query, skip)](#module_RDS..Subject.getAll) ⇒ <code>promise</code>
            * [.getDisabled(query, skip)](#module_RDS..Subject.getDisabled) ⇒ <code>promise</code>
            * [.setName(id, newTitle)](#module_RDS..Subject.setName) ⇒ <code>promise</code>
            * [.enable(id)](#module_RDS..Subject.enable) ⇒ <code>promise</code>
            * [.disable(id)](#module_RDS..Subject.disable) ⇒ <code>promise</code>


# Методы

## &nbsp;&nbsp;RDS
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
        * [.getById(id)](#module_RDS..Subject.getById) ⇒ <code>promise</code>
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

#### Subject.getById(id) ⇒ <code>promise</code>
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

