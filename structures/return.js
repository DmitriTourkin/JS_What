// ✅ Работает (неявный return)
[1, 2, 3].reduce((sum, num) => sum + num, 0);

// ✅ Работает (явный return)
[1, 2, 3].reduce((sum, num) => { return sum + num; }, 0);

// ❌ Упадёт (нет return)
[1, 2, 3].reduce((sum, num) => { sum + num }, 0);