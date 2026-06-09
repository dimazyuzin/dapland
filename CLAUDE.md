# Dap Land — Developer Notes

## Деплой

| URL | Что |
|-----|-----|
| https://dapland.vercel.app | Приложение |
| https://dapland-storybook.vercel.app | Storybook |

Деплой приложения: `npx vercel --prod --yes` из корня.
Деплой Storybook: собрать `npm run build-storybook` в `app/`, затем задеплоить через `--prebuilt` в проект `dapland-storybook`.

---

## Стек

- React 19 + TypeScript + Vite 8
- CSS Modules
- Storybook 10
- Capacitor (планируется для мобилы)

---

## Правила разработки

- **UI только из Storybook-компонентов** — новый компонент сначала в Storybook, потом в приложение
- **Все цвета, шрифты, тени — из токенов** в `src/index.css` (`:root`)
- Перед созданием нового — спросить: "это новый компонент или уже есть в Storybook?"

---

## Дизайн-токены (`src/index.css`)

### Цвета
| Токен | Значение |
|-------|----------|
| `--color-primary` | `#ffffff` |
| `--color-surface` | `#000000` |

### Тени
| Токен | Применение |
|-------|------------|
| `--shadow-on-video` | `text-shadow` на текстах поверх видео |
| `--shadow-on-video-filter` | `filter: drop-shadow()` на иконках поверх видео |

### Типографика (все `-2%` letter-spacing)
| Токен | Size/Line | Weight |
|-------|-----------|--------|
| `--text-xl` | 16/20 | Bold 700 |
| `--text-lg` | 14/18 | Bold 700 |
| `--text-md` | 14/18 | Regular 400 |
| `--text-sm` | 12/16 | Medium 500 |
| `--text-xs` | 12/16 | Bold 700 |
| `--text-xxs` | 10/12 | Medium 500 |

---

## Компоненты

### Icon
Все иконки в одном компоненте. Пропс `name: IconName`.
Иконки с нестандартным viewBox (например `add` — 36×24) описаны в `viewBoxes` и `defaultSizes`.

**Текущие иконки:** `ball`, `discover`, `hall`, `profile`, `share`, `hoot`, `flash`, `rebound`, `location`, `add`, `more`

### NavBar
Bottom navigation. Табы: `court | community | add | hall | profile`.
Размеры контейнеров: 64×48 (обычные), 80×48 (add).

### VideoCard
Один слот видеофида. Содержит:
- `<video>` с autoplay/pause через IntersectionObserver
- `VideoInfo` — оверлей с инфой внизу слева
- `ActionsPanel` — кнопки действий справа
- `Badge` — **опциональный** бейдж над VideoInfo слева

### Badge
Отображается над блоком VideoInfo, прибит к левому краю.
**Опциональный** — у некоторых видео может отсутствовать (например, у casual-игроков без статуса).
Пропсы: `name`, `iconBg` (цвет подложки иконки), `iconUrl` (опц. картинка иконки).

> TODO: иконка бейджа — уточнить финальные ассеты для каждого уровня
> (Rookie → Team Player → Ankle Breaker → Triple Double → MVP → All-Star → Hall of Fame → GOAT)

### ActionsPanel
Панель действий, прибита к правому краю, `bottom: 100px`.
Кнопки: Rebound, Shake, Hoot, Share, More.

### ActionButton
Иконка 32×32 + опциональный лейбл. Лейбл может быть счётчиком (`"1.2K"`) или состоянием (`"Shake"` / `"Shaked"`).
Без лейбла — высота сжимается до 32px.

### Button
Маленькая кнопка Follow. 49×18, border-radius 11px.

### VideoInfo
Оверлей с информацией о видео: аватар, никнейм, Follow, комментарий, трек, артист.
`opacity` привязан к `intersectionRatio` для fade при свайпе.

---

## Структура файлов

```
app/src/
├── components/
│   ├── ActionButton/
│   ├── ActionsPanel/
│   ├── AppShell/
│   ├── Badge/
│   ├── Button/
│   ├── Icon/
│   ├── NavBar/
│   ├── VideoCard/
│   └── VideoInfo/
├── pages/
│   └── FeedPage.tsx
└── index.css       ← все токены здесь
```
