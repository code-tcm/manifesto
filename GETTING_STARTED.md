# 🚀 Быстрый старт с TCM для кода

## За 5 минут:

1. **Установите CLI**:
   ```bash
   npm install -g @code-tcm/core
Диагностируйте проект:

bash
tcm-diagnose diagnose ./your-project
Изучите рекомендации и примените лечение

Повторите через 2 недели для отслеживания прогресса

Пример лечения Wood дисбаланса:
typescript
// БЫЛО: Жесткая структура
class UserService {
  private db: MySQLDatabase;
  private cache: RedisCache;
  private email: EmailService;
  
  constructor() {
    this.db = new MySQLDatabase();
    this.cache = new RedisCache(); 
    this.email = new EmailService();
  }
}

// СТАЛО: Гибкая архитектура
interface Database { /* ... */ }
interface Cache { /* ... */ }
interface Email { /* ... */ }

class UserService {
  constructor(
    private db: Database,
    private cache: Cache, 
    private email: Email
  ) {}
}
🎯 Результаты через 1 месяц:
✅ -40% сложности поддержки

✅ +60% скорости разработки

✅ -75% критических багов
