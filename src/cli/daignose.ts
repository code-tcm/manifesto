// src/cli/diagnose.ts
#!/usr/bin/env node

import { TCMPulseReader } from '../diagnosis/pulse-reader';

class TCMCLI {
  async run() {
    const command = process.argv[2];
    const path = process.argv[3] || '.';
    
    switch (command) {
      case 'diagnose':
        await this.diagnose(path);
        break;
      case 'balance':
        console.log('🧘 Проверяем энергетический баланс...');
        break;
      default:
        this.showHelp();
    }
  }
  
  async diagnose(path: string) {
    console.log('🐉 Добро пожаловать в TCM диагностику кода!');
    console.log(`📁 Анализируем проект: ${path}`);
    
    const diagnosis = TCMPulseReader.diagnoseProjectStructure(path);
    TCMPulseReader.printDiagnosisReport(diagnosis);
    
    console.log('\n🎯 Следующие шаги:');
    console.log('   npx @code-tcm/core treat --element wood');
  }
  
  showHelp() {
    console.log(`
🥋 TCM for Code - Команды:

  diagnose [path]    Диагностика энергетического баланса
  balance           Проверка гармонии элементов
  treat             Лечение выявленных дисбалансов
  
Пример:
  npx @code-tcm/core diagnose ./my-project
    `);
  }
}

// Запускаем CLI
new TCMCLI().run();
