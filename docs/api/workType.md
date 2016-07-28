
## RDS
    
* [RDS](#module_RDS)
    * [~WorkType](#module_RDS..WorkType)
        * _instance_
            * [.saveType()](#module_RDS..WorkType+saveType) ⇒ <code>WorkType</code>
        * _static_
            * [.setName(id, newTitle)](#module_RDS..WorkType.setName) ⇒ <code>promise</code>
            * [.enable(id)](#module_RDS..WorkType.enable) ⇒ <code>promise</code>
            * [.disable(id)](#module_RDS..WorkType.disable) ⇒ <code>promise</code>
            * [.getById(id)](#module_RDS..WorkType.getById) ⇒ <code>promise</code>
            * [.getEnabled(query, skip)](#module_RDS..WorkType.getEnabled) ⇒ <code>promise</code>
            * [.getAll(query, skip)](#module_RDS..WorkType.getAll) ⇒ <code>promise</code>
            * [.getDisabled(query, skip)](#module_RDS..WorkType.getDisabled) ⇒ <code>promise</code>
            * [.isExist(id)](#module_RDS..WorkType.isExist) ⇒ <code>promise</code>


# Методы

## &nbsp;&nbsp;RDS
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
        * [.setName(id, newTitle)](#module_RDS..WorkType.setName) ⇒ <code>promise</code>
        * [.enable(id)](#module_RDS..WorkType.enable) ⇒ <code>promise</code>
        * [.disable(id)](#module_RDS..WorkType.disable) ⇒ <code>promise</code>
        * [.getById(id)](#module_RDS..WorkType.getById) ⇒ <code>promise</code>
        * [.getEnabled(query, skip)](#module_RDS..WorkType.getEnabled) ⇒ <code>promise</code>
        * [.getAll(query, skip)](#module_RDS..WorkType.getAll) ⇒ <code>promise</code>
        * [.getDisabled(query, skip)](#module_RDS..WorkType.getDisabled) ⇒ <code>promise</code>
        * [.isExist(id)](#module_RDS..WorkType.isExist) ⇒ <code>promise</code>

<a name="module_RDS..WorkType+saveType"></a>

#### workType.saveType() ⇒ <code>WorkType</code>
Безопасное сохранение типа

**Kind**: instance method of <code>[WorkType](#module_RDS..WorkType)</code>  
**Throws**:

- <code>DbError</code> , 500 - ошибка базы данных

**this**: <code>{WorkType}</code>  
<a name="module_RDS..WorkType.setName"></a>

#### WorkType.setName(id, newTitle) ⇒ <code>promise</code>
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

#### WorkType.enable(id) ⇒ <code>promise</code>
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

#### WorkType.disable(id) ⇒ <code>promise</code>
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

#### WorkType.getById(id) ⇒ <code>promise</code>
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

#### WorkType.getEnabled(query, skip) ⇒ <code>promise</code>
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

#### WorkType.getAll(query, skip) ⇒ <code>promise</code>
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

#### WorkType.getDisabled(query, skip) ⇒ <code>promise</code>
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

#### WorkType.isExist(id) ⇒ <code>promise</code>
Проверка существуюет ли такой тип

**Kind**: static method of <code>[WorkType](#module_RDS..WorkType)</code>  
**this**: <code>{WorkType}</code>  
**Fulfill**: <code>boolean</code>, true - тип существует, false - типа нет.  
**Reject**: <code>DbError</code>, 500 - ошибка бд  

| Param | Description |
| --- | --- |
| id | идентификатор типа |

