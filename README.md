# Музыкальный Проигрыватель

Простой музыкальный проигрыватель с возможностью сортировки песен, создания списка избранных и другими удобными функциями.

## Основные возможности

1. **Сортировка песен:**
    - По названию трека.
    - По названию исполнителя.
    - По номеру песни.
    - Обратная сортировка по номеру песни.

2. **Проигрывание песен:**
    - Запуск конкретной песни по нажатию на соответствующую кнопку.
    - Воспроизведение всех песен подряд с помощью кнопки "Play All".
    - Кнопки для переключения на следующую и предыдущую песню.
    - "Mini-player" в нижней части экрана с информацией о текущей песне:
      - Имя песни.
      - Имя исполнителя.
      - Длительность песни.
      - Состояние воспроизведения (сколько времени прошло).
      - Ползунок для перемотки песни.
      - Кнопка "Add All" нечего не делает

3. **Избранное:**
    - Возможность добавления песен в раздел "Favorites" с помощью кнопки сердечка.
    - Отображение списка избранных песен в отдельном разделе.

4. **Скачивание песни:**
    - Кнопка для скачивания выбранной песни.

5. **Имитация добавления песни:**
    - Проверка выбранного файла на соответствие формату песни.
    - Сообщение об ошибке, если выбранный файл не является песней.
    - Имитация загрузки файла при добавлении песни с компьютера.

6. **Импорт песен:**
    - Возможность имитации добавления песни с компьютера.

7. **Play All:**
    - Воспроизведение всех песен подряд.
    - Переключение на следующую песню после завершения текущей, если кнопка "Play All" активирована.
    - Состояние воспроизведения отображается пользователю.

8. **Кнопки переключения:**
    - Кнопка "Next" для переключения на следующую песню.
    - Кнопка "Previous" для переключения на предыдущую песню.

## Как использовать

1. **Установка:**
    - Клонируйте репозиторий: `git clone https://github.com/EdgarGrigoryan1996/music-player.git`
    - Перейдите в директорию проекта: `cd music-player`
    - Установите зависимости: `npm install`.

2. **Запуск:**
    - Запустите программу: `npm start`.
    - Откройте браузер и перейдите по адресу: `http://localhost:3000`.

3. **Использование:**
    - Используйте кнопки сортировки для удобства навигации.
    - Нажмите на кнопку "Play", чтобы начать воспроизведение конкретной песни.
    - Добавляйте песни в избранное, нажимая на кнопку "Heart".
    - Скачивайте песни с помощью кнопки "Download".
    - Имитируйте добавление песни с компьютера.
    - Активируйте кнопку "Play All" для автоматического переключения на следующую песню после завершения текущей.
    - Используйте кнопки "Next" и "Previous" для ручного переключения между песнями.
    - В нижней части экрана отображается "mini-player" с информацией о текущей песне и ползунком для перемотки.

## Автор

Edgar Grigoryan
