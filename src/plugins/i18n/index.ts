import {createI18n} from 'vue-i18n';
import myZh from './zh'
import myEn from './en'


const messages = {
    en: {
      message: {
        hello: 'hello world'
      },
      // ...en,
      ...myEn
    },
    zh: {
      message: {
        hello: '你好世界'
      },
      // ...zhCn,
      ...myZh
    }
  }
 

 const i18n= createI18n({
    locale: 'zh', 
    messages, 
  })

  export default i18n
 
