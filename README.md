# Проект "Игры разума":

[![Actions Status](https://github.com/krsnv/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/krsnv/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/5cdc3b6a7ae474198618/maintainability)](https://codeclimate.com/github/krsnv/frontend-project-44/maintainability)

## Описание проекта

__"Игры разума"__ — это учебный проект состоящий из 5 игр (консольных), для тренировки
вашего мозга. Каждая игра задает по 3 вопроса. Нужно дать правильные ответы на эти
вопросы. Чтобы пройти игру, нужно ответить на все вопросы. Если ответ неверный, игра
завершится и можно будет попробовать еще раз.

### Установка

```
make install
```

### Проверки и публикация

```
make lint
make publish
```

## Как запустить игры:

```
# Проверка на четность
brain-even

# Калькулятор
brain-calc

# НОД (Наибольший общий делитель)
brain-gcd

# Арифметическая прогрессия
brain-progression

# Простое ли число?
brain-prime

```

## Игра: "Проверка на четность"

### Описание:

Пользователю показывается случайное число. И ему нужно ответить yes, если число чётное,
или no — если нечётное.

### Запуск "brain-even"

[![asciicast](https://asciinema.org/a/UVVasde9mOTTGeEcrsMWQct0V.svg)](https://asciinema.org/a/UVVasde9mOTTGeEcrsMWQct0V)

## Игра: "Калькулятор"

### Описание:

Показывается случайное математическое выражение, например 35 + 16, которое нужно
вычислить и записать правильный ответ.

### Запуск: "brain-calc"

[![asciicast](https://asciinema.org/a/hOX56L3QNYT3iMHXBki6cGj1f.svg)](https://asciinema.org/a/hOX56L3QNYT3iMHXBki6cGj1f)

## Игра: "НОД"

### Описание:

Пользователю показывается два случайных числа, например, 25 50.
Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

### Запуск: "brain-gcd"

[![asciicast](https://asciinema.org/a/NmoKllM7l9Jr7W1Q39wfT7ets.svg)](https://asciinema.org/a/NmoKllM7l9Jr7W1Q39wfT7ets)

## Игра: "Арифметическая прогрессия"

### Описание:

Пользователю показывается ряд чисел, образующий арифметическую прогрессию, заменив
любое из чисел двумя точками. Игрок должен определить это число.

### Запуск: "brain-progression"

[![asciicast](https://asciinema.org/a/ACVA6fa1i65pgWxbnxci9gu4d.svg)](https://asciinema.org/a/ACVA6fa1i65pgWxbnxci9gu4d)

## Игра: "Простое ли число?"

### Описание:

Пользователю показывается случайное число. И ему нужно ответить yes, если число 
простое, или no — если не простое.

### Запуск: "brain-prime"

[![asciicast](https://asciinema.org/a/XcAQKKscG7rLYFW6QevTMBr70.svg)](https://asciinema.org/a/XcAQKKscG7rLYFW6QevTMBr70)
