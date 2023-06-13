# Общая информация
Репозиторий представляет собой темплейт для созданий React Native приложений.

# Подготовка окружения
Исчерпывающая статья по этому поводу: [Setting up the development environment](https://reactnative.dev/docs/environment-setup?guide=native)

Первым шагом всегда будет `npm install`. Дальнейшее зависит от целевой ОС.

### Android (пример для Linux)
1. Установка JDK (создатели React Native рекомендуют 11 версию)
2. Установка [Android Studio](https://developer.android.com/studio#android-studio-downloads) (можно ограничиться [Command Line Tools](https://developer.android.com/studio#command-line-tools-only), [использование](https://developer.android.com/tools/sdkmanager#install))
3. Задать ANDROID_HOME параметр (например, добавив следующие строки в ~/.bash_profile):
    ```shell
   # Путь может быть другим
    export ANDROID_HOME=$HOME/Android/Sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```
4. Установка [Watchman](https://facebook.github.io/watchman/docs/install/#buildinstall). Не обязательно, но рекомендуется для повышения производительности.

### iOS (только для MacOS)
1. Установка [Watchman](https://facebook.github.io/watchman/docs/install/#buildinstall). Не обязательно, но рекомендуется для повышения производительности.
2. Убедиться, что Ruby установлен и его версия совпадает с указанной в Gemfile.
3. Установить [XCode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
4. Установить Cocoapods `sudo gem install cocoapods`

# Подключение и использование

`npm run start` - запуск бандлера

`npm run android` - запуск android-версии приложения (также стартует бандлер, если он еще не запущен)

`npm run ios` - запуск ios-версии приложения (также стартует бандлер, если он еще не запущен)

## Переименование приложения
Первый шаг не зависит от платформы - изменить параметр displayName в app.json
#### Android
В `/android/app/src/main/res/values/strings.xml` изменить `app_name`, далее в папке android выполнить `./gradlew clean`
#### iOS
В `/ios/<project_name>/Info.plist` изменить `<string />` следующий за `<key>CFBundleDisplayName</key>`

# Сборка приложения
Если сборка на тестовом стенде - `npm ci` первый шаг для любой платформы. 
### Android
```shell
# 1. Собирает React Native 
npx react-native bundle --platform android --dev false --entry-file src/index.ts --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android
./gradlew assembleDebug
```
Готовый артефакт будет лежать в папке android/app/build/outputs/apk/debug/ c именем app-debug.apk

### iOS
TODO

# Android SDK
Для работы с приложением необязательно устанавливать Android Studio, достаточно иметь SDK. Проще всего установить [Command Line Tools](https://developer.android.com/studio#command-line-tools-only) и через [sdkmanager](https://developer.android.com/tools/sdkmanager#install) установить необходимые зависимости:
* [Build-Tools](https://developer.android.com/tools#tools-build) - необходимы для сборки приложения.
* [Android Emulator](https://developer.android.com/tools#tools-emulator) - не требуется для сборки.
