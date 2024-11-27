Football Team Formation Planner 🏟️⚽

Этот проект представляет собой интерактивный инструмент для планирования футбольных команд. Вы можете размещать игроков на поле, выбирать тактические схемы, а также взаимодействовать с игроками через интерфейс с функциями drag-and-drop.

🚀 Функционал

	•	Drag-and-Drop: Возможность перетаскивать игроков из списка на поле или менять их местами.
	•	Выбор тактической схемы: Поддержка популярных схем, таких как 4-3-3 и 4-4-2.
	•	Удаление игроков: Двойной клик по игроку удаляет его с поля.
	•	Интерактивное поле: Отображает футбольное поле с зонами и позициями игроков.
	•	Информация о игроках: Подробная карточка игрока с номером, именем и фотографией.

📂 Структура проекта
```
.
├── README.md
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.jsx
│   ├── App.test.js
│   ├── components
│   │   ├── FieldPosition.jsx
│   │   ├── FootballField.jsx
│   │   ├── FormationSelector.jsx
│   │   ├── Player.jsx
│   │   └── PlayersList.jsx
│   ├── data
│   │   └── players.js
│   ├── hooks
│   │   └── useFormation.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── types
│   │   └── types.js
│   └── utils
│       └── getPositionColor.js
└── tailwind.config.js
```

🛠️ Установка и запуск

1. Клонируйте репозиторий:
   
```
git clone https://github.com/your-username/football-team-planner.git

cd football-team-planner
```

2. Установите зависимости:
```
npm install
```

4. Запустите приложение:
```
npm start
```



💡 Как пользоваться

	1.	Выберите схему из выпадающего списка в правом верхнем углу.
	2.	Перетащите игрока из списка слева на доступную позицию на поле.
	3.	Для замены игрока перетащите нового игрока на его место.
	4.	Чтобы удалить игрока, дважды кликните на его иконку.

🔧 Технологии

	•	React
	•	React DnD для реализации drag-and-drop.
	•	Tailwind CSS для стилизации.
	•	JavaScript
