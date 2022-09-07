# Custom_Google_AutoComplete

Google auto Complete
How to Configurate the project :
1. Fill API KEY in file Configs.js
2. yarn install in main folder (where package.json reside)
3. Locate android manifest.xml file in android folder (android/app/src/main)
4. Change api key in key android:value => <meta-data
    android:name="com.google.android.maps.v2.API_KEY" android:value="API_KEY" ... />
5. Run in android by using command "npx react-native run-android"
6. Run command "npx react-native start" for safety purpose
7. Reload app 

Technology used : React native, React native paper + material, redux

# How To Use the app?
Type any text in input field. Result will be displayed after some second.
Any typed text will be visible when click eye icon
Any result will be visible when click book icon

Note : 3 digits inside API_KEY already changed. Only the tester should know the right key. or just generate new key instead
