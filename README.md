Football Team Formation Planner 🏟️⚽

Посмотреть проект в браузере: https://football-team-formation-planner.vercel.app/

Этот проект представляет собой интерактивный инструмент для планирования футбольных команд. Вы можете размещать игроков на поле, выбирать тактические схемы, а также взаимодействовать с игроками через интерфейс с функциями drag-and-drop.

🚀 Функционал

	•	Drag-and-Drop: Возможность перетаскивать игроков из списка на поле или менять их местами.

 •	Добавление игроков: Клик по игроку добавляет его на поле.

 •	Удаление игроков: Двойной клик по игроку удаляет его с поля.
 
	•	Выбор тактической схемы: Поддержка популярных схем, таких как 4-3-3 и 4-4-2.
	
	•	Интерактивное поле: Отображает футбольное поле с зонами и позициями игроков.
 
	•	Информация о игроках: Подробная карточка игрока с номером, именем и фотографией.

📂 Структура проекта
```
.
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── player.png
│   ├── robots.txt
│   └── static
│       ├── css
│       │   ├── main.ce0e2a8f.css
│       │   └── main.ce0e2a8f.css.map
│       └── js
│           ├── 453.5b700564.chunk.js
│           ├── 453.5b700564.chunk.js.map
│           ├── main.619e61fc.js
│           ├── main.619e61fc.js.LICENSE.txt
│           └── main.619e61fc.js.map
├── package-lock.json
├── package.json
├── postcss.config.js
├── project_tree.txt
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── player.png
│   └── robots.txt
├── src
│   ├── App.jsx
│   ├── App.test.js
│   ├── components
│   │   ├── FieldPosition.jsx
│   │   ├── FootballField.jsx
│   │   ├── FormationSelector.jsx
│   │   ├── MobileNavigation.jsx
│   │   ├── Player.jsx
│   │   └── PlayersList.jsx
│   ├── data
│   │   ├── formations.js
│   │   └── players.js
│   ├── hooks
│   │   ├── useFormation.js
│   │   └── usePlayerManagement.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── types
│   │   └── types.js
│   └── utils
│       └── getPositionColor.js
└── tailwind.config.js

12 directories, 42 files

```

🛠️ Установка и запуск

1. Клонируйте репозиторий:
   
```
git clone https://github.com/Oldnesss/FootballTeamFormationPlanner

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
	2.	Перетащите игрока из списка слева на доступную позицию на поле или кликните по карточке игрока.
	3.	Для замены игрока перетащите нового игрока на его место.
	4.	Чтобы удалить игрока, дважды кликните на его иконку.

🔧 Технологии

	•	React
	•	React DnD для реализации drag-and-drop.
	•	Tailwind CSS для стилизации.
	•	JavaScript
